
// test vong lap neu i = 1 thay vi 0
// const array1 = [9,2,3,4,5];

// const { render } = require("@testing-library/react")

// function sum(arr){
//     let total = 0;

//     for(i = 1; i < arr.length+1; i++){
//         total = total + arr[i-1]
     
//     }
//        return total;
// }

// sum(array1);
// console.log(sum(array1));

//map

const array1= [{id:1,item:'apple',type:'fruit'},
            {id:2,item:'banana',type:'fruit'},
            {id:3,item:'pen',type:'stuff'},
            {id:4,item:'phone',type:'stuff'}
]

const array2 = array1.map(myFunction);

function myFunction(item) {
    return `<li id = '${item.id}' >  ${item.item }, ${item.type } </li>` ;
  }

console.log(array2);


// const array3 = array1.filter(myFunction1);

let positive_array = array1.filter(function(array3) {
  return array3.type == 'stuff' ; });

// function filter(myFunction1(item2,type,stuff)){
//     return `${item2 = "type:'stuff'"}`;
// }


console.log(positive_array);

//  const search = filter(array1, 'fruit');

function filter(array4, search){
  const kq = array4.filter( array1 =>array1.type == search)

  return  kq.map(myFunction) 
;
}

console.log(filter(array1, "stuff"));

console.log("Hello World");