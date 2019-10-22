var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Mafia extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.ak74 = 35;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
            [this.x, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x, this.y + 2],
          
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
            mafiaHashiv++
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em HING -> 5 
            matrix[y][x] = 5;

            let mafia = new Mafia(x, y);
            mafiaArr.push(mafia);

            this.ak74 = 0;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(4);
        let emptyCellss = this.chooseCell(3);
        let newCell = random(emptyCells.concat(emptyCellss));

        if (newCell) {
            this.ak74++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            for (let i in mardArr) {
                if (mardArr[i].x == x && mardArr[i].y == y) {
                    mardArr.splice(i, 1);
                    break;
                }
            }

            for (let i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            this.x = x;
            this.y = y;

            if (this.ak74 >= 7) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.ak74--;

        let emptyCells1 = this.chooseCell(0);
        let emptyCells2 = this.chooseCell(1);
        let emptyCells = emptyCells1.concat(emptyCells2)
        let newCell = random(emptyCells);


        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em HING -> 5
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.ak74 < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in mafiaArr) {
            if (mafiaArr[i].x == this.x && mafiaArr[i].y == this.y) {
                mafiaArr.splice(i, 1)
                break;
            }
        }
    }
}