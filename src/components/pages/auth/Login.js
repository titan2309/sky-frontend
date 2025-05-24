import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add actual login logic here
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <div className="container login-container my-5">
      <div className="card login-card shadow">
        <div className="card-body">
          <h3 className="mb-4 text-center">Login</h3>
          <div>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control login-input"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control login-input"
                  placeholder="Must be 8+ characters"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
            </form>
          </div>
          <div className="text-center mt-3">
            Don’t have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
