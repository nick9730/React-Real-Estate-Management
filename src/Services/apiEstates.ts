import { supabase } from "./supabase";

export type Estate = {
  id: number | undefined | string;
  id_image: number | null;
  user_id: number | undefined | string;
  estate: {
    baths: number;
    sqrt: number;
    id: number;
    location: string;
    pos_x: number;
    pos_y: number;
    rooms: number;
    type: string;
    id_image: number;
    description: string;
    price: number;
  };
};

type UploadImages = {
  id: number | undefined;
  id_image: number | null;
  files: File[];
  filepath: string;
  fileName: string;
  index: number;
  user_id: undefined | string;
};

export const DeleteEstate = async ({ id }: Pick<Estate, "id">) => {
  const { error } = await supabase
    .from("estates")
    .delete()
    .eq("id", id ? id : "");

  if (error) throw new Error("It couldn't delete the Estates");
};

export const UpdateEstate = async ({
  id,
  estate,
  user_id,
}: Omit<Estate, "id_image">) => {
  const { data, error } = await supabase
    .from("estates")
    .update({ ...estate })
    .eq("id", id ? id : "")
    .eq("user_id", user_id ? user_id : "")
    .select();
  if (error) throw new Error("It couldn't update the Estates");
  return data;
};

export const Insert = async ({ estate }: Omit<Estate, "id" | "id_image">) => {
  const { data, error } = await supabase
    .from("estates")
    .insert(estate)
    .select();
  if (error) throw new Error("It couldn't update the Estates");
  return data;
};

export const Upload = async ({
  id_image,
  files,
  fileName,
  filepath,
  index,
  user_id,
}: UploadImages) => {
  const { error } = await supabase.storage
    .from("Images")
    .upload(fileName, files[index]);

  console.log(id_image, fileName, filepath, files);

  const { data: images, error: InsertError } = await supabase
    .from("images")
    .insert({
      user_id: user_id,
      image: filepath,
      id_image: id_image,
      image_name: fileName,
    });

  if (error) throw new Error("cant upload the photos");
  if (InsertError) throw new Error("cant insert yopur image in the table");

  return images;
};

export const GetEstateByID = async (
  id: number,
  user_id: number | undefined | string
) => {
  let { data: estates, error } = await supabase
    .from("estates")
    .select("*")
    .eq("id", id ? id : 0)
    .eq("user_id", user_id ? user_id : 1);

  if (error) throw new Error("It couldn't get the Estates");
  return estates;
};
