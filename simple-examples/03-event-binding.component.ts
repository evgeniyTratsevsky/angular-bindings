import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-example',
  standalone: true,
  template: `
    <div class="event-binding-example">
      <h2>3. Event Binding Examples</h2>
      
      <!-- Button click -->
      <div class="example-section">
        <h3>Button Click Events</h3>
        <button (click)="onButtonClick()" class="btn btn-primary">
          Click Me ({{ clickCount }} times)
        </button>
        <button (dblclick)="onDoubleClick()" class="btn btn-secondary">
          Double Click Me
        </button>
        <button (mouseenter)="onMouseEnter()" 
                (mouseleave)="onMouseLeave()" 
                class="btn btn-info">
          Hover Me
        </button>
        <p><strong>Click count:</strong> {{ clickCount }}</p>
        <p><strong>Last event:</strong> {{ lastEvent }}</p>
      </div>
      
      <!-- Input events -->
      <div class="example-section">
        <h3>Input Events</h3>
        <div class="input-group">
          <label>Type something:</label>
          <input (input)="onInputChange($event)" 
                 [value]="inputText"
                 placeholder="Start typing..."
                 class="form-input">
          <p><strong>You typed:</strong> {{ inputText }}</p>
          <p><strong>Character count:</strong> {{ inputText.length }}</p>
        </div>
        
        <div class="input-group">
          <label>Focus events:</label>
          <input (focus)="onInputFocus()" 
                 (blur)="onInputBlur()" 
                 placeholder="Click to focus"
                 class="form-input">
          <p><strong>Focus status:</strong> {{ focusStatus }}</p>
        </div>
      </div>
      
      <!-- Select and checkbox events -->
      <div class="example-section">
        <h3>Select and Checkbox Events</h3>
        <div class="select-group">
          <label>Choose an option:</label>
          <select (change)="onSelectChange($event)" class="form-select">
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <p><strong>Selected:</strong> {{ selectedOption || 'None' }}</p>
        </div>
        
        <div class="checkbox-group">
          <label>
            <input type="checkbox" 
                   (change)="onCheckboxChange($event)"
                   [checked]="isChecked">
            I agree to terms
          </label>
          <p><strong>Agreed:</strong> {{ isChecked ? 'Yes' : 'No' }}</p>
        </div>
      </div>
      
      <!-- Keyboard events -->
      <div class="example-section">
        <h3>Keyboard Events</h3>
        <input (keydown)="onKeyDown($event)" 
               (keyup)="onKeyUp($event)"
               placeholder="Press any key"
               class="form-input">
        <p><strong>Last key pressed:</strong> {{ lastKey }}</p>
        <p><strong>Key code:</strong> {{ keyCode }}</p>
      </div>
      
      <!-- Form events -->
      <div class="example-section">
        <h3>Form Events</h3>
        <form (submit)="onFormSubmit()" class="form">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-input" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-input" placeholder="Enter email">
          </div>
          <button type="submit" class="btn btn-success">Submit Form</button>
        </form>
        <p><strong>Form submitted:</strong> {{ formSubmitted ? 'Yes' : 'No' }}</p>
      </div>
      
      <!-- Event log -->
      <div class="example-section">
        <h3>Event Log</h3>
        <div class="event-log">
          <div *ngFor="let event of eventLog" class="log-entry">
            <span class="timestamp">{{ event.timestamp }}</span>
            <span class="event-type">{{ event.type }}</span>
            <span class="event-details">{{ event.details }}</span>
          </div>
        </div>
        <button (click)="clearEventLog()" class="btn btn-warning">
          Clear Log
        </button>
      </div>
    </div>
  `,
  styles: [`
    .event-binding-example {
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
    
    .btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin: 5px;
    }
    
    .btn-primary { background-color: #007bff; }
    .btn-secondary { background-color: #6c757d; }
    .btn-info { background-color: #17a2b8; }
    .btn-success { background-color: #28a745; }
    .btn-warning { background-color: #ffc107; color: #212529; }
    
    .btn:hover {
      opacity: 0.8;
    }
    
    .form-input, .form-select {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 5px 0;
    }
    
    .input-group, .select-group, .checkbox-group, .form-group {
      margin: 15px 0;
    }
    
    .form {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 8px;
      background-color: white;
    }
    
    .event-log {
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #ddd;
      padding: 10px;
      background-color: white;
      margin: 10px 0;
    }
    
    .log-entry {
      padding: 5px;
      border-bottom: 1px solid #eee;
      font-family: monospace;
      font-size: 14px;
    }
    
    .timestamp {
      color: #666;
      margin-right: 10px;
    }
    
    .event-type {
      color: #007bff;
      font-weight: bold;
      margin-right: 10px;
    }
    
    .event-details {
      color: #333;
    }
  `]
})
export class EventBindingExampleComponent {
  // Properties to track state
  clickCount = 0;
  inputText = '';
  selectedOption = '';
  isChecked = false;
  focusStatus = 'Not focused';
  lastEvent = 'None';
  lastKey = 'None';
  keyCode = 0;
  formSubmitted = false;
  eventLog: Array<{timestamp: string, type: string, details: string}> = [];
  
  // Event handlers
  onButtonClick(): void {
    this.clickCount++;
    this.lastEvent = 'Button clicked';
    this.logEvent('click', `Button clicked (${this.clickCount} times)`);
  }
  
  onDoubleClick(): void {
    this.lastEvent = 'Double click';
    this.logEvent('dblclick', 'Button double clicked');
  }
  
  onMouseEnter(): void {
    this.lastEvent = 'Mouse enter';
    this.logEvent('mouseenter', 'Mouse entered button');
  }
  
  onMouseLeave(): void {
    this.lastEvent = 'Mouse leave';
    this.logEvent('mouseleave', 'Mouse left button');
  }
  
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputText = target.value;
    this.logEvent('input', `Input changed to: ${this.inputText}`);
  }
  
  onInputFocus(): void {
    this.focusStatus = 'Focused';
    this.logEvent('focus', 'Input focused');
  }
  
  onInputBlur(): void {
    this.focusStatus = 'Not focused';
    this.logEvent('blur', 'Input lost focus');
  }
  
  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
    this.logEvent('change', `Selected: ${this.selectedOption}`);
  }
  
  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isChecked = target.checked;
    this.logEvent('change', `Checkbox: ${this.isChecked ? 'checked' : 'unchecked'}`);
  }
  
  onKeyDown(event: KeyboardEvent): void {
    this.lastKey = event.key;
    this.keyCode = event.keyCode;
    this.logEvent('keydown', `Key: ${event.key} (Code: ${event.keyCode})`);
  }
  
  onKeyUp(event: KeyboardEvent): void {
    this.logEvent('keyup', `Key: ${event.key} released`);
  }
  
  onFormSubmit(): void {
    this.formSubmitted = true;
    this.logEvent('submit', 'Form submitted');
    event?.preventDefault(); // Prevent actual form submission
  }
  
  private logEvent(type: string, details: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.unshift({ timestamp, type, details });
    
    // Keep only last 20 events
    if (this.eventLog.length > 20) {
      this.eventLog = this.eventLog.slice(0, 20);
    }
  }
  
  clearEventLog(): void {
    this.eventLog = [];
  }
}
