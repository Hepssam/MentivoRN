import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Session } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";

type Props = NativeStackScreenProps<RootStackParamList, "Sessions">;

const allSessions: Session[] = [
    {
        id: "1",
        lessonId: "1",
        title: "Algebra Basics",
        date: "2026-03-12",
        description: "Introduction to algebra concepts covering variables, expressions, and simple equations.",
    },
    {
        id: "2",
        lessonId: "1",
        title: "Geometry Fundamentals",
        date: "2026-03-14",
        description: "Understanding shapes and angles including triangles, circles, and polygons.",
    },
    {
        id: "3",
        lessonId: "1",
        title: "Fractions & Decimals",
        date: "2026-03-18",
        description: "Working with fractions, decimals, and their conversions in real-world problems.",
    },
    {
        id: "4",
        lessonId: "2",
        title: "Introduction to Physics",
        date: "2026-03-12",
        description: "Fundamentals of motion, force, and energy in everyday physical phenomena.",
    },
    {
        id: "5",
        lessonId: "2",
        title: "Chemistry Basics",
        date: "2026-03-15",
        description: "Exploring atoms, molecules, and chemical reactions with hands-on experiments.",
    },
    {
        id: "6",
        lessonId: "2",
        title: "Biology & Living Systems",
        date: "2026-03-19",
        description: "Understanding cells, ecosystems, and the building blocks of life on Earth.",
    },
    {
        id: "7",
        lessonId: "3",
        title: "Reading Comprehension",
        date: "2026-03-13",
        description: "Strategies for understanding and analysing written texts across different genres.",
    },
    {
        id: "8",
        lessonId: "3",
        title: "Grammar & Punctuation",
        date: "2026-03-16",
        description: "Core grammar rules, sentence structure, and correct use of punctuation marks.",
    },
    {
        id: "9",
        lessonId: "3",
        title: "Creative Writing",
        date: "2026-03-20",
        description: "Techniques for storytelling, building characters, and crafting compelling narratives.",
    },
];

export default function SessionsScreen({ route, navigation }: Props) {
    const { lesson } = route.params;
    const sessions = allSessions.filter((s) => s.lessonId === lesson.id);

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <BackButton onPress={() => navigation.goBack()} />

                <Text style={styles.title}>{lesson.title} Sessions</Text>

                <View style={{ width: 28 }} />
            </View>

            <FlatList style={{ padding: 16 }}
                data={sessions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("SessionDetail", { session: item })
                        }
                    >
                        <Text style={styles.sessionNameStyle}>{item.title}</Text>
                        <Text style={styles.sessionDateStyle}>{item.date}</Text>
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
    sessionNameStyle: { fontSize: 18 },
    sessionDateStyle: { fontSize: 16, marginTop: 8 },

});