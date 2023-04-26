import {mentors} from "@/__fake_db__/mentors";
import {wait} from "@/utils/wait";

export const getMentor = async ({id, token} = {}) => {
    await wait(500);

    if (!token) {
        throw new Error("No admin access");
    }

    const result = mentors.find(_mentor => _mentor?.id == id);

    if (!result) {
        throw new Error("Mentor not found")
    }

    return ({result});
}
