import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    onPress: () => void;
};

export default function LogoutButton({ onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#a7c7ea",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 6,
    },
    text: {
        color: "#000",
        fontWeight: "bold",
    },
});