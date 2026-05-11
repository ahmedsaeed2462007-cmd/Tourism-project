let name = document.getElementById('name');
let phone = document.getElementById('phone');
let destination = document.getElementById('destination');
let go = document.getElementById('go');
let returne = document.getElementById('return');
let submit = document.getElementById('submit');
let DELETEALL = document.getElementById('DELETEALL');
let phoneError = document.getElementById('phoneError');
let tbody = document.getElementById('tbody');
let tmp;
let mood = 'create';
let array;
//لتخزين البيانات
if (localStorage.getItem('stor') != null) {
    array = JSON.parse(localStorage.getItem('stor'));
}
else {
    array = [];
}

if (submit) {
    submit.onclick = function (e) {
        e.preventDefault();
        phoneError.style.display = 'none';
        if (!name.value || !phone.value || !destination.value || !go.value || !returne.value ) {
            window.alert("Please Fill All Fields");
            return;
        }
        let check = true;
        if (phone.value.length < 11) {
            phoneError.textContent = "Phone number must be exactly 11 digits";
            phoneError.style.display = 'block';
            check = false;
        }
        if (check) {
            let object = {
                name: name.value,
                phone: phone.value,
                destination: destination.value,
                go: go.value,
                returne: returne.value,
            };
            if (mood === 'create') {
                array.push(object);
            } else {
                array[tmp] = object;
                mood = 'create';
                submit.innerHTML = 'Book now';
                submit.style.background = "";
            }
            localStorage.setItem('stor', JSON.stringify(array));
            window.alert("Success!");
            clear();
            showData();
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
function showData() {
    if (!tbody) return;
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
    tbody.innerHTML = table;
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
function deleteData(i) {
    array.splice(i, 1);
    localStorage.setItem('stor', JSON.stringify(array));
    showData();
}
function deleteAllData() {
    array.splice(0);
    localStorage.clear();
    showData();
}
function updateData(i) {
    name.value = array[i].name;
    phone.value = array[i].phone;
    destination.value = array[i].destination;
    go.value = array[i].go;
    returne.value = array[i].returne;
    submit.textContent = 'Update';
    submit.style.background = "#008000";
    mood = 'update';
    tmp = i;
    scroll({ top: 0, behavior: 'smooth' });
}
