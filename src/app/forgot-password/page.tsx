import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center p-4 bg-light">
      <div className="bg-white p-5 rounded-4 shadow w-100" style={{ maxWidth: 400 }}>
        <h2 className="h4 text-primary fw-semibold text-center mb-3">Forgot Password</h2>
        <p className="text-secondary text-center mb-4">Please contact support to reset your password.</p>
        <div className="text-center">
          <Link href="/" className="text-primary text-decoration-none small">&larr; Back to Login</Link>
        </div>
      </div>
    </div>
  );
}