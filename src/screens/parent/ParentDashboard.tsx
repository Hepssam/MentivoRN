import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import StudentCard from "../../components/StudentCard";
import LogoutButton from "../../components/LogoutButton";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "ParentDashboard">;

type Student = {
    id: string;
    name: string;
    dob: string;
};

export default function ParentDashboard({ navigation }: Props) {
    const [students, setStudents] = useState<Student[]>([
        { id: "1", name: "Alice", dob: "2012-03-15" },
        { id: "2", name: "Bob", dob: "2010-07-22" },
    ]);

    const handleLogout = () => {
        navigation.replace("Login");
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Parent Dashboard</Text>

                <LogoutButton onPress={handleLogout} />
            </View>

            <FlatList
                contentContainerStyle={{ padding: 16 }}
                data={students}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <StudentCard student={item} />}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyText}>
                        No students added yet
                    </Text>
                )}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate("CreateStudent", {
                        addStudent: (student) =>
                            setStudents((prev) => [...prev, student]),
                    })
                }
            >
                <Text style={styles.buttonText}>Add Student</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Lessons")}
            >
                <Text style={styles.buttonText}>View Lessons</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#c0e5e9c8",
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
    },

    emptyText: {
        textAlign: "center",
        marginTop: 40,
        fontSize: 16,
        color: "gray",
    },

    button: {
        backgroundColor: "#a7c7ea",
        height: 50,
        marginTop: 20,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
    },

    buttonText: {
        color: "#1b1919",
        fontSize: 18,
        fontWeight: "bold",
    },

});