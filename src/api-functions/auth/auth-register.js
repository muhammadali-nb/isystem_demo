import {wait} from "@/utils/wait";
import {users} from "@/__fake_db__/users";

export const authRegister = async ({name, phone} = {}) => {

    await wait(500);

    try {
        let user = users.find(_user => _user.phone === phone);

        if (user) {
            throw new Error('User already exists');
        }

        return ({msg: "Confirmation code has been sent!"});
    } catch (err) {
        console.error('[Auth Register]: ', err);
    }
}