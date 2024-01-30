document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("backgroundMusic");
    var isMusicPlaying = false;
    var notificationPopup = document.getElementById("notificationPopup");

    audio.addEventListener("playing", function() {
        isMusicPlaying = true;
        hideNotification();
    });

    document.addEventListener("click", function() {
        if (!isMusicPlaying) {
            audio.play();
            isMusicPlaying = true;
            hideNotification();
        }
    });

    function hideNotification() {
        notificationPopup.style.display = "none";
    }
});



            function toggleHeader() {
                var header = document.querySelector('header');
                var titleSection = document.querySelector('#title');

                if (window.pageYOffset >= titleSection.offsetTop + titleSection.offsetHeight) {
                    header.classList.add('show-header');
                } else {
                    header.classList.remove('show-header');
                }
            }



            window.addEventListener('scroll', toggleHeader);

            function smoothScroll(target) {
                var element = document.querySelector(target);
                var position = element.offsetTop;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
          


            function submitForm() {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const topic = document.getElementById('topic').value;
                const message = document.getElementById('message').value;
              
                const data = {
                  username: 'Contact Form',
                  content: `**Name:** ${name}\n**Email/Discord:** ${email}\n**Topic:** ${topic}\n**- Message:** ${message}`,
                };
              
                const webhookUrl = 'https://discord.com/api/webhooks/1181791561844019270/Eag1o0huM_RmXNBjMXAkGt8jV58FcUdTryjiXG7lmE2KJoH16KHoK88t7gTSagP5x8Ka';
              
                fetch(webhookUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Error');
                  }
                  alert('Message Sent!');
                })
                .catch(error => {
                  console.error('Error: ', error);
                });
              }