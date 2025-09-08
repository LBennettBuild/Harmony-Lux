// components/sections/ProductHighlight.tsx
import Image from 'next/image';
import { Droplet } from 'lucide-react';

type Props = {
  image: string; // chapdagi surat
  title?: string;
  chips?: string[];
  active?: string;
};

export default function ProductHighlight({
  image = '/images/product-shot.jpg',
  title = 'Shunchaki BFQ emas vitamin va minerallarning maxsus kompleksi',
  chips = [
    'Omega',
    'Magniy',
    'Temir & tabiiy ekstraktlar',
    'Vitamin A, C, E',
    'Vitamin B',
    'Vitamin B1, B6, B12',
    'Omega',
    'Tabiiy yod',
  ],
  active = 'Tabiiy yod',
}: Props) {
  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='grid gap-6 md:grid-cols-2'>
        {/* LEFT: image card */}
        <div className='relative overflow-hidden rounded-[28px] bg-[#EDE7FF]'>
          {/* Surat */}
          <Image
            src={image}
            alt='Harmony Lux'
            width={1200}
            height={900}
            className='h-auto w-full object-cover'
            priority
          />

          {/* Top-left pill */}
          <div className='absolute left-6 top-6'>
            <div className='flex items-center gap-3 rounded-full bg-white/85 px-5 py-3 text-[#2B5A3E] shadow backdrop-blur'>
              <span className='text-base font-medium'>Tabiiy yod</span>
              <span className='grid h-9 w-9 place-items-center rounded-full bg-[#2B5A3E] text-white'>
                <Droplet className='h-4 w-4' />
              </span>
            </div>
          </div>

          {/* Bottom-left pill button */}
          <div className='absolute bottom-6 left-6'>
            <button
              type='button'
              className='rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow'
            >
              Maxsulot haqida
            </button>
          </div>
        </div>

        {/* RIGHT: details panel */}
        <div className='rounded-[28px] bg-[#F1F2EF] p-6 shadow-sm ring-1 ring-black/5 sm:p-8'>
          <h3 className='text-2xl font-semibold leading-snug text-gray-900 sm:text-3xl'>{title}</h3>

          {/* chips */}
          <div className='md:mt-72 mt-8 flex flex-wrap gap-4'>
            {chips.map((c, i) => {
              const isActive = c === active;
              return (
                <span
                  key={`${c}-${i}`} // <-- unique key (label + index)
                  className={[
                    'inline-flex items-center rounded-full px-5 py-3 text-sm shadow-sm',
                    isActive
                      ? 'bg-[#2B5A3E] text-white'
                      : 'bg-white text-gray-700 ring-1 ring-black/5',
                  ].join(' ')}
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
