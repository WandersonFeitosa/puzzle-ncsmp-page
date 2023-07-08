import { Input } from "../components/input";
import lab from "../assets/img/laboratory001.jpg";
import { Password } from "../components/passwordDisplay";

export function P001() {
  return (
    <section className="allign-center p001">
      <Password password="WORKING" />
      <img src={lab}></img>
      <Input />
    </section>
  );
}
