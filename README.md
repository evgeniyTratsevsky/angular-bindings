# Angular Bindings App

Интерактивное приложение для изучения различных типов привязки данных в Angular 17.

## 🚀 Возможности

- **Interpolation Binding** - Отображение данных компонента в шаблонах
- **Property Binding** - Привязка свойств компонента к HTML атрибутам
- **Event Binding** - Обработка событий пользователя
- **Two-Way Binding** - Двусторонняя привязка данных с ngModel
- **Class & Style Binding** - Динамическое применение CSS классов и стилей
- **Attribute Binding** - Привязка к HTML атрибутам

## 🛠️ Технологии

- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- Angular Forms
- Angular Router

## 📁 Структура проекта

```
src/
├── app/
│   ├── app.component.ts          # Главный компонент с навигацией
│   ├── app.config.ts             # Конфигурация приложения
│   ├── app.routes.ts             # Маршруты приложения
│   ├── home/
│   │   └── home.component.ts     # Домашняя страница
│   ├── bindings/
│   │   └── bindings.component.ts # Демонстрация привязок
│   └── examples/
│       └── examples.component.ts # Практические примеры
├── styles.scss                   # Глобальные стили
├── main.ts                      # Точка входа
└── index.html                   # Главный HTML файл
```

## 🚀 Запуск проекта

### Предварительные требования

- Node.js (рекомендуется версия 18+)
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm start
```

Приложение будет доступно по адресу: `http://localhost:4200`

### Сборка для продакшена

```bash
npm run build
```

### Запуск тестов

```bash
npm test
```

## 📖 Примеры использования

### 1. Interpolation Binding

```typescript
// В компоненте
userName: string = 'John';

// В шаблоне
<p>Hello, {{ userName }}!</p>
```

### 2. Property Binding

```typescript
// В компоненте
imageUrl: string = 'https://example.com/image.jpg';
imageWidth: number = 300;

// В шаблоне
<img [src]="imageUrl" [width]="imageWidth">
```

### 3. Event Binding

```typescript
// В компоненте
incrementCounter() {
  this.clickCount++;
}

// В шаблоне
<button (click)="incrementCounter()">Click me!</button>
```

### 4. Two-Way Binding

```typescript
// В компоненте
userInput: string = '';

// В шаблоне
<input [(ngModel)]="userInput">
```

### 5. Class & Style Binding

```typescript
// В компоненте
isActive: boolean = true;
textColor: string = '#333';

// В шаблоне
<div [class.active]="isActive" [style.color]="textColor">
  Dynamic content
</div>
```

## 🎨 Особенности дизайна

- Современный UI с градиентным фоном
- Адаптивный дизайн для всех устройств
- Анимации и переходы
- Glassmorphism эффекты
- Интерактивные элементы

## 🔧 Конфигурация

Проект использует современную конфигурацию Angular 17:

- Standalone компоненты
- Строгая типизация TypeScript
- SCSS для стилей
- Angular Router для навигации
- Angular Forms для работы с формами

## 📱 Поддерживаемые браузеры

- Chrome (последние версии)
- Firefox (последние версии)
- Safari (последние версии)
- Edge (последние версии)

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Внесите изменения
4. Создайте Pull Request

## 📄 Лицензия

Этот проект создан в образовательных целях.

## 📞 Поддержка

Если у вас есть вопросы или предложения, создайте Issue в репозитории.

---

**Приятного изучения Angular привязки данных! 🎉**
