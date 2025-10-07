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
    
      document.querySelector('a[href="#Skills"]').addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSection = document.getElementById('Skills');
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
     document.querySelector('a[href="#Certificates"]').addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSection = document.getElementById('Certificates');
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
        


 



