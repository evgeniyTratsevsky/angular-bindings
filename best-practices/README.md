# Angular Data Binding Best Practices

This guide outlines the best practices for using Angular data binding techniques effectively and efficiently.

## 📚 Table of Contents

1. [Interpolation Binding](#1-interpolation-binding)
2. [Property Binding](#2-property-binding)
3. [Two-Way Binding](#3-two-way-binding)
4. [Event Binding](#4-event-binding)
5. [Style Binding](#5-style-binding)
6. [Class Binding](#6-class-binding)
7. [Template Logic](#7-template-logic)

---

## 1. Interpolation Binding `{{ }}` - Only for Text

**Best Practice:** Use interpolation for displaying text data, but not for attribute binding.

### ✅ Good Examples:
```html
<h1>{{ title }}</h1> <!-- Good -->
<p>{{ userName }}</p> <!-- Good -->
<span>{{ getCurrentTime() }}</span> <!-- Good -->
```

### ❌ Bad Examples:
```html
<img src="{{ imageUrl }}"> <!-- Bad - Use property binding instead -->
<button disabled="{{ isDisabled }}">Submit</button> <!-- Bad -->
<div class="{{ className }}">Content</div> <!-- Bad -->
```

### ✅ Correct Approach:
```html
<img [src]="imageUrl"> <!-- Good - Property binding -->
<button [disabled]="isDisabled">Submit</button> <!-- Good -->
<div [class]="className">Content</div> <!-- Good -->
```

---

## 2. Property Binding `[property]` - For HTML Attributes

**Best Practice:** Use `[property]` for dynamic values, especially for `src`, `disabled`, `value`, `style`, and `class`.

### ✅ Examples:
```html
<button [disabled]="isDisabled">Submit</button>
<img [src]="profileUrl">
<input [value]="userInput">
<div [style.background-color]="bgColor">Content</div>
<span [class.active]="isActive">Status</span>
```

### 🔧 Common Use Cases:
- **Form Controls**: `[disabled]`, `[readonly]`, `[value]`
- **Media Elements**: `[src]`, `[alt]`, `[title]`
- **Styling**: `[style.property]`, `[class.className]`
- **Custom Properties**: `[data-*]`, `[aria-*]`

---

## 3. Two-Way Binding `[(ngModel)]` - Only in Controlled Forms

**Best Practice:** Use `[(ngModel)]` in simple forms, but in reactive forms — prefer `FormControl`.

### ✅ Simple Forms (Good):
```html
<input [(ngModel)]="username">
<p>Hello, {{ username }}!</p>
```

### ✅ Reactive Forms (Better):
```typescript
// Component
export class UserFormComponent {
  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('')
  });
}
```

```html
<!-- Template -->
<form [formGroup]="userForm">
  <input formControlName="username">
  <input formControlName="email">
</form>
```

---

## 4. Event Binding `(event)` - With Clean Handlers

**Best Practice:** Event handlers should be short and call component methods.

### ✅ Good Examples:
```html
<button (click)="onClick()">Click Me</button>
<input (input)="onInputChange($event)">
<form (submit)="onSubmit()">Submit</form>
```

### ✅ Component Methods:
```typescript
export class MyComponent {
  onClick(): void {
    this.message = 'Button clicked!';
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  onSubmit(): void {
    // Handle form submission
    this.saveData();
  }
}
```

### ❌ Avoid:
```html
<button (click)="this.message = 'Clicked'; this.count++; this.updateUI();">
  Click Me
</button>
```

---

## 5. Style Binding `[style.property]` - For Dynamics

**Best Practice:** Use `[style]` for dynamic values, avoid inline styles.

### ✅ Examples:
```html
<p [style.color]="isError ? 'red' : 'green'">Status</p>
<div [style.width]="width + 'px'">Content</div>
<span [style.font-size]="fontSize + 'px'">Text</span>
```

### 🔧 Multiple Styles:
```html
<div [style]="getDynamicStyles()">Content</div>
```

```typescript
getDynamicStyles(): string {
  return `color: ${this.textColor}; 
          background-color: ${this.bgColor}; 
          font-size: ${this.fontSize}px`;
}
```

---

## 6. Class Binding `[class]`, `[class.className]` - For Conditional Styling

**Best Practice:** Use an object or array for multiple classes.

### ✅ Object Syntax:
```html
<div [class]="{ 'active': isActive, 'disabled': isDisabled }">
  Content
</div>
```

### ✅ Array Syntax:
```html
<div [class]="['btn', 'btn-primary']">Button</div>
<div [class]="getClassArray()">Dynamic Classes</div>
```

### ✅ Individual Class Binding:
```html
<div [class.active]="isActive" 
     [class.disabled]="isDisabled" 
     [class.loading]="isLoading">
  Content
</div>
```

### 🔧 Component Method:
```typescript
getClassArray(): string[] {
  const classes = ['base-class'];
  
  if (this.isActive) classes.push('active');
  if (this.isDisabled) classes.push('disabled');
  if (this.isLoading) classes.push('loading');
  
  return classes;
}
```

---

## 7. Template Logic - Keep It Clean

**Best Practice:** Avoid complex logic in templates, move it to component methods.

### ❌ Bad - Logic in Template:
```html
<p>{{ user.age > 18 ? 'Adult' : 'Child' }}</p>
<div [class]="user.status === 'active' && !user.isBlocked ? 'active' : 'inactive'">
  Status
</div>
```

### ✅ Good - Logic in Component:
```html
<p>{{ getAgeLabel() }}</p>
<div [class]="getStatusClass()">Status</div>
```

```typescript
export class UserComponent {
  user = { age: 20, status: 'active', isBlocked: false };

  getAgeLabel(): string {
    return this.user.age > 18 ? 'Adult' : 'Child';
  }

  getStatusClass(): string {
    return this.user.status === 'active' && !this.user.isBlocked 
      ? 'active' 
      : 'inactive';
  }
}
```

---

## 🚀 Performance Tips

### 1. **Change Detection**
- Use `OnPush` strategy when possible
- Avoid complex expressions in templates
- Use `trackBy` functions for `*ngFor`

### 2. **Memory Management**
- Unsubscribe from observables
- Use `async` pipe when possible
- Avoid creating new objects/arrays in templates

### 3. **Template Optimization**
- Use `*ngIf` instead of `[hidden]` for conditional rendering
- Limit the number of bindings per element
- Use `ng-container` for structural directives

---

## 📖 Additional Resources

- [Angular Official Documentation](https://angular.io/guide/template-syntax)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Angular Performance Best Practices](https://angular.io/guide/performance)

---

## 🔍 Code Examples

Check the `examples/` folder for practical implementations of these best practices.
