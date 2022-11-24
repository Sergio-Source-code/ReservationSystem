/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    MONGODB_URI: "mongodb+srv://admin:reservationsystem@cluster0.k34jeu6.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
