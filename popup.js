// Get the current tab's URL
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;
  
    // Gmail Button
    document.getElementById('gmailButton').addEventListener('click', function () {
      var gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=Check this out&body=${encodeURIComponent(currentUrl)}`;
      window.open(gmailUrl, '_blank');
    });
  
    // WhatsApp Button
    document.getElementById('whatsappButton').addEventListener('click', function () {
      var whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
      window.open(whatsappUrl, '_blank');
    });
  
    // Handle predefined email contacts
    document.querySelectorAll('.email-contact').forEach(button => {
      button.addEventListener('click', function () {
        var email = this.getAttribute('data-email');
        var subject = "Check this out!";
        var body = encodeURIComponent(currentUrl);
        var mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
        window.open(mailtoUrl, '_blank');
      });
    });
  });
  