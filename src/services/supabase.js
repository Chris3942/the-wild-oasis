import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sjrbrshifcwzkcbuwjym.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcmJyc2hpZmN3emtjYnV3anltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MTgyOTgsImV4cCI6MjAzNjM5NDI5OH0.40hp-kux19Pcq1cLwLaNSndKgePdREquyDhTcTTAnLI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
