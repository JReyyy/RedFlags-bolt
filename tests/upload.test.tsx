import { render, screen } from '@testing-library/react';
    import Upload from '../pages/upload';

    test('renders upload component', () => {
      render(<Upload />);
      const uploadText = screen.getByText(/Drag 'n' drop some files here/i);
      expect(uploadText).toBeInTheDocument();
    });
