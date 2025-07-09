// AccessAble Homepage JavaScript
// Handles mobile navigation, form submission, and accessibility features

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle menu visibility
            navMenu.classList.toggle('active');
            
            // Update ARIA attributes
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Focus management
            if (!isExpanded) {
                // Menu is opening - focus first link
                const firstLink = navMenu.querySelector('a');
                if (firstLink) {
                    firstLink.focus();
                }
            }
        });

        // Close mobile menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Email Signup Form Handling
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = signupForm.querySelector('input[type="email"]');
            const submitButton = signupForm.querySelector('button[type="submit"]');
            
            if (emailInput && submitButton) {
                const email = emailInput.value.trim();
                
                // Basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (!email) {
                    showMessage('Please enter your email address.', 'error');
                    emailInput.focus();
                    return;
                }
                
                if (!emailRegex.test(email)) {
                    showMessage('Please enter a valid email address.', 'error');
                    emailInput.focus();
                    return;
                }
                
                // Simulate form submission
                submitButton.textContent = 'Subscribing...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    showMessage('Thank you for subscribing! We\'ll keep you updated on AccessAble\'s progress.', 'success');
                    emailInput.value = '';
                    submitButton.textContent = 'Subscribe';
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }

    // Smooth Scrolling for Internal Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a # or empty
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Get header height for offset
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                // Calculate position
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focus the target element for accessibility
                target.focus({preventScroll: true});
                
                // Add tabindex if element doesn't have one
                if (!target.hasAttribute('tabindex')) {
                    target.setAttribute('tabindex', '-1');
                }
            }
        });
    });

    // Feature Card Interactions
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        
        // Add click and keyboard event handlers
        card.addEventListener('click', function() {
            announceFeature(this);
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                announceFeature(this);
            }
        });
    });

    // Step Cards Interactions
    const stepCards = document.querySelectorAll('.step');
    stepCards.forEach(step => {
        step.setAttribute('tabindex', '0');
        
        step.addEventListener('click', function() {
            announceStep(this);
        });
        
        step.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                announceStep(this);
            }
        });
    });

    // Add loading states for external links
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https"]');
    externalLinks.forEach(link => {
        // Add external link indicator for screen readers
        if (!link.querySelector('.sr-only')) {
            const srText = document.createElement('span');
            srText.className = 'sr-only';
            srText.textContent = ' (opens in new window)';
            link.appendChild(srText);
        }
        
        // Add target and rel attributes for security
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

// Helper Functions

/**
 * Display a message to the user
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showMessage(message, type = 'info') {
    // Remove any existing messages
    const existingMessage = document.querySelector('.user-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `user-message user-message--${type}`;
    messageEl.setAttribute('role', type === 'error' ? 'alert' : 'status');
    messageEl.setAttribute('aria-live', 'polite');
    messageEl.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'error' ? '#dc2626' : '#059669'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        max-width: 90vw;
        text-align: center;
        font-weight: 500;
    `;
    
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateX(-50%) translateY(-10px)';
            messageEl.style.transition = 'all 0.3s ease-out';
            
            setTimeout(() => {
                messageEl.remove();
            }, 300);
        }
    }, 5000);
}

/**
 * Announce feature information for screen readers
 * @param {Element} card - The feature card element
 */
function announceFeature(card) {
    const title = card.querySelector('h3')?.textContent;
    const description = card.querySelector('p')?.textContent;
    
    if (title && description) {
        const announcement = `Feature: ${title}. ${description}`;
        announceToScreenReader(announcement);
    }
}

/**
 * Announce step information for screen readers
 * @param {Element} step - The step element
 */
function announceStep(step) {
    const number = step.querySelector('.step-number')?.textContent;
    const title = step.querySelector('h3')?.textContent;
    const description = step.querySelector('p')?.textContent;
    
    if (number && title && description) {
        const announcement = `Step ${number}: ${title}. ${description}`;
        announceToScreenReader(announcement);
    }
}

/**
 * Announce text to screen readers
 * @param {string} text - Text to announce
 */
function announceToScreenReader(text) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = text;
    
    document.body.appendChild(announcement);
    
    // Clean up after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Initialize accessibility enhancements
function initAccessibilityEnhancements() {
    // Add skip links for sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        if (!section.hasAttribute('tabindex')) {
            section.setAttribute('tabindex', '-1');
        }
    });
    
    // Enhance focus indicators
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Add keyboard navigation styles
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #1366D9 !important;
        outline-offset: 2px !important;
    }
    
    .user-message {
        transition: all 0.3s ease-out;
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibilityEnhancements);
} else {
    initAccessibilityEnhancements();
}