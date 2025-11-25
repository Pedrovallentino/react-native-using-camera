import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MyPhoto } from "../../model/entities/MyPhoto";

export default function PhotoItem({ item }: { item: MyPhoto }) {
  return (
    <View style={styles.itemRow}>
      <Image source={{ uri: item.uri }} style={styles.thumb} />
      <View style={styles.itemTextBlock}>
        <Text style={styles.itemTitle}>
          {new Date(item.timestamp).toLocaleString()}
        </Text>
        <Text style={styles.itemCoords}>
          {item.latitude != null && item.longitude != null
            ? `Lat: ${item.latitude.toFixed(6)}  |  Lon: ${item.longitude.toFixed(6)}`
            : "Sem localização"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    alignItems: "center",
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#ccc",
  },
  itemTextBlock: { flex: 1 },
  itemTitle: { fontSize: 14, fontWeight: "600" },
  itemCoords: { fontSize: 12, color: "#333" },
});
