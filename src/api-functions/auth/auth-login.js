import {wait} from "@/utils/wait";
import {users} from "@/__fake_db__/users";
import {JWT_EXPIRES_IN, JWT_SECRET, sign} from "@/utils/jwt";

export const authLogin = async ({phone, password} = {}) => {

    await wait(500);
    const user = users.find(_user => _user.phone === phone);

    if (!user) {
        throw new Error('User is not exist!');
    }

    if (user.password !== password) {
        throw new Error('Password is incorrect!');
    }

    const access_token = sign(
        {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            user_type: user.user_type,
            phone: user.phone
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN
        }
    );
    const refresh_token = sign({userId: user.id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})
    return ({access_token, refresh_token});
}