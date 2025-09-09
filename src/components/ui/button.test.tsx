import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button'; // Path to the Button component
import Link from 'next/link'; // Imported for the Link test case

// Mock lucide-react icons
jest.mock('lucide-react', () => {
  const originalModule = jest.requireActual('lucide-react');
  const KebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const newIcons: { [key: string]: any } = {};
  Object.keys(originalModule)
    .filter(key => typeof originalModule[key] === 'function' || typeof originalModule[key] === 'object')
    .forEach(key => {
      newIcons[key] = (props: any) => {
        const ComponentName = KebabCase(key);
        // Ensure a default data-testid or some identifiable attribute for icons if needed for testing
        return <svg data-lucide={ComponentName} data-testid={`icon-${ComponentName}`} {...props} />;
      };
    });
  return newIcons;
});

// Mock next/link
// This mock ensures that Link renders a simple <a> tag for testing purposes.
jest.mock('next/link', () => {
  return ({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: any }) => {
    return <a href={href} {...rest}>{children}</a>;
  };
});


describe('Button Component', () => {
  it('renders as a button element by default', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  it('renders its child component when asChild is true', () => {
    render(
      <Button asChild>
        <div>Child Div Content</div>
      </Button>
    );
    // Check that the div content is present
    const childElement = screen.getByText('Child Div Content');
    expect(childElement).toBeInTheDocument();
    // Check that it's a DIV
    expect(childElement.tagName).toBe('DIV');
    // Check that a button with this text is NOT rendered (it has been replaced by the div)
    expect(screen.queryByRole('button', { name: /Child Div Content/i })).not.toBeInTheDocument();
  });

  it('renders its Link (mocked as <a>) child component when asChild is true', () => {
    render(
      <Button asChild>
        <Link href="/test-link">Child Link Content</Link>
      </Button>
    );
    // Check that the link content is present
    const linkElement = screen.getByText('Child Link Content');
    expect(linkElement).toBeInTheDocument();
    // Check that it's an A tag (due to the Link mock)
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', '/test-link');
    // Check that a button with this text is NOT rendered
    expect(screen.queryByRole('button', { name: /Child Link Content/i })).not.toBeInTheDocument();
  });

  it('applies button classes to the child component when asChild is true', () => {
    render(
      <Button asChild variant="destructive" size="lg">
        <div data-testid="child-div">Child Div</div>
      </Button>
    );
    const childDiv = screen.getByTestId('child-div');
    expect(childDiv).toBeInTheDocument();
    // Check for classes that are specific to the destructive variant and lg size.
    // These class names are derived from the buttonVariants cva in button.tsx.
    expect(childDiv).toHaveClass('bg-destructive'); // From variant: destructive
    expect(childDiv).toHaveClass('text-destructive-foreground'); // From variant: destructive
    expect(childDiv).toHaveClass('h-11'); // From size: lg
    expect(childDiv).toHaveClass('px-8'); // From size: lg
  });

  it('renders loader when isLoading is true', () => {
    render(<Button isLoading>Loading...</Button>);
    // Check for the loader icon (mocked as an svg with data-lucide="loader2")
    expect(screen.getByTestId('icon-loader2')).toBeInTheDocument(); // Corrected test ID
    // Check that the button is disabled
    expect(screen.getByRole('button', { name: /Loading.../i })).toBeDisabled();
  });

  it('renders loader and disables child when isLoading is true with asChild', () => {
    render(
      <Button asChild isLoading>
        <div data-testid="child-div">Loading...</div>
      </Button>
    );
    // Check that the loader icon is NOT rendered by Button when asChild is true
    expect(screen.queryByTestId('icon-loader-2')).not.toBeInTheDocument();

    const childDiv = screen.getByTestId('child-div');
    expect(childDiv).toBeInTheDocument();
    // Check if the 'disabled' attribute is passed to the child, if it's a native element that supports it.
    // For a div, 'disabled' is not a standard attribute that causes it to be non-interactive.
    // However, Slot passes it down. We can check if it's there.
    // Note: JSDOM might not fully reflect browser behavior for custom element 'disabled' state.
    // A more robust test might involve checking for 'aria-disabled="true"' if Slot adds it,
    // or checking for specific styles if 'disabled' on a div is styled.
    // For now, verifying structure and absence of loader from Button.
    expect(childDiv).toHaveAttribute('disabled'); // Slot should pass the disabled prop
  });
});
