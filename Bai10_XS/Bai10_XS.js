let choice;
let items = [];
 do {
    choice = +prompt(`Mời bạn nhập yêu cầu: 1 - Nhập vào mảng, 2 - Hiển thị mảng, 3 - Thêm phần tử, 4 - Sửa phần tử, 5 - Xóa phần tử, 6 - Thoát chương trình`)
    switch (choice) {
        case 1:
            let newArr = prompt(`Nhập vào các phần tử (ngăn cách bằng dấu ",")`);
            items = newArr.split(",")
            break; 
        case 2:
            console.log("Mảng đã nhập: ", items)
            break;
        case 3:
            let itemAdd = prompt(`Nhập phần tử muốn thêm vào`)
            items.push(itemAdd);
            break;
        case 4:
            const indexEdit = +prompt(`Nhập vị trí cần sửa`);
            if(indexEdit < items.length){
                const itemEdit = prompt(`Nhập phần tử thay thế`);
                items.splice(indexEdit, 1, itemEdit);
            }else{
                alert(`Vị trí không hợp lệ`);
                break;
            }
            break;
        case 5:
            let indexDelete = +prompt(`Nhập vị trí cần xóa`);
            if(indexDelete < items.length){
                items.splice(indexDelete, 1);
            }else{
                alert(`Vị trí không hợp lệ`);
                break;
            }
            break;
        case 6:
            break;
        default:
            alert(`Chức năng không hợp lệ`)
            break;
    }
    if(choice === 6){
        break;
    }
 } while (1);