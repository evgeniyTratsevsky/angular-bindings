import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <h1>Bindings App</h1>
        </div>
        <ul class="nav-menu">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/bindings" routerLinkActive="active">Bindings</a></li>
          <li><a routerLink="/examples" routerLinkActive="active">Examples</a></li>
        </ul>
      </div>
    </nav>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <div class="container text-center">
        <p>&copy; 2025 Bindings App. Built with Angular 17.</p>
      </div>
    </footer>
  `,
  styles: [`
    .navbar {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-brand h1 {
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }

    .nav-menu {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-menu a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }

    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .main-content {
      min-height: calc(100vh - 140px);
      padding: 2rem 0;
    }

    .footer {
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1rem 0;
      color: rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 768px) {
      .navbar .container {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-menu {
        gap: 1rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'bindings-app';
}
