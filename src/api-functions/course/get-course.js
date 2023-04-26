import {courses} from "@/__fake_db__/courses";

export const getCourse = async ({id, token} = {}) => {

    let result;
    if (token) result = courses.find(_course => _course?.id == id)
    else result = courses.find(_course => _course.id == id && _course.status === "active");
    console.log(result)
    return ({result});
}