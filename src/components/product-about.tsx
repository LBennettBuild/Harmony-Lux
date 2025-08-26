import Image from 'next/image';

export default function ProductAbout() {
  return (
    <section className='py-6 px-4 sm:px-18'>
      <div className='grid gap-6 md:grid-cols-2'>
        <div className='space-y-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-900'>
            Hormany Lux <br />
            mahsuloti haqida
          </h1>
          <div className='rounded-[28px] bg-[#F6F6F5] p-4 sm:p-8'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-gray-900'>
              Faqatgina vitaminlar emas, sog‘lom va baxtli ayol uchun eng kerakli minerallar bilan
              boyitilgan
            </h2>
            <p className='mt-3 text-sm sm:text-[15px] leading-7 text-gray-600'>
              Harmony Lux — bu ayollar salomatligi uchun maxsus yaratilgan 100% tabiiy
              vitamin-mineral kompleksi. U nano texnologiya yordamida ishlab chiqarilgan bo‘lib,
              odatty vitaminlardan farqli ravishda tanaga 90% gacha singadi.
            </p>
            <div className='mt-6 rounded-2xl bg-[#f1f1f1] p-4 shadow-sm max-w-[260px]'>
              <p className='font-semibold text-gray-800'>Harmony Lux</p>
              <p className='mt-1 text-xs sm:text-sm text-gray-600 text-justify'>
                Sog‘liqni saqlash vazirligi tomonidan tasdiqlangan BFQ maxsuloti
              </p>
            </div>
          </div>
        </div>
        <div className='relative rounded-[28px] overflow-hidden'>
          <Image
            src='/images/about-img.png'
            alt='Harmony Lux qadoqlanishi'
            fill
            className='object-cover'
            sizes='(max-width: 640px) 100vw, 50vw'
            priority
          />
          <div className='absolute left-3 top-3 sm:left-4 sm:top-4 flex items-center gap-2 rounded-full bg-white/85 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#2B5A3E] shadow backdrop-blur'>
            Tabiiy Yod
            <span className='inline-flex items-center justify-center rounded-full bg-[#2B5A3E] text-white h-5 w-5 sm:h-6 sm:w-6'>
              <svg viewBox='0 0 24 24' className='h-3 w-3 sm:h-4 sm:w-4' fill='currentColor'>
                <path d='M12 2c5.5 0 10 4.5 10 10 0 5.6-4.5 10-10 10S2 17.6 2 12C2 6.5 6.5 2 12 2zm2.8 5.7c-3 .9-5.4 3.4-6.3 6.3-.2.7.5 1.4 1.2 1.2 2.9-.9 5.4-3.3 6.3-6.3.2-.7-.5-1.4-1.2-1.2z' />
              </svg>
            </span>
          </div>
          <button
            className='absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 shadow'
            type='button'
          >
            To‘liq ma’lumot olish
          </button>
        </div>
      </div>
    </section>
  );
}
