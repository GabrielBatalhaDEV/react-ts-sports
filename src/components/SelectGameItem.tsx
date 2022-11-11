import * as Select from "@radix-ui/react-select";
import { Check } from "phosphor-react";

interface SelectGameItemProps {
  title: string;
  id: string;
}

export function SelectGameItem({ title, id }: SelectGameItemProps) {
  return (
    <Select.Item
      value={id}
      className="flex gap-1 items-center hover:bg-zinc-500 rounded outline-none"
    >
      <Select.ItemText>{title}</Select.ItemText>
      <Select.ItemIndicator>
        <Check />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
