let numbers = +prompt(`Nhập 5 số ngẫu nhiên`);

if ( Number.isInteger(numbers)){
    let sumEven = 0;
    let sumOdd = 0;
    let Arr = (numbers.toString().split(""));
    console.log(Arr);
    
    for(let i =0; i < Arr.length; i++){
        if(!Number.isNaN(Arr[i])){
           if(+Arr[i] % 2 === 0){
                sumEven +=  +Arr[i];
            }else {
                sumOdd +=  +Arr[i];
            } 
        }
    }
    console.log("Tổng các số chẵn là: " + sumEven);
    console.log("Tổng các số lẻ là: " + sumOdd);

}else{
    alert(`Du lieu khong hop le!`);
}



