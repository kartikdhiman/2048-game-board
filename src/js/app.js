import Grid from './Grid.js'
import Tile from "./Tile.js";
import '../style.css'

const gameBoard = document.querySelector("#game-board");
const grid = new Grid(gameBoard);

let cell1 = grid.randomEmptyCell();
let cell2 = grid.randomEmptyCell();

while (cell1.equals(cell2)) {
	cell1 = grid.randomEmptyCell();
	cell2 = grid.randomEmptyCell();
}

cell1.tile = new Tile(gameBoard);
cell2.tile = new Tile(gameBoard);
