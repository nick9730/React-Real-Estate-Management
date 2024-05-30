import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { filterProps } from "../Properties/properties.types";

interface PropertiesContextProps {
  children: React.ReactNode;
}

interface PropertiesCrudProps {
  setSearchParams: any;
  searchParams: URLSearchParams;
  CreateParams: (title: string, text: string) => void;
  setIsReseting: React.Dispatch<React.SetStateAction<boolean>>;
  isReseting: boolean;
  type: string | null | undefined;
  setType: React.Dispatch<React.SetStateAction<string | null>>;
  setRegion: React.Dispatch<React.SetStateAction<string | null>>;
  Reset: () => void;
  priceParamsMax: string | null | number;
  priceParamsMin: string | null | number;
  areaParamsMin: string | null | number;
  areaParamMax: string | null | number;
  region: string | null | undefined;
  beds: string | null | undefined;
  baths: string | null | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setIsFilter: React.Dispatch<React.SetStateAction<"mobile" | "desktop">>;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  isFilter: "mobile" | "desktop";
  isFiltering: boolean;
  width: number;
  setLength: React.Dispatch<React.SetStateAction<number | undefined>>;
  length: number | undefined;

  setLatLng: React.Dispatch<
    React.SetStateAction<google.maps.LatLngLiteral | null | undefined>
  >;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  progress: number;

  latLng: google.maps.LatLngLiteral | null | undefined;

  isEditing: "edit" | "add";
  setIsEditing: React.Dispatch<React.SetStateAction<"edit" | "add">>;
  filters: filterProps;
  openForm: boolean | "guest";
  setOpenForm: React.Dispatch<React.SetStateAction<boolean | "guest">>;
}

const PropertiesCrud = createContext<PropertiesCrudProps | undefined>(
  undefined
);

export const AREA = 500;
export const PRICE = 1000000;

export default function PropertiesContext({
  children,
}: PropertiesContextProps) {
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const [isReseting, setIsReseting] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [isFilter, setIsFilter] = useState<"mobile" | "desktop">("desktop");
  const [latLng, setLatLng] = useState<google.maps.LatLngLiteral | null>();
  const [isEditing, setIsEditing] = useState<"edit" | "add">("add");
  const [progress, setProgress] = useState<number>(0);
  const [length, setLength] = useState<number | undefined>(0);
  const [page, setPage] = useState<number>(0);
  const [openForm, setOpenForm] = useState<boolean | "guest">(false);

  const CreateParams = (title: string, text: string) => {
    if (text === "" || text === null) return;
    searchParams.set(title, text);
    setSearchParams(searchParams);
  };

  const [priceParamsMax, setpriceParamsMax] = useState<string | null | number>(
    searchParams.get("price_max") || ""
  );
  const [priceParamsMin, setpriceParamsMin] = useState<string | null | number>(
    searchParams.get("price_min") || ""
  );
  const [areaParamsMin, setareaParamsMin] = useState<string | null | number>(
    searchParams.get("area_min") || ""
  );
  const [areaParamMax, setareaParamMax] = useState<string | null | number>(
    searchParams.get("area_max") || ""
  );

  const [type, setType] = useState<string | null>("");
  const [region, setRegion] = useState<string | null>("");
  const [beds, setBeds] = useState<string | null>();
  const [baths, setBaths] = useState<string | null>();

  useEffect(() => {
    setType(searchParams.get("type"));
    setRegion(searchParams.get("region"));
    setBeds(searchParams.get("beds"));
    setBaths(searchParams.get("baths"));
    setpriceParamsMax(searchParams.get("price_max"));
    setpriceParamsMin(searchParams.get("price_min"));
    setareaParamsMin(searchParams.get("area_min"));
    setareaParamMax(searchParams.get("area_max"));
  }, [searchParams]);

  useMemo(() => {
    if (location.pathname === "/addProperty") {
      setIsEditing("add");
    } else {
      setIsEditing("edit");
    }
  }, [location]);

  const Reset = () => {
    setIsReseting(true);
    const curpriceParamsMax = priceParamsMax;
    const curpriceParamsMin = priceParamsMin;
    const curareaParamsMin = areaParamsMin;
    const curAreaParamsMax = areaParamMax;
    setPage(4);
    if (priceParamsMin === curpriceParamsMin) {
      setpriceParamsMin(0);
      searchParams.set("price_min", `${0}`);
    }

    if (priceParamsMax === curpriceParamsMax) {
      setpriceParamsMax(PRICE);
      searchParams.set("price_max", `${PRICE}`);
    }

    if (areaParamMax === curAreaParamsMax) {
      setareaParamMax(AREA);
      searchParams.set("area_max", `${AREA}`);
    }

    if (areaParamsMin == curareaParamsMin) {
      setareaParamsMin("");
      searchParams.set("area_min", `${0}`);
    }
    if (baths) {
      setBaths("1");
      searchParams.set("baths", "1");
    }
    if (beds) {
      setBeds("1");
      searchParams.set("beds", "1");
    }
    if (type) {
      setType("");
      searchParams.set("type", "");
    }
    if (region) {
      setRegion("");
      searchParams.set("region", "");
    }
    setSearchParams(searchParams);

    if (width > 1024) {
      setIsFilter("desktop");
    } else {
      setIsFilter("mobile");
    }
  };

  const filters = {
    priceParamsMax: priceParamsMax,
    priceParamsMin: priceParamsMin,
    areaParamMax: areaParamMax,
    areaParamsMin: areaParamsMin,
    baths: baths,
    beds: beds,
    region: region,
    type: type,
  };

  return (
    <PropertiesCrud.Provider
      value={{
        setPage,
        page,
        searchParams,
        progress,
        setProgress,
        setSearchParams,
        CreateParams,
        setIsReseting,
        isReseting,
        priceParamsMax,
        priceParamsMin,
        areaParamMax,
        areaParamsMin,
        Reset,
        type,
        setType,
        region,
        setRegion,
        baths,
        beds,
        isFilter,
        isFiltering,
        setIsFilter,
        setIsFiltering,
        width,
        setWidth,
        setLatLng,
        latLng,
        setIsEditing,
        isEditing,
        setLength,
        length,
        filters,
        openForm,
        setOpenForm,
      }}
    >
      {children}
    </PropertiesCrud.Provider>
  );
}

export function usePropertiesContext() {
  const context = useContext(PropertiesCrud);
  if (context === undefined) {
    throw new Error("It doesnt work");
  }

  return context;
}
