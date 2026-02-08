# 📖 Code Architecture Documentation

## Основная структура

Проект использует **moderne stack** с focus на производительность и чистоту кода.

---

## 🗂️ Файловая структура с объяснением

### `index.html` (1 файл = вся страница)
- **9 основных секций** в одном файле
- **Семантический HTML5** разметка
- **Meta-теги** для SEO
- **Классы Tailwind** для стилизации
- **Data-атрибуты** для JS селекторов

**Структура:**
```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <!-- Meta, fonts, styles -->
  </head>
  <body>
    <!-- 9 секций с контентом -->
    <section class="hero-section">...</section>
    <section class="services-grid">...</section>
    <!-- и т.д. -->
  </body>
</html>
```

---

### `src/main.js` (500+ строк GSAP)

**Основные функции:**

#### 1. **initHeroAnimations()**
- Fade-in заголовков при загрузке
- Floating blob anимации
- Parallax background
- Stagger для элементов

```javascript
// Пример: fade-in элементов с задержкой
gsap.from([heroTitle, heroSubtitle, heroCTA], {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,  // 0.2s между каждым элементом
  ease: 'power3.out',
});
```

#### 2. **initScrollReveal()**
- Reveal animation для всех элементов с классом `.reveal`
- Срабатывает когда элемент попадает в viewport
- ScrollTrigger синхронизация

```javascript
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: 'top 80%',  // Когда нижняя часть элемента на 80% экрана
    end: 'top 50%',
    scrub: 0.5,  // Свяжи с скроллом
  },
  opacity: 0,
  y: 50,
  duration: 1,
});
```

#### 3. **initValueCardsAnimation()**
- Hover lift effect (поднятие на -10px)
- Glow shadow при наведении
- Stagger reveal по порядку

```javascript
// Hover animation
card.addEventListener('mouseenter', () => {
  gsap.to(card, {
    y: -10,
    duration: 0.3,
    ease: 'power2.out',
  });
});
```

#### 4. **initServicesAnimation()**
- Icon scale + rotation
- Card lift effect
- Glow на hover
- Scroll reveal

**Интересная часть:**
```javascript
const icon = item.querySelector('.service-icon');
gsap.to(icon, {
  scale: 1.1,    // 110% размера
  rotation: 10,  // 10° поворот
  duration: 0.4,
});
```

#### 5. **animateCounter()**
- Плавное счётывание чисел
- Используется в price calculator
- Срабатывает один раз при виде

```javascript
gsap.fromTo(
  { frame: 0 },
  { 
    frame: 1, 
    duration: 2, 
    onUpdate: () => {
      element.textContent = Math.floor(frame * target);
    }
  },
  { ease: 'power1.inOut' }
);
```

#### 6. **initPortfolioSlider()**
- Горизонтальный слайдер
- Управление кнопками prev/next
- Scale на hover

```javascript
// Slide to position
gsap.to(sliderTrack, {
  x: -currentIndex * 100 + '%',  // Сдвиг на 100% за раз
  duration: 0.8,
  ease: 'power2.inOut',
});
```

#### 7. **initTimelineAnimation()**
- Dot появляются с `back.out` ease
- Content slideIn с X-смещением
- Гравированный hover эффект

```javascript
// Dot с "пружинящей" анимацией
gsap.from(dot, {
  scale: 0,
  opacity: 0,
  duration: 0.6,
  ease: 'back.out',  // Пружина эффект
});
```

#### 8. **initPriceCalculator()**
- Слушает события от 3 слайдеров
- Обновляет цену в реал-тайме
- Animated counter для цены

#### 9. **initTestimonialsSlider()**
- Похож на portfolio slider
- Горизонтальная прокрутка

#### 10. **initStickyButton()**
- Sticky Telegram кнопка
- Появляется при скролле > 500px
- Scale + glow на hover

#### 11. **initBackgroundAnimation()**
- Анимирует фоновые точки
- Случайные duration и delay

#### 12. **initIntersectionObserver()**
- Слушает попадание элементов в viewport
- Добавляет класс `.active`
- Альтернатива ScrollTrigger

#### 13. **initButtonAnimations()**
- Ripple effect при клике
- Scale при hover

---

### `src/styles.css` (450+ строк)

**Основные блоки:**

#### 1. **Root переменные**
```css
:root {
  --primary: #3b82f6;
  --accent: #d946ef;
  --bg-primary: #0a0e27;
}
```

#### 2. **Base стили**
- Сброс margin/padding
- Основной background
- Шрифты и цвета

#### 3. **Animations**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

#### 4. **Glassmorphism**
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### 5. **Gradient кнопки**
```css
.btn-gradient {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.btn-gradient::before {
  content: '';
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: translateX(-100%);  /* Начальная позиция */
}

.btn-gradient:hover::before {
  transform: translateX(100%);  /* Скользящий свет */
}
```

#### 6. **Utility классы**
```css
.reveal { opacity: 0; transform: translateY(30px); }
.reveal.active { opacity: 1; transform: translateY(0); }

.parallax { will-change: transform; }

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
```

---

### `tailwind.config.js` (Custom конфиг)

**Key extensions:**

#### 1. **Custom colors**
```javascript
colors: {
  'dark': { 900: '#0a0e27', 950: '#050814' },
  'neon': { cyan: '#00d9ff', purple: '#d946ef' },
}
```

#### 2. **Custom animations**
```javascript
animation: {
  'float': 'float 3s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 2s cubic-bezier(...) infinite',
}

keyframes: {
  float: { /* ... */ },
  'pulse-glow': { /* ... */ },
}
```

