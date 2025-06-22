import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-4 text-danger mb-3">404 - Page Not Found</h1>
      <p className="lead text-center mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
