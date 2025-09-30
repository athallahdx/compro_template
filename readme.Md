# Coco Sugar Company Profile Template

A modern, responsive company profile website template built with Laravel, React, and Inertia.js. This template is specifically designed for Coco Sugar Indonesia, an organic coconut sugar producer, but can be adapted for any business profile website.

## 🌟 Features

- **Modern Tech Stack**: Laravel 12, React 19, Inertia.js 2.0, TypeScript
- **Admin Panel**: Filament 4.0 for easy content management
- **Responsive Design**: Built with Tailwind CSS 4.0 and shadcn/ui components
- **Authentication**: Laravel Fortify with two-factor authentication support
- **Content Management**: Dynamic sections for:
  - About Us
  - Company Motto
  - Product Advantages
  - Production Procedures
  - Certifications
  - Contact Information
- **SEO Optimized**: Server-side rendering (SSR) support with Inertia.js
- **Developer Experience**: ESLint, Prettier, TypeScript support
- **Testing**: PHPUnit for backend testing

## 🚀 Technology Stack

### Backend
- **Laravel 12**: Modern PHP framework
- **Filament 4.0**: Admin panel for content management
- **Laravel Fortify**: Authentication system
- **SQLite**: Database (configurable)

### Frontend
- **React 19**: Modern React with hooks
- **Inertia.js 2.0**: SPA experience without API
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **shadcn/ui**: Beautiful UI components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons

### Development Tools
- **Vite**: Fast build tool and dev server
- **Laravel Wayfinder**: Type-safe routing
- **ESLint & Prettier**: Code formatting and linting
- **Concurrently**: Run multiple commands

## 📋 Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 18+ and npm
- MySQL

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd compro-template
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   touch database/database.sqlite
   php artisan migrate --seed
   ```

6. **Storage link**
   ```bash
   php artisan storage:link
   ```

## 🚀 Development

### Start development server
```bash
composer run dev
```

This command will start:
- Laravel development server (http://localhost:8000)
- Queue worker
- Vite dev server with hot reloading

### Alternative: Start with SSR
```bash
composer run dev:ssr
```

This includes server-side rendering for better SEO.

### Build for production
```bash
npm run build
```

### Code quality
```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Lint and fix
npm run lint

# Type checking
npm run types
```

## 🗄️ Database Structure

The application includes several models for content management:

- **AboutUs**: Company information and description
- **Motto**: Company motto and mission
- **Advantage**: Product/service advantages
- **Procedure**: Production or business procedures
- **Certification**: Company certifications and accreditations
- **Contact**: Contact information and social media links
- **User**: Admin users for Filament panel

## 🔑 Default Admin Access

After seeding, you can access the admin panel at `/admin` with:
- **Email**: test@example.com
- **Password**: qwerty123

## 📁 Project Structure

```
app/
├── Models/              # Eloquent models
├── Http/Controllers/    # Controllers
└── Filament/Resources/  # Filament admin resources

resources/
├── js/                  # React components and pages
├── css/                 # Stylesheets
└── views/               # Blade templates

database/
├── migrations/          # Database migrations
└── seeders/            # Database seeders

public/
└── storage/            # Public file storage
```

## 🎨 Customization

### Content Management
All content can be managed through the Filament admin panel at `/admin`. The seeded data includes sample content for a coconut sugar company that can be easily modified.

### Styling
The application uses Tailwind CSS with a custom color scheme. Main brand colors can be modified in the Tailwind configuration.

### Components
React components are located in `resources/js/components/` and use shadcn/ui patterns for consistency.

## 🧪 Testing

Run the test suite:
```bash
composer run test
```

This will run PHPUnit tests including feature tests for profile management and authentication.

## 📦 Production Deployment

1. **Build assets**
   ```bash
   npm run build
   ```

2. **Optimize Laravel**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

3. **Set production environment**
   ```bash
   # Update .env
   APP_ENV=production
   APP_DEBUG=false
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the Laravel and Inertia.js documentation
- Review the Filament documentation for admin panel customization

## 🏗️ Built With

- [Laravel](https://laravel.com/) - PHP Framework
- [React](https://reactjs.org/) - Frontend Library
- [Inertia.js](https://inertiajs.com/) - Modern Monolith
- [Filament](https://filamentphp.com/) - Admin Panel
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

---

**Note**: This template is specifically designed for company profile websites and includes sample data for a coconut sugar producer. All content can be easily customized through the admin panel or by modifying the database seeders.