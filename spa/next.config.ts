import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.hktv-img.com",
        port: "",
        pathname: "/images/HKTV/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
