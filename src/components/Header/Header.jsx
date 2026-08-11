import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '../Logo/Logo';
import { direction, getText } from '../../config/language';
import { navLinks, homeSectionIds } from '../../data/navigation';
import { getQuoteWhatsAppUrl } from '../../data/businessInfo';
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollReveal';
import BookButton from '../BookButton/BookButton';
import styles from './Header.module.css';

const BackIcon = direction === 'rtl' ? ArrowForwardIcon : ArrowBackIcon;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const activeSection = useScrollSpy(isHome ? homeSectionIds : []);

  useEffect(() => {
    setCanGoBack((window.history.state?.idx ?? 0) > 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash && isHome) {
      const id = location.hash.replace('#', '');
      const timer = window.setTimeout(() => scrollToSection(id), 100);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [location.hash, isHome]);

  const handleNavClick = (link) => {
    setMobileOpen(false);

    if (link.type === 'route') {
      navigate(link.href);
      return;
    }

    if (isHome) {
      scrollToSection(link.id);
    } else {
      navigate(link.href);
    }
  };

  const isLinkActive = (link) => {
    if (link.type === 'route') {
      return location.pathname.startsWith(link.href);
    }
    return isHome && activeSection === link.id;
  };

  const navItems = navLinks.map((link) => (
    <button
      key={link.id}
      type="button"
      className={`${styles.navLink} ${isLinkActive(link) ? styles.navLinkActive : ''}`}
      onClick={() => handleNavClick(link)}
    >
      {getText(link.label)}
    </button>
  ));

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={`${styles.appBar} ${scrolled || !isHome ? styles.scrolled : ''}`}
      >
        <Toolbar disableGutters className={styles.toolbar}>
          <div className={styles.brandCluster}>
            {canGoBack && (
              <IconButton
                className={styles.backButton}
                onClick={() => navigate(-1)}
                aria-label={getText({ he: 'חזרה', en: 'Go back' })}
              >
                <BackIcon />
              </IconButton>
            )}
            <Logo variant="header" />
          </div>

          <nav className={styles.desktopNav} aria-label="Main navigation" dir={direction}>
            {navItems}
          </nav>

          <div className={styles.actions}>
            <BookButton href={getQuoteWhatsAppUrl()} size="small">
              {{ he: 'קבלו הצעת מחיר', en: 'Get a Quote' }}
            </BookButton>
            <IconButton
              className={styles.menuButton}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className={styles.drawer}
        PaperProps={{ className: styles.drawerPaper, dir: direction }}
      >
        <div className={styles.drawerHeader}>
          <Logo variant="drawer" />
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </div>
        <List className={styles.drawerList}>
          {navLinks.map((link) => (
            <ListItem key={link.id} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link)}
                className={styles.drawerItem}
              >
                <ListItemText
                  primary={getText(link.label)}
                  primaryTypographyProps={{ style: { textAlign: 'start', color: '#000' } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div className={styles.drawerCta}>
          <BookButton href={getQuoteWhatsAppUrl()} fullWidth size="large">
            {{ he: 'קבלו הצעת מחיר', en: 'Get a Quote' }}
          </BookButton>
        </div>
      </Drawer>
    </>
  );
}
