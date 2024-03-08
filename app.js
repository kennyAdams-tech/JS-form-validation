document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('zipcode').addEventListener('blur', validateZipcode)
document.getElementById('phone').addEventListener('blur', validatePhone)



function validateName() {
    let icon_1 = document.querySelector('.form-group-1 i')
    let input= document.querySelector('.form-group-1 input')
    let invalid_feedback = document.querySelector('.invalid-feedback-1')
    let name = document.getElementById('name');
    let re = /^[a-zA-Z]{2,10}$/;
     if (!re.test(name.value)) {
        invalid_feedback.style.display = 'flex';
        input.style.border = '2px solid red';
        icon_1.style.display = 'none';
        icon_1.classList.remove('bi bi-check-lg');
        
     } else {
        invalid_feedback.style.display = 'none'
        input.style.border = '2px solid green'
        icon_1.style.display = 'block'
        icon_1.classList.add('bi bi-check-lg')
     }
}

function validateEmail() {
   let icon_1 = document.querySelector('.form-group-2 i')
   let input= document.querySelector('.form-group-2 input')
   let invalid_feedback = document.querySelector('.invalid-feedback-2')
   let email = document.getElementById('email');
   let re = /^([a-zA-Z\d\-\.\_]+)@([a-zA-Z\d\-\.\_]+)\.[a-zA-Z]{2,5}$/;
    if (!re.test(email.value)) {
       invalid_feedback.style.display = 'block';
       input.style.border = '2px solid red'
       icon_1.style.display = 'none';
        icon_1.classList.remove('bi bi-check-lg');
    } else {
       invalid_feedback.style.display = 'none'
       input.style.border = '2px solid green'
       icon_1.style.display = 'block'
       icon_1.classList.add('bi bi-check-lg')
    }
}

function validateZipcode() {
   let icon_1 = document.querySelector('.form-group-3 i')
   let input= document.querySelector('.form-group-3 input')
   let invalid_feedback = document.querySelector('.invalid-feedback-3')
   let zipcode = document.getElementById('zipcode');
   let re = /^\d{5}([-]\d{4})?$/;
    if (!re.test(zipcode.value)) {
       invalid_feedback.style.display = 'block';
       input.style.border = '2px solid red'
       icon_1.style.display = 'none';
        icon_1.classList.remove('bi bi-check-lg');
      
    } else {
       invalid_feedback.style.display = 'none'
       input.style.border = '2px solid green'
       icon_1.style.display = 'block'
       icon_1.classList.add('bi bi-check-lg')
    }
}

function validatePhone() {
   let icon_1 = document.querySelector('.form-group-4 i')
   let input= document.querySelector('.form-group-4 input')
   let invalid_feedback = document.querySelector('.invalid-feedback-4')
   let phone = document.getElementById('phone');
   let re = /^\(?\d{3}\)?([.\-\ ]?\d{3})([.\-\ ]?\d{4})$/;
    if (!re.test(phone.value)) {
       invalid_feedback.style.display = 'block';
       input.style.border = '2px solid red'
       icon_1.style.display = 'none';
        icon_1.classList.remove('bi bi-check-lg');
    } else {
       invalid_feedback.style.display = 'none'
       input.style.border = '2px solid green'
       icon_1.style.display = 'block'
       icon_1.classList.add('bi bi-check-lg')
    }
}













