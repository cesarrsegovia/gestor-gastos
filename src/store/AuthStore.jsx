import { create } from "zustand"
import { supabase } from "../index";

export const useAuthStore = create((set)=>({
    isAuth: false,
    signInWithGoogle: async () => {
        try {
            const  { data, error} = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
            if (error) {
                throw Error('Error durante la autenticacion');
            }
            set({ isAuth: true });
            return data;
        } catch (error) {   
            throw new Error("Error signing in with Google: " + error.message);
        }
    },
    signOut: async () => {
        try {
            const { error } = await supabase.auth.signOut();
            set({ isAuth: false });
            if (error) {
                throw new Error('Error during sign out');
            }
        } catch (error) {
            throw new Error("Error signing out: " + error.message);
        }
    },
}))