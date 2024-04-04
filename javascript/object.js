// object trong js

// var emailKey = 'email';

// var myInfo = {
//     name : 'son dang',
//     age: 18, 
//     address : 'ha noi, vn',
//     [emailKey] : 'sukhacquynh153@gmail.com',
//     getName : function() {
//         return this.name;
//     }
// };

// function --> phương thức / method
// others --> thuộc tính / property


// console.log(myInfo.getName());

// thêm value
// myInfo.email = 'khacquynh153@gmail.com';

// thêm key + value
// myInfo['email'] = 'khacquynh153@gmail.com' 
// console.log(myInfo)

// lấy key ra ngoài
// console.log(myInfo.name)

// var mykey = 'address';

// console.log(myInfo[mykey])



////////////// Object Contrustor


function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}


User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

console.log(user.className);
console.log(user2.getClassName());

var author = new User('quynh','su','vatar');
var user = new User('quynhaaa','suuuuu','vatar');


console.log(author.getName());
console.log(user.getName());
