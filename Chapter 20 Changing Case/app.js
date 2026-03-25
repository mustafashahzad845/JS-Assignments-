// var str = prompt("Enter your str")
// console.log(str.toLowerCase() , "Lower Case");
// console.log(str.toUpperCase() , "Upper Case");
// console.log(str.slice(0 , 1).toUpperCase() + str.slice(1).toLowerCase());



function capitializeWord() {
    var str = prompt("Enter Some text")
var strArr =  str.split(" ")

if(strArr.indexOf("") !== -1){
alert("Double Space not allow")
return
}

console.log(strArr);
var arr = []

for(var i = 0 ; i < strArr.length ; i++){
var word = strArr[i].slice(0 , 1).toUpperCase() + strArr[i].slice(1).toLowerCase()
// console.log(word);
arr.push(word)
}

// console.log(arr);

var capitializeWord =   arr.join(" ")

console.log(str , "original");

console.log(capitializeWord , "capitialize");
}


capitializeWord()

// for(var i = 0 ; i < str.length ; i++){

// console.log(str.slice(i , 2));

// }