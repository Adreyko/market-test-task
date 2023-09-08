import { SelectChangeEvent } from "@mui/material";
import { FormEvent } from "react";

export const handleSort = (
  event: SelectChangeEvent<any>,
  setSortInputs: (string: string) => void
) => {
  const { value } = event.target as HTMLSelectElement;
  setSortInputs(value as string);
};
