window.onload=function() {

	var a = document.getElementById("svgObject");
	var svgDoc = a.contentDocument;

	var svgItem = svgDoc.getElementById("buy_button");	
	var form = document.querySelector('.form');
	var bg = document.querySelector('.bg');
	var exit = document.querySelector('.exit');
	var check = document.querySelector('[type="checkbox"]');
	var btn = document.querySelector('.btn');

	svgItem.onclick = function(){
		form.classList.add('show');
	};

	function hide() {
		if (form.classList.contains('show')) {
			form.classList.remove('show');
		}
	}

	bg.onclick = hide;
	exit.onclick = hide;

	check.onclick = function() {
		if(check.checked == true){
			btn.classList.add('checked');
		} else {
			btn.classList.remove('checked');
		}
	};

};