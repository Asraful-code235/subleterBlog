/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: true,

  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
