//stack(primitive) and heap(non-primitive)
let mySchool = "DAV"
let myNewSchool= mySchool
myNewSchool ="kmps"
console.log(mySchool) 
console.log(myNewSchool) 
// jo stack hota hai vo data ki copy deta hai to change hojata hai imagine like blacks on each other like bricks without affecting main data and main data as it is rehta hai save 

//HEAP
const User1={
    email:"hello@gmail.com",
    name:"user1"
}
const User2=User1
User2.email="bye@gmail.com" //in object we can change value using .name= or iske bare mai aage padhege
User2.name="USER 2"
console.log(User1);
console.log(User2);
//heap jo hota hai vo main data hi provide karta hai not like stack ki copy provide kare imgaine like a container so agar kuch change karege to overall data mai change hoga
