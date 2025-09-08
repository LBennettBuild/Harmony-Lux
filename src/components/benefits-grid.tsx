// components/sections/BenefitsGrid.tsx
import { Maximize2, Shield, Users, Scissors, HeartPulse, Droplets, Moon, Zap } from 'lucide-react';

type MiniIcon = { id: string; icon: React.ComponentType<{ className?: string }> };

const Mini = ({ Icon }: { Icon: MiniIcon['icon'] }) => (
  <span className='grid h-9 w-9 place-items-center rounded-full bg-white text-[#2B5A3E] shadow-sm ring-1 ring-black/5'>
    <Icon className='h-4 w-4' />
  </span>
);

const TopIcons = ({ items }: { items: MiniIcon[] }) => (
  <div className='flex items-center gap-2'>
    {items.map((m) => (
      <Mini key={m.id} Icon={m.icon} />
    ))}
  </div>
);

const Card = ({
  eyebrow,
  title,
  icons,
  className = '',
}: {
  eyebrow: string;
  title: string;
  icons: MiniIcon[];
  className?: string;
}) => (
  <div className={`rounded-[28px] bg-[#F1F2EF] p-6 shadow-sm ring-1 ring-black/5 ${className}`}>
    <div className='mb-6 flex items-start justify-between'>
      <p className='max-w-[75%] text-sm font-medium text-[#2B5A3E]/70'>{eyebrow}</p>
      <TopIcons items={icons} />
    </div>
    <h3 className='text-[22px] font-semibold leading-8 text-[#2B5A3E]'>{title}</h3>
  </div>
);

const BigCard = ({
  eyebrow,
  title,
  icons,
  className = '',
}: {
  eyebrow: string;
  title: string;
  icons: MiniIcon[];
  className?: string;
}) => (
  <div
    className={`rounded-[28px] bg-[#2B5A3E] p-6 text-white shadow-sm ring-1 ring-black/5 ${className}`}
  >
    <div className='mb-6 flex items-start justify-between text-white/80'>
      <p className='text-sm'>{eyebrow}</p>
      <TopIcons items={icons} />
    </div>
    <h3 className='text-[22px] font-semibold leading-8'>{title}</h3>
  </div>
);

export default function BenefitsGrid() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      {/* Grid */}
      <div className='grid gap-6 lg:grid-cols-12'>
        {/* A */}
        <Card
          eyebrow='Gormonal muvozanatdagi nosozliklar'
          title='Gormonlar balansini qo‘llab-quvvatlaydi (umumiy tonusni ushlaydi)'
          icons={[
            { id: 'zoom', icon: Maximize2 },
            { id: 'shield', icon: Shield },
          ]}
          className='lg:col-span-4'
        />
        {/* B */}
        <Card
          eyebrow='Vazn nazorati va shishish'
          title='Metabolizmni qo‘llab-quvvatlash, sog‘lom vazn yo‘li'
          icons={[
            { id: 'users', icon: Users },
            { id: 'grid', icon: Scissors }, // vizual o‘xshash “tarmoq” belgisi sifatida
          ]}
          className='lg:col-span-4'
        />
        {/* C */}
        <Card
          eyebrow='Xira teri, mo‘rt soch–tirnoq'
          title='Go‘zallik uchun muhim mikronutriyentlar bilan ichdan parvarish'
          icons={[
            { id: 'like', icon: HeartPulse },
            { id: 'fav', icon: Droplets },
          ]}
          className='lg:col-span-4'
        />

        {/* D (past chap, och kulrang) */}
        <Card
          eyebrow='Doimiy charchoq va energiya yetishmasligi'
          title='Yuqori bioo‘zlashtirish (90% gacha) bilan energiya almashinuvini faollashtirish'
          icons={[
            { id: 'moon', icon: Moon },
            { id: 'zap', icon: Zap },
          ]}
          className='lg:col-span-5'
        />

        {/* E (past o‘ng, katta yashil) */}
        <BigCard
          eyebrow='Tez-tez shamollash / immunitet pastligi'
          title='20+ vitamin–mineral kompleksi immun funksiyani qo‘llab-quvvatlaydi'
          icons={[
            { id: 'maximize', icon: Maximize2 },
            { id: 'shield2', icon: Shield },
          ]}
          className='lg:col-span-7'
        />
      </div>

      {/* CTA — markazda, katta, yumaloq */}
      <div className='mt-6 flex justify-center'>
        <button
          type='button'
          className='rounded-[999px] bg-[#2B5A3E] px-8 py-4 text-base font-semibold text-white shadow-sm hover:opacity-95 md:min-w-[520px]'
        >
          Batafsil ma’lumot olish
        </button>
      </div>
    </section>
  );
}
