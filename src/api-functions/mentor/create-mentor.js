import {createResourceId} from "@/utils/create-resource-id";
import {fileToUrl} from "@/utils/file-to-url";
import {mentors} from "@/__fake_db__/mentors";

export const createMentor = ({token, data} = {}) => {
    if (!token) {
        throw new Error("No admin access")
    }

    if (!data) {
        throw new Error("No data")
    }

    const mentor_pattern = {
        id: createResourceId(),
        first_name: "",
        last_name: "",
        image: {
            square: ""
        },
        profession: "",
        description: ""
    }

    const newMentor = {
        ...mentor_pattern,
        ...data,
        image: {
            square: fileToUrl(data?.image)
        }
    }

    mentors.push(newMentor);

    return {result: newMentor};
}