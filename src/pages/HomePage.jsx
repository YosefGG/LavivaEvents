import HeroSection from '../components/HeroSection/HeroSection';
import EventTypesStrip from '../components/EventTypesStrip/EventTypesStrip';
import CatalogPreviewSection from '../components/CatalogPreviewSection/CatalogPreviewSection';
import AboutSection from '../components/AboutSection/AboutSection';
import GallerySection from '../components/GallerySection/GallerySection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import BookingCTA from '../components/BookingCTA/BookingCTA';
import ContactSection from '../components/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventTypesStrip />
      <CatalogPreviewSection />
      <AboutSection />
      <GallerySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BookingCTA />
      <ContactSection />
    </>
  );
}
