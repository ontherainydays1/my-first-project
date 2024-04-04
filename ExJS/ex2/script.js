// Calculate tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual =  document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    // validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    // kiểm tra xem đầu vào có trống không
    if(numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        // thay đổi kiểu hiện thị của phần tử
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // tính tiền boa
    var total = (billAmt * serviceQual) / numOfPeople;
    // làm tròn đến hai chữ số thập phân
    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);
    // hiển thị mẹo 
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// ẩn số tiền boa khi tải
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// bấm để gọi chức năng
document.getElementById("calculate").onclick = function() {
    calculateTip();
}