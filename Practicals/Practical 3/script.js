class FactorialChecker{
    printFactorial(n){
        if(n==0){
            return 1;
        }
        else{
            return n*this.printFactorial(n-1);
        }
    }

    fillArray(n){
        if(this.#isFactorial(n)){
            let returnArray = [];
            for (let i = 1; ; i++){
                if (n % i == 0){
                    n /= i;
                    returnArray.push(i);
                }
                else{
                    break;
                }
            }
            return returnArray;
        }
        else{
            return "This is not a factorial";
        }
    }

    //Helper function to verify if a number is a factorial
    #isFactorial(n){
        for (let i = 1; ; i++){
            if (n % i == 0){
                n /= i;
            }
            else{
                break;
            }
        }
        
        if(n == 1){
            return true;
        }
        else{
            return false;
        }
    }

    PigLatinEncrypt(string){
        let returnString = "";
        let array = string.match(/\b(\w+)\b/g);
        var vowels = /[aeiouAEIOU]/gi

        for (let i = 0; i < array.length; i++){
            if(array[i][0].match(vowels) != null){
                returnString += array[i] + "way";
            }
            else if(array[i].match(vowels) == null){
                returnString += array[i] + "ay";
            }
            else{
                returnString += array[i].slice(1) + array[i][0] + "ay";
            }

            returnString += " ";
        }

        return returnString.toLocaleLowerCase();
    }
}

let factorialChecker = new FactorialChecker();

let getFactorial = () => {
    let factorialNumber = document.getElementById("FactorialValue").value;
    let factorial = factorialChecker.printFactorial(factorialNumber);
    document.getElementById("FactorialResult").innerHTML = factorial;
}

let getFactorialList = () => {
    let factorialInput = document.getElementById("FactorialInput").value;
    let factorialList = factorialChecker.fillArray(factorialInput);
    document.getElementById("FactorialListResult").innerHTML = factorialList;
}

let pigLatinEncrypt = () => {
    let pigInput = document.getElementById("SentenceToConvert").value;
    let result = factorialChecker.PigLatinEncrypt(pigInput);
    document.getElementById("PigLatinResult").innerHTML = result;
}

document.getElementById("GenerateFactorial").addEventListener("click", getFactorial);
document.getElementById("GenerateFactorialList").addEventListener("click", getFactorialList);
document.getElementById("PigLatinEncrypt").addEventListener("click", pigLatinEncrypt);
