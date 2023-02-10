const firstStep = document.getElementsByClassName("firstStep");
const secondStep = document.getElementsByClassName("secondStep");
const thirdStep = document.getElementsByClassName("thirdStep");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const facebook = document.getElementById("facebook");
const twitter = document.getElementById("twitter");
const error = document.getElementById("error");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const next = document.querySelector(".next")
const previous = document.querySelector('.previous')
const next1 = document.querySelector('.next1')
const previous1 = document.querySelector('.previous1')
const submit = document.querySelector('.submit')


function validateEmail(){
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!valid.test(email.value)){
         error.style.display = "block";
         
                 
       }
       else if(password.value === confirmPassword.value && valid.test(email.value))
       { 
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
            firstStep.item(item=>item).classList.add('inactive');
            secondStep.item(item=>item).classList.add('active');
            error.style.display = 'none'

        }
        else {

            error.innerText = 'password not same in both fields';
            error.style.display = 'block';
        }
    }
    
 
next.addEventListener('click', validateEmail)
previous.addEventListener('click', () => {
    secondStep.item(item=>item).classList.add('inactive');
    secondStep.item(item=>item).classList.remove('active');
    firstStep.item(item=>item).classList.add('active');
} )

function personalDetails(){
    if(phone.value.length === 10 && firstName.value.length > 0) {
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    secondStep.item(item=>item).classList.add('inactive');
    secondStep.item(item=>item).classList.remove('active');
    thirdStep.item(item=>item).classList.add('active');
    error1.style.display =  'none';

    }
    else if(phone.value.length != 10){
        error1.innerText = 'enter a valid phone no.';
        error1.style.display = 'block'
    }
    else {
        error1.innerText = 'fields cannot be empty';
        error1.style.display = 'block';
    }
}

next1.addEventListener('click', personalDetails);
previous1.addEventListener('click', ()=> {
    thirdStep.item(item=>item).classList.add('inactive');
    thirdStep.item(item=>item).classList.remove('active');
    secondStep.item(item=>item).classList.add('active');
    error1.style.display = 'none';
})

submit.addEventListener('click', ()=>{
    if(facebook.value.length >0 && twitter.value.length >0 ){
        error2.style.display = 'none'
        generateDataTable();
    }
    else{
        error2.style.display = 'block';
    }
})
window.addEventListener('load', localStorage.clear)

function generateDataTable(){
    thirdStep.item(item=>item).classList.add('inactive');
    thirdStep.item(item=>item).classList.remove('active');
}