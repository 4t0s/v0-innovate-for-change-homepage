/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'open-sdg.github.io',
        pathname: '/sdg-translations/**',
      },
    ],
  },
}

export default nextConfig
