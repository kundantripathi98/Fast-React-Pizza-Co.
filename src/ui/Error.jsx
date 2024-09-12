import { useNavigate, useRouteError } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.data}</p>
      {error.status && <p>{error.status}</p>}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
