module.exports = {
	name: "Sindhord Midtown Hotel",
	description: "Performace Test for Sindhord Midtown Hotel",
	options: {
		frequency: 60 * 4,
		freshChrome: "run",
		chromeFlags: ["--no-sandbox", "--headless", "--disable-gpu"],
	},
	urls: [
		"http://web.hungryhub.com/restaurants/sindhorn-midtown-hotel-bangkok-staycation?locale=en"
	]
};