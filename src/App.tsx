import "./styles/main.css";
import logoImg from "./assets/logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import { GameController } from "phosphor-react";

import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./components/Input";

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/50">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>
            <form className="mt-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que você deseja jogar"
                ></Input>
              </div>
              <div>
                <label htmlFor="name">Seu nome(ou nicknanme)</label>
                <Input id="name" placeholder="Como te chamam dentro do game?" />
              </div>
              <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga quantos anos?</label>
                  <Input id="yearsPalying" placeholder="Tudo bem ser ZERO" />
                </div>
                <div>
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input id="discord" placeholder="Usuario#9999" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                </div>
                <div>
                  <label htmlFor="hourStart">Qual horario do dia?</label>
                  <div>
                    <Input type="time" id="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Até" />
                  </div>
                </div>
                <div>
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>
                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
