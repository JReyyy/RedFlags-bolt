import axios from 'axios';

    export async function analyzeText(text: string) {
      try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
          prompt: `Analyze the following text for toxicity and red flags:\n\n${text}`,
          max_tokens: 150,
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        });

        return response.data.choices[0].text;
      } catch (error) {
        console.error('Error analyzing text:', error);
        return null;
      }
    }
