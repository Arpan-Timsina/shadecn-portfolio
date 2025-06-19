import { render, screen } from '@testing-library/react';
import AboutPage from './page'; // Renamed to avoid conflict with 'Home'
import '@testing-library/jest-dom';

// Mocks
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { priority, ...rest } = props; // Destructure to remove 'priority'
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} alt={props.alt || "mocked image"} />; // Pass 'rest' without 'priority'
  },
}));

jest.mock('next-themes', () => ({
  useTheme: () => ({ setTheme: jest.fn(), theme: 'light' }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('lucide-react', () => {
  const originalModule = jest.requireActual('lucide-react');
  const KebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const newIcons: { [key: string]: any } = {};
  Object.keys(originalModule)
    .filter(key => typeof originalModule[key] === 'function' || typeof originalModule[key] === 'object')
    .forEach(key => {
      newIcons[key] = (props: any) => {
        const ComponentName = KebabCase(key);
        return <svg data-lucide={ComponentName} data-testid={`icon-${ComponentName}`} {...props} />;
      };
    });
  return newIcons;
});

describe('About Page', () => {
  it('renders without crashing and shows main heading', () => {
    render(<AboutPage />);
    // Check for the main heading specific to the About page
    expect(screen.getByRole('heading', { name: /Software Developer And Web Developer/i })).toBeInTheDocument();
  });
});
