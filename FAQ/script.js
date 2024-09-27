const faqs = document.querySelectorAll('.faqs');
const icons = document.querySelectorAll('minus');


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})