const numbers = [5,7,9,2,5,78,0,5,2,3,4,6,8,2];
let a;
let count = 0; //Biến lưu số lần xuất hiện của phần tử trong mảng
let maxCount = 0; //Biến lưu số lần xuất hiện nhiều nhất của các phần tử trong mảng
let maxCountnumber = numbers[0];// Biến lưu trữ phần tử có số lần xuất hiện nhiều nhất trong mảng, mặc định là phần tử đầu tiên

    //Duyệt mảng
for(let i = 0; i < numbers.length; i++){
    count = 0;
    for(let j = 0; j < numbers.length; j++){
        if(numbers[i] === numbers[j]){
            count++;
        }
    }
    if(count > maxCount || maxCountnumber < numbers[i]){
        maxCount = count;
        index = i;
    }
}
console.log(`Số lần xuất hiện lớn nhất ${maxCount}`);

console.log(`phần tử : ${numbers[index]}`);




