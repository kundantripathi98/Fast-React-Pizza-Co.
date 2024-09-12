import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found. Go to <Link to="/">Home</Link></h1>
    </div>
  );
};

export default PageNotFound;