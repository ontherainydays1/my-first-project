// for/in loop

// var myInfo = {
//     name : 'su Quynh',
//     age : 18,
//     address : 'nha trang, KH',
// };

// for(var key in myInfo) {
//     console.log(key)
// }

// var languages = [
//     'Javascript',
//     'php',
//     'ruby',
//     'java',
// ];

// var languages = 'javascript';

// for(var key in languages) {
//     console.log(languages[key]);
// }


// for.......of : sử dụng muốn lấy ra phần tử của mảng chữ cái của chuối không dùng trong object

// var languages = [
//     'javascript',
//     'php',
//     'java'
// ];

// for (var value of languages) {
//     console.log(value)
// }


//                    do/while loop 
// var i = 0;
// var isSuccess = false;
// do {
//     //code 
//     i++;

//     console.log(i);

//     // thành công
//     if(true) {
//         isSuccess =  true;
//     }

// } while (!isSuccess);


//                         lồng

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (var i = 0; i < myArray.length; i++) {
//     for(var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     } 
// }

// var array = ['a','b','c','a','b','c'];

// console.log(new Set(array));


//  1. xác định điểm dừng
//  2. Logic handle

// function loop(start, end, cb) {
//     if(start <= end) {
//         cb(start);
//         return loop(start+1, end, cb);
//     }
// }

// var array = ['js', 'php','ruby'];

// loop(0, array.length - 1, function(index) {
//     console.log('index:', index)
// });


// 3 * 2 * 1 = 
// 6 * 5 * ... *1 = 

function giaiThua(num) {
    var output = 1;
    for(var i = num; i > 0 ; i--) {
        output = output* i;
    }
    return output;
}

giaiThua(6);
console.log(giaiThua(6))