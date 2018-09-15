//Task1
var nap = {
    ones: 0,
    tens: 0,
    thouthands:0,
    state: "",
    writeObject : function (arg){
        if (isNaN(arg)){
            this.state = "Вы ввели не число";
        } else if (!Number.isInteger(arg)) {
            this.state = "Вы ввели не целое число";
        } else if ((arg > 999) || (arg < 1)) {
            this.state = "Введите число от 1 до 999";
        } else {
            this.thouthands = Math.trunc(arg/100);
            this.tens = Math.trunc((arg - nap.thouthands*100)/10);
            this.ones = (arg - (this.thouthands*100 + this.tens*10));
        }
    },
    showObject : function (){
        if(this.state == ""){
            console.log("{\'единицы\': "+this.ones+", \'десятки\': "+this.tens+", \'сотни\': "+this.thouthands+"}");
        } else {
            console.log(this.state);
        }
        
    }
}

nap.writeObject(Number(prompt("Пожалуйста введите число от 1 до 999:")));
nap.showObject();

//Task2

var Chocolate = {
    id : 1,
    name : "Шоколад",
    price : 150
}

var Bread = {
    id : 2,
    name : "Хлеб",
    price : 20
}

var Milk = {
    id : 3,
    name : "Молоко",
    price : 46
}

var Chiken = {
    id : 4,
    name : "Курица",
    price : 290
}

var basket = {
    inside : [],
    addTo : function(stuff){
        this.inside.push(stuff)
    },
    countPrice : function (){
        var Sum = 0;
        if (this.inside.length !== 0){
            for (var i=0; i<this.inside.length;i++){
                Sum += this.inside[i].price;
            }
        }
        return Sum;
    },
    showSummary : function (){
        console.log("Сумарная стоимость товаров: " + this.countPrice());
    },
    showBasket : function() { //использовал для отладки
        var answer = "Корзина пуста!";
        if (this.inside.length !== 0){
            answer = "";
            for (var i=0;i<this.inside.length;i++){
                answer += i+1 + ". "+ this.inside[i].name + ": " + this.inside[i].price + "\n";
            }
        }
        console.log(answer);
    }
}
basket.showBasket();
basket.showSummary();
basket.addTo(Chocolate);
basket.addTo(Chocolate);
basket.addTo(Bread);
basket.addTo(Milk);
basket.addTo(Chiken);
basket.addTo(Chiken);
basket.addTo(Chiken);
basket.showBasket();
basket.showSummary();
