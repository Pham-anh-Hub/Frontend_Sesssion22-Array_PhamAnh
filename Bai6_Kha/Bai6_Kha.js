let numbers = [2,3,5,7,8,5,4,3,2,3]
let count = +0;
let n = +prompt(`Nhập vào số nguyên cần tìm kiếm`);
if(!Number.isNaN(n)){
    for(let i = 0; i < 10 ; i++){
        if(n === numbers[i])
            count++;
    } 
    if(count === 0){
    console.log(`Số ${n} không xuất hiện trong mảng`);  
    }else{
        console.log(`Số ${n} xuất hiện ${count} lần`); 
    }
}else{
    alert(`Số nhập vào không hợp lệ`)
}