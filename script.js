let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id('first-name'),
lastName = id('last-name'),
email = id('email'),
password = id('password'),
form = id('form'), 

errorMsg = classes('error');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    engine(firstName, 0, 'Firstname cannot be empty')
    engine(lastName, 1, 'Lastname cannot be empty')
    engine(email, 2, 'email cannot be empty')
    engine(password, 3, 'Password cannot be empty')
});

let engine = (id, serial, message) => {
    if (id.value.trim()=== ''){
        errorMsg[serial].innerHTML = message;
        id.style.border = '2px solid red';
    }
    else{
        errorMsg[serial].innerHTML = '';
        id.style.border = '2px solid green';
    }
}


