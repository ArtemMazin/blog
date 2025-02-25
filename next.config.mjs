/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m-dev.site",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m-dev.site",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
