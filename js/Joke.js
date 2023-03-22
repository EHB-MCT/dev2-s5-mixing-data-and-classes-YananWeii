"use strict";
export default class joke {
	constructor(category, setup, delivery) {
		this.category = category;
		this.setup = setup;
		this.delivery = delivery;
	}

	htmlString() {
		return `<div>
        <div class="item-field">${this.setup}</div>
        <div class="item-field">${this.delivery}</div>
      </div>`;
	}
}
