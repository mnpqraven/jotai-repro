/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["jotai-devtools"],
  experimental: {
    swcPlugins: [
      // ["@swc-jotai/debug-label", {}],
      // ["@swc-jotai/react-refresh", {}],
    ],
  },
};

export default nextConfig;
