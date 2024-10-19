import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <main className="row-start-2 col-start-3 md:col-start-2 col-end-11 md:col-end-8 w-full h-full flex flex-col gap-12 row-start-2 justify-start items-start">
        <h1 className="max-w-md text-6xl text-background font-[family-name:var(--font-serif)]">
          Our Ethos
        </h1>

        <div className="max-w-[600px] text-white/70 tracking-normal">
          <p>
            Our story is built on a passion for innovation, creativity, and
            delivering excellence in everything we do.
          </p>
          <br />
          <p>
            Get to know the people who power our mission, dedicated to
            delivering excellence and bringing our shared vision to life.
          </p>
        </div>

        <div className="flex flex-col gap-20 max-w-[600px] w-full text-background">
          <div className="flex gap-12">
            <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
              01
            </span>
            <label className="inline-flex flex-1 flex-col gap-2.5">
              Humble
              <p className="text-white/70 outline-none bg-transparent w-full">
                If we are to become leaders, humility is a fundamental core
                tenant for us. We serve others with no ego; passionately looking
                to continuously improve ourselves without ridicule. Knowing what
                you don't know and not overcommitting but over-delivering with
                humility.
              </p>
            </label>
          </div>

          <div className="flex gap-12">
            <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
              02
            </span>
            <label className="inline-flex flex-1 flex-col gap-2.5">
              Breathe Integrity
              <p className="text-white/70 outline-none bg-transparent w-full">
                Transparency and integrity is the lifeblood of our startup -
                it's not just our product that is built on integrity but
                ourselves and our daily interactions. We believe our path to
                success requires us to be honest and not afraid to be tactfully
                truthful with our team and customers.
              </p>
            </label>
          </div>

          <div className="flex gap-12">
            <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
              03
            </span>
            <label className="inline-flex flex-1 flex-col gap-2.5">
              Be Clairvoyant
              <p className="text-white/70 outline-none bg-transparent w-full">
                Is to use our superpowers to think and act with intuition for
                our team, our customers and the community. To see the big
                picture and muster keen insights that are not obvious which will
                allow us to offer the best product and customer service
                experience.
              </p>
            </label>
          </div>

          <div className="flex gap-12">
            <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
              04
            </span>
            <label htmlFor="" className="inline-flex flex-1 flex-col gap-2.5">
              We Deliver
              <p className="text-white/70 outline-none bg-transparent w-full">
                We are resourceful and pragmatic in getting things done and we
                hold ourselves accountable to what we promise and take pride in
                excellent work. We believe if we execute as individuals, we can
                surely win as one team.
              </p>
            </label>
          </div>

          <Link
            href="/contact"
            className="rounded-full border border-solid border-transparent w-fit transition-colors flex items-center justify-center gap-1 bg-background hover:bg-white/75 text-foreground text-sm font-semibold gap-2 h-8 px-4"
          >
            Get in touch
          </Link>
        </div>
      </main>

      <aside className="row-start-3 col-span-full md:row-start-2 md:col-start-8 md:col-end-13 lg:col-end-12 w-full h-fit border border-4 border-double rounded-lg p-4 pb-8 flex flex-col gap-12 row-start-2 justify-start items-start">
        <h2 className="max-w-md text-4xl text-background font-[family-name:var(--font-serif)]">
          Meet the Team
        </h2>

        <div className="flex flex-col gap-12 w-full">
          <div className="flex justify-center gap-6 flex-row-reverse">
            <div className="flex-1 text-background">
              <p className="font-[family-name:var(--font-serif)] text-[20px] tracking-tight">
                Douglas Schultz
              </p>
              <p className="text-xs font-semibold text-white/70">
                CEO, co-founder
              </p>
              <p className="text-xs text-white/70 mt-2">
                We are actively partnering with early adopter CISOs who have
                been instrumental in helping expand critical capabilities and
                value.
              </p>
            </div>
            <div className="flex-1 aspect-[100/120] h-fit w-full max-w-36 bg-gray-300 rounded-md relative transition-transform hover:rotate-2 hover:cursor-pointer">
              <Image
                className="absolute rounded-sm z-10 aspect-square w-[90%] inset-[5%]"
                src="/img/team/doug.png"
                alt="Douglas Schultz"
                width={400}
                height={400}
              />
              <p className="absolute inset-x-0 bottom-1 text-[#171717]/80 text-center font-[family-name:var(--font-handwritten)] tracking-tight leading-none">
                Douglas Schultz
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <div className="flex-1 text-background">
              <p className="font-[family-name:var(--font-serif)] text-[20px] tracking-tight">
                Gautam Altekar
              </p>
              <p className="text-xs font-semibold text-white/70">
                CTO, co-founder
              </p>
              <p className="text-xs text-white/70 mt-2">
                Interests: Innovative platform technologies with a focus on
                computer security and lean startup strategy
              </p>
            </div>
            <div className="flex-1 aspect-[100/120] h-fit w-full max-w-36 bg-gray-300 rounded-md relative transition-transform hover:rotate-2 hover:cursor-pointer">
              <Image
                className="absolute rounded-sm z-10 aspect-square w-[90%] inset-[5%]"
                src="/img/team/gautam.png"
                alt="Gautam Altekar, PhD"
                width={400}
                height={400}
              />
              <p className="absolute inset-x-0 bottom-1 text-[#171717]/80 text-center font-[family-name:var(--font-handwritten)] tracking-tight leading-none">
                Gautam Altekar, PhD
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
