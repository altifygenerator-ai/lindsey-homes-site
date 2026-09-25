/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "lindseyhomesdfw.com" }],
        destination: "https://www.lindseyhomesdfw.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
