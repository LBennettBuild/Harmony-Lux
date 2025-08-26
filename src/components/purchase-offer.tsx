import Image from 'next/image';

type Props = {
  price: string;
  productImg: string;
  modelImg?: string;
  title?: string;
};

export default function PurchaseOffer({
  price,
  productImg,
  modelImg = '/images/hero-banner.png',
  title = 'Harmony Lux tabiiy yod maxsulotini buyurtma qiling',
}: Props) {
  return (
    <section className='py-6'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#F3F1EA] rounded-xl'>
        <div className='grid gap-6 md:grid-cols-[minmax(0,1fr)_420px]'>
          <div className='space-y-4'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-black'>
              {title}
            </h2>
            <div className='grid gap-4 lg:grid-cols-[1.05fr_1.2fr]'>
              <div className='rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-gray-200'>
                <div className='overflow-hidden rounded-[22px] bg-[#E6EBD9]'>
                  <Image
                    src={productImg}
                    alt='Harmony Lux product'
                    width={800}
                    height={800}
                    className='h-auto w-full object-cover'
                    sizes='(max-width: 640px) 90vw, (min-width: 640px) 45vw, (min-width: 1024px) 30vw'
                    priority
                  />
                </div>
              </div>
              <div className='rounded-[28px] h-[250px] bg-white p-2 shadow-sm ring-1 ring-gray-200'>
                <div className='px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-[#B8A34B]'>
                  Maxsus chegirma
                </div>
                <div className='rounded-[26px]  rounded-tl-[40px] bg-[#2B5A3E] px-4 sm:px-6 py-5 sm:py-7 text-white'>
                  <div className='flex items-start justify-between'>
                    <p className='text-xs sm:text-sm/6 opacity-90'>
                      3 oylik davolanish kursi narxi
                    </p>
                    <span className='grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-white/40'>
                      %
                    </span>
                  </div>
                  <p className='mt-3 text-2xl sm:text-[34px] font-semibold tracking-tight'>
                    {price}
                  </p>
                  <p className='mt-4 text-xs sm:text-sm text-[#E0B641]'>
                    Bugungi bonus: <span className='text-[#EAD37A]'>Bepul yetkazib berish</span>
                  </p>
                </div>
              </div>
            </div>
            <button
              type='button'
              className='rounded-[32px] bg-gradient-to-r from-[#F0DE8D] to-[#E0B641] px-5 sm:px-6 py-3 sm:py-5 text-sm sm:text-base font-semibold text-[#2B5A3E] shadow-sm hover:opacity-95'
            >
              Aksiyada xarid qilish
            </button>
          </div>
          <div className='hidden md:flex justify-end -mb-10 -mr-8'>
            <Image
              src={modelImg}
              alt='Harmony Lux model'
              width={420}
              height={700}
              className='h-[420px] w-auto object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
