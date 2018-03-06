var userDate = Number(prompt('Введите дату рождения',''));



if(userDate > 0 && userDate <= 31){
	alert(userDate);
	var userMonth = Number(prompt('Введите месяц рождения',''));
	if (userMonth > 0 && userMonth <= 12) {
		alert(userMonth);
		var userYear = Number(prompt('Введите год рождения',''));
		if (userYear >= 1900 && userYear <= 2018) {
			alert(userYear);
			alert('Well done');
		} else {
			alert('Введите правильный год');
		}
	} else {
		alert('введите правильный месяц');
	}
} else {
	alert('введите правильную дату');
}