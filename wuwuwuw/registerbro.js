const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('passw');
const password2 = document.getElementById('passwordconfirm');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message)=>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputcontrol.classlist.add('error');
    inputcontrol.classlist.remove('success');
}

const setSuccess = element =>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputcontrol.classlist.add('success');
    inputcontrol.classlist.remove('error');
}

const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = username.value.trim();
    const password2Value = username.value.trim();

    if(usernameValue === ''){
        setError(username, 'Name is required');
    } else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, 'Email is required');
    }
    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8){
        setError(password, 'Password must at least 8 characters.')
    } else{
        setSuccess(password);
    }
    if(password2Value ===''){
        setError(password2, 'Please confirm password');
    } else if(password2Value !== passwordValue){
        setError(password2, "Password does'nt match");
    } else {
        setSuccess(password2);
    }
};