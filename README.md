# Example Login Page

A modern, responsive login page built with Next.js, TypeScript, and Bootstrap. This project demonstrates best practices for authentication UI, validation, accessibility, and responsive design. 

## Features
- Pixel-perfect login UI matching Figma design
- Responsive layout for desktop, tablet, and mobile
- Floating label inputs with custom validation and accessibility
- Password visibility toggle
- Error messages for invalid or empty fields
- Mock authentication flow (easy to extend for real API)
- Forgot password placeholder page
- Clean, modular code structure
- Bootstrap 5 for styling
- TypeScript throughout
- ESLint and strict type checking

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [ESLint](https://eslint.org/)

## Folder Structure
```
example-login/
├── public/                # Static assets (logo, illustration)
├── src/
│   └── app/
│       ├── components/    # Login UI components
│       ├── context/       # Auth context provider
│       ├── validations/   # Validation logic
│       ├── home/          # Authenticated landing page
│       ├── forgot-password/ # Password recovery page
│       ├── globals.css    # Custom global styles
│       └── layout.tsx     # App layout
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

3. **Lint your code:**
   ```bash
   npm run lint
   ```

## Deployment (Vercel)
- Push your code to GitHub.
- Go to [vercel.com](https://vercel.com/) and import your repository.
- Vercel will auto-detect Next.js and deploy your app.

## Customization & Extending
- To use real authentication, update `src/app/context/AuthContext.tsx` to call your API and handle tokens securely (use environment variables for secrets).
- Add more pages or features as needed. The structure is ready for scaling.

## Best Practices Followed
- Type safety and strict mode
- Modular, reusable components
- Separation of concerns (UI, logic, context)
- Accessibility (labels, ARIA, keyboard navigation)
- Responsive and mobile-first design
- No hardcoded secrets or credentials
- Linting and formatting enforced

## License
MIT
