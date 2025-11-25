import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { CameraView } from "expo-camera";
import { useCameraViewModel } from "../viewModel/useCameraViewModel";

export default function CameraScreen({ onOpenGallery }: { onOpenGallery: () => void }) {
  const {
    cameraRef,
    facing,
    permission,
    requestPermission,
    toggleCameraFacing,
    capturePhoto,
    locationGranted,
    loading,
  } = useCameraViewModel();

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>Nós precisamos de permissão para usar sua câmera</Text>
        <Button title="Conceder permissão" onPress={requestPermission} />
      </View>
    );
  }

  if (!locationGranted) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>Precisamos da permissão para obter sua localização</Text>
        <Button title="Conceder permissão" onPress={async () => {}} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
      />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={capturePhoto}>
          <Text style={styles.text}>{loading ? "..." : "Capturar"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onOpenGallery}>
          <Text style={styles.text}>Ver Fotos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
  message: { textAlign: "center", paddingBottom: 10, fontSize: 16 },
  camera: { flex: 1 },
  controls: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 8,
  },
  text: { fontSize: 16, fontWeight: "bold", color: "white" },
});
