import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.scss";
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>This Page Doesn't Exist</p>

      <Link to="/">Let's go back</Link>
    </div>
  );
};
