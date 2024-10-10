import Image from "next/image";
import { Caprasimo } from "next/font/google";

import play from "../../public/icons/play.svg";

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-screen-lg text-sm font-medium text-[#2a2737]">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/">
              <div>
                <svg
                  height="1.5rem"
                  viewBox="0 0 400 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M218.43 9.54003C213.64 9.54003 208.7 9.93003 203.52 9.93003C198.34 9.93003 189.63 9.54003 185.16 9.54003C181 9.54003 179.59 11.58 179.59 14.17C179.59 20.84 189.79 19.58 190.97 32.06C191.28 35.43 191.36 46.73 191.36 60.86V79.45C191.36 96.79 187.2 106.68 177.55 106.68C171.12 106.68 168.53 102.68 168.53 98.44C168.53 93.26 171.51 89.26 171.51 85.97C171.51 81.26 168.37 76.95 160.68 76.95C150.79 76.95 145.85 85.82 145.85 94.05C145.85 106.37 154.25 119 178.25 119C210.81 119 215.99 97.58 215.99 68.47C215.99 57.88 216.07 35.28 216.38 31.75C217.4 19.43 224.07 20.14 224.07 14.17C224.07 11.58 222.74 9.54003 218.42 9.54003H218.43ZM268.1 35.43C245.27 35.43 228.71 52.61 228.71 77.48C228.71 102.35 244.48 118.2 269.04 118.2C291.09 118.2 309.29 105.18 309.29 78.89C309.29 51.04 289.83 35.42 268.1 35.42V35.43ZM272.1 103.85C266.53 103.85 260.96 100.32 257.43 92.94C254.14 85.8 252.96 76.46 252.96 69.17C252.96 53.56 259.16 47.67 265.98 47.67C271.31 47.67 276.73 51.75 280.73 59.91C283.95 66.89 286.07 76.78 286.07 84.78C286.07 98.59 279.32 103.85 272.1 103.85ZM349.54 106.05C347.19 103.62 345.93 101.26 345.93 95.06V36.22C345.93 15.74 346.64 14.8 346.64 6.48003C346.64 2.87003 344.68 1.30004 341.62 1.30004C338.17 1.30004 333.54 4.36003 325.85 7.42003C319.81 9.93003 314.94 10.64 314.94 14.4C314.94 16.52 316.51 17.54 318.16 18.48C320.51 19.58 323.26 21.62 323.26 25.54V93.96C323.26 97.96 322.79 102.04 318.87 106.12C317.46 107.61 314.48 109.34 314.48 112.71C314.48 115.06 315.74 117.03 319.58 117.03C325.23 117.03 329.7 116.64 334.88 116.64C338.96 116.64 344.37 117.03 348.45 117.03C353 117.03 354.49 115.15 354.49 112.48C354.49 108.95 351.82 108.4 349.55 106.05H349.54ZM394.97 106.05C392.62 103.62 391.36 101.26 391.36 95.06V69.95C391.36 53.63 392.14 45.31 392.14 40.61C392.14 37 390.41 35.43 387.12 35.43C384.37 35.43 378.96 38.57 371.27 41.63C365.23 44.06 360.21 44.46 360.21 48.69C360.21 50.97 362.09 52.14 363.74 53.24C366.33 54.57 368.68 57.4 368.68 62.34V93.96C368.68 97.96 368.21 102.04 364.29 106.12C362.88 107.61 359.9 109.34 359.9 112.71C359.9 115.06 361.16 117.03 365 117.03C371.67 117.03 374.96 116.64 380.3 116.64C384.77 116.64 389.32 117.03 393.87 117.03C398.42 117.03 399.91 115.15 399.91 112.48C399.91 108.95 397.24 108.4 394.97 106.05ZM375.67 28.37C385.01 28.37 394.42 21.23 394.42 12.44C394.42 6.01004 389.48 1.93003 383.2 1.93003C374.18 1.93003 365.78 10.72 365.78 19.35C365.78 24.53 368.92 28.37 375.67 28.37ZM26.66 67.07C28.95 69.4 30.61 72.33 31.59 75.78C31.78 76.44 32.38 76.87 33.03 76.87C33.15 76.87 33.27 76.86 33.39 76.83L48.74 73.09C49.13 72.99 49.47 72.74 49.68 72.4C49.89 72.05 49.94 71.63 49.84 71.24C47.8 63.74 44.02 57.43 38.6 52.5C28.12 42.96 15.79 39.57 1.95 42.4C1.55 42.48 1.2 42.72 0.980003 43.07C0.760003 43.41 0.690001 43.83 0.790001 44.23L4.53001 59.56C4.72001 60.34 5.49001 60.83 6.28001 60.68C14.11 59.15 20.97 61.3 26.67 67.08L26.66 67.07ZM45.41 41.16C44.76 41.64 44.62 42.55 45.08 43.22L54.1 56.19C54.33 56.52 54.69 56.75 55.09 56.81C55.17 56.82 55.25 56.83 55.34 56.83C55.66 56.83 55.97 56.73 56.23 56.54C62.5 51.94 67.02 46.14 69.67 39.31C74.8 26.1 73.53 13.37 65.91 1.48003C65.69 1.14003 65.34 0.900041 64.94 0.820041C64.54 0.740041 64.13 0.820031 63.79 1.06003L50.83 10.07C50.17 10.53 49.99 11.42 50.42 12.1C54.67 18.86 55.13 26.03 51.79 33.42C50.44 36.4 48.31 39 45.44 41.16H45.41ZM61.77 96.84C62.58 96.81 63.21 96.15 63.21 95.34V79.54C63.21 79.14 63.05 78.75 62.76 78.47C62.47 78.19 62.09 78 61.67 78.05C53.9 78.25 46.88 80.43 40.8 84.53C29.05 92.45 22.83 103.62 22.3 117.74C22.28 118.15 22.44 118.54 22.72 118.84C23 119.13 23.39 119.3 23.8 119.3H39.58C40.38 119.3 41.04 118.67 41.08 117.87C41.45 109.9 45.16 103.74 52.13 99.58C54.93 97.9 58.17 96.99 61.76 96.85L61.77 96.84ZM104.5 103.28C97 100.54 92.25 95.15 90.36 87.26C89.6 84.08 89.7 80.72 90.65 77.25C90.86 76.47 90.42 75.66 89.65 75.42L74.58 70.69C74.19 70.57 73.78 70.61 73.42 70.8C73.06 70.99 72.8 71.32 72.69 71.71C70.55 79.18 70.53 86.54 72.62 93.56C76.66 107.14 85.45 116.43 98.76 121.16C98.92 121.22 99.09 121.25 99.26 121.25C99.49 121.25 99.72 121.2 99.93 121.09C100.29 120.91 100.57 120.59 100.69 120.2L105.42 105.14C105.66 104.38 105.26 103.56 104.5 103.28ZM125.12 47.32L112.49 37.86C111.85 37.38 110.94 37.49 110.43 38.11C105.36 44.27 98.69 46.97 90.62 46.12C87.37 45.78 84.22 44.57 81.28 42.53C80.62 42.07 79.71 42.22 79.22 42.86L69.75 55.5C69.51 55.82 69.41 56.23 69.47 56.63C69.53 57.03 69.75 57.39 70.08 57.62C76.42 62.12 83.35 64.58 90.67 64.95C91.51 64.99 92.35 65.01 93.17 65.01C106.2 65.01 117.03 59.79 125.38 49.46C125.64 49.14 125.75 48.74 125.7 48.33C125.65 47.93 125.44 47.56 125.11 47.32H125.12ZM87.74 40.55C94.32 40.55 100.44 34.14 100.44 27.85C100.44 24.07 98.15 21.27 93.23 21.27C86.42 21.27 79.56 26.48 79.56 32.88C79.56 37.57 83.16 40.55 87.74 40.55ZM38.38 38.99C42.97 38.76 45.74 35.16 45.64 30.71C45.64 30.68 45.64 30.65 45.64 30.62C45.64 30.57 45.64 30.52 45.64 30.46C45.64 30.46 45.64 30.44 45.64 30.43C45.64 30.43 45.64 30.42 45.64 30.41C45.62 29.58 45.49 28.78 45.24 28.04C43.67 22.52 37.84 18.1 32.33 18.37C28.56 18.56 25.87 20.98 26.11 25.9C26.45 32.7 31.99 39.3 38.39 38.98L38.38 38.99ZM28.26 83.23C30.44 79.6 29.37 75.66 26.26 73.2C25.38 72.43 24.32 71.85 23.16 71.52C17.67 69.64 10.63 72.02 7.76 76.81C5.82 80.05 6.34001 83.63 10.56 86.16C16.4 89.66 24.96 88.73 28.26 83.23ZM58.65 102.82C52.8 105.84 50.3 114.34 53.18 119.93C54.91 123.29 58.23 124.73 62.6 122.47C68.65 119.35 72.37 111.57 69.43 105.88C67.28 101.71 62.71 100.72 58.64 102.82H58.65ZM106.38 73.44C105.75 73.14 105.08 72.92 104.37 72.8C102.9 72.48 101.39 72.47 99.91 72.87C95.38 74.09 93.44 78.34 94.63 82.76C96.34 89.11 104.11 93.37 110.19 91.73C113.84 90.75 115.95 87.81 114.68 83.06C113.53 78.78 110.25 75.07 106.39 73.44H106.38Z"
                    fill="url(#paint0_linear_5436_386)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_5436_386"
                      x1="0.740002"
                      y1="62.18"
                      x2="399.91"
                      y2="62.18"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.32" stopColor="#FA3CAB"></stop>
                      <stop offset="0.94" stopColor="#F7A61D"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </a>

            <ul className="flex items-center gap-3">
              <li>
                <a href="">Why Influencers?</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Customers</a>
              </li>
              <li>
                <a href="">Book a Demo</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
            </ul>
          </div>

          <div>
            <button className="px-3 py-1.5 rounded-full transition-colors mix-blend-luminosity bg-slate-300/50">
              Log In
            </button>
          </div>
        </nav>
      </header>

      <main className="">
        <section className="text-center flex flex-col gap-8 justify-center items-center sm:items-start">
          <div className="w-3/5 my-0 mx-auto">
            <p className="text-sm font-medium text-neutral-500">
              <span className="text-pink-600 bg-pink-100 rounded-full px-2 py-1">
                11&times;
              </span>{" "}
              more powerful than traditional marketing
            </p>
          </div>

          <h1
            className={`${caprasimo.className} mx-auto text-[#2a2737] text-7xl font-bold max-w-[820px]`}
          >
            Boost your business
            <br />
            with local influencers
          </h1>

          <div className="w-3/5 my-0 mx-auto">
            <p className="text-[#2a2737] font-medium">
              Connect with 5,323 vetted UK Instagram and TikTok
              <br />
              influencers in your region to boost sales and exposure.
            </p>
          </div>

          <div className="w-3/5 my-0 mx-auto">
            <div className="flex gap-4 justify-center items-center flex-col sm:flex-row">
              <a
                className="shadow shadow-pink-200 rounded-full transition-colors flex items-center justify-center bg-pink-600 text-white font-medium text-sm h-10 px-4"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a campaign
              </a>
              <a
                className="shadow shadow-pink-200 rounded-full transition-colors flex items-center justify-center bg-white text-pink-600 gap-1 font-medium text-sm h-10 px-4"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="aspect-square"
                  src={play}
                  alt="Play icon"
                  width={16}
                  height={16}
                />
                Watch demo
              </a>
            </div>
          </div>

          <div className="w-3/5 my-0 mx-auto">
            <div className="w-full flex justify-center items-center">
              <div className="aspect-square w-16 h-16 shadow-md border-solid border-4 border-white rounded-2xl rotate-12 hover:rotate-2 transition-transform">
                <Image
                  fill
                  className="rounded-xl"
                  src="https://joliapp.com/_gatsby/image/0cc9f4f7597269816d5b6b7e0b860d76/a10be445d77e14451403a9ac67f12433/17841407894821823.avif?u=https%3A%2F%2Fwenibble-images.s3.eu-central-1.amazonaws.com%2Fprofile_pictures%2F17841407894821823.jpg&a=w%3D300%26h%3D300%26fm%3Davif%26q%3D40&cd=54ba56b61b2270c4180c8586103fae28"
                  alt=""
                />
              </div>
              <div className="aspect-square w-20 h-20 shadow-md border-solid border-4 border-white rounded-2xl -rotate-[8deg] hover:rotate-0 transition-transform z-10">
                <Image
                  fill
                  className="rounded-xl"
                  src="https://joliapp.com/_gatsby/image/1b3204bb880d349a7a940cb3b66b4599/a10be445d77e14451403a9ac67f12433/17841409478311979.avif?u=https%3A%2F%2Fwenibble-images.s3.eu-central-1.amazonaws.com%2Fprofile_pictures%2F17841409478311979.jpg&a=w%3D300%26h%3D300%26fm%3Davif%26q%3D40&cd=b4723e423dd13bd732947afd37d70405"
                  alt=""
                />
              </div>
              <div className="aspect-square w-20 h-20 shadow-md border-solid border-4 border-white rounded-2xl rotate-3 hover:-rotate-2 transition-transform z-40">
                <Image
                  fill
                  className="rounded-xl"
                  src="https://joliapp.com/_gatsby/image/e51450a55ba98d3da88e9134320afcfb/a10be445d77e14451403a9ac67f12433/17841401070423248.avif?u=https%3A%2F%2Fwenibble-images.s3.eu-central-1.amazonaws.com%2Fprofile_pictures%2F17841401070423248.jpg&a=w%3D300%26h%3D300%26fm%3Davif%26q%3D40&cd=bbd6240a8fa5204ee2dd5029532b734a"
                  alt=""
                />
              </div>
              <div className="aspect-square w-28 h-28 shadow-md border-solid border-4 border-white rounded-2xl -rotate-3 hover:rotate-6 transition-transform z-50">
                <Image
                  fill
                  className="rounded-xl"
                  src="https://joliapp.com/_gatsby/image/df80c85367ae74df4ef14912c513baab/a10be445d77e14451403a9ac67f12433/17841459537752418.avif?u=https%3A%2F%2Fwenibble-images.s3.eu-central-1.amazonaws.com%2Fprofile_pictures%2F17841459537752418.jpg&a=w%3D300%26h%3D300%26fm%3Davif%26q%3D40&cd=9deffab5670157d783c25460caf14ad9"
                  alt=""
                />
              </div>
              <div className="aspect-square w-20 h-20 shadow-md border-solid border-4 border-white rounded-2xl -rotate-6 hover:rotate-2 transition-transform z-40">
                <Image
                  fill
                  className="rounded-xl"
                  src="https://joliapp.com/_gatsby/image/dada79ea9bc628d4fb91ca161bfdc3ea/a10be445d77e14451403a9ac67f12433/17841408597559498.avif?u=https%3A%2F%2Fwenibble-images.s3.eu-central-1.amazonaws.com%2Fprofile_pictures%2F17841408597559498.jpg&a=w%3D300%26h%3D300%26fm%3Davif%26q%3D40&cd=d3d82d7aff7e0082d0d1e74191756776"
                  alt=""
                />
              </div>
              <div className="aspect-square w-20 h-20 shadow-md border-solid border-4 border-white rounded-2xl rotate-6 hover:-rotate-2 transition-transform z-10">
                <Image
                  fill
                  className="rounded-xl"
                  src="https://joliapp.com/_gatsby/image/d183995619280c470c5a34bb0b172a10/a10be445d77e14451403a9ac67f12433/17841450027018386.avif?u=https%3A%2F%2Fwenibble-images.s3.eu-central-1.amazonaws.com%2Fprofile_pictures%2F17841450027018386.jpg&a=w%3D300%26h%3D300%26fm%3Davif%26q%3D40&cd=bd0f9baaa3585e402578a43ddeeb2f7b"
                  alt=""
                />
              </div>
              <div className="aspect-square w-16 h-16 shadow-md border-solid border-4 border-white rounded-2xl -rotate-12 hover:rotate-2 transition-transform">
                <Image
                  fill
                  className="rounded-xl"
                  src="https://joliapp.com/_gatsby/image/bb356576d53364ca1ee9c1846ff53953/a10be445d77e14451403a9ac67f12433/17841400578359455.avif?u=https%3A%2F%2Fwenibble-images.s3.eu-central-1.amazonaws.com%2Fprofile_pictures%2F17841400578359455.jpg&a=w%3D300%26h%3D300%26fm%3Davif%26q%3D40&cd=748d5c24a5e56a167efd3dd199ee8fa1"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-3/5 my-0 mx-auto">
            <div className="flex">
              <div className="flex-1 px-3">
                <p className="font-bold text-3xl text-pink-600">5,323</p>
                <p className="text-sm font-medium text-neutral-500">
                  Vetted UK influencers on Instagram and TikTok.
                </p>
              </div>
              <div className="flex-1 px-3">
                <p className="font-bold text-3xl text-pink-600">288.4M</p>
                <p className="text-sm font-medium text-neutral-500">
                  Combined following, almost as large as the US.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
