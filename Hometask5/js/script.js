function chessboardGenerete() {
    var boardSpace = document.getElementById("chessboard");
    //boardSpace.innerHTML = "Inside changes";
    var boardTable = document.createElement("table");
    var boardColumn = [1,2,3,4,5,6,7,8];
    var boardRow = ["   ","a","b","c","d","e","f","g","h","   "];
    var lowFigures = ["п","п","п","п","п","п","п","п"];
    var bigFigures = ["Ла","Ло","Сл","Кор","Фер","Сл","Ло","Ла"]
    // var 
    var row, cell;
    for (var i=0;i<10;i++){
        row = document.createElement("tr");
        for (j=0;j<10;j++){
            cell = document.createElement("td");
            //Закрашиваем внешние границы
            if ((i==0)||(i==9)){
                cell.style.backgroundColor = "gray";
            }
            if ((j==0)||(j==9)){
                cell.style.backgroundColor = "gray";
            }
            //Расставляем подписи
            if ((i==0)||(i==9)){
                cell.innerHTML = boardRow[j];
            } else if ((j==0)||(j==9)) {
                cell.innerHTML = boardColumn[8-i];
            } else { // раскрашиваем поле
               // cell.innerHTML = i+ ","+j;
                if ((i%2!==0)&&(j%2!==0)) {
                    cell.style.backgroundColor = "#f1c9a6";
                } else if ((i%2!==0)&&(j%2==0)) {
                    cell.style.backgroundColor = "#c77054";
                } else if ((i%2==0)&&(j%2!==0)) {
                    cell.style.backgroundColor = "#c77054";
                } else if ((i%2==0)&&(j%2==0)) {
                    cell.style.backgroundColor = "#f1c9a6";  
                }
            }
            //Расставляем фигуры
            if (i==1){
                if ((j>0)&&(j<9)){
                    cell.innerHTML = bigFigures[j-1];
                    cell.style.color = "black";
                }
            } else if (i==8) {
                if ((j>0)&&(j<9)){
                    cell.innerHTML = bigFigures[j-1];
                    cell.style.color = "white";
                }
            }
            if (i==2){
                if ((j>0)&&(j<9)){
                    cell.innerHTML = lowFigures[j-1];
                    cell.style.color = "black";
                }
            } else if (i==7) {
                if ((j>0)&&(j<9)){
                    cell.innerHTML = lowFigures[j-1];
                    cell.style.color = "white";
                }
            }
            row.appendChild(cell);
        }
        boardTable.appendChild(row);
    }
    boardSpace.appendChild(boardTable);
}

window.onload = chessboardGenerete;