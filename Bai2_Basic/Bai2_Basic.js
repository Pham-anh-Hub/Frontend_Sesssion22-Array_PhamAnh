let numbers = [10, 45, 2, 8, 12, 32, 76];
let check = prompt(`Mời nhập vào 1 số`);
let temp = 0;
for(let i = 0; i < numbers.length; i++ ){
    if(check == numbers[i]){
        temp = 1;
        break;
    }
}
if(temp === 1){
    alert(`Bingo`);
}else{
    alert(`Chúc bạn may mắn lần sau`);
}