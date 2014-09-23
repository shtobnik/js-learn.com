$(window).load(function() {

	function calculate() {
		var fields = $('#fields').find('input'),
			prev = 0,
			inv = 0;
		fields.each(function(i, item) {
			cur = item.value;
			if (prev>cur){
				inv++;
			}
			prev = item.value;
		});
			console.log(inv);
	}
	
	 $('#calculate').on('click', function() {
	 	calculate();
	 	return false;
	 });

})