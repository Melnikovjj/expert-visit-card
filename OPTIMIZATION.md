# Performance Optimization Guide

## ⚡ Советы по оптимизации

### 1. Критический CSS путь

Важнейший CSS встроен в `<head>`:
```html
<style>
  /* Critical CSS inline */
  body { background: linear-gradient(...); }
  .hero-title { font-size: 3.5rem; }
</style>
```

### 2. Lazy Loading изображений

```html
<!-- Используйте loading="lazy" для изображений ниже складки -->
<img src="image.jpg" loading="lazy" alt="Description">
```

### 3. GSAP Code Splitting

Импорт только нужных плагинов:
```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### 4. Вебпакеты вместо отдельных файлов

```javascript
// Хорошо: один импорт
import gsap from 'gsap';

// Плохо: импорт каждого модуля отдельно
import { Power3, Linear } from 'gsap';
```

### 5. Кэширование анимаций

```javascript
// Сохраняйте timeline для переиспользования
const heroTimeline = gsap.timeline();
```

### 6. Will-change для хорошей производительности

```css
.parallax {
  will-change: transform;
  transform: translateZ(0); /* GPU acceleration */
}
```

### 7. Дебаунсинг событий

```javascript
window.addEventListener('scroll', () => {
  // Дебаунсите! Иначе слишком много вызовов
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    // Код здесь
  }, 100);
});
```

### 8. Запросить Animation Frame

```javascript
// Используйте requestAnimationFrame для плавных анимаций
requestAnimationFrame(() => {
  // Обновляйте DOM
});
```

### 9. Минимизируйте reflow/repaint

```javascript
// Плохо: множественные reflow
element.style.width = '100px';
element.style.height = '100px';
element.style.left = '50px';

// Хорошо: один reflow
element.style.cssText = 'width: 100px; height: 100px; left: 50px;';
```

### 10. Используйте CSS contain

```css
.grid-item {
  contain: layout style paint; /* Изолирует элемент */
}
```

## 🔍 Проверка производительности

### Google Lighthouse
```bash
# Встроено в Chrome DevTools
# Ctrl+Shift+P → Lighthouse
```

### WebPageTest
- https://www.webpagetest.org/
- Детальный анализ всех ресурсов

### Chrome DevTools Performance tab
1. Откройте DevTools (F12)
2. Перейдите на Performance
3. Нажмите Record
4. Взаимодействуйте с сайтом
5. Нажмите Stop и анализируйте

## 📊 Метрики для отслеживания

### Core Web Vitals
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

### Дополнительно
- **TTFB** (Time to First Byte) < 600ms
- **FCP** (First Contentful Paint) < 1.8s
- **Total Blocking Time** < 300ms

## 🎬 Оптимизация анимаций

### 1. Используйте transform вместо top/left
```javascript
// Хорошо: только трансформация
gsap.to(element, { x: 100, duration: 1 });

// Плохо: вызывает layout shift
gsap.to(element, { left: 100, duration: 1 });
```

### 2. Избегайте анимации opacity + shadow одновременно
```javascript
// Хорошо: отдельные анимации
gsap.to(element, { opacity: 0.5 });
gsap.to(element, { boxShadow: '...' });
```

### 3. Используйте CSS Animation для простых анимаций
```css
/* CSS более производительна для простых анимаций */
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 4. Throttle ScrollTrigger callbacks
```javascript
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Код здесь
      ticking = false;
    });
    ticking = true;
  }
});
```

## 📦 Размер бандла

### Текущие зависимости
- GSAP: ~100 KB (uncompressed)
- Lenis: ~15 KB
- Tailwind: ~35 KB (purged)
- Lucide: ~2 KB (использованные иконки)

**Total: ~150 KB (компрессировано ~45 KB)**

### Как уменьшить
1. Используйте tree-shaking
2. Минифицируйте CSS с Tailwind purge
3. Удалите неиспользуемые плагины GSAP
4. Используйте CDN для больших библиотек

## 🖼️ Изображения

### Форматы
- **WebP** для современных браузеров (самый маленький)
- **JPEG** для fallback
- **SVG** для иконок и логотипов

### Оптимизация
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### Размеры
- Мобильные: 600px максимум
- Планшет: 1024px максимум
- Десктоп: 2048px максимум

## 🔐 Безопасность

### HTTPS обязателен
- Все современные браузеры требуют HTTPS
- Получите сертификат (Let's Encrypt)

### CSP заголовки
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline';
```

### CORS для внешних ресурсов
```javascript
// Используйте crossorigin для шрифтов
<link rel="preload" href="font.woff2" as="font" crossorigin>
```

## 📱 Мобильная оптимизация

### Touch Performance
```javascript
// Используйте passive listeners
window.addEventListener('scroll', handler, { passive: true });
```

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Минимальный размер tap target
- Минимум 48x48px для кнопок

## 🚀 Production Checklist

- [ ] Все изображения оптимизированы
- [ ] CSS минифицирован
- [ ] JavaScript минифицирован и bundled
- [ ] Шрифты сжаты (woff2)
- [ ] Service Worker для кэша
- [ ] Meta tags все на месте
- [ ] Robots.txt и sitemap.xml
- [ ] Проверено в Lighthouse
- [ ] Core Web Vitals отличные
- [ ] Кроссбраузерное тестирование
- [ ] SEO проверка
- [ ] Analytics установлена
- [ ] 404 страница есть
