# Гайд по кастомизации

## 🎨 Быстрое изменение контента

### 1. Основные цвета

**Файл: `tailwind.config.js`**

```javascript
colors: {
  'primary': '#3b82f6',      // Основной синий
  'accent': '#d946ef',        // Акцент фиолетовый
  'accent-cyan': '#00d9ff',   // Циан
}
```

Примеры градиентов:
- Синий → Фиолетовый: `from-blue-500 to-purple-500`
- Голубой → Синий: `from-cyan-400 to-blue-500`
- Лайм → Пурпур: `from-lime-300 to-purple-500`

### 2. Основной текст и заголовок

**Файл: `index.html`, Hero Section**

```html
<h1 class="hero-title text-h1 font-bold mb-8 leading-tight">
  Ваш бизнес заслуживает
  <span class="text-gradient"> эксперта </span>
  2026
</h1>

<p class="hero-subtitle text-xl md:text-2xl text-slate-300 mb-12">
  Увеличиваю прибыль на 300%. Масштабирую стартапы. Превращаю идеи в деньги.
</p>
```

Измените:
- Основной текст h1
- Подзаголовок
- Слова в gradient span

### 3. Кнопки

**Класс: `.btn-gradient`**

```html
<!-- Текст кнопки меняется внутри -->
<button class="btn-gradient">
  Ваш текст здесь
</button>
```

**CSS в `src/styles.css`:**
```css
.btn-gradient {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  /* Измените hex цвета */
}
```

### 4. Услуги

**Файл: `index.html`, Services Grid**

```html
<div class="service-item glass-dark p-8 rounded-2xl">
  <div class="service-icon text-5xl mb-4">💼</div>  <!-- Иконка эмодзи -->
  <h3 class="text-xl font-bold mb-3">Стратегия бизнеса</h3>  <!-- Название -->
  <p class="text-slate-400 text-sm mb-4">
    Описание услуги...  <!-- Описание -->
  </p>
  <div class="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-300">
    От 200K  <!-- Цена -->
  </div>
</div>
```

Скопируйте блок и измените для каждой услуги.

### 5. Контакты и ссылки

**Файл: `index.html`, Contacts Section**

```html
<!-- Telegram -->
<a href="https://t.me/yourname">
  @your_telegram_name
</a>

<!-- Email -->
<a href="mailto:hello@example.com">
  hello@expert2026.ru
</a>

<!-- Телефон -->
<a href="tel:+79991234567">
  +7 999 123-45-67
</a>
```

Также обновите sticky кнопку:
```html
<a href="https://t.me/yourname" class="sticky-telegram-btn">
```

## 🎬 Анимации и эффекты

### 1. Изменить скорость анимаций

**Файл: `src/main.js`**

```javascript
// Измените duration значения
gsap.from(element, {
  duration: 1,  // 1 секунда → меняйте сюда
  opacity: 0,
  y: 50,
});
```

Меньше значение = быстрее
Больше значение = медленнее

### 2. Изменить дистанцию reveal-анимации

```javascript
gsap.from(element, {
  opacity: 0,
  y: 50,  // Измените 50 на свое значение (px)
});
```

### 3. Smooth scroll скорость

**Файл: `src/main.js`**

```javascript
const lenis = new Lenis({
  duration: 1.2,  // Меньше = быстрее, больше = медленнее
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

### 4. Hover эффекты

**Класс `.glass-hover`:**

```css
.glass-hover {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.glass-hover:hover {
  transform: translateY(-5px);  /* -5px = насколько поднимается */
}
```

## 🖼️ Добавить изображения

### 1. Hero фон с изображением

Замените gradient на изображение:

```html
<section class="hero-gradient" style="background-image: url('/images/hero.jpg'); background-size: cover;">
```

### 2. Добавить картинки в кейсы

```html
<div class="portfolio-slide ... " style="background-image: url('/images/case1.jpg');">
  <!-- Контент -->
</div>
```

### 3. Avatar для отзывов

```html
<div class="w-12 h-12 rounded-full" style="background-image: url('/images/avatar.jpg'); background-size: cover;"></div>
```

## 📝 Типография

### 1. Размеры заголовков

**Файл: `tailwind.config.js`**

```javascript
fontSize: {
  'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
  'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
  'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
}
```

### 2. Шрифты

По умолчанию: **Inter** (основной) и **Sora** (заголовки)

Измените в `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
  display: ['YourDisplayFont', 'system-ui', 'sans-serif'],
}
```

И добавьте в HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;800&display=swap" rel="stylesheet">
```

## 🌐 SEO

### 1. Meta теги

**Файл: `index.html` в `<head>`**

```html
<meta name="description" content="ВАШЕ ОПИСАНИЕ">
<meta name="keywords" content="ВАШИ КЛЮЧЕВЫЕ СЛОВА">
<meta property="og:title" content="НАЗВАНИЕ">
<meta property="og:description" content="ОПИСАНИЕ">
```

### 2. Структурированные данные

Добавьте JSON-LD:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ваше имя",
  "description": "Описание",
  "url": "https://yoursite.com"
}
</script>
```

## 🎯 Добавить новую секцию

1. Скопируйте существующую секцию в `index.html`
2. Измените контент и классы
3. Добавьте анимацию в `src/main.js`:

```javascript
function initNewSection() {
  const items = document.querySelectorAll('.new-item');
  
  items.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
    });
  });
}

// Вызовите в initAllAnimations()
initNewSection();
```

## 🎨 Цветовые схемы

### Светлая тема (Light)
```javascript
colors: {
  'bg': '#ffffff',
  'text': '#000000',
  'accent': '#3b82f6',
}
```

### Дополнительные варианты темы

**Пурпурная:**
```css
--primary: #a855f7;
--accent: #ec4899;
```

**Зелёная:**
```css
--primary: #10b981;
--accent: #06b6d4;
```

**Красная:**
```css
--primary: #ef4444;
--accent: #f97316;
```

## 📱 Адаптивность

### Изменить breakpoint

Tailwind breakpoints в `tailwind.config.js`:

```javascript
screens: {
  'sm': '640px',   // small
  'md': '768px',   // medium
  'lg': '1024px',  // large
  'xl': '1280px',  // extra large
}
```

### Мобильные классы

```html
<!-- Скрыть на мобиле -->
<div class="hidden md:block">
  Desktop only
</div>

<!-- Изменить шрифт -->
<h1 class="text-2xl md:text-4xl">
  Responsive title
</h1>
```

## 🚀 Production Deploy

### Перед заливкой на сервер

1. Обновите все ссылки (telegram, email, phone)
2. Добавьте свои изображения
3. Проверьте все текст и опечатки
4. Запустите `npm run build`
5. Проверьте в Lighthouse
6. Deploy на Vercel/Netlify

```bash
npm run build
# Загружайте папку dist/ на хостинг
```

## 💡 Советы

- Используйте DevTools (F12) для быстрого редактирования
- Сохраняйте копию оригинального файла перед изменениями
- Тестируйте на разных устройствах
- Проверяйте скорость загрузки в PageSpeed Insights

---

**Что-то не получилось? Проверьте консоль браузера (F12 → Console) — там будут ошибки.**
