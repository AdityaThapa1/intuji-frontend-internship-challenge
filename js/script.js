document.addEventListener('DOMContentLoaded', () => {

    // - FAQ Accordion Functionality -
    const faqItems = document.querySelectorAll('.faq_item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq_question');
        const answer = item.querySelector('.faq_answer');

        questionButton.addEventListener('click', () => {
            const isOpened = questionButton.classList.contains('open');
            if (isOpened) {
                // Close the current accordion
                questionButton.classList.remove('open');
                answer.style.maxHeight = null;
            } else {
                // Open the current accordion
                questionButton.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // - Mobile Menu Toggle (Basic Example) -
    const menuToggle = document.querySelector('.header_menu-toggle');
    const nav = document.querySelector('.header_nav');
    menuToggle.addEventListener('click', () => {
        console.log("Menu button clicked. Add mobile menu logic here.");
    });
});