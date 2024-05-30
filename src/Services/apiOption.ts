import { supabase } from "./supabase";

export type OptionProps = {
  created_at?: string;
  id?: number;
  name?: string | null;
  number?: number | null;
  role?: string | null;
};

export type getOptionByRoleProps = {
  role: string;
};

export const getOptionByRole = async (
  role: string,
  user_id: string | undefined | null
) => {
  let query = supabase
    .from("options")
    .select("*")
    .eq("role", role ? role : "")
    .order("number", { ascending: true })
    .order("id", { ascending: false });

  if (user_id) {
    query.eq("user_id", user_id);
  }

  const { data, error } = await query;

  if (error) throw new Error("System cant load options");

  return data;
};

export const getOption = async (user_id: string | undefined | null) => {
  let query = supabase
    .from("options")
    .select("*")
    .order("number", { ascending: true });

  if (user_id) {
    query = query.eq("user_id", user_id);
  }

  const { data, error } = await query;

  if (error) throw new Error("System cant load options");

  return data;
};

export const InsertOption = async ({
  options,
  user_id,
}: {
  options: OptionProps;
  user_id: string | undefined | null;
}) => {
  let query;

  query = supabase
    .from("options")
    .insert({ ...options, user_id: user_id })
    .select();

  const { data, error } = await query;
  if (error) throw new Error("It couldn't update the Estates");
  return data;
};

export const DeleteOption = async (
  id: number,
  user_id: string | undefined | null
) => {
  let query = supabase.from("options").delete().eq("id", id);

  if (user_id) {
    query.eq("user_id", user_id);
  } else {
    query = query;
  }

  const { error } = await query;

  if (error) throw new Error("It couldn't update the Estates");
};

export const UpdateOptions = async ({
  options,
  user_id,
}: {
  options: OptionProps;
  user_id: string | undefined | null;
}) => {
  let query;

  query = supabase
    .from("options")
    .update({ ...options, user_id: user_id })
    .eq("id", options.id ? options.id : "")
    .eq("user_id", user_id ? user_id : "")
    .select();

  const { data, error } = await query;

  if (error) throw new Error("It couldn't update the Estates");
  return data;
};
