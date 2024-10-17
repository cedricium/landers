import dynamic from "next/dynamic";
import Image from "next/image";

import { Toaster } from "@/components/ui/sonner";
import Squiggle from "@/components/sqiggle";

// https://sentry.io/answers/window-is-not-defined/
const DynamicDemo = dynamic(() => import("./demo"), { ssr: false });

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-[60px_1fr_2fr_100px] grid-flow-row gap-0 items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] text-foreground">
      <nav className="col-start-1 col-end-13 row-start-1 row-end-2 z-10 w-full h-full backdrop-blur-[2px] flex justify-between items-center px-[calc(100%*2/12)] pt-4 text-sm font-medium">
        <div className="flex gap-6 items-center">
          <a href="/">
            <Image src="/elba.svg" alt="elba logo" width={71} height={25} />
          </a>
          <ul className="flex gap-6 items-center">
            <li>
              <a href="#">Use Cases</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
          </ul>
        </div>

        <div>
          <a
            href="#"
            className="px-3 py-2 bg-gray-200 text-sm text-foreground font-medium rounded-full"
          >
            Log In
          </a>
        </div>
      </nav>

      <header className="flex relative col-start-1 col-end-13 row-start-1 row-end-3 w-full h-full border-b bg-gray-50 bg-[url('/images/radar.png')] bg-no-repeat bg-[center_50%] bg-[length:50%_auto]">
        <Toaster
          className="absolute -bottom-4 inset-1/2"
          position="bottom-center"
        />
        <DynamicDemo autoplay />
      </header>

      <main className="col-span-12 row-start-3 w-full h-full flex flex-col items-center gap-6 pt-16 pb-8 px-[calc(100%*2/12)] bg-white">
        <div>
          <div
            id="laser"
            className="relative inline-flex items-center overflow-hidden px-3.5 py-1.5 rounded-full text-sm font-medium bg-gray-50"
          >
            <div className="absolute inset-0.5 rounded-full bg-gray-50"></div>
            <p className="z-10">
              Elba joined CrowdStrike accelerator <span>&rarr;</span>
            </p>
          </div>
        </div>

        <h1 className="text-center font-bold text-6xl max-w-2xl">
          Fix{" "}
          <span aria-hidden className="relative ">
            code
            <Squiggle />
          </span>{" "}
          human cyber risks effortlessly
        </h1>

        <p className="text-center text-gray-500 font-medium max-w-xs">
          Conquer team security and compliance challenges effortlessly with our
          real-time, holistic security platform.
        </p>

        <form>
          <div className="flex gap-1 px-2 py-2 bg-gray-50 rounded-full">
            <input
              className="ml-3 bg-transparent outline-none text-ellipsis text-sm w-56"
              type="email"
              name=""
              id=""
              placeholder="Email address"
            />
            <button
              className="px-3 py-2 bg-gray-900 text-sm text-background font-medium rounded-full"
              type="submit"
            >
              Book a demo
            </button>
          </div>
        </form>
      </main>

      <footer className="col-span-12 row-start-4 w-full h-full flex items-center px-[calc(100%*2/12)] bg-white">
        <div>
          <Image
            src="/images/elba-logos.svg"
            alt="company logos"
            width={1085}
            height={37}
          />
        </div>
      </footer>
    </div>
  );
}
