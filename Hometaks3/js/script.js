//Task1
function issimple(n){
	if(n==1) return false;
	for(var j=2; j*j<=n; j++){ 
		if(n%j==0) return false;
	}
	return true;
}

var i = 1;
while(i<100){
    if (issimple(i)) console.log(i);
    i++;
}

//Task2 - from geekbrains.ru
i=0;
while(i<=10){
    if(i==0){
        console.log(i+ " - Это ноль")
    } else if (i%2==0) {
        console.log(i+ " - Это четное число")
    } else {
        console.log(i+ " - Это нечетное число")
    }
    i++;
}

//Task2 - from methodbook
var basket = [["Шоколадка", 2, 150], ["Хлеб белый", 1, 20], ["Молоко", 1, 46], ["Курица", 3, 290]];
function countBasketPrice(basket) {
    var oneStuff, fullBasket = 0;
    var count, price;
    for (var i=0;i<basket.length;i++){
        oneStuff = 0;
        for(var j=0; j<basket[i].length;j++){ //вообще если честно во втором цикле не вижу никакого смысла, куда проще было организовать это через array[][1] arrat[][2], ведь предполагается что мы знаем структуру массивов
            console.log(basket[i][j]);
            if (j==1) {
                count = basket[i][j]
            }
            if (j==2) {
                price = basket[i][j]
            }
            oneStuff = count * price;
        }
        fullBasket += oneStuff;
    }
    return fullBasket;
}
console.log("Стоимость товаров в корзине: " + countBasketPrice(basket));

//Task3
for(i=0;i<=9;i++, console.log(i));

//Task4
var s;
for(i=1;i<=20;i++){
    s = "";
    for(var j=1;j<=i;j++){
        s+="x";
    }
    console.log(i + " " + s + "\n");
}