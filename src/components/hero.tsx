import Image from 'next/image';
import Link from 'next/link';
import OrderForm from './order-form';

export default function Hero() {
  return (
    <section id='home' className=''>
      <div className='bg-[#F3F1EA] relative overflow-hidden py-6 pb-24'>
        <div className='mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight text-[#2B5A3E] sm:text-5xl'>
              Harmony Lux — 90% samaradorlik bilan tanangizni yangilang
            </h1>
            <p className='mt-3 text-base text-gray-700 sm:text-lg'>
              <span className='font-semibold'>100% tabiiy</span>, nano texnologiyada ishlab
              chiqarilgan, tanangizga 90% gacha singadigan vitamin kompleksi
            </p>
            <div className='mt-4 flex flex-wrap gap-4'>
              <Link
                as='link'
                href='#form'
                className='py-4 px-5 rounded-sm bg-[#E0B641] text-[#2B5A3E] hover:opacity-90'
              >
                HOZIROQ BUYURTMA QILISH
              </Link>
              <Link as='link' href='#form' className='py-4 px-5 rounded-sm hover:opacity-80'>
                BEPUL KONSULTATSIYA OLISH →
              </Link>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-4'>
              <div className='rounded-2xl bg-white p-4 shadow-sm'>
                <p className='text-sm font-medium text-[#2B5A3E]/80'>01</p>
                <div className='flex items-center mt-2 p-2 rounded-md bg-[#F3F1EA]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 48 48'
                    id='Leaf-Protect--Streamline-Plump-Gradient'
                    height='40'
                    width='40'
                    className='mr-2 h-8 w-8 flex-shrink-0 bg-[#2B5A3E] p-1 rounded-md'
                  >
                    <desc>Leaf Protect Streamline Icon: https://streamlinehq.com</desc>
                    <g id='leaf-protect--nature-environment-leaf-ecology-plant-plants-eco'>
                      <path
                        id='Union'
                        fill='url(#paint0_linear_7979_3727)'
                        fillRule='evenodd'
                        d='M8.00187 8.56337C12.7504 3.8148 18.8351 1.74008 24.356.939986c5.5231-.800418 10.5999-.343689 13.4889.074704 2.1615.31302 3.8273 1.97878 4.1403 4.14027.4184 2.8891.8751 7.96584.0747 13.48894-.1724 1.1896-.404 2.4054-.7087 3.6284C39.7805 22.1107 37.7175 22 35 22c-3.4724 0-5.8763.1808-7.5498.4175-3.8514.5447-5.9659 3.7031-6.2393 6.8119C21.0984 30.5093 21 32.1536 21 34c0 2.5096.5654 4.9783 1.6359 7.2022-4.4692.7751-9.0287.0525-12.84075-2.2678 2.01205-5.7062 6.14265-11.2627 10.77535-16.1098 6.473-6.7725 13.6227-11.8476 16.2515-13.56991.693-.454.8867-1.38378.4327-2.07673-.454-.69295-1.3838-.88665-2.0767-.43265C32.4364 8.5415 25.0861 13.7581 18.4017 20.7518c-2.9756 3.1134-5.882 6.6432-8.1806 10.4329-1.10799 1.8562-2.06547 3.7324-2.82299 5.601-.0379.0952-.07532.1905-.11224.286l-.00157-.0014C6.15416 39.9341 5.5 42.777 5.5 45.5c0 1.1046-.89543 2-2 2s-2-.8954-2-2c0-3.9336 1.10557-7.9323 2.8763-11.8037C-.531482 26.2206.942163 15.6231 8.00187 8.56337ZM35 24.5c-3.392 0-5.6735.177-7.1997.3928-2.4657.3488-3.9052 2.3516-4.099 4.5556C23.5938 30.6705 23.5 32.2404 23.5 34c0 5.0307 2.6574 9.7947 7.2099 12.1377C32.0531 46.829 33.6489 47.5 35 47.5c1.3511 0 2.9469-.671 4.2901-1.3623C43.8426 43.7947 46.5 39.0307 46.5 34c0-1.7596-.0938-3.3295-.2013-4.5516-.1938-2.204-1.6333-4.2068-4.099-4.5556C40.6735 24.677 38.392 24.5 35 24.5Zm6.1038 4.8324c.9211.6095 1.1737 1.8504.5641 2.7716l-5.2941 8c-.345.5212-.9137.8512-1.5374.892-.6237.0407-1.2306-.2124-1.6404-.6843l-3.7059-4.2666c-.7243-.834-.6355-2.0972.1984-2.8215.834-.7243 2.0972-.6355 2.8215.1985l1.9803 2.2799 3.8419-5.8055c.6095-.9212 1.8504-1.1737 2.7716-.5641Z'
                        clipRule='evenodd'
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id='paint0_linear_7979_3727'
                        x1='8.855'
                        x2='45.926'
                        y1='9.538'
                        y2='29.205'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#ffd600'></stop>
                        <stop offset='1' stopColor='#00d078'></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className='font-semibold'>100% tabiiy maxsulot</p>
                </div>
              </div>
              <div className='rounded-2xl bg-white p-4 shadow-sm'>
                <p className='text-sm font-medium text-[#2B5A3E]/80'>02</p>
                <div className='flex items-center mt-2 p-2 rounded-md bg-[#F3F1EA]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                    id='Heart-Rate--Streamline-Flex-Gradient'
                    height='40'
                    width='40'
                    className='mr-2 h-8 w-8 flex-shrink-0 bg-[#2B5A3E] p-1 rounded-md'
                  >
                    <desc>Heart Rate Streamline Icon: https://streamlinehq.com</desc>
                    <g id='heart-rate--health-beauty-information-data-beat-pulse-monitor-heart-rate-info'>
                      <path
                        id='Subtract'
                        fill='url(#paint0_linear_9380_3408)'
                        fillRule='evenodd'
                        d='M6.99999 2.54419C5.42998.971556 3.75449.690949 2.38848 1.28781.96832 1.90832.0247218 3.42741.000062108 4.99161L0 4.99949c0 .47109.0620018.93061.173763 1.37554H2.6875L4 4.62503c.12627-.16836.32879-.26187.53884-.24879.21004.01308.3994.13098.50381.3137l1.52807 2.67413L7.5 6.12503c.11804-.15738.30328-.25.5-.25h1.5c.34518 0 .625.27982.625.625s-.27982.625-.625.625H8.3125L7 8.87503c-.12627.16836-.32879.26187-.53883.24879-.21005-.01307-.39941-.13098-.50382-.3137L4.42928 6.13599 3.5 7.37503c-.11803.15738-.30328.25-.5.25H.627863C1.18738 8.80207 2.05343 9.83755 2.94432 10.6622c.76266.706 1.56706 1.28 2.26775 1.6803.35021.2001.68099.3605.97314.4722.28045.1074.56705.1864.81478.1864.24773 0 .53433-.079.81478-.1864.29215-.1117.62292-.2721.97314-.4722.7007-.4003 1.50509-.9743 2.26779-1.6803C12.5634 9.26656 14 7.26707 14 4.99949l-.0001-.00788c-.0246-1.5642-.9682-3.08329-2.3884-3.70381C10.2455.690949 8.57.971555 6.99999 2.54419Z'
                        clipRule='evenodd'
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id='paint0_linear_9380_3408'
                        x1='15.213'
                        x2='-1.634'
                        y1='15.543'
                        y2='1.585'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#ffd600'></stop>
                        <stop offset='1' stopColor='#ff007a'></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className='font-semibold'>100% tabiiy maxsulot</p>
                </div>
              </div>
            </div>
          </div>

          <div className='-mr-24 -mb-20 hidden md:block'>
            <div className='relative flex flex-col items-end w-full'>
              <div className='relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl bg-[#F3F0EA]'>
                <Image
                  src='/images/hero-banner.png'
                  alt='Harmony Lux'
                  fill
                  className='object-contain'
                />
              </div>
              <div className='-mt-40 mr-40 z-10 hidden items-center gap-4 rounded-full border px-4 py-2 text-sm md:flex text-white'>
                <button className='rounded-full px-2'>←</button>
                <span>01/03</span>
                <button className='rounded-full px-2'>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='-mt-18 flex justify-center relative z-10'>
        <OrderForm />
      </div>
    </section>
  );
}
