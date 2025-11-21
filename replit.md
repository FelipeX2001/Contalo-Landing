# Contalo - AI Voice-to-Text Landing Page

## Overview
Contalo is a React-based landing page application for an AI-powered voice-to-text service. It showcases the features and benefits of the Contalo app, which helps users write clearly by converting their spoken words into well-structured text using AI (Gemini API).

**Current State**: Successfully set up and running in Replit environment
**Last Updated**: November 21, 2025

## Project Architecture

### Technology Stack
- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via inline classes)
- **Animation Library**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

### Project Structure
```
/
├── components/          # React components
│   ├── Button.tsx      # Reusable button component
│   ├── Logo.tsx        # Contalo logo component
│   └── WaitlistPage.tsx # Waitlist signup page
├── App.tsx             # Main application component
├── index.tsx           # React entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

### Key Configuration
- **Dev Server Port**: 5000 (configured for Replit)
- **Host**: 0.0.0.0 (allows external access)
- **HMR Port**: 443 (configured for Replit proxy)

## Environment Variables

### Required for Full Functionality
- `GEMINI_API_KEY`: API key for Google Gemini AI service (optional for landing page, required if using AI features)

The app will work without the API key for the static landing page display.

## Recent Changes

### November 21, 2025 - Initial Replit Setup
- Installed Node.js 20 module
- Updated Vite configuration:
  - Changed port from 3000 to 5000 (Replit requirement)
  - Added HMR client port configuration (443 for Replit proxy)
  - Kept host as 0.0.0.0 for external access
- Configured workflow "Start Contalo Frontend" to run `npm run dev`
- Installed all npm dependencies
- Created project documentation

## Development

### Running Locally
The app runs automatically via the configured workflow. To manually run:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## User Preferences
None specified yet.

## Notes
- This is a frontend-only application (no backend)
- The app is a landing page with waitlist functionality
- Uses modern React features and smooth animations
- Fully responsive design for mobile and desktop
