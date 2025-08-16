import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the main heading and content", () => {
    render(<Home />);

    // Check if the main content is rendered
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Save and see your changes instantly/i)
    ).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Home />);

    // Check if the main action links are present
    expect(screen.getByText("Deploy now")).toBeInTheDocument();
    expect(screen.getByText("Read our docs")).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Home />);

    // Check if footer links are present
    expect(screen.getByText("Learn")).toBeInTheDocument();
    expect(screen.getByText("Examples")).toBeInTheDocument();
    expect(screen.getByText(/Go to nextjs.org/i)).toBeInTheDocument();
  });

  it("renders images with correct alt text", () => {
    render(<Home />);

    // Check if images are rendered with proper alt text
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
    expect(screen.getByAltText("Vercel logomark")).toBeInTheDocument();
  });
});
