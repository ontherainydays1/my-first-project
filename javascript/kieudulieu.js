/*
kiểu dữ liệu trong javascript
    1. Dữ liệu nguyên t hủy - primitive data
        - number
        - string
        - boolean
        - undefined
        - null
        - symbol

    2. Dữ liệu phức tạp - complex data 
        - function
        - object
*/

// number type
var a = 1 ;
var b = 2 ;
var c = 1.5 ;


// string type
var fullname = 'khac quynh';

//boolean
var quynh = true;

///undefined type
var age;

console.log(age);

// null 
var isNull = null; //nothing

// symbol 
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique


console.log(id == id2)


// function
var myFunction = function() {
    alert('hi. Xin chao cac ban!');
} // function tự định nghĩa

myFunction();

// object types : lưu dữ liệu để tương tác trong javascript
var myObject = {
    name : 'khac quynh',
    age : 18,
    adress : 'nha trang'
}

console.log('myOject', myObject);

// array : xuất hiện với dấu ngoặc vuông []
var myArray = [
    'javascript',
    'php',
    'ruby'
];

console.log(myArray);

console.log(typeof myArray);