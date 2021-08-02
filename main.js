const firstName = document.querySelector('#firstName'),
  lastName = document.querySelector('#lastName'),
  email = document.querySelector('#email'),
  password = document.querySelector('#password');

document.querySelector('#form').addEventListener('submit', function (e) {
  e.preventDefault();

  // check input
  checkInput();
})

function checkInput() {
  const firstNameValue = firstName.value.trim(),
    lastNameValue = lastName.value.trim(),
    emailValue = email.value.trim(),
    passwordValue = password.value.trim();

  if (firstNameValue === '') {
    // show error
    // add error class
    showError(firstName, 'First Name cannot be empty');
  }
  if (lastNameValue === '') {
    // show error
    // add error class
    showError(lastName, 'Last Name cannot be empty');
  }

  if (emailValue === '') {
    showError(email, 'Looks like this is not an email');
  } else if (!isEmail(emailValue)) {
    showError(email, 'Looks like this is not an email');
  }

  if (passwordValue === '') {
    showError(password, "Password cannot be empty");
  }
}

function showError(input, msg) {
  // get parent element of the input
  const formField = input.parentElement;

  // get the small element
  const errormsg = formField.querySelector("small");

  // add error message
  errormsg.innerText = msg;

  // add error class
  formField.classList.add('error');
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}