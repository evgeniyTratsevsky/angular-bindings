import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="hero-section text-center mb-4">
        <h1 class="hero-title">Welcome to Bindings App</h1>
        <p class="hero-subtitle">Explore Angular data binding techniques with interactive examples</p>
        <div class="hero-actions">
          <a routerLink="/bindings" class="btn btn-primary">Get Started</a>
          <a routerLink="/examples" class="btn btn-secondary">View Examples</a>
        </div>
      </div>

      <div class="features-grid grid grid-3">
        <div class="feature-card card">
          <div class="feature-icon">🔗</div>
          <h3>Property Binding</h3>
          <p>Learn how to bind component properties to HTML attributes and properties dynamically.</p>
        </div>
        
        <div class="feature-card card">
          <div class="feature-icon">📝</div>
          <h3>Event Binding</h3>
          <p>Handle user interactions and component events with powerful event binding syntax.</p>
        </div>
        
        <div class="feature-card card">
          <div class="feature-icon">🔄</div>
          <h3>Two-Way Binding</h3>
          <p>Create bidirectional data flow between components and templates using ngModel.</p>
        </div>
      </div>

      <div class="info-section card mt-4">
        <h2>About Angular Bindings</h2>
        <p>Angular provides several ways to bind data between your component and template:</p>
        <ul class="binding-list">
                     <li><strong>Interpolation:</strong> Display component data in templates using {{ 'Hello World' }}</li>
                     <li><strong>Property Binding:</strong> Bind component properties to HTML attributes using [property]="value"</li>
           <li><strong>Event Binding:</strong> Handle events using (event)="handler()"</li>
           <li><strong>Two-Way Binding:</strong> Combine property and event binding with [(ngModel)]="property"</li>
           <li><strong>Attribute Binding:</strong> Bind to HTML attributes using [attr.attribute]="value"</li>
           <li><strong>Class Binding:</strong> Dynamically apply CSS classes using [class.className]="condition"</li>
           <li><strong>Style Binding:</strong> Apply inline styles dynamically using [style.property]="value"</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      padding: 4rem 0;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.5);
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      color: #333;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .feature-card p {
      color: #666;
      line-height: 1.6;
    }

    .info-section h2 {
      color: #333;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .info-section p {
      color: #666;
      margin-bottom: 1rem;
    }

    .binding-list {
      list-style: none;
      padding: 0;
    }

    .binding-list li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
      color: #555;
    }

    .binding-list li:last-child {
      border-bottom: none;
    }

    .binding-list strong {
      color: #667eea;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .hero-actions {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class HomeComponent {}
