'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="error-content text-center">
              <h3 className="error-title mb-30">Something went wrong!</h3>
              <p className="mb-40">An error occurred. Please try again.</p>
              <div className="error-btn-group">
                <button
                  onClick={() => reset()}
                  className="tp-btn me-3"
                >
                  Try again
                </button>
                <Link href="/" className="tp-btn-border">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
