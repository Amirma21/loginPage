const login = document.querySelector(".login")
const signup = document.querySelector(".signup")
const dynamicBtn = document.querySelector(".dynamic-btn")
const signUpForm = document.querySelector(".signup-form")
const loginForm = document.querySelector(".loginform")

signup.addEventListener("click", () => {
    dynamicBtn.style.right = "50%"
    signUpForm.style.right = "0px"
    signUpForm.style.display = "block"
    loginForm.style.display = "none"

})

login.addEventListener("click", () => {
    dynamicBtn.style.right = "0%"
    loginForm.style.display = "block"
    signUpForm.style.display = "none"

})
