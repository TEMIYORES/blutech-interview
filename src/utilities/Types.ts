import { SetStateAction } from "react";

export interface DataListType {
  SKU: number;
  Name: string;
  Description: string;
  Brand: string;
  Title: string;
  Gender: string;
  RETAIL: any;
  "Cost Price": number;
  Image_1: string;
  URL: string;
  Quantity: number;
  size: string;
  UPC: any;
  catalog_time: string;
  supplier: string;
}

export interface ApiContextType {
  data: DataListType[] | undefined;
  isError: boolean;
  error: unknown;
  isLoading: boolean;
  selectAll: boolean;
  setSelectAll: React.Dispatch<SetStateAction<boolean>>;
}
