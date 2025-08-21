import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Widget {
  type: string;
  title: string;
  value?: string | number;
  label?: string;
  change?: number;
  data?: Array<{label: string, value: number}>;
  items?: Array<{text: string, status: string}>;
  progress?: number;
}

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="page-header text-center mb-4">
        <h1>Practical Examples</h1>
        <p>Real-world scenarios demonstrating Angular data bindings</p>
      </div>

      <div class="examples-grid grid grid-2">
        <!-- User Profile Form -->
        <div class="example-card card">
          <h3>User Profile Form</h3>
          <p class="example-description">Complete form with various binding types</p>
          
          <form class="profile-form" (ngSubmit)="saveProfile()">
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" class="form-input" [(ngModel)]="profile.fullName" name="fullName" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Email *</label>
              <input type="email" class="form-input" [(ngModel)]="profile.email" name="email" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Age</label>
              <input type="number" class="form-input" [(ngModel)]="profile.age" name="age" min="13" max="120">
            </div>
            
            <div class="form-group">
              <label class="form-label">Bio</label>
              <textarea class="form-input" [(ngModel)]="profile.bio" name="bio" rows="3" 
                        placeholder="Tell us about yourself..."></textarea>
            </div>
            
            <div class="form-group">
              <label class="form-label">Skills</label>
              <div class="skills-container">
                <div *ngFor="let skill of availableSkills" class="skill-item">
                  <input type="checkbox" [id]="'skill-' + skill" 
                         [checked]="profile.skills.includes(skill)"
                         (change)="toggleSkill(skill)">
                  <label [for]="'skill-' + skill">{{ skill }}</label>
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label">Theme</label>
              <select class="form-input" [(ngModel)]="profile.theme" name="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="form-label">Notifications</label>
              <div class="checkbox-group">
                <input type="checkbox" [(ngModel)]="profile.notifications.email" name="emailNotif">
                <label>Email notifications</label>
              </div>
              <div class="checkbox-group">
                <input type="checkbox" [(ngModel)]="profile.notifications.push" name="pushNotif">
                <label>Push notifications</label>
              </div>
            </div>
            
            <button type="submit" class="btn" [disabled]="!isFormValid()">Save Profile</button>
          </form>
          
          <div class="profile-preview card mt-4" [class.theme-dark]="profile.theme === 'dark'">
            <h4>Profile Preview</h4>
            <div class="preview-content">
              <p><strong>Name:</strong> {{ profile.fullName || 'Not specified' }}</p>
              <p><strong>Email:</strong> {{ profile.email || 'Not specified' }}</p>
              <p><strong>Age:</strong> {{ profile.age || 'Not specified' }}</p>
              <p><strong>Bio:</strong> {{ profile.bio || 'No bio provided' }}</p>
              <p><strong>Skills:</strong> {{ profile.skills.length > 0 ? profile.skills.join(', ') : 'None selected' }}</p>
              <p><strong>Theme:</strong> {{ profile.theme }}</p>
              <p><strong>Notifications:</strong> {{ getNotificationStatus() }}</p>
            </div>
          </div>
        </div>

        <!-- Dynamic Dashboard -->
        <div class="example-card card">
          <h3>Dynamic Dashboard</h3>
          <p class="example-description">Interactive dashboard with real-time updates</p>
          
          <div class="dashboard-controls">
            <div class="form-group">
              <label class="form-label">Add Widget</label>
              <div class="add-widget">
                <select class="form-input" [(ngModel)]="newWidgetType">
                  <option value="">Select widget type</option>
                  <option value="chart">Chart</option>
                  <option value="metric">Metric</option>
                  <option value="list">List</option>
                  <option value="progress">Progress</option>
                </select>
                <button class="btn" (click)="addWidget()" [disabled]="!newWidgetType">Add</button>
              </div>
            </div>
          </div>
          
          <div class="widgets-container">
            <div *ngFor="let widget of widgets; let i = index" 
                 class="widget" 
                 [class.widget-chart]="widget.type === 'chart'"
                 [class.widget-metric]="widget.type === 'metric'"
                 [class.widget-list]="widget.type === 'list'"
                 [class.widget-progress]="widget.type === 'progress'">
              
              <div class="widget-header">
                <h4>{{ widget.title }}</h4>
                <button class="btn-remove" (click)="removeWidget(i)">×</button>
              </div>
              
              <div class="widget-content">
                <div *ngIf="widget.type === 'chart'" class="chart-placeholder">
                  📊 Chart Widget
                  <div class="chart-data">
                    <div *ngFor="let data of widget.data" class="chart-bar" 
                         [style.height]="data.value + '%'"
                         [title]="data.label + ': ' + data.value + '%'">
                    </div>
                  </div>
                </div>
                
                <div *ngIf="widget.type === 'metric'" class="metric-display">
                  <div class="metric-value">{{ widget.value }}</div>
                  <div class="metric-label">{{ widget.label }}</div>
                  <div class="metric-change" [class.positive]="widget.change && widget.change > 0" [class.negative]="widget.change && widget.change < 0">
                    {{ widget.change && widget.change > 0 ? '+' : '' }}{{ widget.change }}%
                  </div>
                </div>
                
                <div *ngIf="widget.type === 'list'" class="list-display">
                  <ul class="list-items">
                    <li *ngFor="let item of widget.items" class="list-item">
                      <span class="item-text">{{ item.text }}</span>
                      <span class="item-status" [class]="'status-' + item.status">{{ item.status }}</span>
                    </li>
                  </ul>
                </div>
                
                <div *ngIf="widget.type === 'progress'" class="progress-display">
                  <div class="progress-bar">
                    <div class="progress-fill" [style.width]="widget.progress + '%'"></div>
                  </div>
                  <div class="progress-text">{{ widget.progress }}% Complete</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dashboard-stats">
            <div class="stat-item">
              <span class="stat-label">Total Widgets:</span>
              <span class="stat-value">{{ widgets.length }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Active Widgets:</span>
              <span class="stat-value">{{ getActiveWidgetsCount() }}</span>
            </div>
          </div>
        </div>

        <!-- Shopping Cart -->
        <div class="example-card card">
          <h3>Shopping Cart</h3>
          <p class="example-description">E-commerce cart with dynamic calculations</p>
          
          <div class="products-section">
            <h4>Available Products</h4>
            <div class="products-grid">
              <div *ngFor="let product of availableProducts" class="product-item">
                <img [src]="product.image" [alt]="product.name" class="product-image">
                <div class="product-info">
                  <h5>{{ product.name }}</h5>
                  <p class="product-price">{{ product.price | currency }}</p>
                  <button class="btn" (click)="addToCart(product)">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="cart-section">
            <h4>Shopping Cart</h4>
            <div *ngIf="cart.length === 0" class="empty-cart">
              Your cart is empty
            </div>
            
            <div *ngFor="let item of cart; let i = index" class="cart-item">
              <img [src]="item.product.image" [alt]="item.product.name" class="cart-item-image">
              <div class="cart-item-details">
                <h6>{{ item.product.name }}</h6>
                <p class="cart-item-price">{{ item.product.price | currency }}</p>
              </div>
              <div class="cart-item-controls">
                <button class="btn-quantity" (click)="decreaseQuantity(i)">-</button>
                <span class="quantity">{{ item.quantity }}</span>
                <button class="btn-quantity" (click)="increaseQuantity(i)">+</button>
                <button class="btn-remove" (click)="removeFromCart(i)">×</button>
              </div>
            </div>
            
            <div *ngIf="cart.length > 0" class="cart-summary">
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>{{ getSubtotal() | currency }}</span>
              </div>
              <div class="summary-row">
                <span>Tax ({{ taxRate * 100 }}%):</span>
                <span>{{ getTax() | currency }}</span>
              </div>
              <div class="summary-row total">
                <span>Total:</span>
                <span>{{ getTotal() | currency }}</span>
              </div>
              <button class="btn btn-primary" (click)="checkout()">Checkout</button>
            </div>
          </div>
        </div>

        <!-- Theme Switcher -->
        <div class="example-card card">
          <h3>Theme Switcher</h3>
          <p class="example-description">Dynamic theme switching with CSS variables</p>
          
          <div class="theme-controls">
            <div class="form-group">
              <label class="form-label">Primary Color</label>
              <input type="color" class="form-input" [(ngModel)]="themeColors.primary" 
                     (input)="updateTheme()">
            </div>
            
            <div class="form-group">
              <label class="form-label">Secondary Color</label>
              <input type="color" class="form-input" [(ngModel)]="themeColors.secondary" 
                     (input)="updateTheme()">
            </div>
            
            <div class="form-group">
              <label class="form-label">Background Color</label>
              <input type="color" class="form-input" [(ngModel)]="themeColors.background" 
                     (input)="updateTheme()">
            </div>
            
            <div class="form-group">
              <label class="form-label">Text Color</label>
              <input type="color" class="form-input" [(ngModel)]="themeColors.text" 
                     (input)="updateTheme()">
            </div>
          </div>
          
          <div class="theme-preview" [style]="getThemeStyles()">
            <h4>Theme Preview</h4>
            <p>This is how your theme will look with the selected colors.</p>
            <button class="btn">Sample Button</button>
            <div class="sample-card">
              <h5>Sample Card</h5>
              <p>This card demonstrates the current theme colors.</p>
            </div>
          </div>
          
          <div class="theme-presets">
            <h4>Quick Presets</h4>
            <div class="preset-buttons">
              <button class="btn" (click)="applyPreset('default')">Default</button>
              <button class="btn" (click)="applyPreset('dark')">Dark</button>
              <button class="btn" (click)="applyPreset('ocean')">Ocean</button>
              <button class="btn" (click)="applyPreset('sunset')">Sunset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header h1 {
      color: white;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .page-header p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
    }

    .example-card h3 {
      color: #333;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .example-description {
      color: #666;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    /* Profile Form Styles */
    .profile-form {
      margin-bottom: 1rem;
    }

    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.5rem;
    }

    .skill-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .profile-preview {
      background: #f8f9fa;
      border: 2px solid #e9ecef;
    }

    .profile-preview.theme-dark {
      background: #2d3748;
      color: white;
    }

    .preview-content p {
      margin-bottom: 0.5rem;
    }

    /* Dashboard Styles */
    .dashboard-controls {
      margin-bottom: 1rem;
    }

    .add-widget {
      display: flex;
      gap: 0.5rem;
    }

    .widgets-container {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .widget {
      border: 2px solid #e9ecef;
      border-radius: 8px;
      padding: 1rem;
      background: white;
    }

    .widget-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .btn-remove {
      background: #dc3545;
      color: white;
      border: none;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
    }

    .chart-placeholder {
      text-align: center;
      font-size: 1.2rem;
    }

    .chart-data {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      height: 100px;
      margin-top: 1rem;
    }

    .chart-bar {
      width: 20px;
      background: #667eea;
      border-radius: 2px;
      transition: height 0.3s ease;
    }

    .metric-display {
      text-align: center;
    }

    .metric-value {
      font-size: 2rem;
      font-weight: bold;
      color: #667eea;
    }

    .metric-change {
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .metric-change.positive {
      color: #28a745;
    }

    .metric-change.negative {
      color: #dc3545;
    }

    .list-items {
      list-style: none;
      padding: 0;
    }

    .list-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }

    .status-pending {
      color: #ffc107;
    }

    .status-completed {
      color: #28a745;
    }

    .status-failed {
      color: #dc3545;
    }

    .progress-bar {
      width: 100%;
      height: 20px;
      background: #e9ecef;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transition: width 0.3s ease;
    }

    .dashboard-stats {
      display: flex;
      justify-content: space-around;
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      display: block;
      font-size: 1.5rem;
      font-weight: bold;
      color: #667eea;
    }

    /* Shopping Cart Styles */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .product-item {
      border: 2px solid #e9ecef;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
    }

    .product-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    .product-price {
      color: #667eea;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .cart-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    .cart-item-image {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 8px;
    }

    .cart-item-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
    }

    .btn-quantity {
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    .quantity {
      min-width: 30px;
      text-align: center;
      font-weight: bold;
    }

    .cart-summary {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .summary-row.total {
      font-weight: bold;
      font-size: 1.1rem;
      border-top: 1px solid #dee2e6;
      padding-top: 0.5rem;
      margin-top: 0.5rem;
    }

    .empty-cart {
      text-align: center;
      color: #6c757d;
      font-style: italic;
      padding: 2rem;
    }

    /* Theme Switcher Styles */
    .theme-controls {
      margin-bottom: 1rem;
    }

    .theme-preview {
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 2px solid #e9ecef;
    }

    .sample-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
    }

    .theme-presets h4 {
      margin-bottom: 1rem;
    }

    .preset-buttons {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 2rem;
      }
      
      .add-widget {
        flex-direction: column;
      }
      
      .cart-item {
        flex-direction: column;
        text-align: center;
      }
      
      .cart-item-controls {
        margin-left: 0;
        margin-top: 1rem;
      }
    }
  `]
})

export class ExamplesComponent {
  // Profile Form
  profile = {
    fullName: '',
    email: '',
    age: null as number | null,
    bio: '',
    skills: [] as string[],
    theme: 'light',
    notifications: {
      email: false,
      push: false
    }
  };

  availableSkills = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue', 'Node.js', 'Python', 'Java'];

  // Dashboard
  newWidgetType = '';
  widgets: Widget[] = [
    {
      type: 'metric',
      title: 'Total Users',
      value: '1,234',
      label: 'Active Users',
      change: 12.5
    },
    {
      type: 'chart',
      title: 'Monthly Growth',
      data: [
        { label: 'Jan', value: 65 },
        { label: 'Feb', value: 78 },
        { label: 'Mar', value: 82 },
        { label: 'Apr', value: 91 }
      ]
    }
  ];

  // Shopping Cart
  availableProducts = [
    { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/100x100/667eea/ffffff?text=Laptop' },
    { id: 2, name: 'Mouse', price: 29.99, image: 'https://via.placeholder.com/100x100/764ba2/ffffff?text=Mouse' },
    { id: 3, name: 'Keyboard', price: 89.99, image: 'https://via.placeholder.com/100x100/667eea/ffffff?text=Keyboard' }
  ];

  cart: Array<{product: any, quantity: number}> = [];
  taxRate = 0.08;

  // Theme Switcher
  themeColors = {
    primary: '#667eea',
    secondary: '#764ba2',
    background: '#ffffff',
    text: '#333333'
  };

  // Methods
  toggleSkill(skill: string) {
    const index = this.profile.skills.indexOf(skill);
    if (index > -1) {
      this.profile.skills.splice(index, 1);
    } else {
      this.profile.skills.push(skill);
    }
  }

  isFormValid(): boolean {
    return Boolean(this.profile.fullName && this.profile.email);
  }

  saveProfile() {
    console.log('Profile saved:', this.profile);
    alert('Profile saved successfully!');
  }

  getNotificationStatus(): string {
    const notifications = [];
    if (this.profile.notifications.email) notifications.push('Email');
    if (this.profile.notifications.push) notifications.push('Push');
    return notifications.length > 0 ? notifications.join(', ') : 'None';
  }

  addWidget() {
    const widget = this.createWidget(this.newWidgetType);
    if (widget) {
      this.widgets.push(widget);
      this.newWidgetType = '';
    }
  }

  removeWidget(index: number) {
    this.widgets.splice(index, 1);
  }

  createWidget(type: string): Widget | null {
    switch (type) {
      case 'chart':
        return {
          type: 'chart',
          title: 'New Chart',
          data: [
            { label: 'A', value: Math.floor(Math.random() * 100) },
            { label: 'B', value: Math.floor(Math.random() * 100) },
            { label: 'C', value: Math.floor(Math.random() * 100) }
          ]
        };
      case 'metric':
        return {
          type: 'metric',
          title: 'New Metric',
          value: Math.floor(Math.random() * 1000),
          label: 'Units',
          change: Math.floor(Math.random() * 20) - 10
        };
      case 'list':
        return {
          type: 'list',
          title: 'New List',
          items: [
            { text: 'Item 1', status: 'pending' },
            { text: 'Item 2', status: 'completed' },
            { text: 'Item 3', status: 'failed' }
          ]
        };
      case 'progress':
        return {
          type: 'progress',
          title: 'New Progress',
          progress: Math.floor(Math.random() * 100)
        };
      default:
        return null;
    }
  }

  getActiveWidgetsCount(): number {
    return this.widgets.length;
  }

  addToCart(product: any) {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  increaseQuantity(index: number) {
    this.cart[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    } else {
      this.removeFromCart(index);
    }
  }

  getSubtotal(): number {
    return this.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  getTax(): number {
    return this.getSubtotal() * this.taxRate;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }

  checkout() {
    alert(`Total: $${this.getTotal().toFixed(2)}\nThank you for your purchase!`);
    this.cart = [];
  }

  updateTheme() {
    // This would typically update CSS custom properties
    console.log('Theme updated:', this.themeColors);
  }

  getThemeStyles(): string {
    return `
      --primary-color: ${this.themeColors.primary};
      --secondary-color: ${this.themeColors.secondary};
      --background-color: ${this.themeColors.background};
      --text-color: ${this.themeColors.text};
      background-color: ${this.themeColors.background};
      color: ${this.themeColors.text};
    `;
  }

  applyPreset(preset: string) {
    const presets: Record<string, { primary: string; secondary: string; background: string; text: string }> = {
      default: { primary: '#667eea', secondary: '#764ba2', background: '#ffffff', text: '#333333' },
      dark: { primary: '#4a5568', secondary: '#2d3748', background: '#1a202c', text: '#f7fafc' },
      ocean: { primary: '#3182ce', secondary: '#2b6cb0', background: '#ebf8ff', text: '#2d3748' },
      sunset: { primary: '#ed8936', secondary: '#dd6b20', background: '#fffaf0', text: '#744210' }
    };
    
    this.themeColors = { ...presets[preset] };
    this.updateTheme();
  }
}
