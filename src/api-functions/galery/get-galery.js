import {deepCopy} from "@/utils/deep-copy";

import {wait} from "@/utils/wait";
import {gallery} from "@/__fake_db__/galery";

export const getGalery = async () => {
    await wait(500);
    const res = await deepCopy(gallery);

    const results = res.map(_item => {
        const {image, id} = _item
        return {
            id,
            image: image
        }
    })

    return {results}
};
