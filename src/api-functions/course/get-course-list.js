import {courses} from "@/__fake_db__/courses";
import {deepCopy} from "@/utils/deep-copy";

export const getCourseList = async ({token} = {}) => {
    let res = [];

    if (token) res = deepCopy(courses)
    else res = courses.filter(_course => _course.status === "active")

    const results = res.map(_item => {
        const {
            id,
            color,
            course_benefits,
            description,
            duration,
            faq,
            image,
            intended_students,
            lesson_count,
            mentors,
            module_count,
            name,
            program
        } = _item
        return {
            id,
            color: color,
            course_benefits: course_benefits,
            description: description,
            duration: duration,
            faq: faq,
            image: image,
            intended_students: intended_students,
            lesson_count: lesson_count,
            mentors: mentors,
            module_count: module_count,
            name: name,
            program: program
        }
    })

    return {results}
}