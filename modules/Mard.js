var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Mard extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.jermaqanak = 50;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
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
            mardHashiv++
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let mard = new Mard(x, y);
            mardArr.push(mard);
            this.jermaqanak = 10;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(3);
        let newCell = random(emptyCells);

        if (newCell) {
            this.jermaqanak++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            this.x = x;
            this.y = y;

            if (this.jermaqanak >= 6) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.jermaqanak--;

        let emptyCells1 = this.chooseCell(0);
        let emptyCells2 = this.chooseCell(1);
        let emptyCells = emptyCells1.concat(emptyCells2)
        let newCell = random(emptyCells);


        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em CHORS -> 4
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.jermaqanak < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in mardArr) {
            if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                mardArr.splice(i, 1);
                break;
            }
        }
    }
}
