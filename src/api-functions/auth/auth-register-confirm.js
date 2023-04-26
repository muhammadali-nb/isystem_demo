import {wait} from "@/utils/wait";
import {users} from "@/__fake_db__/users";
import {createResourceId} from "@/utils/create-resource-id";
import {JWT_EXPIRES_IN, JWT_SECRET, sign} from "@/utils/jwt";

export const authRegisterConfirm = async ({phone, code} = {}) => {

    await wait(500);

    try {
        let user = users.find(_user => _user.phone === phone);

        if (user) {
            throw new Error('User already exists');
        }

        if (code !== 100100) {
            throw new Error("Confirmation code is incorrect!")
        }

        user = {
            id: createResourceId(),
            name,
            phone,
            user_type: "user",
        };

        users.push(user);

        const access_token = sign(user, JWT_SECRET);
        const refresh_token = sign({userId: user.id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        return ({
            access_token,
            refresh_token,
        });
    } catch (err) {
        console.error('[Auth Register Confirm]: ', err);
    }
}