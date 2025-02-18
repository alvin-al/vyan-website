import { StaticImageData } from "next/image";

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

export interface TestimonialCardTypes {
  name: string;
  country: string;
  description: string;
  profilePicture: string | StaticImageData;
}

export interface StepListSquareTypes {
  no: number;
  title: string;
  description: string;
}
