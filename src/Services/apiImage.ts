import { supabase } from "./supabase";
export interface Images {
  images:
    | {
        created_at: string;
        id: number;
        id_image: number | null;
        image: string | null;
        image_name: string | null;
        user_id: string | null;
      }[]
    | null
    | undefined;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;

  isLoading: boolean;
}

export const GetImages = async (user_id: string | number) => {
  let { data: images, error } = await supabase
    .from("images")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw new Error("cant load images");
  return images;
};
export const GetImagesByID = async (id_image: number, user_id: string) => {
  let { data: images, error } = await supabase
    .from("images")
    .select("*")
    .eq("id_image", id_image)
    .eq("user_id", user_id);

  if (error) throw new Error("cant load images");
  return images;
};

export const DeleteImagesByID = async ({
  id,
  name,
}: {
  id: number;
  name: string | null;
}) => {
  let { error } = await supabase.from("images").delete().eq("id", id);

  if (error) throw new Error("cant delete images");
  const { error: storageError } = await supabase.storage
    .from("Images")
    .remove([`${name}`]);

  if (storageError) throw new Error("Error has created from the deleting");
};
