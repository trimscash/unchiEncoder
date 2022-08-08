window.onload = function () {
	let encodeButton = document.getElementById("encodeButton");
	encodeButton.addEventListener("click", () => {
		let beforeEncodeText = document.getElementById("beforeEncodeText").value;
		console.log(beforeEncodeText);
		let encodedText = "";
		[].forEach.call(beforeEncodeText, e => {
			let code = e.charCodeAt(0).toString(2);
			code = code.replace(/0/g, "うんち");
			code = code.replace(/1/g, "うんこ");
			console.log(code);

			code += " ";
			encodedText += code;
		});
		encodedText=encodedText.slice(0,encodedText.length-1);
		console.log(encodedText);
		let afterEncodeForm = document.getElementById("afterEncodeText");
		afterEncodeForm.value = encodedText;
	});

	let decodeButton = document.getElementById("decodeButton");
	decodeButton.addEventListener("click", () => {
		let beforeDecodeText = document.getElementById("beforeDecodeText").value;
		console.log(beforeDecodeText);
		let decodedText = "";
		let code="";
		let dataArray=[];
		code=beforeDecodeText.replace(/うんち/g, "0");
		code=code.replace(/うんこ/g, "1");
		dataArray=code.split(" ");
		console.log(dataArray);
		dataArray.forEach(e=>{
			let numChar=parseInt(e,2);
			let decodedChar=String.fromCharCode(numChar);
			decodedText+=decodedChar;
		});
		console.log(decodedText);
		let afterDecodeForm = document.getElementById("afterDecodeText");
		afterDecodeForm.value = decodedText;
	});
};
//うんこうんこうんこうんちうんこうんちうんち うんこうんこうんちうんこうんちうんちうんち うんこうんこうんちうんこうんちうんちうんこ うんこうんこうんこうんちうんちうんこうんこ うんこうんちうんちうんちうんちうんち うんこうんこうんちうんこうんちうんちうんこ うんこうんこうんこうんちうんちうんこうんこ うんこうんちうんちうんちうんちうんち うんこうんこうんこうんちうんこうんちうんち うんこうんこうんちうんこうんちうんちうんち うんこうんこうんちうんちうんこうんちうんこ うんこうんちうんちうんちうんちうんち うんこうんこうんちうんこうんこうんちうんこ うんこうんこうんこうんこうんちうんちうんこ うんこうんちうんちうんちうんちうんち うんこうんこうんちうんちうんちうんこうんち うんこうんこうんちうんちうんこうんちうんこ うんこうんこうんこうんちうんちうんこうんこ うんこうんこうんこうんちうんこうんちうんち うんこうんちうんちうんちうんちうんち うんこうんこうんちうんちうんこうんこうんち うんこうんこうんこうんちうんちうんこうんち うんこうんこうんちうんこうんちうんちうんこ うんこうんこうんちうんちうんこうんちうんこ うんこうんこうんちうんこうんこうんこうんち うんこうんこうんちうんちうんこうんちうんち
//うんこうんこうんちうんちうんちうんちうんちうんこうんちうんちうんちうんこうんこうんち うんこうんこうんちうんちうんちうんちうんこうんちうんちうんこうんちうんちうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんこうんちうんちうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんこうんちうんこうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんこうんちうんちうんこうんこうんち うんこうんこうんちうんちうんちうんちうんちうんこうんこうんちうんこうんこうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんこうんちうんこうんちうんこうんち うんこうんこうんちうんちうんちうんちうんちうんこうんちうんちうんこうんこうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんこうんこうんこうんちうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんこうんこうんこうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんこうんこうんこうんちうんちうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんこうんこうんこうんこうんこ うんこうんこうんちうんちうんちうんちうんこうんちうんちうんちうんこうんちうんちうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんちうんちうんこうんこうんち うんこうんこうんちうんちうんちうんちうんこうんちうんちうんこうんちうんちうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんこうんちうんちうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんこうんちうんちうんこうんこうんこ うんこうんこうんちうんちうんちうんちうんちうんこうんちうんこうんこうんこうんこうんこ うんこうんこうんこうんこうんこうんこうんこうんこうんちうんこうんちうんこうんちうんこうんこうんこ うんこうんこうんこうんこうんこうんこうんこうんこうんちうんこうんちうんこうんちうんこうんこうんこ うんこうんこうんこうんこうんこうんこうんこうんこうんちうんこうんちうんこうんちうんこうんこうんこ うんこうんこうんこうんこうんこうんこうんこうんこうんちうんこうんちうんこうんちうんこうんこうんこ