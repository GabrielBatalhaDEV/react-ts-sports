import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";

import {
  CaretCircleUp,
  CaretDown,
  CaretUp,
  Check,
  GameController,
} from "phosphor-react";
import { ButtonWeek } from "./ButtonWeek";
import { Input } from "./Input";
import { SelectGameItem } from "./SelectGameItem";
import { useState } from "react";

interface CreateAdModal {
  titles: string[];
}

export function CreateAdModal({ titles }: CreateAdModal) {
  const [isSelectGameCheck, setIsSelectGameCheck] = useState(false);

  console.log(typeof titles);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/50">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <div
              className={`bg-zinc-900 py-3 px-4 rounded text-sm   ${
                isSelectGameCheck ? "text-white" : "text-zinc-500"
              }`}
            >
              <Select.Root onOpenChange={() => setIsSelectGameCheck(true)}>
                <Select.Trigger>
                  <Select.Value placeholder="Selecione o jogo"></Select.Value>
                </Select.Trigger>
                <Select.Portal className="bg-zinc-900  cursor-default w-[400px] p-4 rounded text-white border border-violet-500">
                  <Select.Content>
                    <Select.Viewport>
                      {titles.map((title) => (
                        <SelectGameItem value={title} />
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome(ou nicknanme)</label>
            <Input id="name" placeholder="Como te chamam dentro do game?" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga quantos anos?</label>
              <Input id="yearsPalying" placeholder="Tudo bem ser ZERO" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu discord?</label>
              <Input id="discord" placeholder="Usuario#9999" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <div className="grid grid-cols-4 gap-2">
                <ButtonWeek title="Domingo">D</ButtonWeek>
                <ButtonWeek title="Segunda">S</ButtonWeek>
                <ButtonWeek title="Terça">T</ButtonWeek>
                <ButtonWeek title="Quarta">Q</ButtonWeek>
                <ButtonWeek title="Quinta">Q</ButtonWeek>
                <ButtonWeek title="Sexta">S</ButtonWeek>
                <ButtonWeek title="Sabado">S</ButtonWeek>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">Qual horario do dia?</label>
              <div className="grid grid-cols-1 gap-2">
                <Input type="time" id="hourStart" placeholder="De" />
                <Input type="time" id="hourEnd" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-2 text-sm">
            <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
