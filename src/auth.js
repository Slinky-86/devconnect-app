import supabase from './supabase';

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