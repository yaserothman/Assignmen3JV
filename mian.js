//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
//1.1
console.log(myString);
//1.2
let length = myString.length;

console.log(myString.length);
//This step I Just like to write thats what I thought.
document.write("The string is this long: " + length);
//1.3
let myString1 = "hello\ this\ is\ a\ difficult\ to\ read\ sentence";
//1.4 
console.log(myString1);

//2 Arrays
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

//2.1
favoriteAnimals.push('turtle');

//2.2
console.log(favoriteAnimals);
//2.3
favoriteAnimals.splice(1, 0, "meerkat");
//2.4
console.log("I think the value is object" + " " + typeof favoriteAnimals);
//2.5
console.log(favoriteAnimals);
//2.6
console.log(favoriteAnimals.length);

document.write("This is the length of Array: " + length);
//2.7
favoriteAnimals.splice(3, 1);
//2.8
console.log(favoriteAnimals);
// //2.9
favoriteAnimals.indexOf("meerkat");
//1.10
console.log("you are looking for the postion", 1);

//More JavaScript 


//1
sum = 1;

function myfunction(a, z, x) {
    sum = (a + z + x);
    return sum;

}
console.log("the sum of the arguments : " + myfunction(1, 2, 3));

//2
let color = "red";

function colorCar(color) {
    color = colorCar + "red";
    console.log(`colorCar ${color}car`);

}
// 3
let myObject = {};

function myObjectFunction(myObject) {
    myObject = {
        name: "1",
        time: "2",
        color: "green"
    };

}
console.log(myObjectFunction);

//4
let trauk = 0;

function vehicleType(myObjectFunction, trauk) {
    if (trauk == 1) {
        console.log(`alpha ${color}bicycle`);
    }
    else if (trauk == 2) {
        console.log(`beta ${color}motor`);
    }
    else {
        console.log("this code to mistake");
    }
}
console.log("print out all of its properties and value " + vehicleType());


//5

3 === 3 ? console.log("Yes") : console.log("No");

//6
let address = "ok";
let age = 0;
function vehicle(age, address, ) {
    if (address == 0 && age == 5) {
        console.log(`a ${color} car`);
    }
    else if (address == 3 && age == "done") {
        console.log(`a ${color} car`);
    }
    else if (address == 6 && age == "true") {
        console.log(`a ${color} car`);
    }
    else {
        console.log("this code to mistake");
    }
}
//7
let vehiclesList = [];
vehiclesList[0] = "motorbike";
vehiclesList[1] = "caravan";
vehiclesList[2] = "bike";
vehiclesList[3] = "Plane";
console.log("this for now" + "(" + vehiclesList + ")" + " you add more:");

//8

console.log(vehiclesList[2]);
//9

function vehicle(color, address, age) {
    if (address == 1 && age == 1) {
        console.log(`a ${color}done${vehiclesList[0]}`);
    }
    else if (address == 1 && age == 2) {
        console.log(`a ${color} done ${vehiclesList[0]}`);
    }
    else if (address == 2 && age == 1) {
        console.log(`a ${color}done${vehiclesList[1]}`);
    }
    else if (address == 2 && age == 2) {
        console.log(`a ${color} done ${vehiclesList[1]}`);
    }
    else if (address == 3 && age == 1) {
        console.log(`a ${color}done${vehiclesList[2]}`);
    }
    else if (address == 3 && age == 2) {
        console.log(`a ${color} done ${vehiclesList[2]}`);
    }
    else {
        console.log("Wrong Code Dude!")
    }
}

//10
for (let i = 0; i <= 0; i++) {
    console.log(`Amazing Joe's Garage, we service :${vehiclesList[i + 3]}s, ${vehiclesList[i]}s, ${vehiclesList[i + 1]}s and ${vehiclesList[i + 2]}s.`)
}
//11
vehiclesList.push("treck");
console.log(vehiclesList);

for (let i = 0; i <= 0; i++) {
    console.log(`Amazing Joe's Garage, we service :${vehiclesList[i + 3]}s, ${vehiclesList[i]}s, ${vehiclesList[i + 1]}s and ${vehiclesList[i + 2]}s.`)
}

//12
let teachers = {};
//13
teachers = {
    frist: "Ahmad",
    second: "Giorgos"

}
//14
teachers["languages of web developer"] = "HTML,CSS ,JavaScript";
console.log(teachers);
//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

if (x == y) {
    console.log("true");
} else {
    console.log("false");
}
if (x === y) {
    console.log("true");
} else {
    console.log("false");
}
if (x == z) {
    console.log("true");
} else {
    console.log("false");
}
if (y == z) {
    console.log("true");
} else {
    console.log("false");
}
//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o3);
//17
let bar = 42;
typeof typeof bar;
console.log("The typeof typeof bar give's: ", typeof typeof bar);









