'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CustomCardProps {
  title: string;
  description: string;
  imageUrl: string
  imageUrlMd?: string
  mobImgUrl: string
  imageAlt: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}

export function CustomCard({
  title,
  description,
  imageUrl,
  mobImgUrl,
  imageUrlMd,
  imageAlt,
  className,
  titleClassName,
  descriptionClassName,
  imageClassName,
}: CustomCardProps) {
  return (
    <div className={cn(
      "overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800",
      className
    )}>
      <div className="p-6">
        <h3 className={cn(
          "mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white",
          titleClassName
        )}>
          {title}
        </h3>
        <p className={cn(
          "mb-4 text-base text-gray-600 dark:text-gray-300 w-2/3 mx-auto",
          descriptionClassName
        )}>
          {description}
        </p>
      </div>
      <div className={cn(
        "relative flex jus",
        imageClassName
      )}>
        <div className='hidden md:block'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className={imageClassName}
            unoptimized
            />ß
        </div>
        {/* <div className='hidden md:block lg:hidden'>
          <Image
            src={imageUrlMd}
            alt={imageAlt}
            fill
            className="object-cover"
            />
        </div> */}
        <div className='block md:hidden'>
          <Image
            src={mobImgUrl}
            alt={imageAlt}
            fill
            className={imageClassName}
            unoptimized
            />
        </div>
      </div>
    </div>
  );
}