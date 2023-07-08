import { Input } from "../components/input";
import chupao from "../assets/img/image.png";
import { Password } from "../components/passwordDisplay";
export function P008() {
  return (
    <div className="allign-center">
      <Password password="INFORMACAO" />
      <img src={chupao} alt="" />
      <Input />
    </div>
  );
}
