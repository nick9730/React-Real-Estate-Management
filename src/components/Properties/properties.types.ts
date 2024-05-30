export type properties =
  | {
      count: number | null;
      data: data[];
      nextPage: null | number;
      currentPage: number;
    }
  | undefined;

export type data = {
  baths: number | null;
  created_at: string;
  description: string | null;
  id: number;
  id_image: number;
  location: string | null;
  pos_x: number | null;
  pos_y: number | null;
  price: number | null;
  rooms: number | null;
  sqrt: number | null;
  type: string | null;
};

export interface filterProps {
  priceParamsMax: string | number | null;
  priceParamsMin: string | number | null;
  areaParamMax: string | number | null;
  areaParamsMin: string | number | null;
  baths: string | null | undefined;
  beds: string | null | undefined;
  region: string | null | undefined;
  type: string | null | undefined;
  page?: number;
}
