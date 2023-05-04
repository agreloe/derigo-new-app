/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  distDir: 'build',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pertutti.com.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'beta.iflow21.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '1000marcas.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.freebiesupply.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.laanonima.com.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dogoseguridad.com.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.deananddennys.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'inverlat.com.ar',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

