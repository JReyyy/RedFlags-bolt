import { supabase } from '../supabaseClient';

    export async function uploadFile(file: File) {
      const { data, error } = await supabase.storage.from('uploads').upload(`files/${file.name}`, file);
      if (error) {
        console.error('Error uploading file:', error.message);
        return null;
      }
      return data.Key;
    }
