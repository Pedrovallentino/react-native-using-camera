import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useGalleryViewModel } from "../viewModel/useGalleryViewModel";
import PhotoItem from "./components/PhotoItem";

export default function GalleryScreen({ onBack }: { onBack: () => void }) {
  const { photos, loading, reload, clearAll } = useGalleryViewModel();

  return (
    <View style={styles.listSection}>
      <View style={styles.galleryHeader}>
        <Text style={styles.galleryTitle}>Minhas Fotos</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Button title="Atualizar" onPress={reload} />
          <Button title="Limpar" onPress={clearAll} />
          <Button title="Voltar" onPress={onBack} />
        </View>
      </View>

      <FlatList
        data={photos}
        keyExtractor={(item) => `${item.timestamp}-${item.uri}`}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <PhotoItem item={item} />}
        ListEmptyComponent={<Text style={{ padding: 12 }}>{loading ? "Carregando..." : "Nenhuma foto"}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listSection: { flex: 1, backgroundColor: "#f5f5f5" },
  galleryHeader: {
    padding: 16,
    backgroundColor: "white",
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  galleryTitle: { fontSize: 18, fontWeight: "bold" },
  listContent: { padding: 12, gap: 12 },
});
