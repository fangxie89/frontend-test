# Front test Les Echos

## Project Structure

```
src/
├── app/
│   ├── [userType]/           # Dynamic route for different user types
│   │   └── page.tsx         # Main page component
│   ├── components/          # Reusable components
│   │   └── NewsletterCard.tsx
│   ├── hooks/              # Custom hooks and data fetching
│   │   └── useNewsletters.ts
│   ├── services/           # API services
│   │   └── api.ts
│   └── types/              # TypeScript type definitions
├── __tests__/             # Test files
│   ├── NewsletterCard.test.tsx
│   ├── page.test.tsx
│   └── types.d.ts
└── mocks/                 # Mock data for testing
```

## Features

### 1. Dynamic User Access
- Supports three user types: none, one, and multiple
- Automatic redirection from root to `/none` path
- Server-side user type validation

### 2. Modern UI/UX
- Responsive grid layout
- Fallback image handling
- Tailwind CSS for styling

### 3. Testing
- Comprehensive unit tests
- Component testing with @testing-library/react
- Mock implementations for external dependencies

### 4. Error Handling
- Graceful error handling with Next.js notFound()

### 5. Code Organization
- Clean separation of concerns
- Reusable components and hooks
- Type-safe implementations
- Clear folder structure
