# Dr. Noushad Babu Portfolio

## Overview

This is a futuristic, premium portfolio website for Dr. Noushad Babu, a PhD in Medical Biochemistry from Harvard University and Ayurvedic Specialist. The site showcases a modern full-stack application with a React-based frontend featuring glass morphism design, holographic effects, and gradient animations. The application follows a monorepo structure with a clear separation between client, server, and shared code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system implementing glass morphism, neon borders, and holographic effects
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Animation**: Framer Motion for smooth animations and transitions, plus custom CSS animations for floating elements and glow effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Hot module replacement and development server integration via Vite

### Design System
- **Theme**: Dark mode with gradient magic (emerald green → sapphire blue → violet glow)
- **Visual Effects**: Transparent prism-shaped glass boxes, glowing neon edges, crystal reflections, holographic shine
- **Typography**: Inter font family with custom holographic text effects
- **Layout**: Responsive design with floating elements and parallax scrolling effects

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database queries
- **Schema**: Shared TypeScript types between client and server using Zod for validation
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Build and Deployment
- **Development**: Concurrent client and server development with hot reloading
- **Build Process**: Vite for frontend bundling, esbuild for server bundling
- **Asset Management**: Static asset serving with Vite in development, Express in production
- **Type Checking**: Comprehensive TypeScript configuration covering client, server, and shared code

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL operations
- **Connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Animation
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Shadcn/ui**: Pre-built components based on Radix UI with consistent design system
- **Framer Motion**: Production-ready motion library for React animations
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

### Development Tools
- **Vite**: Fast build tool and development server with HMR support
- **TypeScript**: Static type checking across the entire application
- **TanStack Query**: Server state management and caching for React applications
- **React Hook Form**: Form handling with validation support
- **Zod**: TypeScript-first schema validation library

### Fonts and Assets
- **Google Fonts**: Inter font family for modern typography
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including Font Awesome icons

### Replit Integration
- **Replit Plugins**: Runtime error overlay and development banner for Replit environment
- **Cartographer**: Development tool integration for enhanced debugging experience