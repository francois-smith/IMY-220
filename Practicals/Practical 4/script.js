class FactorialChecker
{
	printFactorial = (num) => {
		let fact = 1;
		for(let i = 1; i <= num; i++) 
		{
			fact *= i;
		}
		return `The factorial value of ${num} is ${fact}`;

	}//end function

	fillArray = (num) => {
		let init = 1; 
		let i = 1; 
		const arr = []; 
		let fac = true; 
		while(true){
			init *= i;
		  	if (init%2==0 || init==1){        
				if(init>num){
				  	fac=false;
					break;
			  	}
			arr.push(i);
			i++; 
			if(init==num) break; 
		  }
		}
		if(fac) return `The values that make up the factorial 720: ${arr}`;
		else return `This is not a factorial`;
	}//end function
	
}//end FactorialChecer


PigLatinEncrypt = (str) => {
	let vowels = /[aeiou]/gi;
	str = str.toLowerCase();
	const strArr = str.split(" ");

	const newStr = strArr.map((word) => {
		if(word[0].match(vowels)){
			return word + "way";
		}
		else{
			let firstMatch = word.match(vowels) || 0;
			let vowel = word.indexOf(firstMatch[0]);
			return word.substring(vowel) + word.substring(0, vowel) + "ay";
		}
	});

	return `The result when converting "${str}" to Pig Latin is: ${newStr.join(" ")}`;

}//end PigLatinEncrypt

checkUniquefinds = (str) => {
	const strArr = str.toLowerCase().split("");
	const uniqueArr = strArr.reduce((prevLetter, currLetter) => 
		prevLetter.find((find) => find === currLetter) ? prevLetter : [...prevLetter, currLetter],
	[]);
	return `The word "${str}" has ${uniqueArr.length} unique letters`;
}//end checkUniquefinds

const checker = new FactorialChecker();

document.getElementById("GenerateFactorial").onclick = () =>{
	document.getElementById("FactorialResult").innerHTML = checker.printFactorial(document.getElementById("FactorialValue").value);
}

document.getElementById("GenerateFactorialList").onclick = () =>{
	document.getElementById("FactorialListResult").innerHTML = checker.fillArray(document.getElementById("FactorialInput").value);
}

document.getElementById("PigLatinEncrypt").onclick = () =>{
	document.getElementById("PigLatinResult").innerHTML = PigLatinEncrypt(document.getElementById("SentenceToConvert").value);
}

document.getElementById("checkRecurringChars").onclick = () =>{
	document.getElementById("recurringCharsResult").innerHTML = checkUniquefinds(document.getElementById("charChecker").value);
}