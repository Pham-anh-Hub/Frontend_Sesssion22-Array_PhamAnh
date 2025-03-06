// Lấy yêu cầu từ người dùng - menu
// Kiểm tra các yêu cầu từ người dùng
// Giải quyết các case
    let choice;
    let prices = [];
 do {
    choice = +prompt(`Mời bạn nhập yêu cầu: 1 - Thêm, 2 - Sửa, 3 - Xóa, 4 - In danh sách, 5 - Tính tổng, 6 - Xóa toàn bộ giỏ hàng, 7 - Thoát chương trình`)
    switch (choice) {
        case 1:
            let priceInput = +prompt("Mời bạn nhập giá: ")
            //Thêm phần tử vào mảng
            if(Number.isInteger(priceInput)){
                prices.push(priceInput);
                alert("Thêm giá thành công")
                break;
            }else{
                alert("Giá không hợp lệ")
                break;
            }
            
        case 2:
            //Lấy thông tin từ người dùng
            const indexEdit = +prompt(`Nhập vị trí cần sửa`)
            const valueEdit = +prompt(`Nhập giá trị cần thay đổi`);
            //validate
            if(indexEdit < prices.length){
                //Cập nhật
                // prices[indexEdit] = valueEdit; // cách thường
                prices.splice(indexEdit, 1, valueEdit);
            }
            alert(`Cập nhật thành công`)
            break;
        case 3:
            const indexDelete = +prompt(`Nhập vị trí cần xóa`)
            prices.splice(indexDelete, 1)
            break;
        case 4:
            // In danh sách
            console.log("Danh sách giá: ",prices);
            break;
        case 5:
            let total = 0;
            for(let i = 0; i < prices.length; i++){
                total += prices[i];
            }
            console.log(`Tổng toàn bộ giá trị giỏ hàng: ${total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`);
            break;
        case 6:
            //Xóa toàn bộ giá trị giỏ hàng
            prices.length = 0;
            break;
        case 7:
            break;
        default:
            alert(`Chức năng không hợp lệ`)
            break;
    }
    if(choice === 7){
        break;
    }
 } while (1);
