import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutButton from "../../components/LogoutButton";

type Props = NativeStackScreenProps<RootStackParamList, "StudentDashboard">;

export default function StudentDashboard({ navigation }: Props) {

    const handleLogout = () => {
        navigation.replace("Login");
    };

    return (

        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Student Dashboard</Text>

                <LogoutButton onPress={handleLogout} />
            </View>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Lessons")}>
                <Text style={styles.buttonTextStyle}>View Lessons</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: "#c0e5e9c8" },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 10,
    },
    buttonStyle: {
        backgroundColor: "#a7c7ea", height: 50, marginTop: 30, alignContent: "center", borderRadius: 25,
        alignItems: "center", justifyContent: "center", marginLeft: 20, marginRight: 20,
    },
    buttonTextStyle: { color: "#1b1919", fontSize: 20, fontWeight: "bold" }
});