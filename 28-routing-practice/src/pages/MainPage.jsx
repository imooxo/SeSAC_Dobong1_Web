import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();

  return (
    <main className="MainPage">
      <h3>메인페이지 입니다.</h3>
    </main>
  );
}