import {wait} from "@/utils/wait";
import {deepCopy} from "@/utils/deep-copy";
import {trainings} from "@/__fake_db__/training";

export const getTrainings = async () => {
    await wait(500)

    const res = deepCopy(trainings)

    const results = res.map(_item => {
        const {description, id, title, video} = _item

        return {
            id,
            description: description,
            title: title,
            video: video
        }
    })

    return {results}
}