var cities = ["karachi" , "lahore" , "hyderabad" , "peshawar"]
console.log(cities);

console.log(`${cities[0]} , ${cities[2]}`);

// alert(`Welcome to ${cities[0]} city of Lights. ${cities[0]} is the City of lights `)


cities.pop()
// cities.pop()
// cities.pop()

// cities.push("Multan" , "Quetta")

cities.shift()
cities.shift()
cities.shift()


cities.push("karachi" , "lahore" , "Quetta")


cities.unshift("Sukkur")
cities.unshift("Kashmir")
cities.unshift("Islamabad")
cities.unshift("Rawalpindi")


var newArr =  cities.slice(-4 , 5)


cities.splice(2 , 2 , "Murree" , "Sawat")


console.log(cities);
console.log(newArr , "newArr");
