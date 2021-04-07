const loginArea = document.querySelector('.login-area')
const registerButton = document.querySelector('#register-button')


const test = document.querySelector('#username')

let registerTemplate = 
`
        <h1>Registration</h1>
        <form action="">
            <div class="input-section">
                <input id="usernameTwo" type="text" placeholder="Username">
                <input type="password" placeholder="Password">
                <input type="password" placeholder="Confirm Password">
            </div>
            <div class="button-section">
                <button id="comeplete-button">Complete</button>
            </div>
        </form>
`

test.addEventListener('onchange', e =>{
    e.preventDefault()
    console.log(test.value);
})


let storeName


registerButton.addEventListener('click', e =>{
    e.preventDefault()
    loginArea.innerHTML = registerTemplate;
    const completeButton = document.querySelector('#comeplete-button')
    
    
    

    completeButton.addEventListener('click', e =>{
        e.preventDefault()
        const username = document.querySelector('#usernameTwo')
        console.log(storeName);
        storeName = username.value
        loginArea.innerHTML = 
        `
        <h1>Welcome ${storeName}</h1>
        <p>Please Sign in.</p>
        <form action="">
            <div class="input-section">
                <input id="usernameTwo" type="text" placeholder="Username">
                <input type="password" placeholder="Password">
            </div>
            <div class="button-section">
                <button id="comeplete-button">Sign in</button>
            </div>
        </form>

        `
        
    })
})




