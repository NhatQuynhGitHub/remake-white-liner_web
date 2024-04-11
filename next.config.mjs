/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["white-linen-theme.myshopify.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'white-linen-theme.myshopify.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
