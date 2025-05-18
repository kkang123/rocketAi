type Cell = {
  char: string | string[];
  meaning: string | string[];
  color?: string;
  cheonganIm?: string;
};

type Row = {
  label: string;
  subLabel: string;
  cells: Cell[];
};

export type ChartData = {
  name: string;
  birthDate: string;
  headers: string[];
  rows: Row[];
};
