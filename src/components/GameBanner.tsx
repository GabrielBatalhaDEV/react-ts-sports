interface GameBannerProps {
  title: string;
  adCount: number;
  bannerUrl: string;
}

export function GameBanner({ title, adCount, bannerUrl }: GameBannerProps) {
  return (
    <a
      href="#"
      className="relative rounded-lg overflow-hidden hover:brightness-90"
    >
      <img src={bannerUrl} alt={`${title}-image.png`} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 ">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {adCount} Anuncios
        </span>
      </div>
    </a>
  );
}
