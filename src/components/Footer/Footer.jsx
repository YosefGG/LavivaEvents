import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getText } from '../../config/language';
import { businessInfo } from '../../data/businessInfo';
import { navLinks } from '../../data/navigation';
import { scrollToSection } from '../../hooks/useScrollReveal';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (link) => {
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

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo variant="footer" />
            <p className={styles.description}>{getText(businessInfo.footerDescription)}</p>
            <div className={styles.social}>
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <InstagramIcon />
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialLink}
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              {getText({ he: 'ניווט', en: 'Navigation' })}
            </h4>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button type="button" onClick={() => handleNavClick(link)}>
                    {getText(link.label)}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/catalog">{getText({ he: 'קטלוג מלא', en: 'Full Catalog' })}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              {getText({ he: 'צור קשר', en: 'Contact' })}
            </h4>
            <ul className={styles.contactInfo}>
              <li>{getText(businessInfo.serviceArea)}</li>
              <li>
                <a href={`tel:${businessInfo.phone.replace(/-/g, '')}`}>{businessInfo.phone}</a>
              </li>
              <li>
                <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              {getText({ he: 'השירותים שלנו', en: 'Our Services' })}
            </h4>
            <ul className={styles.services}>
              <li>{getText({ he: 'עמדות צילום', en: 'Photo Booths' })}</li>
              <li>{getText({ he: 'קיר צילום', en: 'Photo Walls' })}</li>
              <li>{getText({ he: 'מגנטים', en: 'Magnets' })}</li>
              <li>{getText({ he: 'חתונות ובריתות', en: 'Weddings & Britot' })}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {getText(businessInfo.name)}.{' '}
            {getText({ he: 'כל הזכויות שמורות.', en: 'All rights reserved.' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
