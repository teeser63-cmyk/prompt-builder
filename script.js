// Данные для конструктора
const historyData = {
    "10": {
        "ancient_civilizations": {
            "name": "Древнейшие цивилизации и догосударственный период",
            "key_periods": ["Неолитическая революция", "Индоеропейская экспансия", "Бронзовый век", "Железный век"],
            "key_events": ["Расселение славян", "Образование племенных союзов"],
            "key_figures": ["Племенные вожди", "Жрецы", "Ремесленники"]
        },
        "middle_ages": {
            "name": "Средневековье и ВКЛ",
            "key_periods": ["Образование Полоцкого княжества", "Великое княжество Литовское", "Крещение Руси"],
            "key_events": ["Грюнвальдская битва", "Кревская уния", "Принятие Статутов ВКЛ"],
            "key_figures": ["Всеслав Чародей", "Витовт", "Ягайло"]
        },
        "early_modern": {
            "name": "Раннее Новое время",
            "key_periods": ["Речь Посполитая", "Контрреформация", "Войны XVII века"],
            "key_events": ["Люблинская уния", "Разделы Речи Посполитой"],
            "key_figures": ["Лев Сапега", "Симеон Полоцкий", "Кастусь Калиновский"]
        },
        "19_century": {
            "name": "XIX - начало XX века",
            "key_periods": ["Восстания 1830-1863 гг.", "Отмена крепостного права", "Формирование нации"],
            "key_events": ["Восстание Калиновского", "Революция 1905 года", "Первая мировая война"],
            "key_figures": ["Винцент Дунин-Марцинкевич", "Франтишек Богушевич", "Янка Купала"]
        },
        "soviet_period": {
            "name": "БССР 1917-1945",
            "key_periods": ["Образование БССР", "Индустриализация", "Великая Отечественная война"],
            "key_events": ["Польско-советская война", "Операция Багратион", "Партизанское движение"],
            "key_figures": ["Александр Червяков", "Петр Машеров", "Василий Корж"]
        },
        "modern": {
            "name": "Современная Беларусь",
            "key_periods": ["Провозглашение независимости", "Принятие Конституции", "Современный период"],
            "key_events": ["Распад СССР", "Референдумы", "Создание Союзного государства"],
            "key_figures": ["Станислав Шушкевич", "Вячеслав Кебич", "Александр Лукашенко"]
        }
    },
    "11": {
        "industrial": {
            "name": "Индустриальное общество",
            "key_periods": ["Промышленная революция", "Развитие капитализма", "Урбанизация"],
            "key_events": ["Отмена крепостного права", "Строительство железных дорог", "Развитие промышленности"],
            "key_figures": ["Предприниматели", "Рабочий класс", "Интеллигенция"]
        },
        "ww_period": {
            "name": "1917-1945 годы",
            "key_periods": ["Революции 1917 года", "Межвоенный период", "Вторая мировая война"],
            "key_events": ["Создание БССР", "Западная Беларусь в Польше", "Освобождение Беларуси"],
            "key_figures": ["Политические деятели", "Военачальники", "Партизаны"]
        },
        "postwar": {
            "name": "Послевоенный период",
            "key_periods": ["Восстановление хозяйства", "Научно-техническая революция", "Застойный период"],
            "key_events": ["Индустриализация", "Развитие науки", "Культурное развитие"],
            "key_figures": ["Ученые", "Писатели", "Хозяйственные руководители"]
        },
        "sovereign": {
            "name": "Суверенная Беларусь",
            "key_periods": ["Распад СССР", "Становление государственности", "Современное развитие"],
            "key_events": ["Принятие Конституции", "Экономические реформы", "Международное сотрудничество"],
            "key_figures": ["Государственные деятели", "Дипломаты", "Экономисты"]
        },
        "globalization": {
            "name": "Глобализация и Беларусь",
            "key_periods": ["Формирование многополярного мира", "Интеграционные процессы", "Современные вызовы"],
            "key_events": ["Создание ЕАЭС", "Международные санкции", "Цифровая трансформация"],
            "key_figures": ["Международные эксперты", "IT-специалисты", "Дипломаты"]
        }
    }
};

// Шаблоны промтов для разных типов карт
const mapTemplates = {
    "chronology": {
        "name": "Хронологическая лента",
        "template": "Создай детальную хронологическую ленту по теме \"{TOPIC}\". Включи основные периоды и ключевые события в правильной временной последовательности. Для каждого события укажи дату и краткое описание."
    },
    "comparison": {
        "name": "Сравнительная таблица", 
        "template": "Создай сравнительную таблицу по теме \"{TOPIC}\". Выдели основные аспекты для сравнения и представь информацию в виде четкой таблицы с колонками для разных периодов/явлений."
    },
    "structure": {
        "name": "Структурная схема",
        "template": "Создай структурную схему по теме \"{TOPIC}\". Покажи иерархию и взаимосвязи между различными элементами. Включи основные подсистемы и их компоненты."
    },
    "causes_effects": {
        "name": "Причины и следствия",
        "template": "Создай ментальную карту анализа причин и следствий по теме \"{TOPIC}\". Выдели основные причины, непосредственные события и долгосрочные последствия. Покажи причинно-следственные связи."
    },
    "personalities": {
        "name": "Исторические личности", 
        "template": "Создай ментальную карту по теме \"{TOPIC}\" с акцентом на исторических личностях. Включи ключевых деятелей, их вклад и взаимосвязи между ними."
    },
    "culture": {
        "name": "Культура и наука",
        "template": "Создай ментальную карту по теме \"{TOPIC}\" с фокусом на культурные и научные достижения. Включи направления искусства, научные открытия, памятники культуры и их создателей."
    }
};

