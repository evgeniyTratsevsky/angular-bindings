import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationBestPracticesComponent } from './01-interpolation-best-practices.component';
import { PropertyBindingBestPracticesComponent } from './02-property-binding-best-practices.component';

@Component({
  selector: 'app-best-practices',
  standalone: true,
  imports: [
    CommonModule,
    InterpolationBestPracticesComponent,
    PropertyBindingBestPracticesComponent
  ],
  template: `
    <div class="best-practices-container">
      <div class="header">
        <h1>📚 Angular Data Binding - Best Practices</h1>
        <p>Learn the right way to use Angular data binding with interactive examples</p>
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
        <!-- Interpolation Best Practices -->
        <div *ngIf="activeSection === 'interpolation'" class="example-content">
          <app-interpolation-best-practices></app-interpolation-best-practices>
        </div>
        
        <!-- Property Binding Best Practices -->
        <div *ngIf="activeSection === 'property'" class="example-content">
          <app-property-binding-best-practices></app-property-binding-best-practices>
        </div>
        
        <!-- Coming Soon Sections -->
        <div *ngIf="activeSection === 'two-way'" class="coming-soon">
          <h2>🔄 Two-Way Binding Best Practices</h2>
          <p>Coming soon! This section will cover best practices for ngModel and form handling.</p>
        </div>
        
        <div *ngIf="activeSection === 'event'" class="coming-soon">
          <h2>🎯 Event Binding Best Practices</h2>
          <p>Coming soon! This section will cover best practices for event handling and user interactions.</p>
        </div>
        
        <div *ngIf="activeSection === 'style'" class="coming-soon">
          <h2>🎨 Style & Class Binding Best Practices</h2>
          <p>Coming soon! This section will cover best practices for dynamic styling and CSS classes.</p>
        </div>
        
        <div *ngIf="activeSection === 'template'" class="coming-soon">
          <h2>🧠 Template Logic Best Practices</h2>
          <p>Coming soon! This section will cover best practices for keeping templates clean and performant.</p>
        </div>
      </div>
      
      <div class="footer">
        <h3>🎯 Key Principles</h3>
        <div class="principles-grid">
          <div class="principle">
            <h4>1. Use the Right Tool</h4>
            <p><strong>Interpolation</strong> for text, <strong>Property Binding</strong> for attributes, 
            <strong>Event Binding</strong> for interactions</p>
          </div>
          
          <div class="principle">
            <h4>2. Keep Templates Clean</h4>
            <p>Move complex logic to component methods. Templates should be readable and maintainable.</p>
          </div>
          
          <div class="principle">
            <h4>3. Performance Matters</h4>
            <p>Avoid creating new objects in templates. Use methods that return cached values when possible.</p>
          </div>
          
          <div class="principle">
            <h4>4. Follow Angular Patterns</h4>
            <p>Use the built-in Angular features as intended. Don't fight the framework.</p>
          </div>
        </div>
        
        <div class="resources">
          <h4>📖 Additional Resources</h4>
          <ul>
            <li><a href="https://angular.io/guide/template-syntax" target="_blank">Angular Template Syntax Guide</a></li>
            <li><a href="https://angular.io/guide/styleguide" target="_blank">Angular Style Guide</a></li>
            <li><a href="https://angular.io/guide/performance" target="_blank">Angular Performance Best Practices</a></li>
            <li><a href="https://angular.io/guide/forms-overview" target="_blank">Angular Forms Guide</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .best-practices-container {
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
      min-width: 160px;
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
    
    .coming-soon {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 15px;
      border: 2px dashed #dee2e6;
    }
    
    .coming-soon h2 {
      color: #495057;
      margin-bottom: 20px;
    }
    
    .coming-soon p {
      color: #6c757d;
      font-size: 1.1rem;
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
    
    .principles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .principle {
      background: white;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #007bff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .principle h4 {
      color: #007bff;
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    .principle p {
      color: #495057;
      line-height: 1.6;
      margin: 0;
    }
    
    .principle strong {
      color: #007bff;
    }
    
    .resources {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .resources h4 {
      color: #495057;
      margin-bottom: 15px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 8px;
    }
    
    .resources ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .resources li {
      margin: 10px 0;
      line-height: 1.6;
      color: #495057;
    }
    
    .resources a {
      color: #007bff;
      text-decoration: none;
      font-weight: 500;
    }
    
    .resources a:hover {
      text-decoration: underline;
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
      
      .principles-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BestPracticesComponent {
  activeSection = 'interpolation';
  
  sections = [
    { id: 'interpolation', title: '1. Interpolation' },
    { id: 'property', title: '2. Property Binding' },
    { id: 'two-way', title: '3. Two-Way Binding' },
    { id: 'event', title: '4. Event Binding' },
    { id: 'style', title: '5. Style & Class' },
    { id: 'template', title: '6. Template Logic' }
  ];
}
