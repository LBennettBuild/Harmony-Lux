import type { ComponentProps } from 'react';
import { cn } from '../lib/utils';

export default function BenefitsRow({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section className={cn('px-4 sm:px-18 py-6', className)} {...props}>
      <div className='rounded-3xl bg-[#F4F4F1] p-4 sm:p-8'>
        <div className='grid gap-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]'>
          <div className='space-y-4'>
            <p className='text-lg sm:text-xl font-semibold leading-6 text-gray-900'>
              Davolanishning birinchi oyidan boshlab — Yengillik, ishonch va go‘zallikni o‘zingizda
              his qiling
            </p>
            <button className='rounded-xl bg-[#E0B641] px-4 py-2 text-sm font-semibold text-[#2B5A3E] shadow-sm hover:opacity-90'>
              Buyurtma qilish
            </button>
          </div>
          <div className='rounded-3xl bg-[#173C2B] p-4 text-white shadow-sm'>
            <p className='text-sm sm:text-base font-semibold'>Energiya</p>
            <div className='mt-4 grid place-items-center'>
              <div className='h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/10' />
            </div>
          </div>
          <div className='rounded-3xl bg-white p-4 shadow-sm'>
            <p className='text-sm sm:text-base font-semibold text-gray-900'>Immunitet</p>
            <div className='mt-4 grid place-items-center'>
              <div className='h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-[#EAF1E9]' />
            </div>
          </div>
          <div className='rounded-3xl bg-white p-4 shadow-sm'>
            <p className='text-sm sm:text-base font-semibold text-gray-900'>Sokinlik</p>
            <div className='mt-4 grid place-items-center'>
              <div className='h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-[#EAF1E9]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
