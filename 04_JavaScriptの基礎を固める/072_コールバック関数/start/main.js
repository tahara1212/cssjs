// function calc(a, b, callback) {
//     let result = callback(a, b);
//     console.log(result);
// }

// const test1 = (a, b) => a * b;
// const test2 = (a, b) => a / b;

// calc(4,2,test1);
// calc(4,2,test2);

// let result = calc(1,3);
// console.log(result);

// const try1 = (firstName, lastName) => {
//     let name = firstName();
//     let lname = lastName();
//     console.log(name + ' ' + lname);
// }

// try1(function(){
//     return 'tahara';
// }, function() {
//     return 'lname';
// });

const numArray = [1, 2, 3, 4, 5];
const nameArray = ["john", "daniel", "debit", "area"];

// nameArray.forEach((v, i, ary) => console.log(v, i, ary));

// numArray.reduce(function (accu, curr) {
//   console.log(accu, curr);
// },10);

const str = 'taharashunpei';
const strArray = str.split("");

// const result = strArray.reduce(function(accu, curr) {
//     return accu + "<" + curr + ">";
// },"");

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

function reduce(array, callback, defaultVal) {
    let accu = defaultVal;

    for (i in array) {
        let curr = array[i];
        accu = callback(accu, curr);
        console.log(accu);
    }
    return accu;
}

const result = reduce(strArray, tag, "");
console.log(result);