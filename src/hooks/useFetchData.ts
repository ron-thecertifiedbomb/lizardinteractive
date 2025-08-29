// src/hooks/useFetchData.ts
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export function useFetchData<T>(
  table: string,
  orderBy?: { column: string; ascending?: boolean }
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      let query = supabase.from(table).select("*");

      if (orderBy) {
        query = query.order(orderBy.column, {
          ascending: orderBy.ascending ?? true,
        });
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
      } else {
        setData(data as T[]);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
