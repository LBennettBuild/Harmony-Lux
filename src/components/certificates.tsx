import Image from 'next/image';

type CertItem = {
  src: string;
  alt: string;
  label: string;
};

type Props = {
  title?: string;
  items: CertItem[];
};

export default function Certificates({ title = 'Maxsulot hujjatlari', items }: Props) {
  return (
    <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
      <h2 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6'>{title}</h2>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((it, i) => (
          <figure key={i} className='group'>
            <div className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
              <div className='relative aspect-[3/4]'>
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  className='object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-[1.02]'
                  sizes='(max-width: 640px) 100vw, (min-width: 640px) 50vw, (min-width: 1024px) 25vw'
                  priority={i === 0}
                />
              </div>
            </div>
            <figcaption className='mt-2 sm:mt-3 flex justify-center'>
              <span className='inline-block rounded-full bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 shadow-sm'>
                {it.label}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
