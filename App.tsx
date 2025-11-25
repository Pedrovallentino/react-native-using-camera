import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CameraScreen from "./src/view/CameraScreen";
import GalleryScreen from "./src/view/GalleryScreen";

type Screen = "camera" | "gallery";

export default function App() {
  const [screen, setScreen] = useState<Screen>("camera");

  return (
    <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
      {screen === "camera" && (
        <CameraScreen onOpenGallery={() => setScreen("gallery")} />
      )}

      {screen === "gallery" && (
        <GalleryScreen onBack={() => setScreen("camera")} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
