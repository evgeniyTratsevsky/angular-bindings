import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="page-header text-center mb-4">
        <h1>Angular Data Bindings</h1>
        <p>Interactive examples of different binding types in Angular</p>
      </div>

      <div class="bindings-grid grid grid-2">
        <!-- Interpolation Binding -->
        <div class="binding-card card">
          <h3>1. Interpolation Binding</h3>
          <p class="binding-description">Display component data in templates using {{ interpolationText }}</p>
          
          <div class="example-section">
            <div class="form-group">
              <label class="form-label">Enter your name:</label>
              <input type="text" class="form-input" [(ngModel)]="userName" placeholder="Type here...">
            </div>
            
            <div class="result-box">
              <strong>Result:</strong> Hello, {{ userName || 'World' }}!
            </div>
            
            <div class="code-example">
              <code>&lt;p&gt;Hello, {{ '{{ userName || "World" }}' }}!&lt;/p&gt;</code>
            </div>
          </div>
        </div>

        <!-- Property Binding -->
        <div class="binding-card card">
          <h3>2. Property Binding</h3>
          <p class="binding-description">Bind component properties to HTML attributes using [property]="expression"</p>
          
          <div class="example-section">
            <div class="form-group">
              <label class="form-label">Image URL:</label>
              <input type="text" class="form-input" [(ngModel)]="imageUrl" placeholder="https://example.com/image.jpg">
            </div>
            
            <div class="form-group">
              <label class="form-label">Image width (px):</label>
              <input type="number" class="form-input" [(ngModel)]="imageWidth" placeholder="300">
            </div>
            
            <div class="result-box">
              <img [src]="imageUrl || 'https://via.placeholder.com/300x200/667eea/ffffff?text=No+Image'" 
                   [width]="imageWidth || 300" 
                   [alt]="'Image with width ' + (imageWidth || 300) + 'px'"
                   class="demo-image">
            </div>
            
            <div class="code-example">
              <code>&lt;img [src]="imageUrl" [width]="imageWidth" [alt]="'Image with width ' + imageWidth + 'px'"&gt;</code>
            </div>
          </div>
        </div>

        <!-- Event Binding -->
        <div class="binding-card card">
          <h3>3. Event Binding</h3>
          <p class="binding-description">Handle events using (event)="handler()"</p>
          
          <div class="example-section">
            <div class="form-group">
              <button class="btn" (click)="incrementCounter()">Click me!</button>
              <button class="btn" (click)="resetCounter()">Reset</button>
            </div>
            
            <div class="result-box">
              <strong>Click count:</strong> {{ clickCount }}
            </div>
            
            <div class="form-group">
              <label class="form-label">Hover over this box:</label>
              <div class="hover-box" 
                   (mouseenter)="onMouseEnter()" 
                   (mouseleave)="onMouseLeave()"
                   [class.hovered]="isHovered">
                {{ isHovered ? 'Mouse is over!' : 'Hover here' }}
              </div>
            </div>
            
            <div class="code-example">
              <code>&lt;button (click)="incrementCounter()"&gt;Click me!&lt;/button&gt;</code>
            </div>
          </div>
        </div>

        <!-- Two-Way Binding -->
        <div class="binding-card card">
          <h3>4. Two-Way Binding</h3>
          <p class="binding-description">Combine property and event binding with [(ngModel)]="property"</p>
          
          <div class="example-section">
            <div class="form-group">
              <label class="form-label">Text input (two-way binding):</label>
              <input type="text" class="form-input" [(ngModel)]="twoWayText" placeholder="Type here...">
            </div>
            
            <div class="form-group">
              <label class="form-label">Checkbox:</label>
              <input type="checkbox" [(ngModel)]="isChecked" id="checkbox">
              <label for="checkbox" class="checkbox-label">{{ isChecked ? 'Checked' : 'Unchecked' }}</label>
            </div>
            
            <div class="form-group">
              <label class="form-label">Select option:</label>
              <select class="form-input" [(ngModel)]="selectedOption">
                <option value="">Choose an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            
            <div class="result-box">
              <strong>Current values:</strong><br>
              Text: "{{ twoWayText || 'Empty' }}"<br>
              Checkbox: {{ isChecked ? 'Yes' : 'No' }}<br>
              Selection: {{ selectedOption || 'None' }}
            </div>
            
            <div class="code-example">
              <code>&lt;input [(ngModel)]="twoWayText"&gt;</code>
            </div>
          </div>
        </div>

        <!-- Class and Style Binding -->
        <div class="binding-card card">
          <h3>5. Class & Style Binding</h3>
          <p class="binding-description">Dynamically apply CSS classes and styles</p>
          
          <div class="example-section">
            <div class="form-group">
              <label class="form-label">Toggle classes:</label>
              <div class="toggle-buttons">
                <button class="btn" (click)="toggleBold()">Bold</button>
                <button class="btn" (click)="toggleItalic()">Italic</button>
                <button class="btn" (click)="toggleUnderline()">Underline</button>
              </div>
            </div>
            
            <div class="result-box">
              <p [class.bold]="isBold" 
                 [class.italic]="isItalic" 
                 [class.underline]="isUnderline"
                 [style.color]="textColor"
                 [style.fontSize]="fontSize + 'px'">
                This text demonstrates class and style binding!
              </p>
            </div>
            
            <div class="form-group">
              <label class="form-label">Text color:</label>
              <input type="color" class="form-input" [(ngModel)]="textColor" style="height: 40px;">
            </div>
            
            <div class="form-group">
              <label class="form-label">Font size: {{ fontSize }}px</label>
              <input type="range" class="form-input" [(ngModel)]="fontSize" min="12" max="32">
            </div>
            
            <div class="code-example">
              <code>&lt;p [class.bold]="isBold" [style.color]="textColor"&gt;Text&lt;/p&gt;</code>
            </div>
          </div>
        </div>

        <!-- Attribute Binding -->
        <div class="binding-card card">
          <h3>6. Attribute Binding</h3>
          <p class="binding-description">Bind to HTML attributes using [attr.attribute]="expression"</p>
          
          <div class="example-section">
            <div class="form-group">
              <label class="form-label">Table rows:</label>
              <input type="number" class="form-input" [(ngModel)]="tableRows" min="1" max="10" placeholder="5">
            </div>
            
            <div class="form-group">
              <label class="form-label">Table columns:</label>
              <input type="number" class="form-input" [(ngModel)]="tableCols" min="1" max="10" placeholder="3">
            </div>
            
            <div class="result-box">
              <table class="demo-table">
                <tbody>
                  <tr *ngFor="let row of getTableRows()">
                    <td *ngFor="let col of getTableCols()" 
                        [attr.data-row]="row" 
                        [attr.data-col]="col"
                        [attr.title]="'Cell at row ' + row + ', column ' + col">
                      {{ row }}-{{ col }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="code-example">
              <code>&lt;td [attr.data-row]="row" [attr.title]="'Cell at row ' + row"&gt;{{ '{{ row }}' }}&lt;/td&gt;</code>
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

    .binding-card h3 {
      color: #333;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .binding-description {
      color: #666;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    .example-section {
      margin-bottom: 1rem;
    }

    .result-box {
      background: #f8f9fa;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem 0;
      font-family: monospace;
    }

    .code-example {
      background: #2d3748;
      color: #e2e8f0;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      overflow-x: auto;
    }

    .demo-image {
      max-width: 100%;
      border-radius: 8px;
      border: 2px solid #e9ecef;
    }

    .hover-box {
      background: #e9ecef;
      border: 2px solid #dee2e6;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .hover-box.hovered {
      background: #667eea;
      color: white;
      border-color: #5a67d8;
      transform: scale(1.05);
    }

    .toggle-buttons {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .bold {
      font-weight: bold;
    }

    .italic {
      font-style: italic;
    }

    .underline {
      text-decoration: underline;
    }

    .checkbox-label {
      margin-left: 0.5rem;
      color: #555;
    }

    .demo-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
    }

    .demo-table td {
      border: 1px solid #dee2e6;
      padding: 0.5rem;
      text-align: center;
      background: #f8f9fa;
    }

    .demo-table td:hover {
      background: #e9ecef;
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 2rem;
      }
      
      .toggle-buttons {
        flex-direction: column;
      }
    }
  `]
})
export class BindingsComponent {
  // Interpolation binding
  interpolationText: string = 'Hello World';
  userName: string = '';

  // Property binding
  imageUrl: string = '';
  imageWidth: number = 300;

  // Event binding
  clickCount: number = 0;
  isHovered: boolean = false;

  // Two-way binding
  twoWayText: string = '';
  isChecked: boolean = false;
  selectedOption: string = '';

  // Class and style binding
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  textColor: string = '#333333';
  fontSize: number = 16;

  // Attribute binding
  tableRows: number = 5;
  tableCols: number = 3;

  // Event handlers
  incrementCounter() {
    this.clickCount++;
  }

  resetCounter() {
    this.clickCount = 0;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
  }

  toggleUnderline() {
    this.isUnderline = !this.isUnderline;
  }

  getTableRows(): number[] {
    return Array.from({length: this.tableRows}, (_, i) => i + 1);
  }

  getTableCols(): number[] {
    return Array.from({length: this.tableCols}, (_, i) => i + 1);
  }
}
