import { Metadata } from "next";
import CourseLessonArea from "./_components/course-lesson-area";

export const metadata: Metadata = {
    title: "Course Lesson - IntelliPath AI",
};


export default function CourseLessonPage() {
    return (
        <main className="tp-dashboard-body-bg">
            <CourseLessonArea/>
        </main>
    );
}
