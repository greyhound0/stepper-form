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
const next = document.querySelector(".next")
const previous = document.querySelector('.previous')
const next1 = document.querySelector('.next1')
const previous1 = document.querySelector('.previous1')
const submit = document.querySelector('.submit')


function validateEmail(){
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!valid.test(email.value)){
        // console.log(valid.test(email.value))
         error.style.display = "block";
         
                 
       }
       else if(password.value === confirmPassword.value && valid.test(email.value))
       { 
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
            firstStep.item(item=>item).classList.add('inactive');
            secondStep.item(item=>item).classList.add('active');

        }
        else {

            error.innerText = 'password not same in both fields';
            error.style.display = 'block';
        }
    }
    
 
next.addEventListener('click', validateEmail)
previous.addEventListener('click', () => {
    console.log('@@@')
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
    }
    else {
        error.innerText = 'fields cannot be empty';
        error.style.display = 'block';
    }
}

next1.addEventListener('click', personalDetails);
previous1.addEventListener('click', ()=> {
    thirdStep.item(item=>item).classList.add('inactive');
    thirdStep.item(item=>item).classList.remove('active');
    secondStep.item(item=>item).classList.add('active');
})

submit.addEventListener('click', ()=>{
    if(facebook.value.length >0 && twitter.value.length >0 ){
        generateDataTable();
    }
})

function generateDataTable(){

}