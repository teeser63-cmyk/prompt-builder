let currentStep = 1;
let selectedGrade = null;
let selectedFormat = 'mindmap';
let detailLevel = 2;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log('Конструктор промтов загружен');
    initEventListeners();
});

// Инициализация событий
function initEventListeners() {
    // Барабаны выбора класса
    document.querySelectorAll('.drum').forEach(drum => {
        drum.addEventListener('click', function() {
            selectGrade(this.dataset.grade);
        });
    });

    // Слайдер детализации
    document.getElementById('detailSlider').addEventListener('input', function() {
        detailLevel = parseInt(this.value);
        updateSliderLabels();
    });

    // Кнопки форматов
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectFormat(this.dataset.format);
        });
    });

    // Навигация
    document.getElementById('prevBtn').addEventListener('click', prevStep);
    document.getElementById('nextBtn').addEventListener('click', nextStep);

    // Кнопки действий
    document.getElementById('copyBtn').addEventListener('click', copyPrompt);
    document.getElementById('newPromptBtn').addEventListener('click', resetAll);
    document.getElementById('surpriseBtn').addEventListener('click', generateSurprise);

    // Enter в поле темы
    document.getElementById('topicText').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (currentStep === 1) nextStep();
        }
    });

    // Слушатель изменения текста темы
    document.getElementById('topicText').addEventListener('input', checkNextButton);
    
    // Инициализация модального окна "О проекте"
    initAboutModal();
}

// Функция для модального окна "О проекте"
function initAboutModal() {
    const modal = document.getElementById('aboutModal');
    const btn = document.getElementById('aboutBtn');
    const span = document.getElementsByClassName('close')[0];

    // Открытие модального окна
    btn.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    // Закрытие по крестику
    span.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Закрытие по клику вне окна
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Закрытие по Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}

// Выбор класса
function selectGrade(grade) {
    selectedGrade = grade;
    
    // Анимация барабана
    document.querySelectorAll('.drum').forEach(drum => {
        drum.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Активируем кнопку "Далее" если тема уже введена
    checkNextButton();
}

// Выбор формата
function selectFormat(format) {
    selectedFormat = format;
    
    // Подсветка выбранного формата
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Обновление подписей слайдера
function updateSliderLabels() {
    const labels = document.querySelectorAll('.slider-labels span');
    labels.forEach((label, index) => {
        if (index === detailLevel - 1) {
            label.style.fontWeight = 'bold';
            label.style.color = '#8b4513';
        } else {
            label.style.fontWeight = 'normal';
            label.style.color = '#666';
        }
    });
}

// Проверка возможности перехода дальше
function checkNextButton() {
    const topicText = document.getElementById('topicText').value.trim();
    const canProceed = selectedGrade && topicText;
    document.getElementById('nextBtn').disabled = !canProceed;
}

// Навигация по шагам
function nextStep() {
    const topicText = document.getElementById('topicText').value.trim();
    
    if (currentStep === 1) {
        if (!selectedGrade) {
            alert('Пожалуйста, выберите класс');
            return;
        }
        if (!topicText) {
            alert('Пожалуйста, введите тему урока');
            return;
        }
    }
    
    if (currentStep === 2) {
        generatePrompt();
    }
    
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
    
    // Показываем выбранную тему в финальном шаге
    if (currentStep === 3) {
        document.getElementById('currentTopic').textContent = topicText;
    }
    
    updateProgressBar();
    updateNavigation();
}

function prevStep() {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add('active');
    
    updateProgressBar();
    updateNavigation();
}

// Обновление прогресс-бара
function updateProgressBar() {
    const progress = (currentStep / 3) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
}

// Обновление навигации
function updateNavigation() {
    document.getElementById('prevBtn').disabled = currentStep === 1;
    document.getElementById('nextBtn').textContent = currentStep === 3 ? 'Завершить' : 'Далее →';
    
    if (currentStep === 1) {
        checkNextButton();
    } else {
        document.getElementById('nextBtn').disabled = false;
    }
}

// Генерация промта
function generatePrompt() {
    const topicText = document.getElementById('topicText').value.trim();
    
    if (!selectedGrade || !topicText) {
        console.error('Недостаточно данных для генерации промта');
        return;
    }
    
    const baseTemplates = {
        'mindmap': `Создай ментальную карту на тему "${topicText}"`,
        'table': `Создай сравнительную таблицу по теме "${topicText}"`, 
        'timeline': `Создай хронологическую ленту по теме "${topicText}"`,
        'cards': `Создай карточки-тезисы по теме "${topicText}"`
    };
    
    let promptTemplate = baseTemplates[selectedFormat] || baseTemplates.mindmap;
    
    // Детализация
    let detailSuffix = '';
    switch(detailLevel) {
        case 1:
            detailSuffix = 'Включи основные понятия и структуру.';
            break;
        case 2:
            detailSuffix = 'Включи основные понятия, структуру и конкретные примеры.';
            break;
        case 3:
            detailSuffix = 'Включи подробную структуру, конкретные примеры, имена, даты, ключевые факты и термины.';
            break;
    }
    
    // Учет класса
    let gradeSuffix = '';
    switch(selectedGrade) {
        case '5':
            gradeSuffix = 'Используй простой язык, понятный ученикам 5 класса.';
            break;
        case '6':
            gradeSuffix = 'Используй доступный язык для учеников 6 класса.';
            break;
        case '7':
            gradeSuffix = 'Материал должен быть понятен ученикам 7 класса.';
            break;
        case '8':
            gradeSuffix = 'Учитывай уровень знаний учеников 8 класса.';
            break;
        case '9':
            gradeSuffix = 'Материал для старшеклассников (9 класс), можно использовать профессиональные термины.';
            break;
    }
    
    const fullPrompt = `${promptTemplate} ${detailSuffix} ${gradeSuffix}`;
    
    // Анимация печатной машинки
    typewriterEffect(fullPrompt, document.getElementById('prompt-output'));
}

// Эффект печатной машинки
function typewriterEffect(text, element) {
    element.innerHTML = '';
    element.classList.add('typing');
    
    let i = 0;
    const speed = 10;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing');
        }
    }
    
    type();
}

// Случай
