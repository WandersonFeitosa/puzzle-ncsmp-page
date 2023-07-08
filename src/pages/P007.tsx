import { Input } from "../components/input";
import qrcode from "../assets/img/qr_code.jpg";
import { Password } from "../components/passwordDisplay";

export function P007() {
  return (
    <div className="allign-center p007">
       <Password password="regret" />
      <img src={qrcode} alt="" />
      <Input />
    </div>
  );
}
