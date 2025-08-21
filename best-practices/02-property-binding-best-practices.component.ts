import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding-best-practices',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="property-binding-best-practices">
      <h2>2. Property Binding - Best Practices</h2>
      
      <!-- Good Examples Section -->
      <div class="example-section good-examples">
        <h3>✅ Good Examples - Use Property Binding For:</h3>
        
        <div class="example-item">
          <h4>HTML Attributes</h4>
          <div class="code-example">
            <code>&lt;img [src]="imageUrl" [alt]="imageAlt"&gt;</code>
            <div class="result">
              <img [src]="imageUrl" [alt]="imageAlt" style="max-width: 200px; height: auto;">
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>Form Properties</h4>
          <div class="code-example">
            <code>&lt;input [value]="inputValue" [disabled]="isDisabled"&gt;</code>
            <div class="result">
              <input [value]="inputValue" [disabled]="isDisabled" style="padding: 8px; margin: 5px;">
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>CSS Classes</h4>
          <div class="code-example">
            <code>&lt;div [class]="getDynamicClasses()"&gt;Dynamic Classes&lt;/div&gt;</code>
            <div class="result">
              <div [class]="getDynamicClasses()" style="padding: 15px; margin: 10px 0; border-radius: 5px;">
                Dynamic Classes: {{ getDynamicClasses() }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>CSS Styles</h4>
          <div class="code-example">
            <code>&lt;div [style]="getDynamicStyles()"&gt;Dynamic Styles&lt;/div&gt;</code>
            <div class="result">
              <div [style]="getDynamicStyles()" style="padding: 15px; margin: 10px 0; border-radius: 5px;">
                Dynamic Styles Applied
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bad Examples Section -->
      <div class="example-section bad-examples">
        <h3>❌ Bad Examples - Don't Use Property Binding For:</h3>
        
        <div class="example-item">
          <h4>Text Content</h4>
          <div class="code-example">
            <code>&lt;h1 [textContent]="title"&gt;&lt;/h1&gt;</code>
            <div class="warning">
              <p>⚠️ This works but is unnecessary! Use interpolation instead.</p>
              <p><strong>Better:</strong> <code>&lt;h1&gt;{{ title }}&lt;/h1&gt;</code></p>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>Complex Logic in Template</h4>
          <div class="code-example">
            <code>&lt;div [class]="user.status === 'active' && !user.isBlocked ? 'active' : 'inactive'"&gt;</code>
            <div class="warning">
              <p>⚠️ This makes templates hard to read! Move logic to component methods.</p>
              <p><strong>Better:</strong> <code>&lt;div [class]="getStatusClass()"&gt;</code></p>
            </div>
          </div>
        </div>
        
        <div class="example-item">
          <h4>Creating Objects in Template</h4>
          <div class="code-example">
            <code>&lt;div [style]="{ color: textColor, 'font-size': fontSize + 'px' }"&gt;</code>
            <div class="warning">
              <p>⚠️ This creates new objects on every change detection! Use component methods.</p>
              <p><strong>Better:</strong> <code>&lt;div [style]="getDynamicStyles()"&gt;</code></p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Interactive Demo Section -->
      <div class="example-section interactive-demo">
        <h3>🎯 Interactive Demo</h3>
        
        <div class="demo-controls">
          <div class="control-group">
            <label>Image URL:</label>
            <input [(ngModel)]="imageUrl" placeholder="Enter image URL">
          </div>
          
          <div class="control-group">
            <label>Image Alt Text:</label>
            <input [(ngModel)]="imageAlt" placeholder="Enter alt text">
          </div>
          
          <div class="control-group">
            <label>Input Value:</label>
            <input [(ngModel)]="inputValue" placeholder="Enter input value">
          </div>
          
          <div class="control-group">
            <label>
              <input [(ngModel)]="isDisabled" type="checkbox">
              Disable Input
            </label>
          </div>
          
          <div class="control-group">
            <label>Theme:</label>
            <select [(ngModel)]="selectedTheme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="colorful">Colorful</option>
            </select>
          </div>
          
          <div class="control-group">
            <label>Size:</label>
            <select [(ngModel)]="selectedSize">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        
        <div class="demo-results">
          <h4>Live Results:</h4>
          
          <!-- Dynamic image -->
          <div class="result-item">
            <h5>✅ Dynamic Image with Property Binding:</h5>
            <div class="result-content">
              <img [src]="imageUrl" [alt]="imageAlt" style="max-width: 200px; height: auto;">
              <p><strong>URL:</strong> {{ imageUrl }}</p>
              <p><strong>Alt:</strong> {{ imageAlt }}</p>
            </div>
          </div>
          
          <!-- Dynamic input -->
          <div class="result-item">
            <h5>✅ Dynamic Input with Property Binding:</h5>
            <div class="result-content">
              <input [value]="inputValue" [disabled]="isDisabled" 
                     [placeholder]="'Current value: ' + inputValue"
                     style="padding: 8px; margin: 5px; width: 200px;">
              <p><strong>Value:</strong> {{ inputValue }}</p>
              <p><strong>Disabled:</strong> {{ isDisabled ? 'Yes' : 'No' }}</p>
            </div>
          </div>
          
          <!-- Dynamic classes and styles -->
          <div class="result-item">
            <h5>✅ Dynamic Classes and Styles:</h5>
            <div class="result-content">
              <div [class]="getDynamicClasses()" [style]="getDynamicStyles()">
                Theme: {{ selectedTheme }}, Size: {{ selectedSize }}
              </div>
              <p><strong>Applied Classes:</strong> {{ getDynamicClasses() }}</p>
              <p><strong>Applied Styles:</strong> {{ getDynamicStyles() }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Best Practices Summary -->
      <div class="example-section summary">
        <h3>📚 Best Practices Summary</h3>
        
        <div class="practice-grid">
          <div class="practice-item">
            <h4>✅ DO Use Property Binding For:</h4>
            <ul>
              <li>HTML attributes (src, alt, disabled, etc.)</li>
              <li>CSS classes and styles</li>
              <li>Form control properties</li>
              <li>Custom data attributes</li>
              <li>ARIA attributes for accessibility</li>
            </ul>
          </div>
          
          <div class="practice-item">
            <h4>❌ DON'T Use Property Binding For:</h4>
            <ul>
              <li>Text content (use interpolation)</li>
              <li>Complex logic (move to methods)</li>
              <li>Creating objects (use methods)</li>
              <li>Expensive calculations</li>
            </ul>
          </div>
        </div>
        
        <div class="rule-of-thumb">
          <h4>🎯 Rule of Thumb:</h4>
          <p><strong>Property binding is for setting HTML attributes, CSS properties, and other non-text values.</strong> 
          Keep templates clean by moving complex logic to component methods.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .property-binding-best-practices {
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
    
    .control-group input, .control-group select {
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
    
    /* Theme-specific styles */
    .theme-light {
      background-color: #f8f9fa;
      color: #333;
      border: 1px solid #dee2e6;
    }
    
    .theme-dark {
      background-color: #343a40;
      color: #f8f9fa;
      border: 1px solid #495057;
    }
    
    .theme-colorful {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: 1px solid #5a6fd8;
    }
    
    .size-small {
      padding: 10px;
      font-size: 14px;
    }
    
    .size-medium {
      padding: 15px;
      font-size: 16px;
    }
    
    .size-large {
      padding: 20px;
      font-size: 18px;
    }
  `]
})
export class PropertyBindingBestPracticesComponent {
  // Properties for the interactive demo
  title = 'Property Binding Demo';
  imageUrl = 'https://via.placeholder.com/200x150/007bff/ffffff?text=Sample+Image';
  imageAlt = 'Sample image description';
  inputValue = 'Hello World';
  isDisabled = false;
  selectedTheme = 'light';
  selectedSize = 'medium';
  
  // Methods for dynamic classes and styles
  getDynamicClasses(): string {
    const classes = ['dynamic-element'];
    
    if (this.selectedTheme) {
      classes.push(`theme-${this.selectedTheme}`);
    }
    
    if (this.selectedSize) {
      classes.push(`size-${this.selectedSize}`);
    }
    
    return classes.join(' ');
  }
  
  getDynamicStyles(): string {
    const styles = [];
    
    if (this.selectedTheme === 'colorful') {
      styles.push('border-radius: 10px');
      styles.push('box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2)');
    }
    
    if (this.selectedSize === 'large') {
      styles.push('font-weight: bold');
    }
    
    return styles.join('; ');
  }
}
