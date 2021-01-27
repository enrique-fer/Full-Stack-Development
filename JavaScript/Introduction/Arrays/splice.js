var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa'); //2

//Splice always returns an array
arr.splice(foundElement, 1); //['Correa'] out


arr.splice(1, 2); //['Bregman', 'Springer'] out
//Altuve is left