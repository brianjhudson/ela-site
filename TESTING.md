# Testing with Jest

This project uses Jest for testing with React Testing Library for component testing.

## Setup

The testing setup includes:

- **Jest**: Test runner
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing
- **@testing-library/user-event**: User interaction simulation
- **jest-environment-jsdom**: DOM environment for testing

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended during development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test File Structure

- Tests are located in the `__tests__/` directory
- Test files should follow the naming convention: `*.test.ts` or `*.test.tsx`
- Component tests should be named `ComponentName.test.tsx`
- Utility function tests should be named `utils.test.ts`

## Writing Tests

### Component Testing Example

```tsx
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import MyComponent from "../app/MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("handles user interactions", async () => {
    const user = userEvent.setup();
    render(<MyComponent />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(screen.getByText("Clicked!")).toBeInTheDocument();
  });
});
```

### Utility Function Testing Example

```ts
import { formatSentence } from "../utils/helpers";

describe("formatSentence", () => {
  it("capitalizes first letter and lowercases the rest", () => {
    expect(formatSentence("hello world")).toBe("Hello world");
    expect(formatSentence("HELLO WORLD")).toBe("Hello world");
  });
});
```

## Testing Utilities

### Common Queries

- `getByText()`: Find element by text content
- `getByRole()`: Find element by ARIA role
- `getByTestId()`: Find element by data-testid attribute
- `getByAltText()`: Find image by alt text
- `getByPlaceholderText()`: Find input by placeholder

### User Interactions

```tsx
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();

// Click
await user.click(button);

// Type
await user.type(input, "Hello World");

// Clear
await user.clear(input);

// Hover
await user.hover(element);
```

### Async Testing

```tsx
// Wait for element to appear
await screen.findByText("Loading complete");

// Wait for element to disappear
await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
```

## Best Practices

1. **Test behavior, not implementation**: Focus on what the user sees and does
2. **Use semantic queries**: Prefer `getByRole` over `getByTestId` when possible
3. **Test accessibility**: Ensure components are accessible by testing with screen readers
4. **Keep tests simple**: Each test should have a single responsibility
5. **Use descriptive test names**: Test names should clearly describe what is being tested

## Configuration

The Jest configuration is in `jest.config.js` and includes:

- Next.js integration
- TypeScript support
- DOM environment setup
- Coverage reporting
- Module path mapping

The setup file `jest.setup.js` includes:

- Testing Library DOM matchers
- Next.js router mocking
- Next.js Image component mocking
