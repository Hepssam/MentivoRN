import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Lesson } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";

type Props = NativeStackScreenProps<RootStackParamList, "Lessons">;

const lessons: Lesson[] = [
    { id: "1", title: "Mathematics" },
    { id: "2", title: "Science" },
    { id: "3", title: "English" },
];

export default function LessonsScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <BackButton onPress={() => navigation.goBack()} />

                <Text style={styles.title}>Lessons</Text>

                <View style={{ width: 28 }} />
            </View>

            <FlatList
                style={{ padding: 16 }}
                data={lessons}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Sessions", { lesson: item })} >
                        <Text style={styles.lesson}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: "#c0e5e9c8" },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 10,
    },
    card: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10, backgroundColor: "#a7c7ea",
    },
    lesson: { fontSize: 18 },
});