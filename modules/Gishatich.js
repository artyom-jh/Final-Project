var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class Gishatich extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.energy = 65;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            gishatichHashiv++
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em EREQ -> 3
            matrix[y][x] = 3;

            let gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);

            this.energy = 0;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(2);
        let emptyCellss = this.chooseCell(6);
        let newCell = random(emptyCells.concat(emptyCellss));

        if (newCell) {
            this.energy++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            for (let i in waterArr) {
                if (waterArr[i].x == x && waterArr[i].y == y) {
                    waterArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;

            if (this.energy >= 3) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--;

        let emptyCells1 = this.chooseCell(0);
        let emptyCells2 = this.chooseCell(1);
        let emptyCells = emptyCells1.concat(emptyCells2);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.energy < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }
}