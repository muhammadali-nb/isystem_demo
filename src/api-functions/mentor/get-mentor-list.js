import {mentors} from "@/__fake_db__/mentors";
import {wait} from "@/utils/wait";
import {deepCopy} from "@/utils/deep-copy";

export const getMentorList = async () => {
    await wait(500);

    const res = deepCopy(mentors);

    const results = res.map(_item => {
        const {profession, id, last_name, first_name, image, description} = _item

        return {
            id,
            name: first_name + " " + last_name,
            profession: profession,
            image: image.square,
            description: description
        }
    })

    return {results}
}