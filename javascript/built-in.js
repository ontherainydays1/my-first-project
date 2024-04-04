/*
    giới thiệu một số hàm built-in
        1. Alert
        2. Console : chứa nhiều ham bên trong mỗi hàm là 1 phương thức tác dụng in ra các hàm phương thức
        3. Confirm : tạo hộp thoại 
        4. Prompt : nhập prompt
        5. Set timeout : đối tượng truyền vào là một funtion / chỉ thực hiện một lần sau 1 thời gian đã set
        6. Set interval : đội tượng truyền vào là một funtion / thực thì sau một khoản thời gian
*/

var fullname = 'su khac quynh';

console.warn(fullname); // đưa ra cảnh báo
console.error(fullname); // đưa ra lỗi
console.log(fullname); // đưa ra tên kí tự



confirm('xác nhận bạn đủ tuổi!');

prompt('xác nhận bạn đủ tuổi !!');

setTimeout(function( ) {
    alert('thong bao')
},1000) // cho đoạn code chạy sau một khoản thời gian


setInterval(function(){
    console.log('gia tri ' + Math.random())

},1000);