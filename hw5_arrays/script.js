//#1•напишите функцию flip, которая будет принимать строку и возвращать такую же,
// только задом наперед
//•пример:•flip(‘hello’) // ==> ‘olleh’ •flip(‘world’) // ==> ‘dlrow’

const flip = (str) => str.split('').reverse().join('');

console.log(flip('hello'));

//#2•напишите одну из функций используя циклы.
//Функция должна работать также как и одноименный метод у массивов
//•filter(array, callback) === array.filter(callback) 
//•map(array, callback) === array.map(callback)
//•some(array, callback) === array.some(callback)
//•every(array, callback) === array.every(callback)
//•reduce(array, callback, init) === array.reduce(callback, init)
//•reduce - задачасозвездочкой

var filter = function(arr, callback, thisArg) {
  var i, length = arr.length, results = [];
  for (i = 0; i < length; i = i + 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};

var strs = ['Hello', ',', 'JavaScript', 'World', '!'];

var data = filter(strs, function(str) {
  return str.toLowerCase() !== str;
});

console.log(data);

// 2.1

var filter = function(arr, callback, thisArg) {
  var i, length = arr.length, results = [];
  for (i = 0; i < length; i = i + 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};

var strs = ['Hello', ',', 'JavaScript', 'World', '!'];

var data = filter(strs, function(str) {
  return str.toLowerCase() !== str;
});

console.log(data);

// 2.2

function callback(item, i, array) {
	return item.toUpperCase();
}

function map(array, callback) {
	var newArr = [];

	for (var i = 0; i < array.length; i++) {
		newArr.push( callback(array[i], i, array) );
	}

	return newArr;
}


var items = ['lufthansa', 'airfrance', 'rynair'];

console.log( map(items, callback) );

// 2.3

function findNumMoreThen(item, i, array) {
	return item > 100;
}

function some(array, findNumMoreThen) {
	
	for (var i = 0; i < array.length; i++) {
		if ( findNumMoreThen(array[i], i, array) ) {
			return true;
		}
	}

	return false;
}

var arr = [20, 30, 1000, 14, 200];

console.log( some(arr, findNumMoreThen) );

// 2.4

function findNumMoreThen(item, i, array) {
	return item > 100;
}

function every(array, findNumMoreThen) {
	
	for (var i = 0; i < array.length; i++) {
		if ( !findNumMoreThen(array[i], i, array) ) {
			return false;
		}
	}

	return true;
}

var arr = [20, 30, 1000, 14, 200];

console.log( every(arr, findNumMoreThen) );

// 2.5

function callback(previousValue, currentItem, index, arr) {
	return previousValue + currentItem;
}

function reduce(array, callback, init) {
	var result = init;
	var i = 0;

	if (init == undefined) {
		result = array[0];
		i = 1;
	}

	for ( ; i < array.length; i++) {
		result = callback(result, array[i], i, array);
	}

	return result;
}

var arr = [1, 2, 3, 4, 5];

console.log( reduce(arr, callback) );

//#3•напишите функцию encrypt(string, shift), 
//которая принимает текст string который нужно зашифровать со смещением shift. 
//•Результат работы функции - новая строка, которая будет зашифрована по описанному выше алгоритму

function encrypt(str, shift) {
	
	var arr = str.split('').map(function(char) {
		return char.charCodeAt(0) + shift;
	});

	var newStr = arr.map(function(char) {
		return String.fromCharCode(char);
	}).join('');

	return newStr;
}

console.log( encrypt("hello", 5) );

// 4.1

function bubbleSort(arr) {                            
    var size = arr.length, i, j, temp;

    for (i = 0; i < size-1; i++) {
		for (j = 0; j < size - 1 - i; j++) {
    		if (arr[j + 1] < arr[j]) { 
    			temp = arr[j + 1]; 
    			arr[j + 1] = arr[j]; 
    			arr[j] = temp; 
    		}
        }
    }                     
    return arr;
}

var arr = [7, 11, 10, 5, 2];
console.log(bubbleSort(arr));

// 4.2

function insertionSort(arr) {                               
    var size = arr.length, i, j, value
    for (i = 0; i < size; i++) {
    	value = arr[i],
    	j = i-1;
    	while (j >= 0 && arr[j] > value) {
    		arr[j + 1] = arr[j];
			j--;
    	}
    	arr[j + 1] = value;
    }
    return arr;    
}

var arr = [7, 11, 10, 5, 2];
console.log(insertionSort(arr));

// 4.3

function selectionSort(arr) {                               
    var size = arr.length, i, j, min;
    for (i = 0; i < size - 1; i++) {
    	min = i;
    	for (j = i+1; j < size; j++) {
    		if (arr[j] < arr[min]) {
    			min = j;
    		}
    	}
    	temp = arr[min];
    	arr[min] = arr[ i ];
    	arr[ i ] = temp;
    }
    return arr;    
}
var arr = [7, 11, 10, 5, 2];
console.log(selectionSort(arr));
