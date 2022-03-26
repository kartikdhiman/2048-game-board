export default class Tile {
	#tileElement;
	#x;
	#y;
	#value;

	/**
	 * @param {HTMLDivElement} tileContainer 
	 * @param {number} value 
	 */
	constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
		this.#tileElement = document.createElement("div");
		this.#tileElement.classList.add("tile");
		tileContainer.append(this.#tileElement);
		this.value = value;
	}

	/**
	 * @param {number} value
	 */
	set value(value) {
		this.#value = value;
		this.#tileElement.textContent = value;
		const power = Math.log2(value);
		const backgroundLightness = 100 - power * 9;
		this.#tileElement.style.setProperty("--background-lightness", `${backgroundLightness}%`);
		this.#tileElement.style.setProperty("--text-lightness", `${backgroundLightness <= 50 ? 90 : 10}%`);
	}

	/**
	 * @param {number} value
	 */
	set x(value) {
		this.#x = value;
		this.#tileElement.style.setProperty("--x", this.#x);
	}

	/**
	 * @param {number} value
	 */
	set y(value) {
		this.#y = value;
		this.#tileElement.style.setProperty("--y", this.#y);
	}
}