/*
    1. hàm?
        - Một khối mã
        - Làm 1 việc cụ thể
    
    2. Loại hàm
        - Built-in
        - Tự định nghĩa
    
    3. Tính chất
        - Không thực thi khi định nghĩa
        - Sẽ thực thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả về 1 giá trị
    
    4. Tạo hàm đầu tiên

    */

    // function showDiaLog() {
    //     alert('hi xin chao cac ban');
    // }

    // call () : gọi hàm

    // showDiaLog();

// tham số hàm - javascript cơ bản

/*
    1. tham số
        - Định nghĩa?
        - Kiểu dữ liệu?
        - Tính private? (tính riêng tư)
        - 1 tham số
        - Nhiều tham số

    2. Truyền tham số
        - 1 tham số
        - nhiều tham số

    3. Arguments?
        - Đối tượng arguments
        - Giới thiệu vòng for
 */

    // function writeLog() { //message : là tham số
    //     var myString = '';
    //     for( var param of arguments) {
    //         myString += `${param} - `;
    //     }
    //     console.log(myString)
    // }
    // writeLog('log1','log2','log3');


function cong(a,b) {
    return a + b;
}

var result  = cong(5,7);

console.log(result)