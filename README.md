# Vercel BotID Demo - Next.js 12.3.4

A demonstration application showcasing Vercel BotID protection integration with Next.js 12.3.4 using the Pages Router. This demo includes a protected signup form and API endpoint that validates bot detection and generates user hashes.

## Features

- **Vercel BotID Protection**: Form submission and API endpoints protected against automated submissions
- **Invisible Protection**: No CAPTCHAs or user challenges required
- **User Hash Generation**: Secure user ID generation using email and timestamp
- **Modern UI**: Responsive design with Tailwind CSS and mobile-first approach
- **TypeScript**: Full type safety throughout the application
- **Testing**: Comprehensive test suite for core functionality

## Tech Stack

- **Framework**: Next.js 12.3.4 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest with Testing Library
- **Bot Protection**: [Vercel BotID](https://vercel.com/docs/botid)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- pnpm (recommended) or npm
- Vercel account (for production deployment)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd botid-demo
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
botid-demo/
├── pages/                 # Next.js pages (Pages Router)
│   ├── api/              # API routes
│   │   └── signup.ts     # Protected signup endpoint
│   ├── _app.tsx          # App wrapper with BotID client
│   ├── index.tsx         # Home page
│   └── signup.tsx        # Protected signup form
├── styles/               # Global styles
│   └── globals.css       # Tailwind CSS and custom styles
├── __tests__/            # Test files
│   └── signup.test.ts    # BotID functionality tests
└── public/               # Static assets
```

## Demo Features

### 1. Protected Signup Form (`/signup`)

- **Vercel BotID Integration**: Form submissions are protected with invisible bot detection
- **Real-time Validation**: Client-side form validation with error handling
- **Invisible Protection**: No user interaction required for bot detection
- **Responsive Design**: Mobile-first design that works on all devices

### 2. Protected API Endpoint (`/api/signup`)

- **Server-side Bot Detection**: Uses `checkBotId()` for verification
- **Input Validation**: Email format and required field validation
- **User Hash Generation**: Secure user ID creation using email and timestamp
- **Error Handling**: Comprehensive error responses and logging

### 3. Home Page (`/`)

- **Feature Showcase**: Overview of Vercel BotID protection capabilities
- **Technical Details**: Implementation information and architecture
- **Navigation**: Easy access to the signup demo

## Vercel BotID Implementation

### Installation

The Vercel BotID package is already installed:

```bash
pnpm add botid
```

### Configuration

1. **Next.js Config** (`next.config.js`):

```typescript
import { withBotId } from "botid/next/config";

const nextConfig = {
  // Your existing Next.js config
};

export default withBotId(nextConfig);
```

2. **Client-side Protection** (`pages/_app.tsx`):

```typescript
import { BotIdClient } from "botid/client";

const protectedRoutes = [
  {
    path: "/api/signup",
    method: "POST",
  },
  {
    path: "/signup",
    method: "POST",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BotIdClient protect={protectedRoutes} />
      <Component {...pageProps} />
    </>
  );
}
```

3. **Server-side Verification** (`pages/api/signup.ts`):

```typescript
import { checkBotId } from "botid/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const verification = await checkBotId();

  if (verification.isBot) {
    return res.status(403).json({ error: "Bot detected. Access denied." });
  }

  // Process legitimate user request
}
```

### BotID Modes

- **Basic Mode**: Free for all plans - ensures valid browser sessions
- **Deep Analysis**: Pro/Enterprise - Kasada-powered advanced detection

## Testing

Run the test suite:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

### Test Coverage

- Vercel BotID integration
- User hash generation
- Form submission flow
- API endpoint protection

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The BotID protection will work automatically on Vercel deployments.

### Other Platforms

The application can be deployed to any platform that supports Next.js:

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## Vercel BotID Features

### Key Benefits

- **Invisible Protection**: No CAPTCHAs or user challenges
- **Real-time Detection**: Advanced bot detection without user friction
- **Easy Integration**: Simple setup with Next.js
- **Privacy-focused**: Respects user privacy while providing protection

### Protection Against

- Automated attacks (credential stuffing, brute force)
- Data scraping and content theft
- API abuse and excessive requests
- Spam and fraud
- Resource consumption by bots

## Security Considerations

- **Environment Variables**: BotID works automatically on Vercel
- **Input Validation**: Validate all user inputs on both client and server
- **Error Handling**: Don't expose sensitive information in error messages
- **HTTPS**: Always use HTTPS in production
- **Rate Limiting**: Consider additional rate limiting for API endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Vercel BotID documentation](https://vercel.com/docs/botid)
3. Open an issue in this repository

---

**Note**: This demo uses Vercel BotID Basic mode which is free for all plans. For production applications, consider upgrading to Deep Analysis mode for enhanced protection.
