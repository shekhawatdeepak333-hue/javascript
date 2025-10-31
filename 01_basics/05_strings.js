let name="deepak" //declaration od string
let age="19"
console.log(name+age)
//this is the old method to combine strings we are not gonna use it
console.log(`my name is ${name} and my age is${age}`)
//this is the new gen method we gonna use this

//there's one more method to declare strings
let language= new String("HINDI MATAR BHASA") 
//jab apan ese browser mai print karte hai to boht sare strings ke features dekh sakte jinko "object bhi bolte hai" hai
//for example
console.log(language[0]) //this is used for checiking element by location
console.log(language.charAt(3))
console.log(language.indexOf('M'));
console.log(language.length)
console.log(language.toUpperCase)
console.log(language.slice(0,9))//slicing mai last assign number include nhi hota
console.log(language.repeat(2));//it repeats the statement as many as time we want
console.log(language.trim())//it uses to remove extra space
console.log(language.replace("H","D"));//jo first value assign kari hai ye usko dhundhega and second assigned value se replace kardega
console.log(language.includes(hindi));//ye check karke batayega ki assigned word present hai ya nhi by showing true and false 



