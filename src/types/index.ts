export type Student = {
    id: string;
    name: string;
    dob: string;
};

export type Lesson = {
    id: string;
    title: string;
};

export type Session = {
    id: string;
    lessonId: string;
    title: string;
    date: string;
    description: string;
};