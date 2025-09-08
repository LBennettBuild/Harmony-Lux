// components/sections/FaqCarousel.tsx
'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type QA = { id: string; q: string; a: string; idx: number };

const items: QA[] = [
  {
    id: 'faq-1',
    idx: 1,
    q: 'Yon ta’sirlar bormi?',
    a: '100% tabiiy tarkib. Odatda yaxshi ko‘tariladi. Individual holatlarda mutaxassis bilan maslahat tavsiya etiladi.',
  },
  {
    id: 'faq-2',
    idx: 2,
    q: 'Qachon ta’sirini sezaman?',
    a: 'Ko‘pchilik 2–3 haftada ijobiy o‘zgarishlarni sezadi. Natijalar individual.',
  },
  {
    id: 'faq-3',
    idx: 2,
    q: 'Qachon ta’sirini sezaman?',
    a: 'Ko‘pchilik 2–3 haftada ijobiy o‘zgarishlarni sezadi. Natijalar individual.',
  },
  // Xohlasangiz yana qo‘shing
];

function Card({ i }: { i: QA }) {
  return (
    <li className='snap-start' aria-label={`${i.idx} - ${i.q}`} role='group' key={i.id}>
      <div className='min-w-[88vw] sm:min-w-[70vw] md:min-w-[60vw] lg:min-w-[42vw] xl:min-w-[40vw] rounded-[24px] bg-[#F3F3F0] p-6 shadow-sm ring-1 ring-black/5'>
        <p className='text-sm text-gray-500'>{String(i.idx).padStart(2, '0')}</p>
        <h3 className='mt-3 text-xl font-semibold text-gray-900'>{i.q}</h3>
        <p className='mt-4 text-[15px] leading-7 text-gray-700'>{i.a}</p>
      </div>
    </li>
  );
}

export default function Faq() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9; // deyarli bir ekran
    el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold text-black sm:text-3xl'>
          Ko‘p beriladigan savollarga javob beramiz
        </h2>

        <div className='hidden gap-3 sm:flex'>
          <button
            type='button'
            onClick={() => scroll('prev')}
            aria-label='Oldingi'
            className='grid h-12 w-12 place-items-center rounded-full bg-[#EDEEEA] text-[#2B5A3E] shadow-sm hover:opacity-90'
          >
            <ArrowLeft className='h-5 w-5' />
          </button>
          <button
            type='button'
            onClick={() => scroll('next')}
            aria-label='Keyingi'
            className='grid h-12 w-12 place-items-center rounded-full bg-[#2B5A3E] text-white shadow-sm hover:opacity-95'
          >
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>

      {/* Track */}
      <ul
        ref={trackRef}
        className='flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2
                   [-ms-overflow-style:none] [scrollbar-width:none]
                   [&::-webkit-scrollbar]:hidden'
      >
        {items.map((it) => (
          <Card key={it.id} i={it} />
        ))}
      </ul>

      {/* Mobile arrows (pastda) */}
      <div className='mt-6 flex justify-center gap-3 sm:hidden'>
        <button
          type='button'
          onClick={() => scroll('prev')}
          aria-label='Oldingi'
          className='grid h-12 w-12 place-items-center rounded-full bg-[#EDEEEA] text-[#2B5A3E] shadow-sm'
        >
          <ArrowLeft className='h-5 w-5' />
        </button>
        <button
          type='button'
          onClick={() => scroll('next')}
          aria-label='Keyingi'
          className='grid h-12 w-12 place-items-center rounded-full bg-[#2B5A3E] text-white shadow-sm'
        >
          <ArrowRight className='h-5 w-5' />
        </button>
      </div>
    </section>
  );
}
