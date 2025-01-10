import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://lqqtqtmossgatrescobo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcXRxdG1vc3NnYXRyZXNjb2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjE3NTUsImV4cCI6MjA1MjA5Nzc1NX0.drHGueH8ptzi9KBFc4jlgtpjXkaOdY0EPtU8hS4OmVg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;