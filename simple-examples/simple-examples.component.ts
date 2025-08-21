import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationExampleComponent } from './01-interpolation.component';
import { PropertyBindingExampleComponent } from './02-property-binding.component';
import { EventBindingExampleComponent } from './03-event-binding.component';
import { TwoWayBindingExampleComponent } from './04-two-way-binding.component';

@Component({
  selector: 'app-simple-examples',
  standalone: true,
  imports: [
    CommonModule,
    InterpolationExampleComponent,
    PropertyBindingExampleComponent,
    EventBindingExampleComponent,
    TwoWayBindingExampleComponent
  ],
  template: `
    <div class="simple-examples-container">
      <div class="header">
        <h1>🎯 Angular Data Binding - Simple Examples</h1>
        <p>Learn Angular data binding with these interactive examples</p>
      </div>
      
      <div class="navigation">
        <button 
          *ngFor="let section of sections" 
          (click)="activeSection = section.id"
          [class.active]="activeSection === section.id"
          class="nav-button">
          {{ section.title }}
        </button>
      </div>
      
      <div class="content">
        <!-- Interpolation Examples -->
        <div *ngIf="activeSection === 'interpolation'" class="example-content">
          <app-interpolation-example></app-interpolation-example>
        </div>
        
        <!-- Property Binding Examples -->
        <div *ngIf="activeSection === 'property'" class="example-content">
          <app-property-binding-example></app-property-binding-example>
        </div>
        
        <!-- Event Binding Examples -->
        <div *ngIf="activeSection === 'event'" class="example-content">
          <app-event-binding-example></app-event-binding-example>
        </div>
        
        <!-- Two-Way Binding Examples -->
        <div *ngIf="activeSection === 'two-way'" class="example-content">
          <app-two-way-binding-example></app-two-way-binding-example>
        </div>
      </div>
      
      <div class="footer">
        <h3>📚 What You'll Learn</h3>
        <div class="learning-points">
          <div class="point">
            <strong>Interpolation:</strong> Display text and call methods in templates
          </div>
          <div class="point">
            <strong>Property Binding:</strong> Bind HTML attributes and styles dynamically
          </div>
          <div class="point">
            <strong>Event Binding:</strong> Handle user interactions and form events
          </div>
          <div class="point">
            <strong>Two-Way Binding:</strong> Sync form inputs with component properties
          </div>
        </div>
        
        <div class="tips">
          <h4>💡 Pro Tips:</h4>
          <ul>
            <li>Use interpolation <code>{{ 'expression' }}</code> only for text display</li>
            <li>Use property binding <code>[property]</code> for attributes and styles</li>
            <li>Use event binding <code>(event)</code> for user interactions</li>
            <li>Use two-way binding <code>[(ngModel)]</code> for simple forms</li>
            <li>Keep templates clean - move complex logic to component methods</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .simple-examples-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .header {
      text-align: center;
      margin-bottom: 40px;
      padding: 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .header h1 {
      margin: 0 0 15px 0;
      font-size: 2.5rem;
      font-weight: 300;
    }
    
    .header p {
      margin: 0;
      font-size: 1.2rem;
      opacity: 0.9;
    }
    
    .navigation {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }
    
    .nav-button {
      background: #f8f9fa;
      border: 2px solid #dee2e6;
      color: #495057;
      padding: 12px 24px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease;
      min-width: 140px;
    }
    
    .nav-button:hover {
      background: #e9ecef;
      border-color: #adb5bd;
      transform: translateY(-2px);
    }
    
    .nav-button.active {
      background: #007bff;
      border-color: #007bff;
      color: white;
      box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    }
    
    .content {
      min-height: 600px;
      margin-bottom: 40px;
    }
    
    .example-content {
      animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .footer {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 15px;
      border: 1px solid #dee2e6;
    }
    
    .footer h3 {
      color: #495057;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .learning-points {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .point {
      background: white;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #007bff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .point strong {
      color: #007bff;
      display: block;
      margin-bottom: 8px;
      font-size: 18px;
    }
    
    .tips {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .tips h4 {
      color: #495057;
      margin-bottom: 15px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 8px;
    }
    
    .tips ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .tips li {
      margin: 10px 0;
      line-height: 1.6;
      color: #495057;
    }
    
    .tips code {
      background: #e9ecef;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #e83e8c;
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .header h1 {
        font-size: 2rem;
      }
      
      .navigation {
        flex-direction: column;
        align-items: center;
      }
      
      .nav-button {
        width: 100%;
        max-width: 300px;
      }
      
      .learning-points {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SimpleExamplesComponent {
  activeSection = 'interpolation';
  
  sections = [
    { id: 'interpolation', title: '1. Interpolation' },
    { id: 'property', title: '2. Property Binding' },
    { id: 'event', title: '3. Event Binding' },
    { id: 'two-way', title: '4. Two-Way Binding' }
  ];
}
