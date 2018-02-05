//http://www.j-s.ru/charat/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
//

$(document).ready (function(){
	$(".encode").click(function()
	{
		var word = $("#word").val();
		var key_s = $("#key").val();
		var key = parseInt(key_s);
		var ENG = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var res = [];
		
		for (var i = 0; i < word.length; i++){
		for (var k = 0; k < ENG.length; k++){
			var n = k+key;
		if (word.charAt(i) == ENG[k]){
			if (n<=26){
			res.push(ENG[n]);
			}
			else res.push(ENG[26-n])
		}
		else if (word.charAt(i) == eng[k]){
			if (n<=26){
			res.push(eng[n]);
			}
			else res.push(eng[n-26])
		} continue;
		}
		if (word.charAt(i) == ' '){
			res.push(' ');	
		}		
		}
		
		
	alert(res.join(''));
	
	
		
	});
	
	
		$(".decode").click(function()
	{
		var word = $("#word").val();
		var key_s = $("#key").val();
		var key = parseInt(key_s);
		var ENG = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var res = [];
		
		for (var i = 0; i < word.length; i++){
		for (var k = 0; k < ENG.length; k++){
			var n = k-key;
		if (word.charAt(i) == ENG[k]){
			if (n>=0){
			res.push(ENG[n]);
			}
			else res.push(ENG[26+n])
		}
		else if (word.charAt(i) == eng[k]){
			if (n>=0){
			res.push(eng[n]);
			}
			else res.push(eng[26+n])
		} continue;
		}
		if (word.charAt(i) == ' '){
			res.push(' ');	
		}		
		}
		
		
	alert(res.join(''));

		
	});
	
});