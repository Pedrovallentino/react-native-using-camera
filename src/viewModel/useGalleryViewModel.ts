import { useEffect, useState } from "react";
import { MyPhoto } from "../model/entities/MyPhoto";
import photoService from "../model/services/photoService";

export function useGalleryViewModel() {
  const [photos, setPhotos] = useState<MyPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function load() {
    setLoading(true);
    try {
      const data = await photoService.getAll();
      setPhotos(data);
    } finally {
      setLoading(false);
    }
  }

  async function clearAll() {
    await photoService.clear();
    setPhotos([]);
  }

  useEffect(() => {
    // carrega inicialmente
    load();
  }, []);

  return {
    photos,
    loading,
    reload: load,
    clearAll,
  };
}
