/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "loremflickr.com",
    ],
  },
};

module.exports = nextConfig;
