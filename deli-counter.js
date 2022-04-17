// Represent queue with an empty array

const katzDeli =[];

function customerLine(array){
     if(array.length===0) {
         console.log("The line is currently empty.")
     }
}


function takeNumber(array, name) {
    let position = array.push(name)
 console.log(array.push(name))
 console.log('Welcome, ${name}.You are number 1 in line.')


function nowServing (array) {
 if (array.length===0){
        console.log("There is nobody waiting to be served!")
     } else for (let i =0; i<array.length; i++){
            array.shift(array[0])
            console.log(`currently serving ${array[0]}.`)
     }
}
}