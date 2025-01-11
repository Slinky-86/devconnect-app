import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lqqtqtmossgatrescobo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcXRxdG1vc3NnYXRyZXNjb2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjE3NTUsImV4cCI6MjA1MjA5Nzc1NX0.drHGueH8ptzi9KBFc4jlgtpjXkaOdY0EPtU8hS4OmVg";
const supabase = createClient(supabaseUrl, supabaseKey);

export const registerUser = async (email, password) => {
   try {
        const { data, error } = await supabase.auth.signUp({
            email,
             password,
    });
      if (error) {
          throw error;
     }
    return data;
   } catch (error) {
      throw error;
  }
};

export const loginUser = async (email, password) => {
    try {
       return await supabase.auth.signInWithPassword({
           email,
            password,
     });
   } catch (error) {
      throw error
  }
};

export const storeData = async (key, value) => {
   try{
     localStorage.setItem(key, value);
      return true;
   } catch (error){
       throw error;
 }
};

export const getData = async (key) => {
try{
    return localStorage.getItem(key);
  } catch (error){
    throw error;
  }
};

export const removeData = async (key) => {
 try{
    localStorage.removeItem(key);
     return true;
  } catch (error){
    throw error;
  }
};