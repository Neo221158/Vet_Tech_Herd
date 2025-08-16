# The Vet Tech Herd Website

A modern, responsive website for The Vet Tech Herd - a professional community connecting veterinarians working in the technology industry.

## 🎯 Project Overview

This website serves as the central hub for veterinarians in tech to:
- **Connect**: Network with like-minded professionals
- **Learn**: Access educational resources and career development content
- **Collaborate**: Partner on innovative projects and initiatives
- **Advance**: Find career opportunities and mentorship

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Deployment**: GitHub Pages (Static Export)
- **Forms**: Client-side with form handlers (ready for integration)

## 🏗 Architecture

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── careers/           # Job board and career resources
│   ├── collaboration/     # Partnership and collaboration hub
│   ├── contact/           # Contact form and information
│   ├── events/            # Events and workshops
│   ├── join/              # Membership signup
│   ├── resources/         # Educational resources and courses
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── EventCard.tsx      # Event display component
│   ├── ResourceCard.tsx   # Resource display component
│   ├── JobCard.tsx        # Job listing component
│   └── *Form.tsx          # Various form components
├── data/                  # JSON data files
│   ├── events.json        # Events and workshops data
│   ├── resources.json     # Educational resources data
│   └── jobs.json          # Job listings data
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared type definitions
```

### Key Features

#### 🏠 Home Page
- Hero section with clear value proposition
- Three main pillars of the community
- Call-to-action for membership signup

#### 📚 About Us
- Mission and vision statements
- Target audience description
- Community value proposition

#### 📅 Events
- Upcoming and past events
- Event filtering and search
- RSVP integration ready

#### 🤝 Collaboration
- Partnership opportunities
- Project collaboration form
- Success stories and case studies

#### 📖 Resources
- Curated educational content
- Category-based filtering
- Search functionality
- External resource links

#### 💼 Careers
- Job board with search and filtering
- Career resources and guides
- Company partnership opportunities

#### 👥 Join Us
- Comprehensive membership signup
- Interest-based matching
- Communication preferences

#### 📞 Contact
- Multi-category contact form
- Team contact information
- FAQ section

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/vet-tech-herd-website.git
   cd vet-tech-herd-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Deployment

### GitHub Pages (Automated)

The site is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - Triggers automatic deployment
2. **Build process** - Next.js static export to `/out` directory
3. **Deploy** - GitHub Actions publishes to GitHub Pages

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `/out` directory** to your hosting provider

### Deployment Configuration

- **Output**: Static export (`output: 'export'`)
- **Images**: Unoptimized for static hosting
- **Trailing slashes**: Enabled for better compatibility
- **GitHub Actions**: Configured in `.github/workflows/deploy.yml`

## 📊 Data Management

### Content Updates

The website uses JSON files for easy content management:

#### Events (`src/data/events.json`)
```json
{
  "id": "unique-id",
  "title": "Event Title",
  "date": "YYYY-MM-DD",
  "location": "Event Location",
  "description": "Event description",
  "rsvpLink": "https://rsvp-link.com",
  "isPast": false
}
```

#### Resources (`src/data/resources.json`)
```json
{
  "id": "unique-id",
  "title": "Resource Title",
  "description": "Resource description",
  "link": "https://resource-link.com",
  "category": "courses|articles|tools|research|webinars"
}
```

#### Jobs (`src/data/jobs.json`)
```json
{
  "id": "unique-id",
  "title": "Job Title",
  "company": "Company Name",
  "location": "Job Location",
  "description": "Job description",
  "link": "https://job-application-link.com",
  "postedDate": "YYYY-MM-DD"
}
```

### Adding New Content

1. **Edit the appropriate JSON file** in `src/data/`
2. **Commit and push changes**
3. **Automatic deployment** will update the live site

## 🔧 Customization

### Styling
- **Primary colors**: Blue (#2563eb), Green (#16a34a), Purple (#9333ea)
- **Typography**: Inter font family
- **Components**: Fully customizable with TailwindCSS

### Forms Integration
The forms are ready for backend integration:

1. **Replace simulation code** in form components
2. **Add your form handler endpoint**
3. **Configure validation and error handling**

Popular form services:
- Formspree
- Netlify Forms
- Custom API endpoints

### SEO Configuration
- **Metadata**: Configured in each page layout
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Configured for search engines
- **Open Graph**: Social media sharing ready

## 🎨 Design System

### Color Palette
```css
Primary Blue: #2563eb
Success Green: #16a34a
Warning Orange: #ea580c
Error Red: #dc2626
Purple Accent: #9333ea
```

### Typography Scale
- **Headings**: 2xl to 5xl
- **Body**: sm to xl
- **Font Weight**: 400 (normal) to 700 (bold)

### Component Patterns
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary (blue), secondary (outline), success (green)
- **Forms**: Consistent styling, focus states, validation

## 🔐 Security Considerations

- **Static Generation**: No server-side vulnerabilities
- **Form Handling**: Client-side validation with backend integration needed
- **External Links**: `rel="noopener noreferrer"` for security
- **No Secrets**: All code is public (as intended for static site)

## 📈 Performance

### Optimizations
- **Static Generation**: Pre-rendered HTML for fast loading
- **Image Optimization**: Configured for static hosting
- **Code Splitting**: Automatic with Next.js
- **Font Loading**: Optimized with `next/font`

### Metrics
- **First Load JS**: ~100kB shared across pages
- **Page Sizes**: 1-5kB per page (excluding shared JS)
- **Lighthouse Score**: Optimized for 90+ scores

## 🤝 Contributing

### Development Workflow
1. **Create feature branch** from `main`
2. **Make changes** following existing patterns
3. **Test locally** with `npm run dev`
4. **Build and verify** with `npm run build`
5. **Submit pull request** for review

### Code Standards
- **TypeScript**: Strict typing required
- **ESLint**: Follow configured rules
- **Components**: Functional components with TypeScript
- **Styling**: TailwindCSS utility classes

## 📞 Support

### Technical Issues
- **Documentation**: This README and inline comments
- **GitHub Issues**: Report bugs and feature requests
- **Community**: Join The Vet Tech Herd for support

### Content Updates
- **Data Files**: Edit JSON files for content changes
- **New Pages**: Follow existing page structure
- **Components**: Reuse existing components when possible

## 📄 License

This project is developed for The Vet Tech Herd community. Please respect the community's intellectual property and branding guidelines.

---

## 🏆 Built With ❤️ for The Vet Tech Herd Community

*Connecting veterinarians in technology, one line of code at a time.*