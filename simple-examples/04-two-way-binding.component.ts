import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-example',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="two-way-binding-example">
      <h2>4. Two-Way Binding Examples</h2>
      
      <!-- Text input with ngModel -->
      <div class="example-section">
        <h3>Text Input with ngModel</h3>
        <div class="form-group">
          <label>Username:</label>
          <input [(ngModel)]="username" 
                 placeholder="Enter username"
                 class="form-input">
          <p><strong>Current value:</strong> {{ username }}</p>
          <p><strong>Character count:</strong> {{ username.length }}</p>
        </div>
      </div>
      
      <!-- Email input with ngModel -->
      <div class="example-section">
        <h3>Email Input with ngModel</h3>
        <div class="form-group">
          <label>Email:</label>
          <input [(ngModel)]="email" 
                 type="email" 
                 placeholder="Enter email"
                 class="form-input">
          <p><strong>Current value:</strong> {{ email }}</p>
          <p><strong>Is valid email:</strong> {{ isValidEmail() ? 'Yes' : 'No' }}</p>
        </div>
      </div>
      
      <!-- Number input with ngModel -->
      <div class="example-section">
        <h3>Number Input with ngModel</h3>
        <div class="form-group">
          <label>Age:</label>
          <input [(ngModel)]="age" 
                 type="number" 
                 min="0" 
                 max="120"
                 class="form-input">
          <p><strong>Current value:</strong> {{ age }}</p>
          <p><strong>Age category:</strong> {{ getAgeCategory() }}</p>
        </div>
      </div>
      
      <!-- Checkbox with ngModel -->
      <div class="example-section">
        <h3>Checkbox with ngModel</h3>
        <div class="form-group">
          <label>
            <input [(ngModel)]="isSubscribed" 
                   type="checkbox">
            Subscribe to newsletter
          </label>
          <p><strong>Subscribed:</strong> {{ isSubscribed ? 'Yes' : 'No' }}</p>
          <p><strong>Status:</strong> {{ getSubscriptionStatus() }}</p>
        </div>
      </div>
      
      <!-- Select with ngModel -->
      <div class="example-section">
        <h3>Select with ngModel</h3>
        <div class="form-group">
          <label>Country:</label>
          <select [(ngModel)]="selectedCountry" class="form-select">
            <option value="">Select a country</option>
            <option *ngFor="let country of countries" 
                    [value]="country">
              {{ country }}
            </option>
          </select>
          <p><strong>Selected:</strong> {{ selectedCountry || 'None' }}</p>
          <p><strong>Country info:</strong> {{ getCountryInfo() }}</p>
        </div>
      </div>
      
      <!-- Textarea with ngModel -->
      <div class="example-section">
        <h3>Textarea with ngModel</h3>
        <div class="form-group">
          <label>Bio:</label>
          <textarea [(ngModel)]="bio" 
                    placeholder="Tell us about yourself"
                    rows="4"
                    class="form-textarea"></textarea>
          <p><strong>Current value:</strong> {{ bio }}</p>
          <p><strong>Word count:</strong> {{ getWordCount() }}</p>
        </div>
      </div>
      
      <!-- Radio buttons with ngModel -->
      <div class="example-section">
        <h3>Radio Buttons with ngModel</h3>
        <div class="form-group">
          <label>Gender:</label>
          <div class="radio-group">
            <label>
              <input [(ngModel)]="gender" 
                     type="radio" 
                     value="male">
              Male
            </label>
            <label>
              <input [(ngModel)]="gender" 
                     type="radio" 
                     value="female">
              Female
            </label>
            <label>
              <input [(ngModel)]="gender" 
                     type="radio" 
                     value="other">
              Other
            </label>
          </div>
          <p><strong>Selected gender:</strong> {{ gender || 'None' }}</p>
        </div>
      </div>
      
      <!-- Form summary -->
      <div class="example-section">
        <h3>Form Summary</h3>
        <div class="form-summary" *ngIf="hasAnyValue()">
          <h4>Current Form Values:</h4>
          <div class="summary-grid">
            <div class="summary-item">
              <strong>Username:</strong> {{ username || 'Not provided' }}
            </div>
            <div class="summary-item">
              <strong>Email:</strong> {{ email || 'Not provided' }}
            </div>
            <div class="summary-item">
              <strong>Age:</strong> {{ age || 'Not provided' }}
            </div>
            <div class="summary-item">
              <strong>Newsletter:</strong> {{ isSubscribed ? 'Subscribed' : 'Not subscribed' }}
            </div>
            <div class="summary-item">
              <strong>Country:</strong> {{ selectedCountry || 'Not selected' }}
            </div>
            <div class="summary-item">
              <strong>Gender:</strong> {{ gender || 'Not selected' }}
            </div>
            <div class="summary-item full-width">
              <strong>Bio:</strong> {{ bio || 'Not provided' }}
            </div>
          </div>
        </div>
        
        <!-- Action buttons -->
        <div class="actions">
          <button (click)="showValues()" class="btn btn-primary">
            Show Values in Console
          </button>
          <button (click)="resetForm()" class="btn btn-secondary">
            Reset Form
          </button>
          <button (click)="fillSampleData()" class="btn btn-info">
            Fill Sample Data
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .two-way-binding-example {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .example-section {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    
    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }
    
    h3 {
      color: #666;
      margin-bottom: 15px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 5px;
    }
    
    p {
      margin: 8px 0;
      font-size: 16px;
    }
    
    strong {
      color: #007bff;
    }
    
    .form-group {
      margin: 15px 0;
    }
    
    .form-input, .form-select, .form-textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 5px 0;
      font-size: 16px;
    }
    
    .form-textarea {
      resize: vertical;
      min-height: 80px;
    }
    
    .radio-group {
      display: flex;
      gap: 20px;
      margin: 10px 0;
    }
    
    .radio-group label {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
    
    .form-summary {
      background-color: white;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #ddd;
      margin: 15px 0;
    }
    
    .summary-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 15px;
    }
    
    .summary-item {
      padding: 10px;
      background-color: #f8f9fa;
      border-radius: 4px;
      border-left: 3px solid #007bff;
    }
    
    .full-width {
      grid-column: 1 / -1;
    }
    
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 15px;
      flex-wrap: wrap;
    }
    
    .btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    
    .btn-primary { background-color: #007bff; }
    .btn-secondary { background-color: #6c757d; }
    .btn-info { background-color: #17a2b8; }
    
    .btn:hover {
      opacity: 0.8;
    }
  `]
})
export class TwoWayBindingExampleComponent {
  // Properties for two-way binding
  username = '';
  email = '';
  age: number | null = null;
  isSubscribed = true;
  selectedCountry = '';
  bio = '';
  gender = '';
  
  // Array for select options
  countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'Japan', 'Australia', 'Brazil'];
  
  // Validation methods
  isValidEmail(): boolean {
    if (!this.email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
  
  getAgeCategory(): string {
    if (!this.age) return 'Not specified';
    if (this.age < 13) return 'Child';
    if (this.age < 20) return 'Teenager';
    if (this.age < 65) return 'Adult';
    return 'Senior';
  }
  
  getSubscriptionStatus(): string {
    return this.isSubscribed ? 'You will receive our newsletter' : 'You will not receive our newsletter';
  }
  
  getCountryInfo(): string {
    if (!this.selectedCountry) return 'No country selected';
    return `${this.selectedCountry} is a great choice!`;
  }
  
  getWordCount(): number {
    if (!this.bio) return 0;
    return this.bio.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
  
  hasAnyValue(): boolean {
    return !!(this.username || this.email || this.age || this.selectedCountry || this.bio || this.gender);
  }
  
  // Action methods
  showValues(): void {
    console.log('=== Form Values ===');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Age:', this.age);
    console.log('Subscribed:', this.isSubscribed);
    console.log('Country:', this.selectedCountry);
    console.log('Bio:', this.bio);
    console.log('Gender:', this.gender);
    console.log('==================');
  }
  
  resetForm(): void {
    this.username = '';
    this.email = '';
    this.age = null;
    this.isSubscribed = true;
    this.selectedCountry = '';
    this.bio = '';
    this.gender = '';
  }
  
  fillSampleData(): void {
    this.username = 'john_doe';
    this.email = 'john@example.com';
    this.age = 28;
    this.isSubscribed = true;
    this.selectedCountry = 'USA';
    this.bio = 'I am a software developer who loves Angular and TypeScript. I enjoy building modern web applications and learning new technologies.';
    this.gender = 'male';
  }
}
