# Angular Data Binding - Practical Examples

This file contains practical examples demonstrating the best practices outlined in the main guide.

## 🎯 Component Examples

### 1. User Profile Component

```typescript
// user-profile.component.ts
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    age: 25,
    email: 'john@example.com',
    avatar: 'assets/avatar.jpg',
    isActive: true,
    isVerified: false
  };

  // Good: Clean method for age label
  getAgeLabel(): string {
    return this.user.age >= 18 ? 'Adult' : 'Minor';
  }

  // Good: Clean method for status class
  getStatusClass(): string {
    if (this.user.isActive && this.user.isVerified) return 'active-verified';
    if (this.user.isActive) return 'active';
    return 'inactive';
  }

  // Good: Clean method for avatar styles
  getAvatarStyles(): string {
    return `width: 100px; height: 100px; border-radius: 50%;`;
  }

  // Good: Event handler
  onProfileUpdate(): void {
    // Handle profile update logic
    this.saveProfile();
  }

  private saveProfile(): void {
    // Implementation
  }
}
```

```html
<!-- user-profile.component.html -->
<div class="user-profile">
  <!-- Good: Interpolation for text -->
  <h1>{{ user.name }}</h1>
  <p>{{ getAgeLabel() }}</p>
  
  <!-- Good: Property binding for attributes -->
  <img [src]="user.avatar" 
       [alt]="user.name + ' avatar'"
       [style]="getAvatarStyles()">
  
  <!-- Good: Class binding with object syntax -->
  <div [class]="{
    'status': true,
    'active': user.isActive,
    'verified': user.isVerified
  }">
    Status: {{ user.isActive ? 'Active' : 'Inactive' }}
  </div>
  
  <!-- Good: Event binding with clean handler -->
  <button (click)="onProfileUpdate()" 
          [disabled]="!user.isActive">
    Update Profile
  </button>
</div>
```

### 2. Form Component with Best Practices

```typescript
// user-form.component.ts
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class UserFormComponent {
  // Good: Reactive form instead of ngModel
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(18, [Validators.min(18)]),
    isSubscribed: new FormControl(true)
  });

  // Good: Clean method for form validation
  isFormValid(): boolean {
    return this.userForm.valid && this.userForm.dirty;
  }

  // Good: Clean method for submit handling
  onSubmit(): void {
    if (this.isFormValid()) {
      this.saveUser();
    }
  }

  // Good: Clean method for field validation
  getFieldError(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return 'This field is required';
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['min']) return 'Age must be at least 18';
    }
    return '';
  }

  private saveUser(): void {
    // Implementation
  }
}
```

```html
<!-- user-form.component.html -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <!-- Good: Property binding for form controls -->
  <div class="form-group">
    <label for="name">Name</label>
    <input id="name" 
           type="text" 
           formControlName="name"
           [class.error]="getFieldError('name')"
           [attr.aria-describedby]="'name-error'">
    
    <!-- Good: Conditional error display -->
    <div *ngIf="getFieldError('name')" 
         id="name-error" 
         class="error-message">
      {{ getFieldError('name') }}
    </div>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input id="email" 
           type="email" 
           formControlName="email"
           [class.error]="getFieldError('email')">
    
    <div *ngIf="getFieldError('email')" 
         class="error-message">
      {{ getFieldError('email') }}
    </div>
  </div>

  <div class="form-group">
    <label for="age">Age</label>
    <input id="age" 
           type="number" 
           formControlName="age"
           [class.error]="getFieldError('age')">
    
    <div *ngIf="getFieldError('age')" 
         class="error-message">
      {{ getFieldError('age') }}
    </div>
  </div>

  <div class="form-group">
    <label>
      <input type="checkbox" 
             formControlName="isSubscribed">
      Subscribe to newsletter
    </label>
  </div>

  <!-- Good: Button state based on form validity -->
  <button type="submit" 
          [disabled]="!isFormValid()"
          [class.loading]="isSubmitting">
    {{ isSubmitting ? 'Saving...' : 'Save User' }}
  </button>
</form>
```

### 3. Dynamic List Component

```typescript
// dynamic-list.component.ts
export class DynamicListComponent {
  items = [
    { id: 1, name: 'Item 1', status: 'active', priority: 'high' },
    { id: 2, name: 'Item 2', status: 'inactive', priority: 'medium' },
    { id: 3, name: 'Item 3', status: 'active', priority: 'low' }
  ];

  // Good: TrackBy function for performance
  trackByFn(index: number, item: any): number {
    return item.id;
  }

  // Good: Clean method for item classes
  getItemClasses(item: any): string {
    const classes = ['list-item'];
    
    if (item.status === 'active') classes.push('active');
    if (item.priority === 'high') classes.push('high-priority');
    if (item.priority === 'low') classes.push('low-priority');
    
    return classes.join(' ');
  }

  // Good: Clean method for item styles
  getItemStyles(item: any): string {
    const styles = [];
    
    if (item.priority === 'high') {
      styles.push('border-left: 4px solid red');
    } else if (item.priority === 'medium') {
      styles.push('border-left: 4px solid orange');
    } else {
      styles.push('border-left: 4px solid green');
    }
    
    return styles.join('; ');
  }

  // Good: Event handler
  onItemClick(item: any): void {
    this.selectItem(item);
  }

  private selectItem(item: any): void {
    // Implementation
  }
}
```

