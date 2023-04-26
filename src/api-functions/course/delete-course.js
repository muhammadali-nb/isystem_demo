import {courses} from "@/__fake_db__/courses";
import {wait} from "@/utils/wait";

export const deleteCourse = async ({token, id} = {}) => {
    await wait(500);
    if (!token) {
        throw new Error("No admin access")
    }

    const index = courses.findIndex(_course => _course?.id == id);
    if (index === -1) {
        throw new Error("Course not found");
    }
    courses.splice(index, 1);
    return {msg: "Course has been deleted"}
}