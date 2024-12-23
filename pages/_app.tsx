import { useEffect } from 'react';
    import { useRouter } from 'next/router';
    import { supabase } from '../supabaseClient';

    function MyApp({ Component, pageProps }) {
      const router = useRouter();

      useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
          if (!session && router.pathname !== '/login') {
            router.push('/login');
          }
        });

        return () => {
          authListener.unsubscribe();
        };
      }, [router]);

      return <Component {...pageProps} />;
    }

    export default MyApp;
