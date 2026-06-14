# Impulse.guru UI Kit

Полный UI kit, воссозданный по дизайну сайта [impulse.guru](https://impulse.guru/) — агентства поискового маркетинга.

## Структура

```
impulse-ui-kit/
├── index.html                    # Превью всех компонентов
├── README.md                     # Документация
├── css/
│   ├── impulse-ui-kit.css        # Главный файл для импорта
│   ├── variables.css             # CSS-переменные (токены дизайна)
│   ├── base.css                  # Сброс, базовые стили, утилиты
│   └── components.css            # Все компоненты
├── assets/
│   ├── logo.svg                  # Логотип (тёмный)
│   ├── logo-white.svg            # Логотип (белый)
│   ├── favicon.ico               # Фавиконка
│   ├── icon-whatsapp.svg         # Иконка WhatsApp
│   ├── icon-whatsapp-dark.svg    # Иконка WhatsApp (тёмная)
│   ├── icon-telegram.svg         # Иконка Telegram
│   ├── icon-telegram-dark.svg    # Иконка Telegram (тёмная)
│   ├── icon-geo.svg              # Иконка геолокации
│   ├── icon-arrow-down.svg       # Стрелка вниз
│   ├── icon-close.svg            # Кнопка закрытия
│   ├── icon-aim.svg              # Иконка-прицел
│   ├── icon-message.svg          # Иконка сообщения
│   ├── icon-message-hover.svg    # Иконка сообщения (hover)
│   ├── icon-attach.svg           # Иконка скрепки
│   ├── icon-wa-before.svg        # WhatsApp (до анимации)
│   ├── icon-tg-before.svg        # Telegram (до анимации)
│   ├── creative1.svg             # Декоративный элемент
│   ├── element.png               # Декоративный элемент
│   ├── shape-square.svg          # Фигура квадрат
│   ├── line-110.svg              # Линия-сепаратор
│   ├── line-110-light.svg        # Линия-сепаратор (светлая)
│   ├── line-30.svg               # Линия-разделитель
│   ├── line-40.svg               # Линия-разделитель
│   └── banner.svg                # Баннер
```

## Быстрый старт

### 1. Подключение (одна строка)

```html
<link rel="stylesheet" href="impulse-ui-kit/css/impulse-ui-kit.css">
```

### 2. Или подключайте отдельные файлы

```html
<link rel="stylesheet" href="impulse-ui-kit/css/variables.css">    <!-- Токены -->
<link rel="stylesheet" href="impulse-ui-kit/css/base.css">         <!-- База -->
<link rel="stylesheet" href="impulse-ui-kit/css/components.css">   <!-- Компоненты -->
```

## Дизайн-токены (переменные)

### Цвета

| Переменная | Значение | Описание |
|---|---|---|
| `--ig-primary` | `#20357e` | Основной тёмно-синий |
| `--ig-primary-bright` | `#3333cc` | Яркий акцентный синий |
| `--ig-primary-light` | `#6666ff` | Светлый синий |
| `--ig-primary-ultralight` | `#f0f0ff` | Светлый фон секций |
| `--ig-text-dark` | `#000066` | Основной тёмный текст |
| `--ig-text-accent` | `#3333cc` | Акцентный текст/ссылки |
| `--ig-accent-red` | `#d20000` | Красный акцент |

### Типографика

| Переменная | Значение |
|---|---|
| `--ig-font-family` | `Arial, Helvetica, sans-serif` |
| `--ig-font-xs` — `--ig-font-3xl` | 12px — 54px |
| `--ig-font-light` / `regular` / `medium` | 300 / 400 / 500 |

## Компоненты

### Кнопки

```html
<!-- Основная (заливка) -->
<a href="#" class="ig-btn ig-btn--primary">Связаться с нами</a>

<!-- Контурная -->
<a href="#" class="ig-btn ig-btn--outline">Примеры работ</a>

<!-- Градиентная -->
<a href="#" class="ig-btn ig-btn--gradient">Получить консультацию</a>

<!-- Текстовая -->
<a href="#" class="ig-btn ig-btn--text">Перезвоните мне</a>

<!-- Акцентная (красная) -->
<a href="#" class="ig-btn ig-btn--accent">Новое</a>

<!-- Белая (на тёмном фоне) -->
<a href="#" class="ig-btn ig-btn--white">Перезвоните мне</a>

<!-- Размеры -->
<a href="#" class="ig-btn ig-btn--primary ig-btn--sm">Small</a>
<a href="#" class="ig-btn ig-btn--primary ig-btn--lg">Large</a>
<a href="#" class="ig-btn ig-btn--primary ig-btn--xl">XL</a>

<!-- Полная ширина -->
<a href="#" class="ig-btn ig-btn--primary ig-btn--block">Block</a>
```

### Формы

```html
<!-- Горизонтальная форма -->
<form class="ig-form ig-form--horizontal">
  <div class="ig-form__group">
    <input class="ig-form__input" placeholder="ФИО*">
  </div>
  <div class="ig-form__group">
    <input class="ig-form__input" placeholder="Телефон*">
  </div>
  <div class="ig-form__submit">
    <button class="ig-btn ig-btn--primary">Отправить</button>
  </div>
</form>
```

### Карточки

```html
<!-- Базовая карточка -->
<div class="ig-card ig-card--bordered ig-card--hover">
  <div class="ig-card__title">Заголовок</div>
  <div class="ig-card__text">Текст карточки</div>
</div>

<!-- Карточка услуги (с hover-эффектом) -->
<div class="ig-service-card">
  <div class="ig-service-card__bg"></div>
  <div class="ig-service-card__content">
    <div class="ig-service-card__title">Экспертиза</div>
    <div class="ig-service-card__link">Исследования</div>
  </div>
</div>
```

### Хедер

```html
<div class="ig-header">
  <div class="ig-header__inner">
    <div class="ig-header__logo">
      <a href="#"><img src="impulse-ui-kit/assets/logo-white.svg" alt="logo"></a>
    </div>
    <nav class="ig-header__nav">
      <a href="#" class="ig-header__link">Ссылка</a>
      <a href="#" class="ig-btn ig-btn--white">Кнопка</a>
    </nav>
  </div>
</div>
```

### Модальное окно

```html
<!-- Кнопка открытия -->
<button onclick="document.getElementById('popup').classList.add('ig-popup--active')">
  Открыть
</button>

<!-- Попап -->
<div id="popup" class="ig-popup" onclick="if(event.target===this)this.classList.remove('ig-popup--active')">
  <div class="ig-popup__content">
    <button class="ig-popup__close" onclick="document.getElementById('popup').classList.remove('ig-popup--active')">
      <img src="impulse-ui-kit/assets/icon-close.svg" alt="close">
    </button>
    <h3>Заголовок</h3>
    <!-- содержимое -->
  </div>
</div>
```

### Сетки и утилиты

```html
<!-- Сетка -->
<div class="ig-grid ig-grid--3">
  <div>Колонка 1</div>
  <div>Колонка 2</div>
  <div>Колонка 3</div>
</div>

<!-- Секции -->
<section class="ig-section ig-section--light">
  <div class="ig-container">...</div>
</section>
```

## Просмотр

Откройте файл `impulse-ui-kit/index.html` в браузере для просмотра всех компонентов.

## Совместимость

- Современные браузеры (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties (переменные)
- Адаптивный дизайн (мобильные устройства)

## Лицензия

UI kit создан в образовательных целях. Все права на оригинальный дизайн принадлежат [impulse.guru](https://impulse.guru/).