import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  standalone: true,
  template: `
    <div class="interpolation-example">
      <h2>1. Interpolation Binding Examples</h2>
      
      <!-- Basic text display -->
      <div class="example-section">
        <h3>Basic Text Display</h3>
        <p><strong>Title:</strong> {{ title }}</p>
        <p><strong>Name:</strong> {{ userName }}</p>
        <p><strong>Age:</strong> {{ age }}</p>
        <p><strong>Status:</strong> {{ isActive ? 'Active' : 'Inactive' }}</p>
      </div>
      
      <!-- Method calls -->
      <div class="example-section">
        <h3>Method Calls</h3>
        <p>{{ getGreeting() }}</p>
        <p>{{ getStatus() }}</p>
        <p>{{ getCurrentTime() }}</p>
      </div>
      
      <!-- Simple calculations -->
      <div class="example-section">
        <h3>Simple Calculations</h3>
        <p><strong>Next year you'll be:</strong> {{ age + 1 }}</p>
        <p><strong>Birth year (approx):</strong> {{ 2024 - age }}</p>
        <p><strong>Status length:</strong> {{ getStatus().length }} characters</p>
      </div>
      
      <!-- Conditional display -->
      <div class="example-section">
        <h3>Conditional Display</h3>
        <p>{{ isActive ? 'User is online' : 'User is offline' }}</p>
        <p>{{ age >= 18 ? 'Adult user' : 'Minor user' }}</p>
        <p>{{ userName.length > 5 ? 'Long name' : 'Short name' }}</p>
      </div>
    </div>
  `,
  styles: [`
    .interpolation-example {
      padding: 20px;
      max-width: 600px;
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
  `]
})
export class InterpolationExampleComponent {
  // Simple text properties
  title = 'Hello World';
  userName = 'John Doe';
  age = 25;
  isActive = true;
  
  // Method that returns text
  getGreeting(): string {
    return `Hello, ${this.userName}!`;
  }
  
  // Method with simple logic
  getStatus(): string {
    return this.isActive ? 'Active' : 'Inactive';
  }
  
  // Method that returns current time
  getCurrentTime(): string {
    return `Current time: ${new Date().toLocaleTimeString()}`;
  }
}
