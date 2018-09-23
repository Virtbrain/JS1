function onWindowLoad(){
	var images = document.getElementsByTagName('img');

	for ( var i = 0; i < images.length; i++ ) {
		images[i].onclick = onImageClick;
	}
};
//1) Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
function onImageClick(e){
	var div = document.getElementById('big_picture');
	div.innerHTML = '';

	var id = e.target.getAttribute('id');
	var data = id.split('_');
	//var src = 'img/' + data[1] + '.png';
	//Поскольку мы не на Node.js и не можем фактически проверить наличие файла на диске то остается проверять соответсвие наших условий
	//Люди в Телеграм говорили о том что если файла нет то будет ошибка, но это заблуждение, если файла нет то будет вставлен текст из аттрибута
	//alt тега img, никакой ошибки при этом не возникнет.
	//Все до чего я додумался это сравнить наш id по которому мы вычисляем имя файла с именем файла указанным в src тега img. Т.к. по нашим условиям
	//мы получаем имя файла именно из тега id. Хотя могли бы на 13 строке получить имя файла из src и вставлять в галерею файл именно из него.
	// var file_src = e.target.src.split("/");
	// var src = 'img/' + data[1] + '.png';
	// if (src=='img/' + file_src[file_src.length-1]){
	// 	var img = document.createElement('img');
	// 	img.src = src;
	// 	div.appendChild(img);
	// } else {
	// 	var h2 = document.createElement('h2');
	// 	h2.innerHTML = "Картинка с заданными условиями не найдена!";
	// 	div.appendChild(h2);
	// }

	//Второй вариант который мне пришел в голову, это првоерить а действительно ли в src указана картинка, и тут все сводится к проверке 
	//расширения файла.
	//В соответствии с нашими условиями нам необходимо убедиться что у картинки расширение png или другой картинки например jpg или gif(самые популярные)
	var file_src = e.target.src.split("/");
	var extension = (file_src[file_src.length-1]).split(".")[1];
	if ((extension == "png")||(extension == "jpg")||(extension == "gif")){
		var src = 'img/' + data[1] + '.' + extension;
		var img = document.createElement('img');
		img.src = src;
		div.appendChild(img);
	} else {
		var h2 = document.createElement('h2');
		h2.innerHTML = "Это не картинка!";
		div.appendChild(h2);
	}
	
};

window.onload = onWindowLoad;

// проброс событий

function onDocumentClick(e){
	// e.target - объект, который событие вызвал
	// this - объект, для которого событие заведено - т.е. document
	console.log('document clicked!', e.target, this);
};

document.addEventListener('click', onDocumentClick);

var el = document.getElementById('parent');
el.addEventListener('click', function(e){
	// e.target - объект, который событие вызвал
	// this - объект, для которого событие заведено - т.е. div#parent
	console.log('#parent clicked', e.target, this);
});


setTimeout(function(){
	console.log('RUN!');
}, 1000);


document.getElementById('form').addEventListener('submit', function(e){
	e.preventDefault();
});