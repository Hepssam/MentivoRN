import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        Keyboard.dismiss();

        // Validation
        if (!email.trim() || !password.trim()) {
            Alert.alert("Error", "Please enter Email and Password");
            return;
        }

        // Password validation
        if (password !== "123") {
            Alert.alert("Invalid Password", "Use password: 123");
            return;
        }

        // Mock role detection
        let role = "";

        if (email === "parent@test.com") {
            role = "parent";
        } else if (email === "mentor@test.com") {
            role = "mentor";
        } else if (email === "student@test.com") {
            role = "student";
        } else {
            Alert.alert(
                "Invalid User",
                "Use one of these demo accounts:\n\nparent@test.com\nmentor@test.com\nstudent@test.com"
            );
            return;
        }

        // Role-based navigation
        if (role === "parent") {
            navigation.navigate("ParentDashboard");
        } else if (role === "mentor") {
            navigation.navigate("MentorDashboard");
        } else if (role === "student") {
            navigation.navigate("StudentDashboard");
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.inputTextStyle}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.inputTextStyle}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={[
                    styles.loginButton,
                    (!email || !password) && { opacity: 0.5 }
                ]}
                disabled={!email || !password}
                onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: "#c0e5e9c8", paddingHorizontal: 16 },
    title: { fontSize: 34, fontWeight: "bold", marginTop: 80, textAlign: "center" },

    inputTextStyle: {
        borderWidth: 1,
        height: 50,
        marginTop: 20,
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#fff"
    },

    loginButton: {
        backgroundColor: "#a7c7ea",
        height: 50,
        marginTop: 30,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },

    loginButtonText: {
        color: "#1b1919",
        fontSize: 22,
        fontWeight: "bold"
    },

    demoText: {
        marginTop: 30,
        textAlign: "center",
        fontSize: 14,
        color: "#444"
    },

    forgotPasswordContainer: {
        marginTop: 20,
        alignItems: "center"
    },

    forgotPasswordText: {
        color: "#1b1919",
        fontSize: 16,
        textDecorationLine: "underline"
    }

});