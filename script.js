document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const requestCategory = document.getElementById('requestCategory').value;
    const sentTo = document.getElementById('sentTo').value;
    const cc = document.getElementById('cc').value;
    const impactLevel = document.getElementById('impactLevel').value;
    const contactDetails = document.getElementById('contactDetails').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const attachment = document.getElementById('attachment').files[0];

    // Validation (basic checks)
    if (!requestCategory || !sentTo || !impactLevel || !contactDetails || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate form submission (you can use AJAX to submit data to your server)
    console.log('Form submitted with data:', {
        requestCategory,
        sentTo,
        cc,
        impactLevel,
        contactDetails,
        subject,
        message,
        attachment
    });

    // Show confirmation message
    document.getElementById('requestForm').reset();
    document.getElementById('confirmationMessage').style.display = 'block';

    // Hide confirmation message after 5 seconds
    setTimeout(() => {
        document.getElementById('confirmationMessage').style.display = 'none';
    }, 5000);
});
