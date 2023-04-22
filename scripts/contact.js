// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevents the form from actually submitting

  // create a new <p> element and set its contents
  const thankYouMessage = document.createElement('p');
  thankYouMessage.textContent = "Thank you for your message";

  // set the font size to 24 pixels
  thankYouMessage.style.fontSize = '24px';

  // replace the contents of the contact page with the new <p> element
  contactPage.innerHTML = '';
  contactPage.appendChild(thankYouMessage);
});