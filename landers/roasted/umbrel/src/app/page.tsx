import Image from "next/image";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[60px_1fr_20px] items-center justify-items-center min-h-screen p-10 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="sticky top-10 z-50">
        <nav className="pl-2 flex flex-row items-center gap-2  backdrop-blur-xl bg-white/10 rounded-full h-12 px-2 py-7 text-background text-sm font-medium">
          <div className="aspect-square w-10 flex justify-center items-center rounded-full hover:bg-white group hover:cursor-pointer">
            <a>
              <Image
                className="transition-all group-hover:pb-2 group-hover:invert"
                src="/icons/umbrel.svg"
                alt="umbrel logo"
                width={29}
                height={15}
              />
            </a>
          </div>
          <ul className="flex flex-row items-center gap-2">
            <li className="px-4 py-3 rounded-full hover:bg-white hover:text-foreground hover:cursor-pointer">
              <a href="#">UmbrelOS</a>
            </li>
            <li className="px-4 py-3 rounded-full hover:bg-white hover:text-foreground hover:cursor-pointer">
              <a href="#">Umbrel Home</a>
            </li>
            <li className="px-4 py-3 rounded-full hover:bg-white hover:text-foreground hover:cursor-pointer">
              <a href="#">App Store</a>
            </li>
            <li className="px-4 py-3 rounded-full hover:bg-white hover:text-foreground hover:cursor-pointer">
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="relative flex justify-center relative max-w-md mx-auto">
          <h1 className="relative font-bold text-center text-background text-8xl leading-none mb-80 ">
            Bringing the cloud
            <span className="absolute left-1/2 -translate-x-1/2 top-[7.5rem] text-[20rem] z-10 drop-shadow-[0_0_20px_rgba(0,0,0,0.75)]">
              HOME
            </span>
          </h1>
          <Image
            className="animate-float-slow min-w-[520px] absolute top-0 z-20"
            src={"/images/umbrel-home.png"}
            alt="Umbrel"
            height={1293}
            width={1280}
            priority
          />
        </div>

        <div className="max-w-md mx-auto">
          <p className="px-6 text-background text-center">
            Store your files, run your own VPN, download and stream media, run a
            Bitcoin node, and more—all in your home.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full flex items-center justify-center bg-background text-foreground font-medium text-sm h-10 px-6 hover:bg-white/90"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase
            </a>
            <a
              className="rounded-full flex items-center justify-center bg-foreground text-background font-medium text-sm h-10 px-6 hover:bg-white/10"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>

      <div className="fixed -bottom-48 left-0 rounded-full w-80 h-80 bg-indigo-950 blur-[128px]" />
    </div>
  );
}
