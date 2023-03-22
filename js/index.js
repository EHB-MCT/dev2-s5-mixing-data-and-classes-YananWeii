"use strict";

import Joke from "./Joke";

const app = {
	items: [],
	init() {
		this.getData();
	},
	getData() {
		fetch(
			"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10&type=twopart"
		)
			.then(function (respone) {
				return respone.json();
			})
			.then(function (json) {
				console.log(json);
				json.jokes.forEach(function (jokeData) {
					const joke = new Joke(
						jokeData.category,
						jokeData.setup,
						jokeData.delivery
					);
					app.items.push(joke);
					console.log(jokeData);
				});
				app.render();
			});
	},
	onSearch() {},
	render(message) {
		console.log(this.items);
		document
			.querySelector("#list")
			.insertAdjacentHTML("beforeend.app.items[0].htmlstring");
	},
};
app.init();
