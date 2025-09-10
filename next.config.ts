// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'ming-chinor.javohir-dev.uz', // ✅ sizning rasm serveringiz
            'res.cloudinary.com',
            'as2.ftcdn.net',
            'andstat.uz',
        ],
    },
};

module.exports = nextConfig;
