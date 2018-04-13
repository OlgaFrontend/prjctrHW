(function() {
	var btn = document.querySelector('.btn');
	btn.addEventListener('click', function(){
		var promise = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3');

		promise.then(function(v){
			return v.json();	
		})
		.then(render)
		.then(output);
	});

	function render(rates) {
		var curDate = new Date();
		var result = '';
		rates.forEach(function(rate){
			result += '<tr>' + '<td>' + rate.ccy + '</td>' + ' ' +'<td>' + rate.base_ccy + '</td>' + ' ' +
					'<td>' + rate.buy + '</td>' + ' ' + ':' + ' ' +'<td>' + rate.sale + '</td>' + '</tr>' + '<br>' +
					'<tr>' + '<td>' + curDate.getHours() +'</td>'+ ':' + '<td>' + curDate.getMinutes() +'</td>'+'</tr>';
		});	
		return result;
	}

	function output(value){
		var listRate = document.querySelector('.ex-rates-pb');
		listRate.innerHTML = value;
	}

})();