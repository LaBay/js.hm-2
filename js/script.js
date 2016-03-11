"use strict"

var ArrNames = [];

ArrNames.length = 5;

for (var i = 0; i < ArrNames.length; i++) {
	ArrNames[i]=prompt('Введите имя:');
}

var name;

var matchName;

name = prompt('Введите своё имя:');

for (var i = 0; (i < ArrNames.length) && (!matchName); i++) {
	
	if (name == ArrNames[i]) matchName=ArrNames[i];
}

if (matchName) alert(matchName + ', вы успешно вошли');

else alert('Вас нет в списке');