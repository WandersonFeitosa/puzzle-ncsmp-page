interface IngameProps {
  password: string;
}

export function Password({ password }: IngameProps) {
  return (
    <div className="ingame">
      <p>
        <b>Senha:</b> {password}
      </p>
    </div>
  );
}
