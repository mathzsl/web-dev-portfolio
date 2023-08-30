import { Button } from "./components/Button";
import { Play } from "lucide-react";
export default function Home() {
  return (
    <>
      <section className="max-w-md w-full">
        <strong className="font-bold text-xl text-zinc-100">
          HAYAO MIYAZAKI
        </strong>
        <h1 className="font-extrabold text-5xl md:text-7xl text-zinc-100">
          A VIAGEM DE CHIHIRO
        </h1>

        <p className="text-zinc-100 mt-6 leading-7">
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
          desobedecem são transformados em animais.
        </p>

        <div className="flex flex-col gap-3 mt-14 md:flex-row md:items-center">
          <Button
            href="https://www.netflix.com/br/title/60023642"
            target="_blank"
          >
            <span className="flex justify-center gap-2 -skew-x-skew-app text-base">
              <Play className="w-5 h-5 " />
              ASSISTA AGORA
            </span>
          </Button>

          <Button
            href="https://www.youtube.com/watch?v=ByXuk9QqQkk"
            target="_blank"
            variant="secondary"
          >
            <span className="flex -skew-x-skew-app justify-center">
              ASSISTA O TRAILER
            </span>
          </Button>
        </div>
      </section>

      <section className="pl-4">
        <img
          src="/images/illustration.png"
          alt="Kaonashi"
          className="animate-float "
        />
      </section>
    </>
  );
}
