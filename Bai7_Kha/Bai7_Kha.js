let Arr = [];
for(let i=0; i<10; i++){
    Arr[i] = Math.round(Math.random() * 10)
}
console.log("Mảng trước khi sắp xếp: ",Arr);
Arr.sort();
console.log("Mảng sau khi sắp xếp: ",Arr);

