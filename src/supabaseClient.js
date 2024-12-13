import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // Access the environment variable
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Access the environment variable

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
