import {deepCopy} from "@/utils/deep-copy";
import {partners} from "@/__fake_db__/partners";
import {wait} from "@/utils/wait";

export const getPartners = () => {
    wait(50000)
    const res = deepCopy(partners)

    const results = res.map(_item => {
        const {id, name, img} = _item
        return {
            id,
            name: name,
            image: img
        }
    })

    return {results}
}