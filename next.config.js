/** @type {import('next').NextConfig} */
const {i18n} = require("./next-i18next.config");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  i18n,
  reactStrictMode: true,
  experimental: {appDir: true},
};

module.exports = nextConfig;
