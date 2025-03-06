let string = prompt(`Mời nhập 1 dãy số`)
let Arr = [];
for (let i = 0; i < string.length; i++){
    if(Number.isNaN(string[i])){
        alert(`Dãy không hợp lệ`)
        break;
    }
    Arr[i] = string[i];
}
 Arr.reverse();

console.log(Arr);

