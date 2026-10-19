# Vite + Pug Starter Template

Современный, быстрый и легковесный шаблон для верстки статических сайтов на базе **Vite**, **Vituum**, **Pug**, **SCSS** и **Alpine.js**.

---

## ⚡ Особенности

- 🚀 **[Vite 6](https://vitejs.dev/)** — мгновенный запуск сервера и молниеносный HMR (Hot Module Replacement).
- 🧩 **[Vituum](https://vituum.dev/) + [Pug](https://pugjs.org/)** — удобная компонентная архитектура страниц, лейаутов и миксинов.
- 🎨 **SCSS + PostCSS** — модульная структура стилей с поддержкой шаблонов импортов `+.scss`.
- ⚡ **[Alpine.js 3](https://alpinejs.dev/)** — реактивность без оверхэда тяжелых фреймворков.
- 🔤 **SVG to Webfont** — автоматическая сборка кастомного веб-шрифта иконок из SVG (`src/assets/icons/`).
- 🗜️ **Оптимизация изображений** — сжатие через `vite-plugin-image-optimizer` и SVGO.
- ✨ **HTML Beautifier** — аккуратное форматирование сгенерированного HTML на выходе.
- 📦 **Готовый релиз** — скрипт архивации проекта в один клик (`pnpm run release`).

---

## 🚀 Быстрый старт

### 1. Создание проекта из шаблона

Нажмите кнопку **«Use this template»** вверху репозитория или воспользуйтесь GitHub CLI:

```bash
gh repo create my-project --template pvrt/vite_pug --clone
cd my-project
```

### 2. Установка зависимостей

Рекомендуется использовать [pnpm](https://pnpm.io/):

```bash
pnpm install
```

### 3. Разработка

Запуск локального dev-сервера с HMR:

```bash
pnpm run dev
```

Локальный сервер будет доступен по адресу: `http://localhost:3000`

---

## 📜 Доступные скрипты

| Команда | Описание |
|---|---|
| `pnpm run dev` | Оптимизирует SVG-иконки и запускает dev-сервер на порту `3000` |
| `pnpm run build` | Оптимизирует иконки и собирает продакшн-версию в папку `dist/` |
| `pnpm run preview` | Локальный предпросмотр готовой сборки из `dist/` |
| `pnpm run minify_svg` | Ручная оптимизация SVG в папке `src/assets/icons` с помощью SVGO |
| `pnpm run release` | Сборка проекта и упаковка в архив `.zip` (без `node_modules` и служебных файлов) |

---

## 📁 Структура проекта

```text
├── src/
│   ├── assets/
│   │   ├── fonts/         # Шрифты проекта
│   │   ├── icons/         # Иконки SVG (генерируются в веб-шрифт)
│   │   └── images/        # Изображения (PNG, JPG, WebP, SVG)
│   ├── components/        # Переиспользуемые Pug-компоненты (header, footer и др.)
│   ├── data/              # JSON-данные для проброса в Pug-шаблоны
│   ├── layouts/           # Базовые Pug-шаблоны (main.pug и т.д.)
│   ├── pages/             # Страницы проекта (index.pug и др. -> HTML на выходе)
│   ├── scripts/
│   │   └── app.js         # Точка входа JavaScript (Alpine.js, стили шрифта иконок)
│   └── styles/
│       ├── components/    # Стили компонентов
│       ├── utils/         # Переменные, миксины, сброс стилей
│       └── main.scss      # Главная точка входа SCSS
├── svgo.config.mjs        # Конфигурация оптимизации SVGO
├── vercel.json            # Настройки деплоя на Vercel
├── vite.config.js         # Конфигурация Vite и плагинов
└── package.json
```

---

## 🛠️ Настройка шрифта иконок

Все SVG-файлы, помещенные в `src/assets/icons/`, автоматически объединяются в единый иконочный веб-шрифт `icons.woff`.
Стили шрифта подключаются виртуально в [src/scripts/app.js](src/scripts/app.js):

```javascript
import 'virtual:vite-svg-2-webfont.css';
```

---

## 📄 Лицензия

[MIT](LICENSE)
