import {wait} from "@/utils/wait";
import {mentors} from "@/__fake_db__/mentors";

export const deleteMentor = async ({token, id} = {}) => {
    await wait(500);
    if (!token) {
        throw new Error("No admin access");
    }
    const index = mentors.findIndex(_mentor => _mentor.id == id);
    if (index === -1) {
        throw new Error("Mentor not found");
    }
    mentors.splice(index, 1);
    return {msg: "Mentor has been deleted"}
}