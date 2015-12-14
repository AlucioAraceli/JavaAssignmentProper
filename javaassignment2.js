var numIntOne;
var numIntTwo;

function getNum(){
	var tempOne = document.getElementById("numOne");
	var tempTwo = document.getElementById("numTwo");
	var numOne = tempOne.value;
	var numTwo = tempTwo.value;
	
	if(numOne === "one"){
		numIntOne = 1;
	}
	else if(numOne === "two"){		
		numIntOne = 2;
	}
	else if(numOne === "three"){
		numIntOne = 3;
	}
	else if(numOne === "four"){
		numIntOne = 4;
	}
	else if(numOne === "five"){
		numIntOne = 5;
	}
	else{
		document.getElementById("console").innerHTML="not real number!";
	}
	
	if(numTwo === "one"){
		numIntTwo = 1;
	}
	else if(numTwo === "two"){		
		numIntTwo = 2;
	}
	else if(numTwo === "three"){
		numIntTwo = 3;
	}
	else if(numTwo === "four"){
		numIntTwo = 4;
	}
	else if(numTwo === "five"){
		numIntTwo = 5;
	}
	else{
		document.getElementById("console").innerHTML="not real number!";
	}
	
	return [numIntOne, numIntTwo];
}

function add(numIntOne, numIntTwo){
	getNum();
	var mathOne = numIntOne;
	var mathTwo = numIntTwo;
	var output = mathOne + mathTwo;
	document.getElementById("console").innerHTML=output;
}

function mult(numIntOne, numIntTwo){
	getNum();
	var mathOne = numIntOne;
	var mathTwo = numIntTwo;
	var output = mathOne * mathTwo;
	document.getElementById("console").innerHTML=output;
}

function sub(numIntOne, numIntTwo){
	getNum();
	var mathOne = numIntOne;
	var mathTwo = numIntTwo;
	var output = mathOne - mathTwo;
	document.getElementById("console").innerHTML=output;
}

function div(numIntOne, numIntTwo){
	getNum();
	var mathOne = numIntOne;
	var mathTwo = numIntTwo;
	var output = mathOne / mathTwo;
	document.getElementById("console").innerHTML=output;
}
