let inputDate = prompt('Nhập ngày');
let inputMonth = prompt('Nhập Tháng');
let inputYear = prompt('Nhập Năm');
let date = parseInt(inputDate);
let month = parseInt(inputMonth);
let year = parseInt(inputYear);
let time = date + '-' +month+ '-' +year;
document.write('Hôm nay là' +time);
