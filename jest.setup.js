import "@testing-library/jest-dom";

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return "";
  },
}));

// Mock Next.js image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // Remove Next.js specific props that cause warnings in tests
    const { priority, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imgProps} />;
  },
}));
