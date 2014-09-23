$(window).load(function() {
	
	function pow(x) {

		while (x > 1) {
			if (x % 2 != 0) {
				x = x*3+1
			}else {
				x = x/2;
			}
			console.log(x);
		}

	};

	pow(9);

})