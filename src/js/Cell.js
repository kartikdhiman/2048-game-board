import Tile from "./Tile";

export default class Cell {
	#cellElement;
	#x;
	#y;
	#tile;

	/**
	 * @param {HTMLDivElement} cellElement 
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(cellElement, x, y) {
		this.#cellElement = cellElement;
		this.#x = x;
		this.#y = y;
	}

	get x() {
		return this.#x;
	}

	get y() {
		return this.#y;
	}

	get tile() {
		return this.#tile;
	}

	/**
	 * @param {Tile} value
	 */
	set tile(value) {
		this.#tile = value;
		if (value == null) return;
		this.#tile.x = this.#x;
		this.#tile.y = this.#y;
	}

	/**
	 * 
	 * @param {Cell} cell 
	 */
	equals(cell) {
		return cell.x === this.#x && cell.y === this.#y;
	}
}