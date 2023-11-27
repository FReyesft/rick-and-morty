/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'www.themoviedb.org'
			},
			{
				hostname: 'rickandmortyapi.com'
			}
		],
	},
}

module.exports = nextConfig
