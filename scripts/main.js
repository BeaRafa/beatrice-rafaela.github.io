const imagem = document.getElementById("img1");


imagem.addEventListener("contextmenu",() => {
	const mySrc = imagem.getAttribute("src");

	if (mySrc === "imagens/img1.png"){
		alert("Camisa de futebol marca presença no desfile masculino de verão 2024 da 3.Paradis. \nFoto: Getty Images");
	} else if (mySrc === "imagens/img11.jpg"){
		alert("Pessoa vestindo um look estilo streetwear com camisa de time. \nFoto: Getty Images");
	} else if (mySrc === "imagens/img12.jpg"){
		alert("Exemplo de look streetwear com camisa de time. \nFoto: Getty Images");
	} else if(mySrc === "imagens/img13.png"){
		alert("Look que Hailey Bieber usou para o show de Justin Bieber no Rock in Rio. Fonte: Steal The Look");
	}
});

imagem.onclick = () => {
	const mySrc = imagem.getAttribute("src");
	console.log(mySrc);
	if (mySrc == "imagens/img1.png"){
		imagem.setAttribute("src", "imagens/img11.jpg");
	} else if (mySrc == "imagens/img11.jpg"){
		imagem.setAttribute("src", "imagens/img12.jpg");
	} else if (mySrc == "imagens/img12.jpg"){
		imagem.setAttribute("src", "imagens/img13.png");
	} else if (mySrc == "imagens/img13.png"){
		imagem.setAttribute("src", "imagens/img1.png");
	}
	console.log(imagem.getAttribute("src"));
};