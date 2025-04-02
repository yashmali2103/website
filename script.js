// Example: Simple form submission alert
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for registering your interest!');
        form.reset();
      });
    }
  });
  


// Simple JS to toggle FAQ answers
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      // 1. Close all other open answers
      questions.forEach(otherQ => {
        if (otherQ !== q) {
          const otherFaqId = otherQ.getAttribute('data-faq');
          const otherAnswer = document.getElementById(otherFaqId);
          otherAnswer.classList.remove('show');

          // Reset the plus icon
          const otherIcon = otherQ.querySelector('.plus-icon');
          if (otherIcon.textContent === '−') {
            otherIcon.textContent = '+';
          }
        }
      });

      // 2. Toggle the clicked answer
      const faqId = q.getAttribute('data-faq');
      const answer = document.getElementById(faqId);
      const plusIcon = q.querySelector('.plus-icon');

      if (answer.classList.contains('show')) {
        // Currently open, so close it
        answer.classList.remove('show');
        plusIcon.textContent = '+';
      } else {
        // Currently closed, so open it
        answer.classList.add('show');
        plusIcon.textContent = '−';
      }
    });
  });
});