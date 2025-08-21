import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-example',
  standalone: true,
  template: `
    <div class="property-binding-example">
      <h2>2. Property Binding Examples</h2>
      
      <!-- Image binding -->
      <div class="example-section">
        <h3>Image Binding</h3>
        <img [src]="imageUrl" 
             [alt]="'User avatar'"
             [title]="'Profile picture'"
             [width]="100"
             [height]="100">
        <p><strong>Image URL:</strong> {{ imageUrl }}</p>
      </div>
      
      <!-- Button binding -->
      <div class="example-section">
        <h3>Button Binding</h3>
        <button [disabled]="isDisabled"
                [textContent]="buttonText"
                [style.backgroundColor]="getButtonColor()"
                [style.color]="'white'"
                [style.padding]="'10px 20px'"
                [style.border]="'none'"
                [style.borderRadius]="'5px'"
                [style.cursor]="isDisabled ? 'not-allowed' : 'pointer'">
          Click Me
        </button>
        <p><strong>Button disabled:</strong> {{ isDisabled }}</p>
        <p><strong>Button text:</strong> {{ buttonText }}</p>
        <button (click)="toggleButton()" style="margin-left: 10px;">
          Toggle Button
        </button>
      </div>
      
      <!-- Input binding -->
      <div class="example-section">
        <h3>Input Binding</h3>
        <input [value]="inputValue"
               [attr.maxlength]="maxLength"
               [placeholder]="'Enter text here'"
               [style.color]="getInputColor()"
               [style.border]="'2px solid #ccc'"
               [style.padding]="'8px'"
               [style.borderRadius]="'4px'"
               [style.width]="'200px'">
        <p><strong>Input value:</strong> {{ inputValue }}</p>
        <p><strong>Max length:</strong> {{ maxLength }}</p>
        <button (click)="changeInputValue()" style="margin-left: 10px;">
          Change Input
        </button>
      </div>
      
      <!-- Div binding -->
      <div class="example-section">
        <h3>Div Binding</h3>
        <div [id]="'content-' + maxLength"
             [class]="isDisabled ? 'disabled-content' : 'enabled-content'"
             [hidden]="isDisabled"
             [style.padding]="'15px'"
             [style.border]="'1px solid #ddd'"
             [style.borderRadius]="'8px'"
             [style.backgroundColor]="isDisabled ? '#f5f5f5' : '#e8f5e8'">
          This content is {{ isDisabled ? 'hidden' : 'visible' }}
          <br>
          <strong>ID:</strong> content-{{ maxLength }}
        </div>
        <p><strong>Content hidden:</strong> {{ isDisabled }}</p>
      </div>
      
      <!-- Dynamic styles -->
      <div class="example-section">
        <h3>Dynamic Styles</h3>
        <div [style]="getDynamicStyles()"
             [style.padding]="'20px'"
             [style.borderRadius]="'8px'"
             [style.margin]="'10px 0'">
          Dynamic styling based on state
        </div>
        <button (click)="toggleStyles()" style="margin: 10px 5px;">
          Toggle Styles
        </button>
        <button (click)="randomStyles()" style="margin: 10px 5px;">
          Random Styles
        </button>
      </div>
    </div>
  `,
  styles: [`
    .property-binding-example {
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
    
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin: 5px;
    }
    
    button:hover {
      background-color: #0056b3;
    }
    
    .disabled-content {
      opacity: 0.5;
    }
    
    .enabled-content {
      opacity: 1;
    }
  `]
})
export class PropertyBindingExampleComponent {
  // Properties for binding
  imageUrl = 'https://via.placeholder.com/100x100/007bff/ffffff?text=Avatar';
  buttonText = 'Click Me';
  isDisabled = false;
  inputValue = 'Hello World';
  maxLength = 50;
  useDarkTheme = false;
  
  // Dynamic values
  getButtonColor(): string {
    return this.isDisabled ? '#6c757d' : '#007bff';
  }
  
  getInputColor(): string {
    return this.isDisabled ? '#6c757d' : '#333';
  }
  
  getDynamicStyles(): string {
    if (this.useDarkTheme) {
      return 'background-color: #343a40; color: white; border: 2px solid #495057;';
    } else {
      return 'background-color: #f8f9fa; color: #333; border: 2px solid #dee2e6;';
    }
  }
  
  // Methods to change properties
  toggleButton(): void {
    this.isDisabled = !this.isDisabled;
  }
  
  changeInputValue(): void {
    this.inputValue = 'Changed at ' + new Date().toLocaleTimeString();
  }
  
  toggleStyles(): void {
    this.useDarkTheme = !this.useDarkTheme;
  }
  
  randomStyles(): void {
    this.useDarkTheme = Math.random() > 0.5;
  }
}
