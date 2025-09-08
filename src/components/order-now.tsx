// components/sections/OrderNow.tsx
'use client';

import { useState } from 'react';
import { Phone, Instagram, AtSign } from 'lucide-react';

export default function OrderNow() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to backend
    console.log({ name, phone });
  };

  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      {/* Title */}
      <h2 className='mb-6 text-2xl font-semibold text-black sm:text-3xl'>
        Bugun buyurtma qiling va sog‘ligingizni mustahkamlang!
      </h2>

      <div className='grid gap-6 md:grid-cols-[1.25fr_1fr]'>
        {/* LEFT: green form card */}
        <div className='rounded-[28px] bg-[#2B5A3E] p-6 text-white shadow-sm ring-1 ring-black/5 sm:p-8'>
          <p className='text-xl leading-8 sm:text-2xl'>
            Hoziroq buyurtma bering va maxsus <br className='hidden sm:block' />
            chegirmaga ega bo‘ling
          </p>

          <form onSubmit={onSubmit} className='mt-6 grid gap-4 sm:grid-cols-2'>
            <label className='flex flex-col gap-2'>
              <span className='text-sm/none opacity-90'>Ismingiz</span>
              <input
                type='text'
                placeholder='Ismingiz'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='h-12 rounded-xl border-0 bg-[#355F46] px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30'
              />
            </label>

            <label className='flex flex-col gap-2'>
              <span className='text-sm/none opacity-90'>Telefon raqamingiz</span>
              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='h-12 rounded-xl border-0 bg-[#355F46] px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30'
              />
            </label>

            <div className='sm:col-span-2 mt-2 flex items-center justify-between'>
              <button
                type='submit'
                className='rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2B5A3E] shadow-sm hover:opacity-90'
              >
                Jo’natish
              </button>
              <span className='text-xs text-white/80'>Eng tez fursatda bog‘lanamiz</span>
            </div>
          </form>
        </div>

        {/* RIGHT: contact box */}
        <aside className='rounded-[28px] bg-[#F3F3F0] p-6 shadow-sm ring-1 ring-black/5 sm:p-8'>
          <p className='text-lg font-medium leading-7 text-gray-900'>
            Yoki o‘zingiz qo‘ng‘iroq qilib <br className='hidden sm:block' />
            buyurtma berishingiz mumkin
          </p>

          <ul className='mt-6 space-y-5'>
            <li className='flex items-center gap-4'>
              <span className='grid h-11 w-11 place-items-center rounded-full bg-[#2B5A3E] text-white'>
                <Phone className='h-5 w-5' />
              </span>
              <a
                href='tel:+998944025214'
                className='text-lg font-medium text-gray-900 hover:underline'
              >
                <span className='text-gray-400 mr-1'>+998 94</span>402 52 14
              </a>
            </li>

            <li className='flex items-center gap-4'>
              <span className='grid h-11 w-11 place-items-center rounded-full bg-[#2B5A3E] text-white'>
                <Instagram className='h-5 w-5' />
              </span>
              <a
                href='https://instagram.com/garmony_lux'
                target='_blank'
                className='text-base text-gray-900 hover:underline'
              >
                @garmony_lux
              </a>
            </li>

            <li className='flex items-center gap-4'>
              <span className='grid h-11 w-11 place-items-center rounded-full bg-[#2B5A3E] text-white'>
                <AtSign className='h-5 w-5' />
              </span>
              <a
                href='https://t.me/garmony_lux'
                target='_blank'
                className='text-base text-gray-900 hover:underline'
              >
                @garmony_lux
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
