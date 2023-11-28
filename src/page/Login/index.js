import { Link, useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const params = useParams();
  const name = params.name;
  const id = params.id;

  return (
    <div>
      <div>Login, ID: {id}, Username: {name}</div>
      <Link to="/register">Register</Link>
      <button onClick={() => navigate('/register?id=100&name=user1')}>Register</button>
    </div>
  );
};

export default Login;
