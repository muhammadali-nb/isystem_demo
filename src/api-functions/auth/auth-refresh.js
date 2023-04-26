import {decode, JWT_EXPIRES_IN, JWT_SECRET, sign} from "@/utils/jwt";
import {users} from "@/__fake_db__/users";

export const authRefresh = async (refresh_token) => {
    try {
        const {userId} = decode(refresh_token);
        const user = users.find(_user => _user.id === userId);

        if (!user) {
            throw new Error("Invalid authorization token");
        }

        const access_token = sign(user, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})

        return ({
            access_token
        })
    } catch (err) {
        console.error("[AUTH-INITIALIZE]: ", err)
    }
}