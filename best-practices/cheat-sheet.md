# Angular Data Binding - Quick Reference Cheat Sheet

## 🚀 Quick Start Guide

### 1. Interpolation `{{ }}` - Text Only
```html
<!-- ✅ GOOD -->
<h1>{{ title }}</h1>
<p>{{ userName }}</p>

<!-- ❌ BAD -->
<img src="{{ imageUrl }}">
<button disabled="{{ isDisabled }}">
```

### 2. Property Binding `[property]` - Attributes
```html
<!-- ✅ GOOD -->
<img [src]="imageUrl">
<button [disabled]="isDisabled">
<input [value]="userInput">
```

### 3. Event Binding `(event)` - Clean Handlers
```html
<!-- ✅ GOOD -->
<button (click)="onClick()">Click</button>
<input (input)="onInputChange($event)">

<!-- ❌ BAD -->
<button (click)="this.count++; this.updateUI(); this.saveData();">
```

### 4. Two-Way Binding `[(ngModel)]` - Simple Forms Only
```html
<!-- ✅ Simple Forms -->
<input [(ngModel)]="username">

<!-- ✅ Better: Reactive Forms -->
<form [formGroup]="userForm">
  <input formControlName="username">
</form>
```

### 5. Style Binding `[style.property]` - Dynamic Styles
```html
<!-- ✅ GOOD -->
<p [style.color]="isError ? 'red' : 'green'">Status</p>
<div [style.width]="width + 'px'">Content</div>

<!-- ✅ Multiple Styles -->
<div [style]="getDynamicStyles()">Content</div>
```

### 6. Class Binding `[class]` - Conditional Classes
```html
<!-- ✅ Object Syntax -->
<div [class]="{ 'active': isActive, 'disabled': isDisabled }">
  Content
</div>

<!-- ✅ Array Syntax -->
<div [class]="['btn', 'btn-primary']">Button</div>

<!-- ✅ Individual Classes -->
<div [class.active]="isActive" [class.disabled]="isDisabled">
  Content
</div>
```

## 📋 Common Patterns

### Form Validation
```typescript
// Component
export class FormComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  getFieldError(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return 'Required';
      if (field.errors['email']) return 'Invalid email';
    }
    return '';
  }
}
```

```html
<!-- Template -->
<form [formGroup]="userForm">
  <input formControlName="name" 
         [class.error]="getFieldError('name')">
  <div *ngIf="getFieldError('name')" class="error">
    {{ getFieldError('name') }}
  </div>
</form>
```

### Dynamic Lists
```typescript
// Component
export class ListComponent {
  items = [
    { id: 1, name: 'Item 1', status: 'active' },
    { id: 2, name: 'Item 2', status: 'inactive' }
  ];

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  getItemClass(item: any): string {
    return `item ${item.status}`;
  }
}
```

```html
<!-- Template -->
<div *ngFor="let item of items; trackBy: trackByFn"
     [class]="getItemClass(item)"
     (click)="selectItem(item)">
  {{ item.name }}
</div>
```

### Conditional Rendering
```html
<!-- ✅ GOOD -->
<div *ngIf="isVisible" class="content">
  {{ content }}
</div>

<!-- ✅ GOOD -->
<div [class.hidden]="!isVisible" class="content">
  {{ content }}
</div>

<!-- ❌ BAD -->
<div [style.display]="isVisible ? 'block' : 'none'">
  {{ content }}
</div>
```

## 🎯 Performance Tips

### 1. Change Detection
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceComponent {
  @Input() data: any;
}
```

### 2. TrackBy Functions
```html
<div *ngFor="let item of items; trackBy: trackByFn">
  {{ item.name }}
</div>
```

### 3. Async Pipe
```typescript
// Component
export class AsyncComponent {
  users$ = this.userService.getUsers();
  loading$ = this.userService.loading$;
}
```

```html
<!-- Template -->
<div *ngIf="loading$ | async">Loading...</div>
<div *ngIf="users$ | async as users">
  <div *ngFor="let user of users">{{ user.name }}</div>
</div>
```

## 🔧 Anti-Patterns to Avoid

### ❌ Complex Logic in Templates
```html
<!-- DON'T -->
<div [class]="user.status === 'active' && !user.isBlocked && user.lastLogin > threshold ? 'active' : 'inactive'">
  Status
</div>

<!-- DO -->
<div [class]="getStatusClass()">Status</div>
```

### ❌ Multiple Operations in Events
```html
<!-- DON'T -->
<button (click)="this.count++; this.updateUI(); this.saveData(); this.showMessage();">
  Click
</button>

<!-- DO -->
<button (click)="onButtonClick()">Click</button>
```

### ❌ Creating Objects in Templates
```html
<!-- DON'T -->
<div [style]="{ color: textColor, 'font-size': fontSize + 'px' }">
  Content
</div>

<!-- DO -->
<div [style]="getDynamicStyles()">Content</div>
```

### ❌ Interpolation for Attributes
```html
<!-- DON'T -->
<img src="{{ imageUrl }}" alt="{{ user.name }}">

<!-- DO -->
<img [src]="imageUrl" [alt]="user.name">
```

## 📝 Best Practices Checklist

- [ ] **Interpolation** only for text content
- [ ] **Property binding** for attributes, styles, classes
- [ ] **Event handlers** are clean and call methods
- [ ] **Complex logic** moved to component methods
- [ ] **Reactive forms** preferred over template-driven
- [ ] **TrackBy functions** used with `*ngFor`
- [ ] **Async pipe** used when possible
- [ ] **OnPush strategy** considered for performance
- [ ] **Proper typing** for all properties
- [ ] **Clean separation** of concerns

## 🚀 Quick Commands

### Generate Components
```bash
ng generate component user-profile
ng generate component user-form
ng generate component dynamic-list
```

### Generate Services
```bash
ng generate service user
ng generate service data
```

### Generate Interfaces
```bash
ng generate interface user
ng generate interface form-data
```

## 📚 Key Angular Concepts

### Lifecycle Hooks
```typescript
export class MyComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    // Component initialized
  }

  ngOnDestroy(): void {
    // Component destroyed
  }
}
```

### Input/Output
```typescript
export class ChildComponent {
  @Input() data: any;
  @Output() dataChange = new EventEmitter<any>();
}
```

### ViewChild/ViewChildren
```typescript
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;
}
```

## 🎨 CSS Best Practices

### Use CSS Classes Over Inline Styles
```scss
// ✅ GOOD
.user-card {
  &.active {
    background-color: #e8f5e8;
    border-color: #4caf50;
  }
  
  &.inactive {
    background-color: #f5f5f5;
    border-color: #9e9e9e;
  }
}
```

### Responsive Design
```scss
.user-card {
  padding: 1rem;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
}
```

## 🔍 Debugging Tips

### 1. Console Logging
```typescript
ngOnInit(): void {
  console.log('Component initialized', this.data);
}
```

### 2. Template Debugging
```html
<pre>{{ data | json }}</pre>
```

### 3. Change Detection
```typescript
constructor(private cdr: ChangeDetectorRef) {}

updateView(): void {
  this.cdr.detectChanges();
}
```

## 📖 Additional Resources

- [Angular Official Docs](https://angular.io/guide/template-syntax)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Angular Performance](https://angular.io/guide/performance)
- [Angular Forms](https://angular.io/guide/forms-overview)
- [Angular Change Detection](https://angular.io/guide/change-detection)

---

**Remember:** Keep templates clean, move logic to components, and always use the right binding type for the job! 🚀
