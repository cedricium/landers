import Image from "next/image";
import Link from "next/link";

import Squiggle from "@/components/squiggle";
import Sparkles from "@/components/sparkles";
import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <div className="grid grid-rows-[40px_1fr_160px_40px] items-center justify-items-start min-h-screen overflow-hidden pt-8 gap-16 font-[family-name:var(--font-sans)]">
      <header className="mx-auto max-w-screen-lg w-full text-background">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/img/logos/clairvoyant.png"
              alt="Clairvoyant Intelligence logo"
              width={180}
              height={33}
              priority
            />
          </Link>

          <ul className="flex gap-8 text-sm font-medium">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="">Request Access</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="self-center">
          <h1 className="max-w-2xl text-6xl text-background text-center font-[family-name:var(--font-serif)]">
            Detect{" "}
            <Typewriter
              sequence={[
                "software",
                2000,
                "Windows",
                2000,
                "Linux",
                2000,
                "macOS",
                2000,
              ]}
            />{" "}
            update threats
            <br />
            in just{" "}
            <span aria-hidden className="relative select-none">
              14 days <Squiggle />{" "}
            </span>
            3 minutes.
          </h1>
        </div>

        <div className="self-center">
          <p className="max-w-lg text-white/70 text-center">
            Eliminate blind spots in your software supply chain. Like 1000
            reverse-engineers proactively verifying adversarial threats and
            operational risk. Minimize downtime, maximize protection.
          </p>
        </div>

        <div className="self-center">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-background hover:bg-white/75 text-foreground text-sm font-semibold gap-2 h-8 px-4"
              href="/contact"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </main>

      <div className="flex flex-col items-center mx-auto">
        <p className="text-white/70 text-xs font-semibold uppercase">
          Backed By
        </p>
        <div className="w-9/12 flex justify-center items-center gap-4 sm:gap-12 opacity-60">
          <div className="flex-1 max-w-full h-auto">
            <Image
              src="/img/logos/fireeye.png"
              alt="FireEye logo"
              width={180}
              height={40}
            />
          </div>

          <div className="flex-1 max-w-full h-auto">
            <Image
              src="/img/logos/menlosecurity.png"
              alt="Menlo Security logo"
              width={180}
              height={87}
            />
          </div>

          <div className="flex-1 max-w-full h-auto">
            <Image
              src="/img/logos/ucberkeley.png"
              alt="UC Berkeley logo"
              width={180}
              height={120}
            />
          </div>
        </div>
      </div>

      <div className="relative h-[30rem] w-screen overflow-hidden [mask-image:linear-gradient(to_top,white,transparent)] before:absolute before:inset-0 before:bg-[linear-gradient(to_top,#ea580c,transparent_85%)] before:opacity-80">
        <Sparkles
          density={2400}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:linear-gradient(to_top,white_60%,transparent)]"
        />
      </div>
    </div>
  );
}
