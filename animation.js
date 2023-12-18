$(document).ready(function() {
    // Xử lý khi di chuột vào tag "Chuyên mục thú cưng"
    $('.pet').mouseover(function() {
        // Hiển thị dropdown-menu khi di chuột vào
        $('.dropdown-menu').css('display', 'block');
    });

    // Xử lý khi di chuột ra khỏi dropdown-menu
    $('.dropdown-menu').mouseleave(function() {
        // Ẩn dropdown-menu khi di chuột ra khỏi dropdown-menu
        $(this).css('display', 'none');
    });

    // Xử lý khi click vào dropdown-item
    $('.dropdown-item').click(function() {
        // Lấy nội dung của dropdown-item
        var selectedItem = $(this).text();
        console.log('Selected Item:', selectedItem);
        // Ẩn dropdown-menu sau khi chọn
        $('.dropdown-menu').css('display', 'none');
    });
});