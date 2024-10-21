const registerForm = document.querySelector('#register-form')
const agreeToTerms = document.querySelector('#agree')
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#registerUsername').value
    const password = document.querySelector('#registerPassword').value
    const confirmPassword = document.querySelector('#confirmPassword').value
    if(confirmPassword !== password){
        alert('Passwords do not match')
    }
    if(!agreeToTerms.checked){
        alert('You must agree to the terms and conditions')
    }
    let users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    if(confirmPassword === password && agreeToTerms.checked){
        users.push({
            username,
            password
        })
        localStorage.setItem('users', JSON.stringify(users))
        alert('Account successfully created')
        location.reload(true)
    }
})

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#loginUsername').value
    const password = document.querySelector('#loginPassword').value
    
    const users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];

    const foundUser = users.find(user => user.username === username && user.password === password)
    const accountNotExists = users.find(user => user.username === username) 


    if(foundUser){
        alert('Login Successful')
        location.reload(true);
    }else if(!accountNotExists){
        alert('Account does not exists')
    }else{
        alert('Invalid credentials')
    }
})