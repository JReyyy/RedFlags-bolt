import { useEffect, useState } from 'react';
    import { supabase } from '../supabaseClient';
    import { useRouter } from 'next/router';
    import Layout from '../components/Layout';

    export default function Dashboard() {
      const [user, setUser] = useState(null);
      const [credits, setCredits] = useState(0);
      const [analyses, setAnalyses] = useState([]);
      const router = useRouter();

      useEffect(() => {
        const session = supabase.auth.session();
        if (!session) {
          router.push('/login');
        } else {
          setUser(session.user);
          fetchCredits();
          fetchAnalyses();
        }
      }, []);

      const fetchCredits = async () => {
        // Fetch user credits from Supabase
        // Example: setCredits(10);
      };

      const fetchAnalyses = async () => {
        // Fetch user analyses from Supabase
        // Example: setAnalyses([{ id: 1, date: '2023-01-01', result: 'Toxicity: Low' }]);
      };

      const viewReport = (analysisId) => {
        router.push(`/analysis/${analysisId}`);
      };

      return (
        <Layout>
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Credits: {credits}</p>
          <ul>
            {analyses.map((analysis) => (
              <li key={analysis.id} className="mb-2">
                {analysis.date}: {analysis.result}
                <button onClick={() => viewReport(analysis.id)} className="ml-2 text-blue-500">View Report</button>
              </li>
            ))}
          </ul>
          <button onClick={() => router.push('/upload')} className="mt-4 bg-blue-500 text-white p-2 rounded">Start New Analysis</button>
          <button onClick={() => router.push('/buy-credits')} className="mt-4 bg-green-500 text-white p-2 rounded">Buy Credits</button>
        </Layout>
      );
    }
