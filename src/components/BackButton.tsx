import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    onPress: () => void;
};

export default function BackButton({ onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 5
    }
});