import { Link, useHistory } from "react-router-dom";

export const Page404 = () => {
  const history = useHistory();
  const onClickPageA = () => history.push("/page1/");
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">TOPに戻る</Link>
      <br />
      <button onClick={onClickPageA}>PAGE1へ</button>
    </div>
  );
};
