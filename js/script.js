document.addEventListener('DOMContentLoaded', () => {

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        // CORRECTED: The selector now uses a single underscore to match the HTML.
        const questionButton = item.querySelector('.faq-item_question');

        // Check if the button exists before adding a listener
        if (questionButton) {
            questionButton.addEventListener('click', () => {
                const clickedFaqItem = questionButton.closest('.faq-item');
                const isAlreadyOpen = clickedFaqItem.classList.contains('is-open');

                // --- Close all other accordions first ---
                faqItems.forEach(otherItem => {
                    if (otherItem !== clickedFaqItem) { // Don't close the one we're about to open
                        otherItem.classList.remove('is-open');
                        const answer = otherItem.querySelector('.faq-item_answer');
                        if (answer) {
                            answer.style.maxHeight = null;
                        }
                    }
                });
                
                // Toggle the state of the clicked item
                if (isAlreadyOpen) {
                    clickedFaqItem.classList.remove('is-open');
                    const answer = clickedFaqItem.querySelector('.faq-item_answer');
                    if (answer) {
                        answer.style.maxHeight = null;
                    }
                } else {
                    clickedFaqItem.classList.add('is-open');
                    // CORRECTED: The selector now uses a single underscore here as well.
                    const answer = clickedFaqItem.querySelector('.faq-item_answer');
                    if (answer) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    }
                }
            });
        }
    });

    // Automatically set the height for any FAQ item that is already open on page load
    const initiallyOpen = document.querySelector('.faq-item.is-open');
    if (initiallyOpen) {
        // CORRECTED: Selector updated here too.
        const answer = initiallyOpen.querySelector('.faq-item_answer');
        if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }

    // --- Mobile Menu Toggle Logic (Basic Example) ---
    const menuToggle = document.querySelector('.header_menu-toggle');
    const nav = document.querySelector('.header_nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // A common way to handle this is to toggle an 'is-active' class
            // that is styled with CSS to appear.
            nav.classList.toggle('is-active'); 
            console.log("Mobile menu toggled.");
        });
    }
});