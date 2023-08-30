import { Button } from "./components/Button";
import { Play } from "lucide-react";
export default function Home() {
  return (
    <>
      <section className="max-w-md w-full">
        <strong className="font-bold text-xl text-zinc-100">
          HAYAO MIYAZAKI
        </strong>
        <h1 className="font-extrabold text-7xl text-zinc-100">
          A VIAGEM DE CHIHIRO
        </h1>

        <p className="text-zinc-100 mt-6 leading-7">
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
          desobedecem são transformados em animais.
        </p>

        <div className="flex items-center gap-3 mt-14">
          <Button href="#" target="_blank">
            <span className="flex items-center gap-2 -skew-x-skew-app text-base">
              <Play className="w-5 h-5 " />
              ASSISTA AGORA
            </span>
          </Button>

          <Button href="#" target="_blank" variant="secondary">
            <span className="flex -skew-x-skew-app">ASSISTA O TRAILER</span>
          </Button>
        </div>
      </section>

      <section>
        <img
          src="/images/illustration.png"
          alt="Kaonashi"
          className="animate-float "
        />
      </section>
    </>
  );
}
