/**
 *  BÀI TẬP SỐ 1: XUẤT 3 SỐ NGUYÊN THEO THỨ TỰ TĂNG DẦN
 * 
 *  INPUT
 * - 3 số nguyên người dùng nhập vào
 *  HANDLE
 * - Tạo biến soNguyenThuNhat, soNguyenThuHai, SoNguyenThuBa, btnClickMe
 * OUTPUT
 * - Xuất 3 số nguyên theo thứ tự tăng dần
 */

document.getElementById('btnClickMe').onclick = function () {
    var X = Number(document.getElementById('soNguyenThuNhat').value);
    var Y = Number(document.getElementById('soNguyenThuHai').value);
    var Z = Number(document.getElementById('soNguyenThuBa').value);

    if (X < Y && X < Z) {
        if (Y < Z) {
            // alert (Y);
            // alert (Z);
            alert ('Thứ tự tăng dần của các số là: ' + X + ',' + Y + ',' + Z);
        }
        else {
            // alert (Z);
            // alert (Y);
            alert ('Thứ tự tăng dần của các số là: ' + X + ',' + Z + ',' + Y);
        }
    } else if (Y < X && Y < Z) {
        if (X < Z) {
            // alert (X);
            // alert (Z);
            alert ('Thứ tự tăng dần của các số là: ' + Y + ',' + X + ',' + Z);
        }
        else {
            // alert (Z);
            // alert (X);
            alert ('Thứ tự tăng dần của các số là: ' + Y + ',' + Z + ',' + X);
        }
    } else {
        
        if (X < Y) {
            // alert (X);
            // alert (Y);
            alert ('Thứ tự tăng dần của các số là ' + Z + ',' + X + ',' + Y);
        }
        else {
            // alert (Y);
            // alert (X);
            alert ('Thứ tự tăng dần của các số là ' + Z + ',' + Y + ',' + X);
        }
    }
}

// --------------------------------------------------------

/**
 *  BÀI 2: CHÀO HỎI CÁC THÀNH VIÊN TRONG GIA ĐÌNH
 *  INPUT
 * - Value B M A E do người dùng nhập vào
 *  HANDLE
 * - Tạo biến ipGiaTriDeChao, btnNhapDeChao, user
 *  OUTPUT
 * - Sử dụng Switch case
 * - Xuất ra các giá trị tương ứng với value người dùng nhập vào
 */

document.getElementById('btnPushHere').onclick = function () {
    var chao = document.getElementById('ipGiaTriDeChao').value;
 
    switch(chao) {
        case 'A' :
            alert('Xin chào anh trai')
            break;
        case 'B' :
            alert('Xin chào Daddy')
            break;
        case 'M' :
            alert('Hello Mommy')
            break;
        default :
            alert('Chao xìn em gái mưa')
    }
}


// ------------------------------------------------------


/**
 *  BÀI 3
 *  INPUT
 * - 3 số nguyên người dùng nhập vào
 *  HANDLE
 * - Tạo biến firstNumb, SecondNumb, thirdNumb, btnTimSo
 *  OUTPUT
 * - Tìm có bao nhiêu số lẻ và số chẵn
 */

document.getElementById('btnTimSo').onclick = function () {
    
}

//-------------------------------------------------------

/**
 *  BÀI 4
 *  INPUT
 * - Biết 3 cạnh của tam giác
 *  HANDLE
 * - Tạo biến firstEdge, secondEdge, thirdEdge, btnFind
 *  OUTPUT
 * - Tìm ra tam giác với 3 cạnh nhập vào
 */

document.getElementById('btnFind').onclick = function () {

    var a = Math.abs(document.getElementById('canhThuNhat').value);
    var b = Math.abs(document.getElementById('canhThuHai').value);
    var c = Math.abs(document.getElementById('canhThuBa').value);

    if (a == b && b == c) {
        alert('Chúc mừng bạn đã tìm thấy tam giác đều')
    }
    else if (a == b || b == c || a == c ) {
        alert('Chúc mừng bạn đã tìm thấy tam giác cân')
    } 
    else if (Math.sqrt(c) == (a + b) || Math.sqrt(b) == (a + c) || Math.sqrt(a) == (b + c)) {
        alert('Chúc mừng bạn đã tìm thấy tam giác vuông')
    }
    else {
        alert('Sorry! Tam giác bạn tìm chưa được cập nhật')
    }
}
