function myFunction()
{
	let n = 0;
	let arr = ["удобную ","стильную ","современную "];
	document.getElementById("myDIV").textContent = arr[0];

	function f2()
	{
		document.getElementById("myDIV").style.width = "0px";

		setTimeout(f1,500); // пауза равна времени сужения в стилях #myDIV
	}

	function f1()
	{
		document.getElementById("myDIV").textContent = arr[n];

		var ctx = document.createElement("canvas").getContext("2d");
		ctx.font = "25px times new roman";
		let text = document.getElementById("myDIV").textContent;
		var metrics = ctx.measureText(text); // получение ширины текста в пикселях

		document.getElementById("myDIV").style.width = metrics.width+ "px";


		n++;
		if (n>arr.length-1)
			n = 0;

		setTimeout(f2,2500);
	}
	f1();
}
