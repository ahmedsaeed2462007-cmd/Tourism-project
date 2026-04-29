let name = document.getElementById('name');
let phone = document.getElementById('phone');
let destination = document.getElementById('destination');
let go = document.getElementById('go');
let returne = document.getElementById('return');
let submit = document.getElementById('submit');
let DELETEALL = document.getElementById('DELETEALL');
//لتخزين البيانات
let array;
if (localStorage.getItem('stor') != null) {
    array = JSON.parse(localStorage.getItem('stor'));
}
else {
    array = [];
}
if (submit) {
    submit.onclick = function () {
        if (name.value != '' && phone.value != '') {
            let object = {
                name: name.value,
                phone: phone.value,
                destination: destination.value,
                go: go.value,
                returne: returne.value
            }
            array.push(object);
            localStorage.setItem('stor', JSON.stringify(array));
            window.alert("تم الحجز بنجاح");
            clear();
            showData();
        } else {
            window.alert("يرجي ادخال الاسم ورقم الهاتف علي الاقل");
        }
    }
}


function clear() {
    name.value = '';
    phone.value = '';
    destination.value = '';
    go.value = '';
    returne.value = '';
}
//عرض المدخلات
function showData() {
    if (!tbody) returne;
    let table = '';
    for (let i = 0; i < array.length; i++) {
        {
            table += `
            <tr>
                <td>${i + 1}</td>
                <td>${array[i].name}</td>
                <td>${array[i].phone}</td>
                <td>${array[i].destination}</td>
                <td>${array[i].go}</td>
                <td>${array[i].returne}</td>
                <td><button class="upd">Update</button></td>
                <td><button class="del" onclick="deleteData(${i})">Delete</button></td>
            </tr>
        `};
    }
    document.getElementById('tbody').innerHTML = table;
    if (array.length > 0) {
        DELETEALL.innerHTML = `
            <button class=delall onclick="deleteAllData()">Delete All (${array.length})</button>
            `;
    }
    else {
        DELETEALL.innerHTML = '';
    }
}
showData();
//مسح عنصر واحد
function deleteData(i) {
    array.splice(i, 1);
    localStorage.setItem('stor', JSON.stringify(array));
    showData();
}
//فنكشن مسح كل العناصر
function deleteAllData() {
    array.splice(0);
    localStorage.clear();
    showData();
}
