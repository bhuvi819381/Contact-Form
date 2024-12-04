const form = document.getElementById("contactForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const queryTypeInputs = document.getElementsByName("queryType");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("consent");
const errorMessages = document.querySelectorAll("p.error-message");
const confirmation = document.querySelector(".confirmation");
const btn = document.querySelector(".submit-btn");

// Validate First Name
const validFirstName = () => {
  const firstName = firstNameInput.value;
  const firstNameRegex = /^[a-zA-Z]+$/;
  const errorParagraph = errorMessages[0];

  if (!firstName.match(firstNameRegex)) {
    errorParagraph.style.display = "block";
    firstNameInput.style.borderColor = "var(--Red)";
    return false;
  } else {
    errorParagraph.style.display = "none";
    firstNameInput.style.borderColor = "var(--Green-medium)";
    return true;
  }
};

// Validate Last Name
const validLastName = () => {
  const lastName = lastNameInput.value;
  const lastNameRegex = /^[a-zA-Z]+$/;
  const errorParagraph = errorMessages[1];

  if (!lastName.match(lastNameRegex)) {
    errorParagraph.style.display = "block";
    lastNameInput.style.borderColor = "var(--Red)";
    return false;
  } else {
    errorParagraph.style.display = "none";
    lastNameInput.style.borderColor = "var(--Green-medium)";
    return true;
  }
};

// Validate Email
const validEmail = () => {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorParagraph = errorMessages[2];

  if (!email.match(emailRegex)) {
    errorParagraph.style.display = "block";
    emailInput.style.borderColor = "var(--Red)";
    return false;
  } else {
    errorParagraph.style.display = "none";
    emailInput.style.borderColor = "var(--Green-medium)";
    return true;
  }
};

// Validate Query Type
const validateQueryType = () => {
  const errorParagraph = errorMessages[3];
  const isSelected = Array.from(queryTypeInputs).some((input) => input.checked);

  if (!isSelected) {
    errorParagraph.style.display = "block";
    return false;
  } else {
    errorParagraph.style.display = "none";
    return true;
  }
};

// Validate Message
const validateMessage = () => {
  const message = messageInput.value;
  const errorParagraph = errorMessages[4];

  if (!message.trim()) {
    errorParagraph.style.display = "block";
    messageInput.style.borderColor = "var(--Red)";
    return false;
  } else {
    errorParagraph.style.display = "none";
    messageInput.style.borderColor = "var(--Green-medium)";
    return true;
  }
};

// Validate Consent
const validateConsent = () => {
  const errorParagraph = errorMessages[5];

  if (!consentInput.checked) {
    errorParagraph.style.display = "block";
    return false;
  } else {
    errorParagraph.style.display = "none";
    return true;
  }
};

// Form Submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
});

// Button Click Handler
btn.addEventListener("click", () => {
  const isFirstNameValid = validFirstName();
  const isLastNameValid = validLastName();
  const isEmailValid = validEmail();
  const isQueryTypeValid = validateQueryType();
  const isMessageValid = validateMessage();
  const isConsentValid = validateConsent();

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isQueryTypeValid &&
    isMessageValid &&
    isConsentValid
  ) {
    confirmation.style.display = "block";
    form.reset(); 

     // Clear the confirmation message after 3 seconds
     setTimeout(() => {
      confirmation.style.display = "none";
    }, 3000);
  } else {
    confirmation.style.display = "none";
  }
});
