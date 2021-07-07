module.exports = {
	name: "HungryHub",
	description: "Performace Test for HungryHub Website",
	options: {
		frequency: 60 * 4,
		freshChrome: "run",
		chromeFlags: ["--no-sandbox", "--headless", "--disable-gpu"],
	},
	urls: [
		"http://web.hungryhub.com/?locale=en"
	]
};