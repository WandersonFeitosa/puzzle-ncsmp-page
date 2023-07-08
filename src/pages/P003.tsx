import { Password } from "../components/passwordDisplay";
import { Input } from "../components/input";

export function P003() {
  const repeatAmmount = 200;
  return (
    <div className="allign-center p003">
      <Password password="6" />
      <Input />
      {Array(repeatAmmount)
        .fill(0)
        .map((_, index) => {
          return (
            <span key={index}>EU PRECISO ME LEMBRAR DA MINHA HISTÓRIA</span>
          );
        })}
    </div>
  );
}
