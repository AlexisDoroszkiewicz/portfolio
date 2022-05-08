/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["www.datocms-assets.com"],
	},
	i18n: {
		locales: ["fr", "en"],
		defaultLocale: "fr",
	},
};

module.exports = nextConfig;
