module.exports = {
	name: "Audrey Cafe Emquartier",
	description: "Performace Test for Audrey Cafe Emquartier",
	options: {
		frequency: 60 * 4,
		freshChrome: "run",
		chromeFlags: ["--no-sandbox", "--headless", "--disable-gpu"],
	},
	urls: [
		"http://web.hungryhub.com/restaurants/audrey-cafe-emquartier?locale=en"
	]
};