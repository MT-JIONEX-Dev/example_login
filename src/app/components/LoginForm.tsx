'use client';

import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { validateLoginFields } from '../validations/loginValidations';

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#fff" stroke="#025ee1" strokeWidth="2"/><path stroke="#025ee1" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/><circle cx="12" cy="12" r="3" stroke="#025ee1" strokeWidth="2"/></svg>
  ) : (
    <svg aria-hidden="true" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#fff" stroke="#025ee1" strokeWidth="2"/><path stroke="#025ee1" strokeWidth="2" d="M1 12s4-7 11-7c2.5 0 4.7.7 6.5 1.8M23 12s-4 7-11 7c-2.5 0-4.7-.7-6.5-1.8"/><circle cx="12" cy="12" r="3" stroke="#025ee1" strokeWidth="2"/><path stroke="#025ee1" strokeWidth="2" d="M3 3l18 18"/></svg>
  );
}

export default function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const validationError = validateLoginFields(username, password);
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    const success = await login(username, password);
    setLoading(false);
    if (!success) {
      setError('Invalid credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Login form" autoComplete="on">
      <div className="form-floating mb-3">
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control floating-blue input-normal"
          aria-label="Username"
          autoComplete="username"
          placeholder="Username"
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="form-floating mb-3 position-relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control floating-blue pe-5 input-normal"
          aria-label="Password"
          autoComplete="current-password"
          placeholder="Password"
        />
        <label htmlFor="password">Password</label>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="eye-icon-btn"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={0}
          style={{ top: '50%', right: '18px', transform: 'translateY(-50%)', position: 'absolute', background: 'none', border: 'none', padding: 0, margin: 0, zIndex: 2, display: 'flex', alignItems: 'center', cursor: 'pointer', height: '32px', width: '32px' }}
        >
          <EyeIcon open={showPassword} />
        </button>
      </div>
      {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}
      <button
        type="submit"
        className="btn btn-primary btn-lg w-100 mt-2 mb-3 shadow-sm"
        disabled={loading}
        aria-disabled={loading}
        style={{ transition: 'box-shadow 0.2s, background 0.2s' }}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <div className="text-center">
        <a href="/forgot-password" className="text-primary text-decoration-none" tabIndex={0}>
          Forgot password
        </a>
      </div>
    </form>
  );
}