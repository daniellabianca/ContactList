/*
 * Script for index.html
 * Required by scripts.js
 */
 
// Force Strict Mode
"use strict";
 
/*
 * This function is called from contactForm.submit() in scripts.js
 * it creates a Contact Object Literal and returns it to the calling funct
 *
 * @param firstName    - Contact's First Name
 * @param lastName     - Contact's Last Name
 * @param emailAddress - Contact's Email address
 *
 * @return contact    - New Contact Object Lit
 */
function createContact(firstName, lastName, emailAddress) {
  // Contact Object Literal
  var contact = {
    // Properties / vars
    "firstName"    : firstName,
    "lastName"     : lastName,
    "emailAddress" : emailAddress,

    // Behaviors / Functions
    "getName": () => {
        return `${firstName} ${lastName}`;
    },
    "getEmailAddress": () => {
        return emailAddress;
    }
  };
 
  // Return the new Contact
  return contact;
}
 
/*
 * This function displays Contacts on the page
 * it is called from contactForm.submit() in scripts.js and deleteContact() below
 *
 * @param contacts      - Array of Contact Object Lits
 * @param contactsList  - HTML <UL> Element to append dynamically created <LI> Elements
 */
function displayContacts(contacts, contactsList) {
  // Clear current ListItems
  contactsList.html('');

  // Traverse Contact Object Literals in contacts Array and display on page
  $.each(contacts, function(index, contact) {
    contactsList.append(
      $('<li>')
      .attr('class', 'list-group-item  list-group-item-dark text-right')
      .append(
        $('<span>')
        .attr('class', 'text-left')
        .append(`${contact.getName()}: ${contact.getEmailAddress()}`)
      )
      .append(
        $('<button>')
        .attr('type', 'button')
        .attr('class', 'btn btn-info')
        .attr('value', contact.getEmailAddress())
        .append('Edit')
      )
      .append(
        $('<button>')
        .attr('type', 'button')
        .attr('class', 'btn btn-danger')
        .attr('value', contact.getEmailAddress())
        .append('Delete')
      )
    );
  });
}
 
/*
 * Function to delete a Contact and return a new Array of Contacts
 * it is called from $(document).on('click' ...) and editBtn.click() in scripts.js
 *
 * @param emailAddress      - Email Address of Contact to delete
 * @param contacts          - Array of Contact Object Lits
 * @param contactsList      - HTML UL Element to append dynamically created LI Elements to
 *
 * @return filteredContacts - New contacts Array without deleted Contact
 */
function deleteContact(emailAddress, contacts, contactsList) {
  // Filter out selected Contact to delete
  var filteredContacts = contacts.filter((contact) => {
    return contact.getEmailAddress() != emailAddress;
  });

  // Display remaining Contacts on page
  displayContacts(filteredContacts, contactsList);

  // Return new Array
  return filteredContacts;
}
