/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "joliapp.com",
        port: "",
        pathname: "/_gatsby/image/**",
      },
    ],
  },
};

export default nextConfig;
