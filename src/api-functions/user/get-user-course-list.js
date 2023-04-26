import {wait} from "@/utils/wait";
import {deepCopy} from "@/utils/deep-copy";
import {user_courses} from "@/__fake_db__/user-courses";

export const getUserCourseList = async ({token, userId} = {}) => {
    await wait(500);

    const results = deepCopy(user_courses);
    return {results}
}