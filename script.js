const saveContactBtn = document.querySelector('.save-contact');

saveContactBtn.addEventListener('click', function() {
  const phoneNumber = '+1 123-456-7890';
  const email = 'info@mrojey.com';
  const company = 'Mrojey Technologies';

  // Create a new contact object
  const contact = new Contact();
  contact.displayName = 'Mrojey';
  contact.phoneNumbers = [new ContactField('mobile', phoneNumber)];
  contact.emails = [new ContactField('work', email)];
  contact.organizations = [new ContactOrganization(company)];

  // Save the contact
  navigator.contacts.save([contact]);
});