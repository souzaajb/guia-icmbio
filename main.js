/* ==========================================
   GUIA PRÁTICO ICMBIO - MAIN JAVASCRIPT
   ========================================== */

// DOM Elements
const elements = {
    themeToggle: document.getElementById('theme-toggle'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    mainNav: document.getElementById('main-nav'),
    backToTop: document.getElementById('back-to-top'),
    progressBar: document.getElementById('progress-bar'),
    accordions: document.querySelectorAll('.accordion'),
    sumarioFilter: document.getElementById('sumario-filter'),
    sumarioList: document.getElementById('sumario-list'),
    feedbackForm: document.getElementById('feedback-form'),
    feedbackSuccess: document.getElementById('feedback-success'),
    increaseFontBtn: document.getElementById('increase-font'),
    decreaseFontBtn: document.getElementById('decrease-font'),
    highContrastBtn: document.getElementById('high-contrast'),
};

// ==========================================
// THEME TOGGLE
// ==========================================
function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    elements.themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = elements.themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
    elements.mobileMenuToggle?.addEventListener('click', () => {
        const isExpanded = elements.mobileMenuToggle.getAttribute('aria-expanded') === 'true';

        elements.mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        elements.mainNav?.classList.toggle('active');

        const icon = elements.mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.className = isExpanded ? 'fas fa-bars' : 'fas fa-times';
        }
    });

    // Fechar menu ao clicar em link
    elements.mainNav?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            elements.mainNav?.classList.remove('active');
            elements.mobileMenuToggle?.setAttribute('aria-expanded', 'false');
            const icon = elements.mobileMenuToggle?.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });
}

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================
function initProgressBar() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        if (elements.progressBar) {
            elements.progressBar.style.width = scrolled + '%';
            elements.progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
        }
    });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            elements.backToTop?.classList.add('visible');
        } else {
            elements.backToTop?.classList.remove('visible');
        }
    });

    elements.backToTop?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// ACCORDION
// ==========================================
function initAccordions() {
    elements.accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Fechar todos os outros accordions
            elements.accordions.forEach(acc => {
                acc.setAttribute('aria-expanded', 'false');
                const panel = acc.nextElementSibling;
                panel.classList.remove('active');
            });

            // Alternar o accordion clicado
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                const panel = this.nextElementSibling;
                panel.classList.add('active');

                // Scroll suave para o accordion
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });
}

// ==========================================
// SUMÁRIO FILTER
// ==========================================
function initSumarioFilter() {
    elements.sumarioFilter?.addEventListener('input', (e) => {
        const filterValue = e.target.value.toLowerCase();
        const items = elements.sumarioList?.querySelectorAll('li');

        items?.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filterValue)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// ==========================================
// FEEDBACK FORM
// ==========================================
function initFeedbackForm() {
    const messageField = document.getElementById('feedback-message');
    const charCount = messageField?.nextElementSibling;

    // Character counter
    messageField?.addEventListener('input', (e) => {
        const length = e.target.value.length;
        if (charCount && charCount.classList.contains('char-count')) {
            charCount.textContent = `${length} / 1000 caracteres`;
            if (length > 1000) {
                charCount.style.color = 'var(--error)';
            } else {
                charCount.style.color = '';
            }
        }
    });

    // Form submission
    elements.feedbackForm?.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validação
        if (!validateForm()) return;

        // Coletar dados
        const formData = new FormData(elements.feedbackForm);
        const data = Object.fromEntries(formData);

        try {
            // Simular envio (em produção, fazer requisição real)
            await simulateSubmission(data);

            // Mostrar mensagem de sucesso
            elements.feedbackForm.style.display = 'none';
            elements.feedbackSuccess.style.display = 'flex';

            // Reset form
            elements.feedbackForm.reset();

            // Scroll para mensagem
            elements.feedbackSuccess.scrollIntoView({ behavior: 'smooth' });

            // Restaurar formulário após 5 segundos
            setTimeout(() => {
                elements.feedbackForm.style.display = 'block';
                elements.feedbackSuccess.style.display = 'none';
            }, 5000);

        } catch (error) {
            console.error('Erro ao enviar feedback:', error);
            alert('Erro ao enviar feedback. Por favor, tente novamente.');
        }
    });
}

function validateForm() {
    let isValid = true;
    const requiredFields = elements.feedbackForm?.querySelectorAll('[required]');

    requiredFields?.forEach(field => {
        const errorMsg = field.parentElement.querySelector('.error-message');

        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'var(--error)';
            if (errorMsg) {
                errorMsg.textContent = 'Este campo é obrigatório';
            }
        } else {
            field.style.borderColor = '';
            if (errorMsg) {
                errorMsg.textContent = '';
            }
        }
    });

    return isValid;
}

function simulateSubmission(data) {
    return new Promise((resolve) => {
        // Salvar no localStorage (simulação)
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
        feedbacks.push({
            ...data,
            timestamp: new Date().toISOString(),
            id: Date.now()
        });
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

        setTimeout(resolve, 1000);
    });
}

// ==========================================
// ACESSIBILIDADE - FONT SIZE
// ==========================================
let currentFontSize = 16;

function initAccessibilityControls() {
    elements.increaseFontBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        currentFontSize = Math.min(currentFontSize + 2, 24);
        document.documentElement.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize);
    });

    elements.decreaseFontBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        currentFontSize = Math.max(currentFontSize - 2, 12);
        document.documentElement.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize);
    });

    elements.highContrastBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('high-contrast');
        const isHighContrast = document.body.classList.contains('high-contrast');
        localStorage.setItem('highContrast', isHighContrast);
    });

    // Restaurar configurações salvas
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.documentElement.style.fontSize = currentFontSize + 'px';
    }

    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    if (savedHighContrast) {
        document.body.classList.add('high-contrast');
    }
}

// ==========================================
// FÓRUM
// ==========================================
function initForum() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            filterForumTopics(filter);
        });
    });
}

function filterForumTopics(filter) {
    const topics = document.querySelectorAll('.forum-topic');

    topics.forEach(topic => {
        if (filter === 'all') {
            topic.style.display = '';
        } else {
            // Implementar filtro baseado em categoria
            // Por enquanto, apenas mostra todos
            topic.style.display = '';
        }
    });
}

// ==========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ==========================================
// LOAD MORE CHAPTERS
// ==========================================
function initLoadMoreChapters() {
    const loadMoreBtn = document.getElementById('load-more-chapters');
    loadMoreBtn?.addEventListener('click', () => {
        // Implementar carregamento dinâmico de mais capítulos
        alert('Funcionalidade de carregar mais capítulos em desenvolvimento!');
    });
}

// ==========================================
// ANALYTICS (simulação)
// ==========================================
function trackPageView() {
    // Em produção, integrar com Google Analytics ou similar
    console.log('Page view tracked:', window.location.href);
}

function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initProgressBar();
    initBackToTop();
    initAccordions();
    initSumarioFilter();
    initFeedbackForm();
    initAccessibilityControls();
    initForum();
    initSmoothScroll();
    initLoadMoreChapters();
    trackPageView();
});

// Service Worker registration (para PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
