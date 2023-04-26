import {courses} from "@/__fake_db__/courses";

const fileToUrl = file => {
    if (!file) return null;
    if (typeof file === "string") return file;
    return URL.createObjectURL(file)
}

export const editCourse = async ({token, id, data} = {}) => {
    if (!token) {
        throw new Error("No admin access")
    }

    if (!data) {
        throw new Error("Not valid data")
    }

    const index = courses.findIndex(_course => _course?.id == id);
    if (index === -1) {
        throw new Error("Course not found");
    }
    courses[index] = {
        ...courses[index],
        ...data,
        image: fileToUrl(data?.image)
    }

    return {result: courses[index]}
}