```html
<!-- dynamic-list.component.html -->
<div class="dynamic-list">
  <!-- Good: ngFor with trackBy -->
  <div *ngFor="let item of items; trackBy: trackByFn"
       [class]="getItemClasses(item)"
       [style]="getItemStyles(item)"
       (click)="onItemClick(item)">
    
    <!-- Good: Interpolation for text -->
    <h3>{{ item.name }}</h3>
    
    <!-- Good: Property binding for attributes -->
    <span [class]="'status-' + item.status">
      {{ item.status }}
    </span>
    
    <!-- Good: Conditional rendering -->
    <span *ngIf="item.priority === 'high'" 
          class="priority-badge">
      High Priority
    </span>
  </div>
</div>
```

## 🎨 CSS Examples

### 1. Dynamic Styling Classes

```scss
// styles.scss
.list-item {
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &.active {
    background-color: #e8f5e8;
    border-color: #4caf50;
  }
  
  &.inactive {
    background-color: #f5f5f5;
    border-color: #9e9e9e;
    opacity: 0.7;
  }
  
  &.high-priority {
    border-left-width: 6px;
    font-weight: bold;
  }
  
  &.low-priority {
    opacity: 0.8;
  }
}

.status-active {
  color: #4caf50;
  font-weight: bold;
}

.status-inactive {
  color: #9e9e9e;
}

.priority-badge {
  background-color: #ff5722;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
}
```

## 🚀 Performance Examples

### 1. OnPush Change Detection Strategy

```typescript
// performance.component.ts
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-performance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="getClasses()" [style]="getStyles()">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <button (click)="onAction()" [disabled]="!user.isActive">
        {{ actionText }}
      </button>
    </div>
  `
})
export class PerformanceComponent {
  @Input() user: any;
  @Input() actionText: string = 'Action';

  // Good: Memoized methods for OnPush strategy
  private _classes: string | null = null;
  private _styles: string | null = null;

  getClasses(): string {
    if (!this._classes) {
      this._classes = this.computeClasses();
    }
    return this._classes;
  }

  getStyles(): string {
    if (!this._styles) {
      this._styles = this.computeStyles();
    }
    return this._styles;
  }

  private computeClasses(): string {
    return `user-card ${this.user.isActive ? 'active' : 'inactive'}`;
  }

  private computeStyles(): string {
    return `background-color: ${this.user.isActive ? '#e8f5e8' : '#f5f5f5'}`;
  }

  onAction(): void {
    // Handle action
  }
}
```

### 2. Async Pipe Usage

```typescript
// async-example.component.ts
export class AsyncExampleComponent {
  // Good: Use async pipe instead of manual subscription
  users$ = this.userService.getUsers();
  loading$ = this.userService.loading$;
  error$ = this.userService.error$;

  constructor(private userService: UserService) {}
}
```

```html
<!-- async-example.component.html -->
<div class="async-example">
  <!-- Good: Async pipe with loading state -->
  <div *ngIf="loading$ | async" class="loading">
    Loading users...
  </div>
  
  <!-- Good: Async pipe with error handling -->
  <div *ngIf="error$ | async as error" class="error">
    Error: {{ error.message }}
  </div>
  
  <!-- Good: Async pipe with data -->
  <div *ngIf="users$ | async as users" class="users">
    <div *ngFor="let user of users; trackBy: trackByFn"
         [class]="getUserClass(user)"
         (click)="selectUser(user)">
      {{ user.name }}
    </div>
  </div>
</div>
```

## 📋 Checklist for Code Review

When reviewing Angular data binding code, check for:

- [ ] **Interpolation** only used for text content
- [ ] **Property binding** used for attributes, styles, and classes
- [ ] **Event handlers** are clean and call component methods
- [ ] **Complex logic** moved from templates to component methods
- [ ] **Reactive forms** preferred over template-driven forms
- [ ] **TrackBy functions** used with `*ngFor`
- [ ] **Async pipe** used when possible
- [ ] **OnPush strategy** considered for performance
- [ ] **Proper typing** for all properties and methods
- [ ] **Clean separation** of concerns between template and component

## 🔧 Common Anti-Patterns to Avoid

```html
<!-- ❌ DON'T: Complex logic in template -->
<div [class]="user.status === 'active' && !user.isBlocked && user.lastLogin > threshold ? 'active' : 'inactive'">
  Status
</div>

<!-- ❌ DON'T: Multiple operations in event binding -->
<button (click)="this.count++; this.updateUI(); this.saveData(); this.showMessage();">
  Click Me
</button>

<!-- ❌ DON'T: Interpolation for attributes -->
<img src="{{ imageUrl }}" alt="{{ user.name }}">

<!-- ❌ DON'T: Creating objects in template -->
<div [style]="{ color: textColor, 'font-size': fontSize + 'px' }">
  Content
</div>
```

## ✅ Best Practices Summary

1. **Keep templates clean** - Move logic to components
2. **Use proper binding types** - Interpolation for text, property binding for attributes
3. **Handle events cleanly** - Short handlers that call component methods
4. **Optimize for performance** - Use OnPush, trackBy, async pipe
5. **Type everything** - Proper TypeScript interfaces and types
6. **Follow Angular patterns** - Reactive forms, proper change detection
7. **Test your bindings** - Unit tests for component methods
8. **Document complex logic** - Clear method names and comments
