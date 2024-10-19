import Image from "next/image";
import Link from "next/link";

import Squiggle from "@/components/squiggle";
import Sparkles from "@/components/sparkles";
import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <main className="relative col-span-full row-start-2 w-full flex-1 min-h-[calc(100vh-12rem)] flex flex-col gap-16 row-start-2 justify-between items-center">
      <div className="flex-1 w-full" />
      <div className="z-5 w-full flex-[6_6_0%] flex flex-col items-center gap-8">
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

        <p className="max-w-lg text-white/70 text-center">
          Eliminate blind spots in your software supply chain. Like 1000
          reverse-engineers proactively verifying adversarial threats and
          operational risk. Minimize downtime, maximize protection.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-background hover:bg-white/75 text-foreground text-sm font-semibold gap-2 h-8 px-4"
            href="/contact"
          >
            Book Demo
          </Link>
        </div>
      </div>

      <div className="flex-[2_2_0%] flex flex-col items-center mx-auto">
        <p className="text-white/70 text-xs font-semibold uppercase">
          Backed By
        </p>
        <div className="w-9/12 flex justify-center items-center gap-4 sm:gap-12 opacity-60">
          <div className="flex-1 flex items-center max-w-full h-auto transition opacity-60 hover:opacity-100 hover:cursor-pointer h-full object-center">
            <Image
              className="h-fit"
              src="/img/logos/fireeye.png"
              alt="FireEye logo"
              width={180}
              height={40}
            />
          </div>

          <div className="flex-1 flex items-center max-w-full h-auto transition opacity-60 hover:opacity-100 hover:cursor-pointer h-full object-center">
            <Image
              className="h-fit"
              src="/img/logos/menlosecurity.png"
              alt="Menlo Security logo"
              width={180}
              height={87}
            />
          </div>

          <div className="flex-1 flex items-center max-w-full h-auto transition opacity-60 hover:opacity-100 hover:cursor-pointer h-full object-center">
            <Image
              className="h-fit"
              src="/img/logos/ucberkeley.png"
              alt="UC Berkeley logo"
              width={180}
              height={120}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
