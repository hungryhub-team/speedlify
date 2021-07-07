module.exports = {
	name: "Chakrabongse Villas",
	description: "Performace Test for Chakrabongse Villas",
	options: {
		frequency: 60 * 4,
		freshChrome: "run",
		chromeFlags: ["--no-sandbox", "--headless", "--disable-gpu"],
	},
	urls: [
		"http://web.hungryhub.com/restaurants/chakrabongse-villas?locale=en"
	]
};