import * as React from 'react';
import { PluginAuth } from './auth';

const auth = new PluginAuth();

export function PluginLogin() {
  const [token, setToken] = React.useState('');
  const [state, setState] = React.useState(auth.getState());

  React.useEffect(() => {
    const storedToken = auth.getToken();
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = () => {
    auth.login(token);
    setState(auth.getState());
  };

  const logout = () => {
    auth.logout();
    setToken('');
    setState(auth.getState());
  };

  if (state.status === 'authenticated') {
    return (
      <div>
        <p>Authenticated</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <label>
        Figma API Token:
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your API token"
        />
      </label>
      <button onClick={login} disabled={!token.trim()}>
        Login
      </button>
    </div>
  );
}
