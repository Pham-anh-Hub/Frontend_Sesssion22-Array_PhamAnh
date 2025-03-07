const numbers = [2,1,7,1,1,8,6,2,2,7];
let newArr= [];
let count = 0; //Biến lưu số lần xuất hiện của phần tử trong mảng

for (let i = 0; i < numbers.length; i++){
    for(let j = i+1; j < numbers.length; j++){
        if (numbers[i] === numbers[j]) {
            numbers.splice(j,1)
            j--; //lùi lại phần tử đúng vị trí 
        }
    }
    
}
console.log(numbers);
