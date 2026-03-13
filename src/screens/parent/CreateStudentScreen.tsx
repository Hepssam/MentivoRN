import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,
    Modal
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = NativeStackScreenProps<RootStackParamList, "CreateStudent">;

type Student = {
    id: string;
    name: string;
    dob: string;
};

export default function CreateStudentScreen({ navigation, route }: Props) {

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleCreate = () => {

        if (!name || !dob) {
            Alert.alert("Error", "Please enter all fields");
            return;
        }

        const newStudent: Student = {
            id: Date.now().toString(),
            name,
            dob
        };

        route.params.addStudent(newStudent);
        navigation.goBack();
    };

    const onChange = (_event: any, selectedDate?: Date) => {

        if (Platform.OS === "android") {
            setShowPicker(false);
        }

        if (selectedDate) {

            setDate(selectedDate);

            const formatted =
                selectedDate.getFullYear() +
                "-" +
                String(selectedDate.getMonth() + 1).padStart(2, "0") +
                "-" +
                String(selectedDate.getDate()).padStart(2, "0");

            setDob(formatted);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <BackButton onPress={() => navigation.goBack()} />
                <Text style={styles.title}>Create Student</Text>
                <View style={{ width: 28 }} />
            </View>

            {/* Name Input */}
            <TextInput
                style={[styles.inputTextStyle, { marginTop: 40 }]}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <TouchableOpacity
                style={styles.inputTextStyle}
                onPress={() => setShowPicker(true)}
            >
                <Text style={{ color: dob ? "#000" : "#999" }}>
                    {dob ? dob : "Date of Birth"}
                </Text>
            </TouchableOpacity>

            {/* Calendar */}
            {Platform.OS === "android" && showPicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    maximumDate={new Date()}
                    onChange={onChange}
                />
            )}
            {Platform.OS === "ios" && (
                <Modal
                    transparent
                    animationType="slide"
                    visible={showPicker}
                    onRequestClose={() => setShowPicker(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="spinner"
                                maximumDate={new Date()}
                                onChange={onChange}
                            />
                            <TouchableOpacity
                                style={styles.modalDoneButton}
                                onPress={() => setShowPicker(false)}
                            >
                                <Text style={styles.modalDoneText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}

            {/* Create Button */}
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleCreate}
            >
                <Text style={styles.buttonTextStyle}>Create Student</Text>
            </TouchableOpacity>

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

    inputTextStyle: {
        borderWidth: 1,
        height: 50,
        marginTop: 20,
        marginHorizontal: 16,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        justifyContent: "center"
    },

    buttonStyle: {
        backgroundColor: "#a7c7ea",
        height: 50,
        marginTop: 30,
        marginHorizontal: 16,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonTextStyle: {
        color: "#1b1919",
        fontSize: 20,
        fontWeight: "bold"
    },

    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.4)"
    },

    modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingBottom: 20
    },

    modalDoneButton: {
        alignItems: "center",
        paddingVertical: 12
    },

    modalDoneText: {
        fontSize: 17,
        fontWeight: "600",
        color: "#007AFF"
    }

});