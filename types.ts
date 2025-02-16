export type clientDataTypes = {
  uom: string;
  qty: number;
  description: string;
};

export interface SectionTitleTypes {
  children: string;
  black?: boolean;
}

export interface DestinationListTypes {
  items: object;
  onItemChange: (item: { name: string; link: string }) => void;
}
