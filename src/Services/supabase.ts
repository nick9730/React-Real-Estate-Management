import { createClient } from "@supabase/supabase-js";
import { Database } from "./database";

export const supabaseUrl = "https://snuresojahtptxfugysz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNudXJlc29qYWh0cHR4ZnVneXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMTE4NzYsImV4cCI6MjAzMDU4Nzg3Nn0.iDgZWPVRkPy8bvoXiNGfDbIwfNUvUtx8Z9VDEhswJtI";
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
