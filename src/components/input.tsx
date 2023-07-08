import { useNavigate } from "react-router";
import { API_URL } from "../App";

export function Input() {
  const navigate = useNavigate();
  async function mainFormSubmitHandler(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const tryValue = event.currentTarget.password.value;

    const response = await fetch(`${API_URL}/try`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tryValue }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
      return;
    }
    if (data.url) {
      navigate("/" + data.url);
      return;
    }
  }

  return (
    <div>
      <form action="" className="mainForm" onSubmit={mainFormSubmitHandler}>
        <input type="text" name="password" />
        <button type="submit">{">"}</button>
      </form>
    </div>
  );
}
