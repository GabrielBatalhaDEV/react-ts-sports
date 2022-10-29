import * as Select from "@radix-ui/react-select";
import { Check } from "phosphor-react";

interface SelectGameItemProps {
  value: string;
}

export function SelectGameItem({ value }: SelectGameItemProps) {
  return (
    <Select.Item
      value={value}
      className="flex gap-1 items-center hover:bg-zinc-500 rounded"
    >
      <Select.ItemText>{value}</Select.ItemText>
      <Select.ItemIndicator>
        <Check />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
