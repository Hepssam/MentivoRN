import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";

type Props = NativeStackScreenProps<RootStackParamList, "SessionDetail">;

export default function SessionDetailScreen({ navigation, route }: Props) {
    const { session } = route.params;

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <BackButton onPress={() => navigation.goBack()} />

                <Text style={styles.title}>Session Detail</Text>

                <View style={{ width: 28 }} />
            </View>

            <Text style={styles.sessionTitle}>{session.title}</Text>
            <Text style={styles.date}>Date: {session.date}</Text>
            <Text style={styles.desc}>{session.description}</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c0e5e9c8"
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 10
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },

    sessionTitle: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: "bold",
        padding: 16
    },

    date: {
        marginTop: 20,
        fontSize: 18,
        fontStyle: "italic",
        marginLeft: 16
    },

    desc: {
        marginTop: 20,
        fontSize: 18,
        marginHorizontal: 16
    }
});