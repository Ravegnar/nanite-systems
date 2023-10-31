/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
    REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN,
  }
}

module.exports = nextConfig
