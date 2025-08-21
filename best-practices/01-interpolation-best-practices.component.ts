import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interpolation-best-practices',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="interpolation-best-practices">
      <h2>1. Interpolation Binding - Best Practices</h2>
      
      <!-- Good Examples Section -->
      <div class="example-section good-examples">
        <h3>✅ Good Examples - Use Interpolation For:</h3>
        
        <div class="example-item">
          <h4>Text Display</h4>
          <div class="code-example">
            <code>&lt;h1&gt;{{ title }}&lt;/h1&gt;</code>
            <div class="result">
              <h1>{{ title }}</h1>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>Method Calls</h4>
          <div class="code-example">
            <code>&lt;p&gt;{{ getGreeting() }}&lt;/p&gt;</code>
            <div class="result">
              <p>{{ getGreeting() }}</p>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>Simple Calculations</h4>
          <div class="code-example">
            <code>&lt;p&gt;Age: {{ age }}, Next year: {{ age + 1 }}&lt;/p&gt;</code>
            <div class="result">
              <p>Age: {{ age }}, Next year: {{ age + 1 }}</p>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>Conditional Text</h4>
          <div class="code-example">
            <code>&lt;p&gt;{{ isActive ? 'Online' : 'Offline' }}&lt;/p&gt;</code>
            <div class="result">
              <p>{{ isActive ? 'Online' : 'Offline' }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bad Examples Section -->
      <div class="example-section bad-examples">
        <h3>❌ Bad Examples - Don't Use Interpolation For:</h3>
        
        <div class="example-item">
          <h4>HTML Attributes</h4>
          <div class="code-example">
            <code>&lt;img src="{{ imageUrl }}"&gt;</code>
            <div class="warning">
              <p>⚠️ This will cause errors! Use property binding instead.</p>
              <p><strong>Correct:</strong> <code>&lt;img [src]="imageUrl"&gt;</code></p>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>CSS Classes</h4>
          <div class="code-example">
            <code>&lt;div class="{{ className }}"&gt;Content&lt;/div&gt;</code>
            <div class="warning">
              <p>⚠️ This will cause errors! Use property binding instead.</p>
              <p><strong>Correct:</strong> <code>&lt;div [class]="className"&gt;Content&lt;/div&gt;</code></p>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>Boolean Attributes</h4>
          <div class="code-example">
            <code>&lt;button disabled="{{ isDisabled }}"&gt;Submit&lt;/button&gt;</code>
            <div class="warning">
              <p>⚠️ This will cause errors! Use property binding instead.</p>
              <p><strong>Correct:</strong> <code>&lt;button [disabled]="isDisabled"&gt;Submit&lt;/button&gt;</code></p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Interactive Demo Section -->
      <div class="example-section interactive-demo">
        <h3>🎯 Interactive Demo</h3>
        
        <div class="demo-controls">
          <div class="control-group">
            <label>Title:</label>
            <input [(ngModel)]="title" placeholder="Enter title">
          </div>
          
          <div class="control-group">
            <label>Age:</label>
            <input [(ngModel)]="age" type="number" min="0" max="120">
          </div>
          
          <div class="control-group">
            <label>
              <input [(ngModel)]="isActive" type="checkbox">
              Is Active
            </label>
          </div>
          
          <div class="control-group">
            <label>Image URL:</label>
            <input [(ngModel)]="imageUrl" placeholder="Enter image URL">
          </div>
          
          <div class="control-group">
            <label>CSS Class:</label>
            <input [(ngModel)]="className" placeholder="Enter CSS class">
          </div>
        </div>
        
        <div class="demo-results">
          <h4>Live Results:</h4>
          
          <!-- Good interpolation examples -->
          <div class="result-item">
            <h5>✅ Good Interpolation:</h5>
            <div class="result-content">
              <h1>{{ title }}</h1>
              <p>Age: {{ age }}, Next year: {{ age + 1 }}</p>
              <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
            </div>
          </div>
          
          <!-- Property binding examples -->
          <div class="result-item">
            <h5>✅ Correct Property Binding:</h5>
            <div class="result-content">
              <img [src]="imageUrl" [alt]="title" style="max-width: 200px; height: auto;">
              <div [class]="className" style="padding: 10px; border: 1px solid #ccc; margin: 10px 0;">
                Dynamic CSS class: {{ className }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Best Practices Summary -->
      <div class="example-section summary">
        <h3>📚 Best Practices Summary</h3>
        
        <div class="practice-grid">
          <div class="practice-item">
            <h4>✅ DO Use Interpolation For:</h4>
            <ul>
              <li>Displaying text content</li>
              <li>Calling methods that return text</li>
              <li>Simple calculations</li>
              <li>Conditional text display</li>
            </ul>
          </div>
          
          <div class="practice-item">
            <h4>❌ DON'T Use Interpolation For:</h4>
            <ul>
              <li>HTML attributes (use [property])</li>
              <li>CSS classes (use [class])</li>
              <li>CSS styles (use [style])</li>
              <li>Boolean attributes (use [property])</li>
            </ul>
          </div>
        </div>
        
        <div class="rule-of-thumb">
          <h4>🎯 Rule of Thumb:</h4>
          <p><strong>Interpolation is for TEXT content only.</strong> If you're setting an HTML attribute, 
          CSS property, or any other non-text value, use property binding instead.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .interpolation-best-practices {
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .example-section {
      margin: 30px 0;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .good-examples {
      background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
      border: 2px solid #28a745;
    }
    
    .bad-examples {
      background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
      border: 2px solid #dc3545;
    }
    
    .interactive-demo {
      background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
      border: 2px solid #17a2b8;
    }
    
    .summary {
      background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
      border: 2px solid #ffc107;
    }
    
    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    
    h3 {
      color: #495057;
      margin-bottom: 20px;
      border-bottom: 2px solid currentColor;
      padding-bottom: 10px;
    }
    
    .example-item {
      margin: 20px 0;
      padding: 15px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 8px;
      border-left: 4px solid currentColor;
    }
    
    .code-example {
      margin: 15px 0;
    }
    
    .code-example code {
      background: #2d3748;
      color: #e2e8f0;
      padding: 10px 15px;
      border-radius: 5px;
      display: block;
      font-family: 'Courier New', monospace;
      font-size: 14px;
    }
    
    .result {
      margin: 15px 0;
      padding: 15px;
      background: white;
      border-radius: 5px;
      border: 1px solid #dee2e6;
    }
    
    .warning {
      background: #fff3cd;
      border: 1px solid #ffeaa7;
      padding: 15px;
      border-radius: 5px;
      margin: 15px 0;
    }
    
    .warning p {
      margin: 5px 0;
      color: #856404;
    }
    
    .demo-controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }
    
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    .control-group label {
      font-weight: bold;
      color: #495057;
    }
    
    .control-group input {
      padding: 8px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .demo-results {
      margin: 20px 0;
    }
    
    .result-item {
      margin: 20px 0;
      padding: 15px;
      background: white;
      border-radius: 8px;
      border: 1px solid #dee2e6;
    }
    
    .result-item h5 {
      color: #495057;
      margin-bottom: 15px;
      border-bottom: 1px solid #dee2e6;
      padding-bottom: 8px;
    }
    
    .result-content {
      padding: 10px;
      background: #f8f9fa;
      border-radius: 5px;
    }
    
    .practice-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .practice-item {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #dee2e6;
    }
    
    .practice-item h4 {
      color: #495057;
      margin-bottom: 15px;
      border-bottom: 2px solid currentColor;
      padding-bottom: 8px;
    }
    
    .practice-item ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .practice-item li {
      margin: 8px 0;
      color: #495057;
    }
    
    .rule-of-thumb {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #dee2e6;
      margin: 20px 0;
    }
    
    .rule-of-thumb h4 {
      color: #495057;
      margin-bottom: 15px;
    }
    
    .rule-of-thumb p {
      color: #495057;
      line-height: 1.6;
      margin: 0;
    }
    
    .rule-of-thumb strong {
      color: #007bff;
    }
  `]
})
export class InterpolationBestPracticesComponent {
  // Properties for the interactive demo
  title = 'Welcome to Angular';
  age = 25;
  isActive = true;
  isDisabled = false;
  imageUrl = 'https://via.placeholder.com/200x150/007bff/ffffff?text=Sample+Image';
  className = 'highlight-box';
  
  // Method for demonstration
  getGreeting(): string {
    return `Hello, ${this.title}!`;
  }
}
