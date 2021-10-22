import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/990">UrlParameter</Link>
      <br />
      <Link to="/page2/990?name=akonyan">Query Parameter</Link>
    </div>
  );
};
