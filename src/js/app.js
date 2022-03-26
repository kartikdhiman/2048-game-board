import Grid from './Grid.js'
import Tile from "./Tile.js";
import '../style.css'

const gameBoard = document.querySelector("#game-board");
const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);