// Переменные состояния
let currentStep = 1;
let selectedGrade = null;
let selectedTopic = null;
let selectedMapType = null;
let detailLevel = 2;
let customTopicText = '';

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log('Конструктор исторических промтов загружен');
    initEventListeners();
});

// Инициализация событий
function initEventListeners() {
    // Выбор класса
    document.querySelectorAll('.period-card').forEach(card => {
        card.addEventListener('click', function() {
            selectGrade(this.dataset.grade);
        });
    });

    // Выбор темы
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectTopic(this.dataset.topic);
        });
    });

    // Выбор типа карты
    document.querySelectorAll('.map-type-card').forEach(card => {
        card.addEventListener('click', function() {
            selectMapType(this.dataset.type);
        });
    });

    // Слайдер детализации
    document.getElementById('detailSlider').addEventListener('input', function() {
        detailLevel = parseInt(this.value);
        updateSliderLabels();
    });

    // Поле пользовательской темы
    document.getElementById('customTopic').addEventListener('input', function() {
        customTopicText = this.value.trim();
        if (customTopicText) {
            // Сбрасываем выбранную тему из списка
            document.querySelectorAll('.topic-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            selectedTopic = 'custom';
        }
        checkNextButton();
    });

    // Навигация
    document.getElementById('prevBtn').addEventListener('click', prevStep);
    document.getElementById('nextBtn').addEventListener('click', nextStep);

    // Кнопки действий
    document.getElementById('copyBtn').addEventListener('click', copyPrompt);
    document.getElementById('newPromptBtn').addEventListener('click', resetAll);
    document.getElementById('surpriseBtn').addEventListener('click', generateSurprise);

    console.log('Все события инициализированы');
}

