import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>This Page Does not Exist</p>

      <Link to="/">Let go back</Link>
    </div>
  );
}
