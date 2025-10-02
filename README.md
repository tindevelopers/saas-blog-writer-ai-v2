# SaaS Blog Writer AI v2

A modern SaaS application for AI-powered blog writing built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Yarn package manager

### Installation

```bash
# Install dependencies
cd app
yarn install

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📋 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues automatically
- `yarn type-check` - Run TypeScript type checking
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn audit` - Run security audit
- `yarn ci` - Run all CI checks (type-check, lint, format-check, build)

## 🔧 Code Quality

This project includes comprehensive code quality checks:

### ESLint Configuration
- Next.js recommended rules
- TypeScript support
- React Hooks rules
- Prettier integration

### Prettier Configuration
- Consistent code formatting
- Semi-colons enabled
- Single quotes
- 2-space indentation

### CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs on every push and pull request:

#### Code Quality Checks
- ✅ TypeScript type checking
- ✅ ESLint linting
- ✅ Prettier formatting check
- ✅ Build verification

#### Security Audit
- 🔒 Dependency vulnerability scan
- 🛡️ Moderate-level security checks

#### Testing
- 🧪 Test execution (when tests are added)
- 📊 Coverage reporting (when configured)

#### Deployment
- 🚀 Preview deployment for PRs
- 🌐 Production deployment for main branch

## 📁 Project Structure

```
├── app/                    # Next.js application
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── salient/       # Feature-specific components
│   ├── lib/               # Utility functions and configurations
│   ├── prisma/            # Database schema
│   └── public/            # Static assets
├── .github/
│   └── workflows/         # GitHub Actions workflows
└── README.md
```

## 🛠️ Development

### Adding New Features
1. Create feature branch from `develop`
2. Make your changes
3. Run `yarn ci` to ensure all checks pass
4. Create pull request

### Code Style
- Follow the ESLint configuration
- Use Prettier for formatting
- Write TypeScript with strict types
- Use meaningful commit messages

### Testing
- Add tests in `__tests__` directories
- Use Jest and React Testing Library
- Aim for good test coverage

## 🚀 Deployment

The CI/CD pipeline automatically:
- Runs quality checks on every PR
- Deploys preview builds for PRs
- Deploys to production when merging to main

### Manual Deployment
```bash
# Build for production
yarn build

# Start production server
yarn start
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all CI checks pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

