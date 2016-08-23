buttonMedia.onclick = function(){
	var num1 = Number(inputValor1.value);
	var num2 = Number(inputValor2.value);
	var num3 = Number(inputValor3.value);
	
	var media = (num1 + num2 + num3)/3;
	
	if(media < 4){
		alert("O aluno esta reprovado");
	}else{
		if(media < 7){
			var fin = (50 - 6*media)/4;
			alert("Voce precisa na final de: " + fin);
		}else{
			alert("O aluno esta aprovado");
		}
	}
}