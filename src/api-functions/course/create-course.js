import {createResourceId} from "@/utils/create-resource-id";
import {courses} from "@/__fake_db__/courses";

export const createCourse = ({token, body} = {}) => {
    if (!body || !token) return

    const course_pattern = {
        id: createResourceId(),
        status: "draft",
        name: "Python Backend",
        description: "",
        image: null,
        color: "",
        module_count: 0,
        lesson_count: 0,
        duration: 0,
        intended_students: [],
        course_benefits: [],
        mentors: [],
        program: [],
        faq: []
    }

    const newCourse = {
        ...course_pattern,
        ...body,
        image: body.image && URL.createObjectURL(body.image)
    }

    courses.push(newCourse);

    return {result: newCourse};
}