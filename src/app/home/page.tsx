"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div className="text-center rounded-4 -5 w-100" style={{ maxWidth: 500 }}>
        <h1 className="display-5 fw-normal mb-3" style={{ color: '#BDBDBD' }}>Homepage</h1>
      </div>
    </div>
  );
}