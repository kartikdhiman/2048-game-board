import Cell from "./Cell.js";

const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid {
	#cells;

	/**
	 * @param {Element} gridElement 
	 */
	constructor(gridElement) {
		gridElement.style.setProperty("--grid-size", GRID_SIZE);
		gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
		gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
		this.#cells = this.createCellElements(gridElement).map((cell, index) => {
			return new Cell(cell, index % GRID_SIZE, Math.floor(index / GRID_SIZE));
		});
	}

	/**
	 * @param {Element} gridElement 
	 * @returns 
	 */
	createCellElements(gridElement) {
		const cells = [];
		for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			cells.push(cell);
			gridElement.append(cell);
		}
		return cells;
	}

	get #emptyCells() {
		return this.#cells.filter(cell => cell.tile == null);
	}

	randomEmptyCell() {
		const index = Math.floor(Math.random() * this.#emptyCells.length);
		return this.#cells[index];
	}
}