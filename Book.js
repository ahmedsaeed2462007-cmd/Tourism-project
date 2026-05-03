let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let destination = document.getElementById('destination');
let go = document.getElementById('go');
let returne = document.getElementById('return');
let submit = document.getElementById('submit');
let DELETEALL = document.getElementById('DELETEALL');
let emailError = document.getElementById('emailError');
let phoneError = document.getElementById('phoneError');
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
        // منع الصفحة من التحميل في كل الأحوال عشان نتحكم في الفحص
        e.preventDefault();

        if (name.value != '' && email.value != '' && phone.value != '' && destination.value != '' && go.value != '' && returne.value != '') {

            emailError.style.display = 'none';
            phoneError.style.display = 'none';
            let check = true;
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // 1. الفحص (Validation)
            if (email.value === "") {
                emailError.textContent = "Email is required";
                emailError.style.display = 'block';
                check = false;
            } else if (!emailPattern.test(email.value)) {
                emailError.textContent = "Please enter a valid email";
                emailError.style.display = 'block';
                check = false;
            }

            if (phone.value === "") {
                phoneError.textContent = "Phone number is required";
                phoneError.style.display = 'block';
                check = false;
            } else if (phone.value.length < 11) {
                phoneError.textContent = "Phone number must be at least 11 digits";
                phoneError.style.display = 'block';
                check = false;
            }

            // 2. الحفظ فقط في حالة نجاح الفحص
            if (check === true) {
                let object = {
                    name: name.value,
                    phone: phone.value,
                    destination: destination.value,
                    go: go.value,
                    returne: returne.value
                }

                if (mood === 'create') {
                    array.push(object);
                } else {
                    array[tmp] = object;
                    mood = 'create';
                    submit.innerHTML = 'Book now';
                    email.style.display = 'block';
                }

                localStorage.setItem('stor', JSON.stringify(array));
                window.alert("Success!");
                clear();
                showData();
            }

        } else {
            window.alert("Please Fill All Fields");
        }
    }
}

function clear() {
    name.value = '';
    phone.value = '';
    email.value = '';
    destination.value = '';
    go.value = '';
    returne.value = '';
}
//عرض المدخلات
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
//فنكشن التعديل
function updateData(i) {
    name.value = array[i].name;
    phone.value = array[i].phone;
    destination.value = array[i].destination;
    go.value = array[i].go;
    returne.value = array[i].returne;
    submit.innerHTML = 'Update';
    mood = 'update';
    email.style.display = 'none';
    tmp = i;
    scroll({ top: 0, behavior: 'smooth' });
}
