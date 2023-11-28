import { useNavigate, useSearchParams } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  console.log(params);
  const id = params.get('id');
  const name = params.get('name');

  return (
    <div>
      <div>
        Register, ID: {id}, Username: {name}
      </div>
      <button onClick={() => navigate('/login/test1/123')}>Back</button>
    </div>
  );
};

export default Register;
