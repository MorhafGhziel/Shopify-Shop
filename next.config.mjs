/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Apply rule for SVG files
      use: ["@svgr/webpack"], // Use @svgr/webpack to import SVGs as components
    });
    return config;
  },
};

export default nextConfig;
