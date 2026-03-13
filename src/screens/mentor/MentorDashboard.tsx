import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Student } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentCard from "../../components/StudentCard";
import LogoutButton from "../../components/LogoutButton";

type Props = NativeStackScreenProps<RootStackParamList, "MentorDashboard">;

const students: Student[] = [
    { id: "1", name: "Alice", dob: "2012-03-15" },
    { id: "2", name: "Bob", dob: "2010-07-22" },
];

export default function MentorDashboard({ navigation }: Props) {

    const handleLogout = () => {
        navigation.replace("Login");
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Mentor Dashboard</Text>

                <LogoutButton onPress={handleLogout} />
            </View>

            <FlatList
                contentContainerStyle={{ padding: 16 }}
                data={students}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Lessons")}
                    >
                        <StudentCard student={item} />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#c0e5e9c8"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    },
});