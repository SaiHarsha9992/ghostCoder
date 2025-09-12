/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",   // match everything
        destination: "https://www.ghost-coder.tech/:path*", // your new project
        permanent: true,     // 308 permanent redirect
      },
    ];
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com", // Remove the scheme 'https://'
    ],
  },
};

export default nextConfig;
