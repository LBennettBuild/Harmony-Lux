// components/sections/Reviews.tsx
type Review = {
  name: string;
  age: number;
  date: string; // "22.08.2025"
  text: string;
  accent?: string; // avatar rang ixtiyoriy (#2B5A3E default)
  rating?: number; // 0..5, default 5
};

const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg viewBox='0 0 20 20' className='h-4 w-4'>
    <path
      d='M10 1.8l2.35 4.76 5.26.77-3.8 3.7.9 5.24L10 13.9 5.29 16.3l.9-5.24-3.8-3.7 5.26-.77L10 1.8z'
      className={filled ? 'fill-black' : 'fill-none stroke-black'}
      strokeWidth='1.2'
    />
  </svg>
);

const Stars = ({ value = 5 }: { value?: number }) => {
  const v = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className='flex items-center gap-1'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < v} />
      ))}
    </div>
  );
};

const ReviewCard = ({ r }: { r: Review }) => {
  const initial = r.name.charAt(0).toUpperCase();
  return (
    <article className='rounded-[22px] border border-black/10 bg-white p-6 shadow-sm'>
      <header className='flex items-center gap-4'>
        <div
          className='grid h-16 w-16 place-items-center rounded-full text-white'
          style={{ backgroundColor: r.accent ?? '#2B5A3E' }}
        >
          <span className='text-lg font-semibold'>{initial}</span>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <h4 className='text-lg font-semibold text-gray-900'>{r.name}</h4>
            <span className='text-gray-500'>{r.age} yosh</span>
          </div>
          <Stars value={r.rating ?? 5} />
        </div>
      </header>

      <div className='mt-6 text-sm text-gray-500'>{r.date}</div>
      <p className='mt-2 text-[15px] leading-7 text-gray-800'>{r.text}</p>
    </article>
  );
};

export default function Reviews() {
  const data: Review[] = [
    {
      name: 'Dilnoza',
      age: 28,
      date: '22.08.2025',
      text: 'PMS o‘tishlari yengillashdi, uyqum normallashdi, tavsiya qilgan bo‘lardim',
      accent: '#3F6A54',
      rating: 5,
    },
    {
      name: 'Madina',
      age: 38,
      date: '20.07.2025',
      text: 'Soch to‘kilishi to‘xtab qoldi ancha, terim ham mayinlashib tiniqlashib qoldi',
      accent: '#3F6A54',
      rating: 5,
    },
  ];

  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <h2 className='mb-6 text-2xl font-semibold text-black sm:text-3xl'>
        Harmony Lux - sog‘lom ayollar tanlovi
      </h2>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {/* 2 ta sharh kartasi */}
        {data.map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}

        {/* O'ngdagi yashil CTA paneli */}
        <aside className='rounded-[24px] bg-[#2B5A3E] p-6 text-white md:row-span-2 lg:row-auto'>
          <p className='text-lg font-medium leading-7'>
            Maxsulotimiz haqida xaqiqiy fikringizni yozib qoldiring bu biz uchun muhim
          </p>

          <div className='mt-6 rounded-full bg-white/15 p-2'>
            <button
              type='button'
              className='w-full rounded-full bg-white/20 px-6 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white/25'
            >
              Fikr bildirish
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
