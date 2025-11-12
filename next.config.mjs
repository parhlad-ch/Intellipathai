/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disable file tracing for route groups to avoid manifest issues
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**/*'],
    },
  },
};

export default nextConfig;