#### 3. **Custom utilities plugin**
```javascript
plugins: [
  function ({ addUtilities }) {
    const newUtilities = {
      '.glass': { /* glassmorphism */ },
      '.glass-dark': { /* dark variant */ },
      '.glow-button': { /* glow effect */ },
    };
    addUtilities(newUtilities);
  },
]
```

#### 4. **Font sizes**
```javascript
fontSize: {
  'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
  'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
}
```

---

## 🎬 Как работают анимации

### Сценарий 1: Hero секция при загрузке

```
1. Page loads
   ↓
2. initHeroAnimations() запускается
   ↓
3. heroTitle, heroSubtitle, heroCTA появляются с fade-in + stagger
   ↓
4. Blobs начинают плавающую анимацию
   ↓
5. Background получает параллакс эффект при скролле
```

### Сценарий 2: Скролл до value cards

```
1. User скроллит вниз
   ↓
2. ScrollTrigger срабатывает (trigger: card, start: 'top 80%')
   ↓
3. Карточка начинает fade-in + slide-up
   ↓
4. User наводит курсор на карточку
   ↓
5. gsap.to() поднимает карточку + добавляет glow
```

### Сценарий 3: Интерактивность (кнопки)

```
1. User наводит на кнопку
   ↓
2. mouseenter event → gsap.to() scale: 1.05
   ↓
3. User кликает
   ↓
4. Ripple эффект радиусом 15px
   ↓
5. User уходит → mouseleave → scale: 1
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────┐
│ index.html (структура)              │
└──────────────┬──────────────────────┘
               │
       ┌───────▼───────┐
       │  main.js      │
       │  (логика)     │
       └───────┬───────┘
               │
    ┌──────────┼──────────┐
    ▼          ▼          ▼
┌──────┐  ┌────────┐  ┌──────────┐
│GSAP  │  │Lenis   │  │Observers │
└──────┘  └────────┘  └──────────┘
    │          │          │
    └──────────┼──────────┘
               │
               ▼
    ┌─────────────────────┐
    │  styles.css (стили) │
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │ tailwind (utility)  │
    └─────────────────────┘
```

---

## 💡 Ключевые концепции

### 1. ScrollTrigger для reveal-анимаций

**Работает так:**
- Слушает scroll events
- Проверяет, попал ли элемент в `start` позицию
- Запускает анимацию
- `scrub` опция связывает анимацию со скроллом

### 2. Stagger для последовательных анимаций

**Вместо:**
```javascript
gsap.from(el1, { ... });
gsap.from(el2, { ... }); // Задержку 0.2s
gsap.from(el3, { ... }); // Задержку 0.4s
```

**Лучше:**
```javascript
gsap.from([el1, el2, el3], {
  stagger: 0.2,  // 200ms между каждым
});
```

### 3. Ease функции

- `power1.out` — линейный конец
- `power2.out` — мягкий конец
- `power3.out` — очень мягкий конец (natural)
- `back.out` — пружинящий эффект
- `elastic.out` — еще более пружинящий

### 4. will-change для GPU

```css
.parallax {
  will-change: transform;  /* Говори браузеру: будет трансформация */
  transform: translateZ(0); /* Активируй GPU */
}
```

---

## 🚀 Performance tips в коде

### 1. Hardware acceleration в main.js
```javascript
// ScrollTrigger автоматически использует GPU для transform
gsap.to(element, { x: 100 }); // Быстро! GPU!
gsap.to(element, { left: 100 }); // Медленно! CPU!
```

### 2. Мемоизация селекторов
```javascript
// Хорошо: сохраняем ссылку
const cards = document.querySelectorAll('.card');
cards.forEach(card => { /* ... */ });

// Плохо: ищем каждый раз
document.querySelectorAll('.card').forEach(card => { /* ... */ });
```

### 3. Delegation вместо множественных listeners
```javascript
// Хорошо: один listener на родителе
container.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) { /* ... */ }
});

// Плохо: listener на каждой кнопке
buttons.forEach(btn => {
  btn.addEventListener('click', handler);
});
```

---

## 📋 Checklist для понимания кода

- [ ] Понимаю структуру HTML (9 секций)
- [ ] Знаю, как GSAP работает с DOM
- [ ] Могу изменить duration анимаций
- [ ] Знаю как менять цвета в tailwind.config.js
- [ ] Понимаю ScrollTrigger логику
- [ ] Могу добавить новую анимацию
- [ ] Знаю как работают Ease функции
- [ ] Могу отладить в DevTools (F12)

---

## 🐛 Debugging Tips

### Консоль браузера (F12 → Console)
```javascript
// Проверить GSAP объекты
console.log(gsap);

// Проверить ScrollTrigger состояние
console.log(ScrollTrigger);

// Найти элемент
document.querySelector('.hero-title');
```

### Performance таб (F12 → Performance)
1. Нажми Record
2. Скроллишь страницу
3. Нажми Stop
4. Анализируй CPU/GPU использование

### Elements таб (F12 → Elements)
1. Выбери элемент
2. Смотри компьютанные стили
3. Проверь animated свойства

---

## 🎓 Что выучить отсюда

1. **GSAP animations** — профессиональное использование
2. **ScrollTrigger** — scroll-based анимации
3. **Glassmorphism** — modern UI design
4. **Tailwind CSS** — utility-first подход
5. **Vanilla JS** — без фреймворков
6. **Performance optimization** — будь выше конкурентов

---

**Готовь код для продакшена!** ✅
