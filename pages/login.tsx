import { useState } from 'react';
    import { supabase } from '../supabaseClient';

    export default function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = async () => {
        const { error } = await supabase.auth.signIn({ email, password });
        if (error) console.error('Error logging in:', error.message);
      };

      return (
        <div>
          <h1>Login</h1>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    }
