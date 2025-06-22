import { Formik, Form, Field, ErrorMessage } from 'formik';
import adminLoginSchema from '../validations/adminLoginSchema';

const AdminLogin = ({ onLogin }) => {
  return (
    <div
      className="p-5 border rounded shadow bg-white mx-auto mt-5"
      style={{ maxWidth: '640px', width: '100%' }}
    >
      <h2 className="mb-4 text-center fw-semibold text-primary">🔐 Admin Login</h2>

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={adminLoginSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting }) => {
          onLogin(values.username, values.password);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">Username</label>
              <Field
                name="username"
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <Field
                name="password"
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminLogin;
