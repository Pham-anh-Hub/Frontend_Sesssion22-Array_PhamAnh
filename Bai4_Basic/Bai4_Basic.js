let string = prompt(`Nhập vào 1 dãy số`);
let temp = 0;
let max = 0;
for(let i = 0; i < string.length; i++){
    if(Number.isNaN(string[i])){
        alert(`Dãy số không hợp lệ`);
        var flag = 0;
        break;
    }
}
if(flag !== 0){
    const Arr = string.split("");
    for(let i = 0; i < Arr.length; i++){
        if(Arr[i] > max){
            max = Arr[i]
        }
    }
    console.log(`${max} là số lớn nhất trong dãy số`);
    
}