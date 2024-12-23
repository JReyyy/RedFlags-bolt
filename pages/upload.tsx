import { useCallback, useState } from 'react';
    import { useDropzone } from 'react-dropzone';
    import { analyzeText } from '../utils/openai';

    export default function Upload() {
      const [error, setError] = useState('');

      const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onload = async () => {
            const text = reader.result as string;
            try {
              const analysisResult = await analyzeText(text);
              if (!analysisResult) throw new Error('Analysis failed');
              // Handle successful analysis
            } catch (err) {
              setError('Failed to analyze the file. Please try again.');
            }
          };
          reader.readAsText(file);
        });
      }, []);

      const { getRootProps, getInputProps } = useDropzone({ onDrop });

      return (
        <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px' }}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      );
    }
