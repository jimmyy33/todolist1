import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
    render(<App/>);
    const desc = screen.getByPlaceholderText('Description');
    fireEvent.change(desc, { target: { value: 'Go to coffee' } });
    const date = screen.getByPlaceholderText('Date');
    fireEvent.change(date, { target: { value: '29.12.2023' } });
    const status = screen.getByPlaceholderText('Status');
    fireEvent.change(status, { target: { value: 'Open' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);

    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('Go to coffee');
});