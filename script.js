function setup() {
    var socket = io();
    var side = 34;
    var matrix = [];
    
    //! Getting DOM objects (HTML elements)
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let gishatichLiveCountElement = document.getElementById('gishatichLiveCount');
    let mardCountElement = document.getElementById('mardCount');
    let mardLiveCountElement = document.getElementById('mardLiveCount');
    let mafiaCountElement = document.getElementById('mafiaCount');
    let mafiaLiveCountElement = document.getElementById('mafiaLiveCount');
    let waterCountElement = document.getElementById('waterCount');
    let waterLiveCountElement = document.getElementById('waterLiveCount');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {


        // let sendData = {
        //     matrix: matrix,
        //     grassCounter: grassHashiv,
        //     grassLiveCounter: grassArr.length,
        //     eatCounter: eatHashiv,
        //     huntCounter: huntHashiv,
        //     termCounter: termHashiv,
        //     titanCounter: titanHashiv,
        //     weather: weather
        // }

        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;

        gishatichCountElement.innerText = data.gishatichCounter;
        gishatichLiveCountElement.innerText = data.gishatichLiveCounter;
        mardCountElement.innerText = data.mardCounter;
        mardLiveCountElement.innerText = data.mardLiveCounter;
        mafiaCountElement.innerText = data.mafiaCounter;
        mafiaLiveCountElement.innerText = data.mafiaLiveCounter;
        waterCountElement.innerText = data.waterCounter;
        waterLiveCountElement.innerText = data.waterLiveCounter;
        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("green");
                    }else if (data.weather == "autumn"){
                        fill("#ffc14d");
                    }else if (data.weather == "winter"){
                        fill("#99ff99");
                    }else if (data.weather == "spring"){
                        fill("#99ff66");
                    }
                } else if (matrix[i][j] == 2) {
                    if(data.weather == "summer"){
                        fill("#abad15");
                    }else if (data.weather == "autumn"){
                        fill("#9fa12f");
                    }else if (data.weather == "winter"){
                        fill("#f3f598");
                    }else if (data.weather == "spring"){
                        fill("#fcff26");
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if(data.weather == "summer"){
                        fill("red");
                    }else if (data.weather == "autumn"){
                        fill("#ff4d4d");
                    }else if (data.weather == "winter"){
                        fill("#990000");
                    }else if (data.weather == "spring"){
                        fill("#ff1a1a");
                    }
                } else if (matrix[i][j] == 4) {
                    if(data.weather == "summer"){
                        fill("blue");
                    }else if (data.weather == "autumn"){
                        fill("#6666ff");
                    }else if (data.weather == "winter"){
                        fill("#4747d1");
                    }else if (data.weather == "spring"){
                        fill("#0000b3");
                    }
                } else if (matrix[i][j] == 5) {
                    if(data.weather == "summer"){
                        fill("purple");
                    }else if (data.weather == "autumn"){
                        fill("#b300b3");
                    }else if (data.weather == "winter"){
                        fill("#db70b8");
                    }else if (data.weather == "spring"){
                        fill("#ff33ff");
                    }
                }else if (matrix[i][j] == 6) {
                    if(data.weather == "summer"){
                        fill("#809fff");
                    }else if (data.weather == "autumn"){
                        fill("#8080ff");
                    }else if (data.weather == "winter"){
                        fill("#809fff");
                    }else if (data.weather == "spring"){
                        fill("#3366ff");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}