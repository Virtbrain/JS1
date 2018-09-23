window.onload = fillPage;

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
         this.inside.push(stuff);
         this.showBasket();

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
    // showSummary : function (){
    //     console.log("Сумарная стоимость товаров: " + this.countPrice());
    // },
    showBasket : function() {
        var htBasket = document.getElementById('basket');
        var answer = "Корзина пуста!";
        if (this.inside.length !== 0){
             answer = "";
             for (var i=0;i<this.inside.length;i++){
                 answer += "<p>" + parseInt(i+1) + ". "+ this.inside[i].name + ": " + this.inside[i].price + "р." + "</p>";
             }
        }
        var sum = this.countPrice();
        htBasket.innerHTML = "<h3>Корзина</h3>" +  answer + "<p><strong>Сумарная стоимость товаров:"+ sum +"р.</strong></p>";
        //console.log(answer);
    }
}

function fillPage(){
    var product;
    product = document.getElementById("chiken")
    product.innerHTML = "<h3>" + Chiken.name + "</h3><p>Цена: "+ Chiken.price+"р.</p><button id='addchiken'>Добавить</button>"
    product = document.getElementById("chocolade")
    product.innerHTML = "<h3>" + Chocolate.name + "</h3><p>Цена: "+ Chocolate.price+"р.</p><button id='addchocolate'>Добавить</button>"
    product = document.getElementById("bread")
    product.innerHTML = "<h3>" + Bread.name + "</h3><p>Цена: "+ Bread.price+"р.</p><button id='addbread'>Добавить</button>"
    product = document.getElementById("milk")
    product.innerHTML = "<h3>" + Milk.name + "</h3><p>Цена: "+ Milk.price+"р.</p><button id='addmilk'>Добавить</button>"
    document.getElementById("addchiken").addEventListener('click',()=>{
        basket.addTo(Chiken)
    });
    document.getElementById("addchocolate").addEventListener('click',()=>{
        basket.addTo(Chocolate)
    });
    document.getElementById("addbread").addEventListener('click',()=>{
        basket.addTo(Bread)
    });
    document.getElementById("addmilk").addEventListener('click',()=>{
        basket.addTo(Milk)
    });
}

