// src/components/ServiceCard.tsx
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  image: string;
  alt: string;
  text: string;
  button?: {
    btnText: string;
    href?: string;
    btnClass?: string;
  }
};

export default function ServiceCard({ title, image, alt, text, button}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between font-shippori-mincho-b1 p-4 h-full">
      <div className="flex flex-col items-center gap-4">
        <h5 className="text-brand text-xl text-center">{title}</h5>
        <Image
          src={image}
          alt={alt}
          width={566}
          height={433}
          className="pb-4"
        />
        <p className="text-base text-center max-w-[500px] mx-auto">{text}</p>
      </div>

      {button?.btnText && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={button?.href}
          className={`${button?.btnClass} text-white font-zen-maru-gothic text-lg sm:text-xl font-bold py-4 px-6 mt-8 rounded-full border-none drop-shadow-lg hover:bg-brand/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand transition min-w-[200px] text-center self-center`}
        >
          {button?.btnText}
        </a>
      )}
    </div>
  );
}
