import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full backdrop-blur bg-[#F3F1EA] py-3'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link href='/' className='text-lg font-bold text-gray-900'>
          Harmony Lux
        </Link>
        <nav className='hidden sm:flex gap-3'>
          <Link
            href='#home'
            className='rounded-full border-none bg-white px-4 py-2 text-sm font-medium'
          >
            Bosh sahifa
          </Link>
          <Link
            href='#products'
            className='rounded-full border-none bg-white px-4 py-2 text-sm font-medium'
          >
            Maxsulotimiz
          </Link>
          <Link
            href='#benefits'
            className='rounded-full border-none bg-white px-4 py-2 text-sm font-medium'
          >
            Afzalliklar
          </Link>
          <Link
            href='#faq'
            className='rounded-full border-none bg-white px-4 py-2 text-sm font-medium'
          >
            FAQ
          </Link>
        </nav>
        <div className='flex items-center gap-3'>
          <button className='hidden sm:inline-flex rounded-full bg-green-900 px-4 py-2 text-sm font-medium text-white'>
            Krillcha
          </button>
          <button className='flex h-9 w-9 items-center justify-center rounded-md border'>
            <span className='sr-only'>Menu</span>
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
