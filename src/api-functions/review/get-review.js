import {wait} from "@/utils/wait";
import {deepCopy} from "@/utils/deep-copy";
import {reviews} from "@/__fake_db__/review";

export const getReview = async () => {
    await wait(500)

    const res = deepCopy(reviews)

    const results = res.map(_item => {
        const {id, video, name} = _item
        return {
            id,
            video: video,
            name: name
        }
    })

    return {results}
}