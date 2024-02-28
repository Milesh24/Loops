///Loop through all numbers from 1 to 100.///

for  (let i = 1; i <=100; i++) {
    console.log(i)
    /// This will count down from 1 to 100//
}

///If a number is divisible by 3, log “Fizz.”///
for (let i = 1; i <=100; i++) {
    if (i%3 ===0)
        console.log(i);
    console.log('Fizz');
//This code will allow us to print fizz counting by 3's///
}

    ///If a number is divisible by 5, log “Buzz.”///
    for (let i = 1; i <=100; i++) {
        if (i%5 ===0)
            console.log(i);
        console.log('Buzz');
    //This code will allow us to print fizz counting by 5's///
    }

        // /If a number is divisible by both 3 and 5, log “Fizz Buzz.”///
        for (let i = 1; i <=100; i++){
    console.log(i);
    if (i %3 === 0 && i %5=== 0){
            console.log('Fizz Buzz');
}



//Part 3 feeling loopy//
let data = "ID, Name, Occupation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let rows = data.split("\n");
console.log(rows);
// console.log(cell1, cell2, cell3, cell4);
const csvString = "ID, Name, Occupation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
for(const char of csvString ) {
    console.log(char);
}
let index = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let rows1 = index.split("\n");
console.log(rows1);
        }