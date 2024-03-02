import { Raleway, Lusitana } from 'next/font/google';

// next/font optimise performance by pre-loading font as static assert

// download font file at build time, prevent layout shift since browser won't change the font

// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images

export const raleWay = Raleway({ subsets: ['latin'] });

export const lusitana = Lusitana({ subsets: ['latin'], weight: '400' });
