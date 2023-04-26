import {mentors} from "@/__fake_db__/mentors";
import {fileToUrl} from "@/utils/file-to-url";

export const editMentor = async ({token, id, data} = {}) => {
    if (!token) {
        throw new Error("No admin access")
    }

    if (!data) {
        throw new Error("Not valid data")
    }

    const index = mentors.findIndex(_mentor => _mentor?.id == id);
    if (index === -1) {
        throw new Error("Mentor not found");
    }
    mentors[index] = {
        ...mentors[index],
        ...data,
        image: {
            square: fileToUrl(data?.image)
        }
    }

    return {result: mentors[index]}
}