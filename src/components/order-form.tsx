'use client';
import { useState } from 'react';

export default function OrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone });
  };

  return (
    <div
      id='form'
      className='w-full max-w-md sm:max-w-2xl rounded-3xl border border-[#254D37] bg-[#2B5A3E] p-4 sm:p-8 text-white shadow-xl'
    >
      <h2 className='text-lg sm:text-2xl font-semibold'>
        Hoziroq buyurtma bering va maxsus <br />
        chegirmaga ega bo‘ling
      </h2>
      <form onSubmit={handleSubmit} className='mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4'>
        <label className='flex flex-col gap-1'>
          <span className='text-xs sm:text-sm opacity-90'>Ismingiz</span>
          <input
            type='text'
            value={name}
            placeholder='Ismingiz kiriting'
            onChange={(e) => setName(e.target.value)}
            className='h-10 sm:h-11 rounded-xl border-0 bg-[#355F46] px-3 sm:px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30'
          />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='text-xs sm:text-sm opacity-90'>Telefon raqamingiz</span>
          <input
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='h-10 sm:h-11 rounded-xl border-0 bg-[#355F46] px-3 sm:px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30'
          />
        </label>
        <div className='mt-2 sm:mt-1 flex flex-col sm:flex-row items-center justify-between sm:col-span-2 gap-3'>
          <button
            type='submit'
            className='rounded-full bg-white px-5 py-2 sm:px-6 sm:py-3 text-sm font-semibold text-[#2B5A3E] shadow-sm hover:opacity-90'
          >
            Jo’natish
          </button>
          <span className='text-xs text-white/80'>Eng tez fursatda bog‘lanamiz</span>
        </div>
      </form>
    </div>
  );
}
