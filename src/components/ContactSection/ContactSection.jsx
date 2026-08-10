import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublicIcon from '@mui/icons-material/Public';
import { getText } from '../../config/language';
import { businessInfo, getWhatsAppUrl } from '../../data/businessInfo';
import { getRevealClassName, useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import BookButton from '../BookButton/BookButton';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: listRef, getItemProps } = useStaggerReveal({
    staggerDelay: 0.07,
    variant: 'up',
    threshold: 0.1,
  });

  const contactItems = [
    {
      icon: PublicIcon,
      label: { he: 'אזור שירות', en: 'Service Area' },
      value: getText(businessInfo.serviceArea),
    },
    {
      icon: PhoneOutlinedIcon,
      label: { he: 'טלפון', en: 'Phone' },
      value: businessInfo.phone,
      href: `tel:${businessInfo.phone.replace(/-/g, '')}`,
    },
    {
      icon: EmailOutlinedIcon,
      label: { he: 'אימייל', en: 'Email' },
      value: businessInfo.email,
      href: `mailto:${businessInfo.email}`,
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: businessInfo.phone,
      href: getWhatsAppUrl('שלום, אשמח לקבל הצעת מחיר לאירוע שלי'),
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@laviva_events_',
      href: businessInfo.instagram,
    },
  ];

  return (
    <section id="contact" className="section sectionAlt">
      <div className="container">
        <Reveal variant="up">
          <SectionHeading
            label={{ he: 'צור קשר', en: 'Contact' }}
            title={{ he: 'בואו נתכנן את האירוע שלכם', en: 'Let Us Plan Your Event' }}
            description={{
              he: 'ספרו לנו על האירוע — תאריך, מיקום ומה שחשוב לכם — ונחזור אליכם עם הצעה מותאמת.',
              en: 'Tell us about your event — date, venue, and what matters to you — and we will get back with a tailored quote.',
            }}
          />
        </Reveal>

        <div ref={ref} className={styles.grid}>
          <div className={getRevealClassName('start', isVisible, styles.info)}>
            <div ref={listRef} className={styles.contactList}>
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className={styles.contactIcon} />
                    <div>
                      <span className={styles.contactLabel}>
                        {typeof item.label === 'string' ? item.label : getText(item.label)}
                      </span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      {...getItemProps(index, styles.contactItem)}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={getText(item.label)} {...getItemProps(index, styles.contactItem)}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div
              className={getRevealClassName('up', isVisible, styles.availability)}
              style={{ transitionDelay: isVisible ? '0.35s' : '0s' }}
            >
              <div className={styles.availabilityHeader}>
                <AccessTimeOutlinedIcon className={styles.availabilityIcon} />
                <span>{getText({ he: 'זמינות', en: 'Availability' })}</span>
              </div>
              <p className={styles.availabilityText}>
                {getText({
                  he: 'פנו אלינו לפחות 3-4 שבועות לפני האירוע. נשמח לבדוק זמינות ולהתאים חבילה.',
                  en: 'Contact us at least 3-4 weeks before your event. We will check availability and tailor a package.',
                })}
              </p>
            </div>

            <div
              className={getRevealClassName('up', isVisible)}
              style={{ transitionDelay: isVisible ? '0.45s' : '0s' }}
            >
              <BookButton
                href={getWhatsAppUrl('שלום, אשמח לקבל הצעת מחיר לאירוע שלי')}
                fullWidth
                size="large"
              >
                {{ he: 'שלחו הודעה בוואטסאפ', en: 'Message on WhatsApp' }}
              </BookButton>
            </div>
          </div>

          <div
            className={getRevealClassName('end', isVisible, styles.ctaCol)}
            style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}
          >
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>
                {getText({ he: 'מוכנים להתחיל?', en: 'Ready to Start?' })}
              </h3>
              <p className={styles.ctaText}>
                {getText({
                  he: 'גלו את הקטלוג שלנו ובחרו את החוויה המושלמת לחתונה, בר/בת מצווה, ברית או כל אירוע.',
                  en: 'Browse our catalog and choose the perfect experience for your wedding, bar/bat mitzvah, brit, or any event.',
                })}
              </p>
              <BookButton to="/catalog" fullWidth size="large">
                {{ he: 'צפייה בקטלוג שלנו', en: 'View Our Catalog' }}
              </BookButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
