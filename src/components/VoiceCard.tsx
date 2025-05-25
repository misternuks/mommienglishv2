// src/components/VoiceCard.tsx
import Image from "next/image";

type VoiceCardProps = {
  image: string;
  alt: string;
  name: string;
  text: string;
};

export default function VoiceCard({ image, alt, name, text }: VoiceCardProps) {
  return (
    <div className="relative w-[400px] h-[360px] bg-[#fffef7] drop-shadow-lg flex flex-col p-8 gap-6 font-extralight">
      <div className="flex items-center justify-start gap-4">
        <Image
          src={image}
          alt={alt}
          width={110}
          height={110}
          className="rounded-full"
        />
        <div className="text-sm">{name}</div>
      </div>
      <div className="text-xs">{text}</div>
    </div>
  );
}
