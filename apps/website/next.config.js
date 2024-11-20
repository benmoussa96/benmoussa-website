const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["core"],
  output: "standalone",
};

module.exports = nextConfig;
