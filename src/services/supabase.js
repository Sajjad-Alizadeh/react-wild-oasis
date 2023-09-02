import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://akyygxqgszkznygudnpg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFreXlneHFnc3prem55Z3VkbnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2NTc4MjEsImV4cCI6MjAwOTIzMzgyMX0.6K1vkC0iik6CvIFTdlhLs_1fS6y6C6CpJk39mNaRKSw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
