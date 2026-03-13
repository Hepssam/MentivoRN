# MentivoRN

## Overview

This project is a **mobile prototype application** built using **React Native with Expo and TypeScript**.
It demonstrates a simplified version of the Mentivo platform with **authentication, role-based navigation, student management, and lesson/session browsing**.

The goal of this prototype is to demonstrate **clean mobile architecture, reusable components, and navigation flow** rather than backend integration.

The application uses **mock data** to simulate real user interactions.

---

# Video

[Watch Demo Video](https://drive.google.com/file/d/1sTLW-nVtMMr8eX1BA4x6SV_8NbW3fq_0/view?usp=sharing)

# Features

## 1. Authentication

The application starts with a **Login Screen** where users enter:

* Email
* Password

Basic validation ensures fields are not empty. The login button is disabled until both fields are filled.

After entering valid credentials, the app navigates **directly** to the role-specific dashboard — there is no separate role selection step.

### Demo Credentials

| Email | Password | Role |
| ----- | -------- | ---- |
| parent@test.com | 123 | Parent |
| mentor@test.com | 123 | Mentor |
| student@test.com | 123 | Student |

A **Forgot Password?** link is also visible on the login screen (UI only, no functionality).

---

## 2. Role-Based Navigation

The role is determined automatically from the email used to log in. Based on the role, the app navigates directly to the corresponding dashboard.

| Role    | Screen            |
| ------- | ----------------- |
| Parent  | Parent Dashboard  |
| Student | Student Dashboard |
| Mentor  | Mentor Dashboard  |

Navigation is handled using **React Navigation (Native Stack)**.

---

## 3. Parent Dashboard

The Parent Dashboard allows parents to:

* View a list of students (pre-loaded with mock data: Alice, Bob)
* Add a new student via the **Add Student** button
* Navigate to the Lessons screen via the **View Lessons** button
* Logout from the application

Students are displayed using the reusable **StudentCard** component.

---

## 4. Create Student

Parents can add a student with the following fields:

* **Student Name**
* **Date of Birth**

### Date of Birth Field

The DOB field opens a **calendar date picker** when tapped.

Features:

* Calendar opens directly when tapping the field (no keyboard input)
* Maximum date is today
* Works on **iOS** (inline display) and **Android** (modal, auto-closes on selection)
* Date format: `YYYY-MM-DD`

This is implemented using:

```
@react-native-community/datetimepicker
```

After filling in both fields, pressing **Create Student** adds the student to the Parent Dashboard list and navigates back.

---

## 5. Student Dashboard

The Student Dashboard allows students to:

* Browse available lessons via the **View Lessons** button
* Logout from the application

---

## 6. Mentor Dashboard

The Mentor Dashboard allows mentors to:

* View a list of assigned students (pre-loaded with mock data: Alice, Bob)
* Tap a student card to navigate to the **Lessons** screen
* Logout from the application

Students are displayed using the reusable **StudentCard** component.

---

## 7. Lessons and Sessions Flow

Users can browse lessons and view sessions within each lesson.

Navigation Flow:

```
Lessons
   ↓
Sessions (filtered by selected lesson)
   ↓
Session Detail
```

### Lessons Screen

Displays available lessons as tappable cards.

Mock lessons:
- Mathematics
- Science
- English

### Sessions Screen

Shows all sessions related to the selected lesson. The header displays the lesson title (e.g., *Mathematics Sessions*). Each card shows the session **title** and **date**.

Mock sessions:
- Algebra Basics — 2026-03-12
- Geometry Fundamentals — 2026-03-14

### Session Detail Screen

Displays full information for the selected session:

* Session title
* Session date (in italic)
* Session description

---

## 8. Reusable Components

Several reusable components maintain clean architecture.

### BackButton

Uses `Ionicons` from `@expo/vector-icons` to render an arrow-back icon. Used across all inner screens.

### LogoutButton

A styled text button used in all dashboard screens. Pressing it resets navigation to the Login screen.

### StudentCard

Displays a student's avatar initial, name, and date of birth. Used in Parent and Mentor dashboards.

---

## 9. Logout Flow

Logout functionality is available in all dashboard screens.

When the user presses **Logout**:

1. Navigation resets using `navigation.replace("Login")`
2. User returns to the **Login Screen**

This simulates a typical mobile authentication flow.

---

# Technology Stack

| Package | Version |
| ------- | ------- |
| React Native | 0.83.2 |
| Expo | ~55.0.5 |
| TypeScript | ~5.9.2 |
| React | 19.2.0 |
| @react-navigation/native | ^7.1.33 |
| @react-navigation/native-stack | ^7.14.4 |
| react-native-safe-area-context | ~5.6.2 |
| react-native-screens | ~4.23.0 |
| @react-native-community/datetimepicker | 8.6.0 |
| @expo/vector-icons | ^15.0.2 |

---

# Project Structure

```
MentivoRN/
│
├── App.tsx                              # App entry point, renders AppNavigator
│
├── src/
│   │
│   ├── types/
│   │   └── index.ts                     # Shared types: Student, Lesson, Session
│   │
│   ├── components/
│   │   ├── BackButton.tsx               # Ionicons arrow-back button
│   │   ├── LogoutButton.tsx             # Styled logout text button
│   │   └── StudentCard.tsx              # Card with avatar, name, and DOB
│   │
│   ├── navigation/
│   │   └── AppNavigator.tsx             # Native stack navigator + RootStackParamList
│   │
│   └── screens/
│       │
│       ├── Login/
│       │   └── LoginScreen.tsx          # Email/password login with role detection
│       │
│       ├── parent/
│       │   ├── ParentDashboard.tsx      # Student list + Add Student + View Lessons
│       │   └── CreateStudentScreen.tsx  # Name + DOB (calendar picker) form
│       │
│       ├── student/
│       │   └── StudentDashboard.tsx     # View Lessons button
│       │
│       ├── mentor/
│       │   └── MentorDashboard.tsx      # Student list, tap to view lessons
│       │
│       └── lessons/
│           ├── LessonsScreen.tsx        # List of lessons (Mathematics, Science, English)
│           ├── SessionsScreen.tsx       # Sessions per lesson with title + date
│           └── SessionDetailScreen.tsx  # Full session detail view
```

---

# Installation

Clone the repository:

```
git clone https://github.com/Hepssam/MentivoRN
```

Move into the project directory:

```
cd MentivoRN
```

Install dependencies:

```
npm install
```

Start the development server:

```
npx expo start
```

You can run the project on:

* iOS Simulator
* Android Emulator
* Physical device using **Expo Go**

---

# Notes

* This prototype uses **mock data instead of a backend API**.
* Role is determined automatically from the login email — no separate role selection step.
* The login password for all demo accounts is `123`.
* The architecture is structured for **scalability and component reuse**.

---

# Author

This mobile prototype was created for a technical assignment using React Native and Expo.
