// components/sections/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Instagram, Send } from 'lucide-react';

type Props = {
  certImages?: string[]; // ['/images/cert1.jpg', '/images/cert2.jpg', '/images/cert3.jpg']
  phone?: string; // '+998 94 402 52 14'
  instagram?: string; // '@garmony_lux'
  telegram?: string; // '@garmony_lux'
};

export default function Footer({
  certImages = ['/images/cert-1.jpg', '/images/cert-2.jpg', '/images/cert-3.jpg'],
  phone = '+998 94 402 52 14',
  instagram = '@garmony_lux',
  telegram = '@garmony_lux',
}: Props) {
  return (
    <footer className='mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8'>
      <div className='rounded-[28px] bg-[#2B5A3E] p-6 text-white shadow-sm sm:p-8'>
        {/* Top grid */}
        <div className='grid gap-8 lg:grid-cols-12'>
          {/* Left: brand & nav */}
          <div className='lg:col-span-4'>
            <h3 className='text-2xl font-semibold text-[#E0B641]'>Harmony Lux</h3>

            <ul className='mt-6 space-y-3 text-lg'>
              <li>
                <Link href='#home' className='hover:opacity-90'>
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href='#about' className='hover:opacity-90'>
                  Maxsulot haqida
                </Link>
              </li>
              <li>
                <Link href='#benefits' className='hover:opacity-90'>
                  Avfzalliklar
                </Link>
              </li>
              <li>
                <Link href='#faq' className='hover:opacity-90'>
                  FAQ
                </Link>
              </li>
            </ul>

            <div className='mt-8'>
              <Link
                href='#form'
                className='inline-block rounded-full bg-gradient-to-r from-[#F0DE8D] to-[#E0B641] px-6 py-3 text-sm font-semibold text-[#2B5A3E] shadow hover:opacity-95'
              >
                Buyurtma qilish
              </Link>
            </div>
          </div>

          {/* Middle: contacts */}
          <div className='lg:col-span-4'>
            <h4 className='text-lg font-medium text-white/90'>Qo‘ng‘iroq qiling</h4>

            <ul className='mt-5 space-y-5'>
              <li className='flex items-center gap-4'>
                <span className='grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur'>
                  <Phone className='h-5 w-5' />
                </span>
                <a href='tel:+998944025214' className='text-2xl font-semibold'>
                  <span className='text-white/70 mr-1'>+998 94</span>402 52 14
                </a>
              </li>

              <li className='flex items-center gap-4'>
                <span className='grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur'>
                  <Instagram className='h-5 w-5' />
                </span>
                <a
                  href={`https://instagram.com/${instagram.replace('@', '')}`}
                  target='_blank'
                  className='text-lg hover:underline'
                >
                  {instagram}
                </a>
              </li>

              <li className='flex items-center gap-4'>
                <span className='grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur'>
                  <Send className='h-5 w-5' />
                </span>
                <a
                  href={`https://t.me/${telegram.replace('@', '')}`}
                  target='_blank'
                  className='text-lg hover:underline'
                >
                  {telegram}
                </a>
              </li>
            </ul>
          </div>

          {/* Right: certificates */}
          <div className='lg:col-span-4'>
            <h4 className='text-lg font-medium text-white/90'>Rasmiy hujjatlar</h4>
            <div className='mt-5 flex flex-wrap gap-4'>
              {certImages.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className='overflow-hidden rounded-lg bg-white/10 p-1 ring-1 ring-white/15'
                >
                  <Image
                    src={src}
                    alt={`Sertifikat ${i + 1}`}
                    width={220}
                    height={300}
                    className='h-40 w-28 object-cover sm:h-44 sm:w-32 md:h-48 md:w-36'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='mt-8 h-px w-full bg-white/15' />

        {/* Copyright */}
        <div className='mt-4 text-center text-sm text-white/80'>2025 Harmony&nbsp;Lux</div>
      </div>
    </footer>
  );
}
