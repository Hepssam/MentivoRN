import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Student, Lesson, Session } from "../types";

import LoginScreen from "../screens/Login/LoginScreen";
import ParentDashboard from "../screens/parent/ParentDashboard";
import StudentDashboard from "../screens/student/StudentDashboard";
import MentorDashboard from "../screens/mentor/MentorDashboard";
import CreateStudentScreen from "../screens/parent/CreateStudentScreen";
import LessonsScreen from "../screens/lessons/LessonsScreen";
import SessionsScreen from "../screens/lessons/SessionsScreen";
import SessionDetailScreen from "../screens/lessons/SessionDetailScreen";

export type RootStackParamList = {
    Login: undefined;
    RoleSelection: {
        userId: string;
        name: string;
        role: string;
    };
    ParentDashboard: undefined;
    StudentDashboard: undefined;
    MentorDashboard: undefined;
    CreateStudent: {
        addStudent: (student: Student) => void;
    };
    Lessons: undefined;

    Sessions: {
        lesson: Lesson;
    };

    SessionDetail: {
        session: Session;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, headerTitleAlign: "center" }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ParentDashboard" component={ParentDashboard} />
                <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
                <Stack.Screen name="MentorDashboard" component={MentorDashboard} />
                <Stack.Screen name="CreateStudent" component={CreateStudentScreen} />
                <Stack.Screen name="Lessons" component={LessonsScreen} />
                <Stack.Screen name="Sessions" component={SessionsScreen} />
                <Stack.Screen name="SessionDetail" component={SessionDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}