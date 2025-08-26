import Image from 'next/image';
import Header from '../components/header';
import Hero from '../components/hero';
import BenefitsRow from '../components/benefits-row';
import ProductAbout from '../components/product-about';
import Certificates from '../components/certificates';
import PurchaseOffer from '../components/purchase-offer';

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      <Header />
      <Hero />
      <BenefitsRow className='mt-8' />
      <ProductAbout />
      <Certificates
        items={[
          { src: '/certs/gmp.jpg', alt: 'GMP sertifikat', label: 'GMP sertifikat' },
          { src: '/certs/halal.jpg', alt: 'Halollik sertifikati', label: 'Halollik sertifikati' },
          { src: '/certs/safety.jpg', alt: 'Havfsizlik hujjati', label: 'Havfsizlik hujjati' },
          {
            src: '/certs/moh-health.jpg',
            alt: 'Sog‘liqni saqlash vazirligi hujjati',
            label: 'Sog‘liqni saqlash vazirligi hujjati',
          },
        ]}
      />
      <PurchaseOffer
        price='549,000 so’m'
        productImg='/images/harmony-bottle.jpg'
        modelImg='/images/hero-banner.png'
      />
    </div>
  );
}
