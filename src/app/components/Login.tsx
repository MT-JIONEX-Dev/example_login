'use client';

import Image from 'next/image';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light px-0">
      <div className="row w-100 justify-content-center align-items-center" style={{ minHeight: '600px' }}>
        {/* Left illustration (desktop only) */}
        <div className="d-none d-lg-flex col-lg-6 flex-column justify-content-between p-0 position-relative">
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Image
              src="/login-illustration.png"
              alt="Login Illustration"
              width={840}
              height={1024}
              className="mx-auto img-fluid"
              priority
              style={{ maxWidth: '100%', maxHeight: '100vh' }}
            />
          </div>
        </div>
        {/* Right side: Login form and headings*/}
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center rounded-end-4 py-5 px-4 px-sm-5">
          <div className="w-100" style={{ maxWidth: 470 }}>
            <h2 className="fw-normal text-start mb-3" style={{ fontSize: '1.8rem', color: '#505050' }}>
              Welcome to
            </h2>
            <h2 className="fw-normal text-start mb-5" style={{ fontSize: '2.5rem', color: '#505050' }}>
              <span className='fw-bold'>S</span>ample <span className='fw-bold'>L</span>ogin <span className='fw-bold'>P</span>age
            </h2>
            <div className="pt-4">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}