let name = document.getElementById('name');
let phone = document.getElementById('phone');
let destination = document.getElementById('destination');
let go = document.getElementById('go');
let returne = document.getElementById('return');
let submit = document.getElementById('submit');
let DELETEALL = document.getElementById('DELETEALL');
let tmp;
let mood = 'create';
//لتخزين البيانات
let array;
if (localStorage.getItem('stor') != null) {
    array = JSON.parse(localStorage.getItem('stor'));
}
else {
    array = [];
}

submit.onclick = function () {
    if (name.value != '' && phone.value != '') {
        let object = {
            name: name.value,
            phone: phone.value,
            destination: destination.value,
            go: go.value,
            returne: returne.value
        }
        if (mood === 'create') {
            array.push(object);
        }
        else {
            array[tmp] = object;
            mood = 'create';
            submit.innerHTML = 'Submit';
        }
        localStorage.setItem('stor', JSON.stringify(array));
        clear();
        showData();
        window.alert("تم الحجز بنجاح");
    }
    else {
        window.alert("يرجي ادخال الاسم ورقم الهاتف علي الاقل");
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
                <td><button class="upd" onclick="updateData(${i})">Update</button></td>
                <td><button class="del" onclick="deleteData(${i})">Delete</button></td>
            </tr>
        `};
    }
    document.getElementById('tbody').innerHTML = table;
    if (array.length > 0) {
        DELETEALL.innerHTML = `
            <button class=delall onclick="deleteAllData() ">Delete All (${array.length})</button>
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
// دالة التعديل
function updateData(i) {
    name.value = array[i].name;
    phone.value = array[i].phone;
    destination.value = array[i].destination;
    go.value = array[i].go;
    returne.value = array[i].returne;
    
    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i; // تخزين مكان العنصر لتعديله لاحقاً
    scroll({
        top: 0,
        behavior: "smooth"
    });
}

