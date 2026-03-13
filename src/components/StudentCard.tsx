import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Student } from "../types";

type Props = {
    student: Student;
};

export default function StudentCard({ student }: Props) {
    return (
        <View style={styles.card}>
            {/* Avatar */}
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {student.name.charAt(0)}
                </Text>
            </View>

            {/* Student Info */}
            <View>
                <Text style={styles.name}>{student.name}</Text>
                <Text style={styles.dob}>DOB: {student.dob}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        backgroundColor: "#fff",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 3,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#a7c7ea",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    avatarText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
    },

    dob: {
        fontSize: 14,
        color: "gray",
    },
});