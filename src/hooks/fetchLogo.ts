import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

/**
 * Hook to get a public URL from Supabase storage.
 * @param bucket - the storage bucket name
 * @param path - path to the file inside the bucket
 */
export function useFetchLogo
    (bucket: string, path: string) {
  const [publicUrl, setPublicUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!bucket || !path) return;

    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    if (data?.publicUrl) {
      setPublicUrl(data.publicUrl);
    }
  }, [bucket, path]);

  return publicUrl;
}