// Выбор класса
function selectGrade(grade) {
    selectedGrade = grade;
    
    // Подсветка выбранного класса
    document.querySelectorAll('.period-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Показываем соответствующие темы
    document.getElementById('topicSection10').style.display = 'none';
    document.getElementById('topicSection11').style.display = 'none';
    document.getElementById(`topicSection${grade}`).style.display = 'block';
    
    // Сбрасываем выбранную тему
    selectedTopic = null;
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Очищаем пользовательскую тему
    document.getElementById('customTopic').value = '';
    customTopicText = '';
    
    checkNextButton();
}

// Выбор темы
function selectTopic(topic) {
    selectedTopic = topic;
    customTopicText = '';
    document.getElementById('customTopic').value = '';
    
    // Подсветка выбранной темы
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    checkNextButton();
}

// Выбор типа карты
function selectMapType(mapType) {
    selectedMapType = mapType;
    
    // Подсветка выбранного типа
    document.querySelectorAll('.map-type-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    checkNextButton();
}

// Обновление подписей слайдера
function updateSliderLabels() {
    const labels = document.querySelectorAll('.slider-labels span');
    labels.forEach((label, index) => {
        if (index === detailLevel - 1) {
            label.style.fontWeight = 'bold';
            label.style.color = '#8B0000';
        } else {
            label.style.fontWeight = 'normal';
            label.style.color = '#666';
        }
    });
}

// Проверка возможности перехода дальше
function checkNextButton() {
    let canProceed = false;
    
    if (currentStep === 1) {
        canProceed = selectedGrade && (selectedTopic || customTopicText);
    } else if (currentStep === 2) {
        canProceed = selectedMapType !== null;
    }
    
    document.getElementById('nextBtn').disabled = !canProceed;
}

// Навигация по шагам
function nextStep() {
    // Проверки для шага 1
    if (currentStep === 1) {
        if (!selectedGrade) {
            alert('Пожалуйста, выберите класс');
            return;
        }
        if (!selectedTopic && !customTopicText) {
            alert('Пожалуйста, выберите или введите тему');
            return;
        }
    }
    
    // Проверки для шага 2
    if (currentStep === 2) {
        if (!selectedMapType) {
            alert('Пожалуйста, выберите тип ментальной карты');
            return;
        }
        generatePrompt();
    }
    
    // Переход к следующему шагу
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
    
    // Обновление информации в финальном шаге
    if (currentStep === 3) {
        updateResultInfo();
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

// Обновление информации в результатах
function updateResultInfo() {
    let topicName = '';
    
    if (selectedTopic === 'custom') {
        topicName = customTopicText;
    } else if (selectedGrade && selectedTopic) {
        topicName = historyData[selectedGrade][selectedTopic].name;
    }
    
    document.getElementById('currentTopic').textContent = topicName;
    document.getElementById('currentMapType').textContent = mapTemplates[selectedMapType].name;
}

// Генерация промта
function generatePrompt() {
    let topicName = '';
    let topicData = null;
    
    // Получаем данные темы
    if (selectedTopic === 'custom') {
        topicName = customTopicText;
    } else if (selectedGrade && selectedTopic) {
        topicData = historyData[selectedGrade][selectedTopic];
        topicName = topicData.name;
    }
    
    if (!topicName) {
        console.error('Не удалось определить тему');
        return;
    }
    
    // Базовый шаблон
    let prompt = mapTemplates[selectedMapType].template.replace('{TOPIC}', topicName);
    
    // Добавляем детализацию
    let detailText = '';
    switch(detailLevel) {
        case 1:
            detailText = 'Сосредоточься на ключевых фактах и основных событиях.';
            break;
        case 2:
            detailText = 'Добавь конкретные примеры и иллюстрации к основным положениям.';
            break;
        case 3:
            detailText = 'Включи максимально подробную информацию с датами, именами, статистикой и историческими оценками.';
            break;
    }
    prompt += ' ' + detailText;
    
    // Добавляем специфические для истории элементы
    if (topicData && selectedTopic !== 'custom') {
        prompt += ' Учти следующие исторические аспекты:';
        
        if (topicData.key_periods && topicData.key_periods.length > 0) {
            prompt += ` Ключевые периоды: ${topicData.key_periods.join(', ')}.`;
        }
        
        if (topicData.key_events && topicData.key_events.length > 0) {
            prompt += ` Важные события: ${topicData.key_events.join(', ')}.`;
        }
        
        if (topicData.key_figures && topicData.key_figures.length > 0) {
            prompt += ` Исторические личности: ${topicData.key_figures.join(', ')}.`;
        }
    }
    
    // Добавляем инструкции для AmyMind
    prompt += ' Структурируй информацию в виде четкой ментальной карты с основными ветвями и подветвями. Используй логические связи между элементами.';
    
    // Анимация печатной машинки
    typewriterEffect(prompt, document.getElementById('prompt-output'));
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

// Случайный промт
function generateSurprise() {
    // Случайный класс
    const grades = ['10', '11'];
    const randomGrade = grades[Math.floor(Math.random() * grades.length)];
    
    // Случайная тема
    const topics = Object.keys(historyData[randomGrade]);
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    // Случайный тип карты
    const mapTypes = Object.keys(mapTemplates);
    const randomMapType = mapTypes[Math.floor(Math.random() * mapTypes.length)];
    
    // Случайная детализация
    const randomDetail = Math.floor(Math.random() * 3) + 1;
    
    // Устанавливаем значения
    selectedGrade = randomGrade;
    selectedTopic = randomTopic;
    selectedMapType = randomMapType;
    detailLevel = randomDetail;
    customTopicText = '';
    
    // Обновляем UI
    document.querySelector(`.period-card[data-grade="${randomGrade}"]`).click();
    setTimeout(() => {
        document.querySelector(`.topic-btn[data-topic="${randomTopic}"]`).click();
        document.querySelector(`.map-type-card[data-type="${randomMapType}"]`).click();
        document.getElementById('detailSlider').value = randomDetail;
        updateSliderLabels();
        
        // Генерируем промт если на третьем шаге
        if (currentStep === 3) {
            generatePrompt();
        }
    }, 100);
}

// Копирование промта
function copyPrompt() {
    const promptText = document.getElementById('prompt-output').textContent;
    
    if (!promptText) {
        alert('Сначала сгенерируйте промт');
        return;
    }
    
    navigator.clipboard.writeText(promptText).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Скопировано!';
        btn.style.background = '#228b22';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'rgba(255,255,255,0.2)';
        }, 2000);
    }).catch(err => {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = promptText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const btn = document.getElementById('copyBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Скопировано!';
        btn.style.background = '#228b22';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'rgba(255,255,255,0.2)';
        }, 2000);
    });
}

// Сброс
function resetAll() {
    currentStep = 1;
    selectedGrade = null;
    selectedTopic = null;
    selectedMapType = null;
    detailLevel = 2;
    customTopicText = '';
    
    // Сбрасываем UI
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step1').classList.add('active');
    
    document.querySelectorAll('.period-card, .topic-btn, .map-type-card').forEach(el => {
        el.classList.remove('active');
    });
    
    document.getElementById('topicSection10').style.display = 'none';
    document.getElementById('topicSection11').style.display = 'none';
    document.getElementById('customTopic').value = '';
    document.getElementById('detailSlider').value = 2;
    document.getElementById('prompt-output').textContent = '';
    document.getElementById('currentTopic').textContent = '';
    document.getElementById('currentMapType').textContent = '';
    
    updateProgressBar();
    updateNavigation();
    updateSliderLabels();
}
