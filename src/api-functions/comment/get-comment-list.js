import {wait} from "@/utils/wait";
import {deepCopy} from "@/utils/deep-copy";
import {comments} from "@/__fake_db__/comment";

export const getCommentList = async () => {
    await wait(500)

    const res = deepCopy(comments)

    const results = res.map(_item => {
        const {comment, id, source, user} = _item
        return {
            id,
            comment: comment,
            source: source,
            user: user
        }
    })

    return {results}
}