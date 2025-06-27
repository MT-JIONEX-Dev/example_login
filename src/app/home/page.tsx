"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Image from 'next/image';

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
    <div className="container min-vh-100 d-flex align-items-center justify-content-center p-4 bg-light">
      <div className="text-center bg-white rounded-4 shadow p-5 w-100" style={{ maxWidth: 500 }}>
        <h1 className="display-5 fw-bold mb-3" style={{ color: '#333' }}>Homepage</h1>
        <p className="lead text-secondary">Welcome to your dashboard!</p>
      </div>
    </div>
  );
}