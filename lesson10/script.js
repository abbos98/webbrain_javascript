// <<<<<<<< Obj advanced >>>>>>>>>>

// let obj1 = {title: 'student'};
// let obj2 = {title: 'student'};

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// => objectni valuesi referens sifatida saqlanadi va reference unique boladi wunga bu holatda qiymat va data type togri bolsa ham false qaytaradi

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// console.log(arr1 == arr2);
// console.log(arr1 === arr2);

// => bu holatda ham reference bolib qaytaradi va wunga false bolib qaytadi bir hil bolsa ham!


// let str1 = 'WBA';
// let str2 = 'WBA';

// console.log(str1 == str2);
// console.log(str1 === str2);

///////////////////////////////////////////////////////////////////////

// Comparing objects

// <<<<< copy by reference vs copy by value >>>>>>

// <<<<< copy by reference in non-primative >>>>>>

// let a = 'Wba';
// let b = a;    
// a = 'Webbrain';
// b = 'Academy';

// console.log(a);
// console.log(b);


// <<<<<<< copy by reference >>>>>>

// let a = {};
// // let b = a;      copy by reference

// console.log(a == b);
// console.log(a === b);


// let a = {name: 'Abbos'};
// let b = a;  
// a.status = 'Student';
// delete a.name

// console.log(a);
// console.log(b);


// let a = 'Wba';
// let b = a;
// a = 'Webbrain';

// console.log(a);
// console.log(b);

// let a = 'Wba';
// let b = a;
// a = 'Webbrain';  // cpy by value (Primative)


// console.log(a);
// console.log(b);


////////////////////////////////////////////////////

//  <<<<<< clone in obeject >>>>>>

// let a = {
//     name: 'Abbos'
// }
// // let clone = Object.assign({}, a);  //Shallow clone
// let clone = structuredClone(a);
// clone.status = 'Student';

// console.log(a);
// console.log(clone);


// let obj = {
//     name: 'Abbos',
//     age: 25,

//     hobbies(title1, title2) {
//         console.log(`my hobbies are ${title1} ${title2}`);
//     }
// }

// obj.hobbies('football','valleyboll');

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Hometask //

