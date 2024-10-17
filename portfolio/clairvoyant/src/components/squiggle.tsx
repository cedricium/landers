import "@/components/squiggle.css";

export default function Squiggle() {
  return (
    <svg
      id="squiggle"
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="38"
      viewBox="0 0 140 38"
      fill="none"
    >
      <g filter="url(#filter0_d_35_19)">
        <path
          d="M9.6779 5.70732L2.96191 12.4099C2.21712 13.1532 2.97798 14.3947 3.97837 14.0684L33.2122 4.53444C34.2391 4.19954 34.9941 5.50501 34.1917 6.22805L10.4898 27.5855C9.60738 28.3806 10.6003 29.777 11.6411 29.2046L54.5825 5.58772C55.4564 5.10711 56.4182 6.06166 55.9443 6.93916L45.5425 26.1981C45.0589 27.0935 46.0658 28.0548 46.9378 27.5303L87.9842 2.83923C88.938 2.26548 89.9747 3.44476 89.2834 4.31717L67.6897 31.5702C66.9953 32.4466 68.0436 33.6284 68.9966 33.0435L94.9717 17.1005C95.8159 16.5823 96.8188 17.4752 96.4019 18.3737L93.9391 23.6803C93.5374 24.5459 94.4606 25.4286 95.3073 24.9886L124.629 9.7505C125.487 9.30479 126.415 10.2143 125.987 11.0809L117.413 28.4316C116.951 29.3668 118.05 30.2962 118.895 29.685L130.425 21.3505C130.937 20.9802 131.66 21.172 131.921 21.7475L136 30.7317"
          stroke="url(#paint0_linear_35_19)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_35_19"
          x="0.651367"
          y="0.670898"
          width="139.349"
          height="36.5464"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.290196 0 0 0 0 0.0156863 0 0 0 0 0.305882 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_35_19"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_35_19"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_35_19"
          x1="65.4655"
          y1="35.9468"
          x2="69.4439"
          y2="-2.77364"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="3.3271e-05" stopColor="#c2410c" />
          <stop offset="0.5" stopColor="#ea580c" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}
