/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    X_API_KEY: process.env.X_API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    SITE_URL: process.env.SITE_URL,
  },
  // reactStrictMode:false
};

export default nextConfig;
