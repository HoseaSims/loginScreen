const loginArea = document.querySelector('.login-area')
const registerButton = document.querySelector('#register-button')
const username = document.querySelector('#username')

let registerTemplate = 
`

        <h1>Registration</h1>
        <form action="">
            <div class="input-section">
                <input id="username" type="text" placeholder="Username">
                <input type="password" placeholder="Password">
                <input type="password" placeholder="Confirm Password">
            </div>
            <div class="button-section">
                <button id="comeplete-button">Complete</button>
            </div>
        </form>


`
let completeRegistration = 
`
<h1>Welcome ${username}</h1>

`


registerButton.addEventListener('click', e =>{
    e.preventDefault()
    console.log('test');
    loginArea.innerHTML = registerTemplate;

    const completeButton = document.querySelector('#comeplete-button')

    completeButton.addEventListener('click', e =>{
        e.preventDefault()
        console.log(username);
        loginArea.innerHTML = completeRegistration
    })
})

username.addEventListener('onChange', e =>{
console.log('Hello');
})


