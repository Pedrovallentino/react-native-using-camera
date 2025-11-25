import { useEffect, useRef, useState } from "react";
import { CameraView, useCameraPermissions, CameraType } from "expo-camera";
import * as Location from "expo-location";
import { MyPhoto } from "../model/entities/MyPhoto";
import photoService from "../model/services/photoService";

export function useCameraViewModel() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [locationGranted, setLocationGranted] = useState(false);
  const cameraRef = useRef<CameraView | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await Location.requestForegroundPermissionsAsync();
      setLocationGranted(res.status === "granted");
    })();
  }, []);

  function toggleCameraFacing() {
    setFacing((c) => (c === "back" ? "front" : "back"));
  }

  async function capturePhoto(): Promise<MyPhoto | null> {
    if (!cameraRef.current) return null;

    setLoading(true);

    try {
      const result = await cameraRef.current.takePictureAsync({
        quality: 1,
      });

      if (!result?.uri) return null;

      let latitude: number | null = null;
      let longitude: number | null = null;

      if (locationGranted) {
        try {
          const loc = await Location.getCurrentPositionAsync({});
          latitude = loc.coords.latitude;
          longitude = loc.coords.longitude;
        } catch {}
      }

      const photo: MyPhoto = {
        uri: result.uri,
        latitude,
        longitude,
        timestamp: Date.now(),
      };

      await photoService.add(photo);
      return photo;

    } finally {
      setLoading(false);
    }
  }

  return {
    cameraRef,
    facing,
    permission,
    requestPermission,
    toggleCameraFacing,
    capturePhoto,
    locationGranted,
    loading,
  };
}
