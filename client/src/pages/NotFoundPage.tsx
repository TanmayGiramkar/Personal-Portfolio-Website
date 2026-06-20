import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="shell-container">
      <section className="panel-surface flex min-h-[60vh] flex-col items-start justify-center p-8 sm:p-12">
        <span className="section-label">404</span>
        <h1 className="section-title mt-4">The page drifted out of the portfolio.</h1>
        <p className="mt-4 max-w-xl text-base sm:text-lg">
          Head back to the main experience and keep the recruiter journey moving.
        </p>
        <Link to="/" className="button-primary mt-8">
          Return Home
        </Link>
      </section>
    </div>
  );
}

