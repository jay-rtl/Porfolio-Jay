document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll when clicking on the "Education" link
    document.querySelector('a[href="#Edu"]').addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.getElementById('Edu');
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
    document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSection = document.getElementById('home');
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
      document.querySelector('a[href="#Contact"]').addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSection = document.getElementById('Contact');
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
      document.querySelector('a[href="#Acco"]').addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSection = document.getElementById('Acco');
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });


  });