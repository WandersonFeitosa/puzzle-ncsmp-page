import { Password } from "../components/passwordDisplay";
import { Input } from "../components/input";

export function P002() {
  return (
    <div className="allign-center p002">
      <Password password="EU PRECISO ME LEMBRAR DA MINHA HISTORIA" />
      <div className="math-wrapper">
        <div className="math">x + 5z = 850</div>
        <div className="math">3x + 7z = 2710</div>
      </div>
      <section>
        <Input />
      </section>
    </div>
  );
}
