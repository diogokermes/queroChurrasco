var total;

function validacao() {

	var quant = document.getElementById("quantidade").value;
	total = quant*400;

	document.getElementById("resposta").innerHTML="A quantidade ideal de carne para seu churrasco é de "+(total)+" gramas";


	var linguica = parseInt(document.getElementById("linguica").value);
	var contrafile = parseInt(document.getElementById("contra-file").value);
	var picanha = parseInt(document.getElementById("picanha").value);
	var maminha = parseInt(document.getElementById("maminha").value);

	var soma = linguica+contrafile+picanha+maminha;
	document.getElementById("preco").innerHTML="O total de carne desejado foi de "+(soma)+" gramas";

	if((soma<(total-500))||(soma>(total+500))) {

		document.getElementById("alerta").innerHTML="No seu caso a quantidade de gramas a ser escolhida, pode variar de " 
		+(total-500) + " à " +(total+500)+", mas o total de carne selecionado foi de "+(soma)+" gramas!";
		<br>
		document.getElementById("aviso").innerHTML="Por favor, repreencha novamente a quantidade de gramas para cada opção de carne!";

	}

	else {

		document.getElementById("preco").innerHTML="O preço do seu churrasco são R$ "+((linguica*0.02)+(contrafile*0.028)+(picanha*0.035)+(maminha*0.027)).toFixed(2);
		

	}

}