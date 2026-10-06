# Quick Start Guide

## Installation

The project structure is ready! To complete the setup, run:

```bash
npm install
```

This will install all dependencies including:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Development

Once installation is complete, start the development server:

```bash
npm run dev
```

Your portfolio will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page with portfolio content
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization Steps

1. **Update Personal Info** (`app/page.tsx`):
   - Replace "Your Name" with your actual name
   - Update the job title and description
   - Add your email and social media links

2. **Add Your Projects**:
   - Edit the projects array in `app/page.tsx`
   - Add project images to the `public` folder (you'll need to create it)
   - Update project descriptions and links

3. **Update Skills**:
   - Modify the skills array in the Skills section
   - Add or remove technologies you know

4. **Customize Colors**:
   - Edit `tailwind.config.ts` for theme colors
   - Modify gradient classes in `app/page.tsx`

5. **Add Metadata** (`app/layout.tsx`):
   - Update title and description for SEO
   - Add Open Graph tags if desired

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

- Add a `/public` folder for images and assets
- Create an `/components` folder for reusable components
- Add more pages (About, Blog, etc.) in the `/app` directory
- Set up form handling for the contact section
- Deploy to Vercel or your preferred platform

## Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and deploy it

That's it! Your portfolio is ready to customize.
