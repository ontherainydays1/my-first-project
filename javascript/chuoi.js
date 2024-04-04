
// làm việc với chuỗi

var myString = 'Hoc js tai f8 js js js !';

// keyword : javascript string methods

// 1. length : đo độ dài của chuỗi

// console.log(myString.length)

// 2. find index : tìm vị trí của chuỗi

// console.log(myString.indexOf('f8'));

// 3. cut string
// console.log(myString.slice(4));

// 4. replace : ghi đè

console.log(myString.replace('js', 'javascript'))
// ghi đè tất cả

console.log(myString.replace(/js/g, 'javascript'))

// 5. convert to upper case 

// 6. convert to lower case

// 7. trim
// 8. split
// 9. get a charater by index