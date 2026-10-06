
import userRepo from '../repositories/userRepo.js';
import User from '../entities/user.js';

import bcryptjs from 'bcryptjs'

export default class UserServices{

    createNewUser(username, password){
        if (userRepo.usernameAvaliable(username)){

            const hashedpass = this.#hashPassword(password)

            const userId = userRepo.addUserToDB(username, hashedpass, username)

            return new User(userId, username, username) 

        } else {
            return 'Name already in use'
        }

    }

    Login(username, password){
        if (!userRepo.usernameAvaliable){
            const passFromDB = userRepo.getPassForUser(password)

            const checkPass = this.#checkPasswordMatch(password, passFromDB)

            if (!checkPass){
                return 'Wrong Password' 
            } else {
                const userInfo = userRepo.getUserInfo(username)
                return new User(userInfo.userId, userInfo.name, userInfo.userName)
            }

        } else {
            return 'No User Found'
        }

    }
    
    async #hashPassword(password){
        const salt = await bcryptjs.genSalt()
        const hashedpass = await bcryptjs.hash(password, salt)
        return hashedpass 
    }

    async #checkPasswordMatch(password, hashedpass){
        return bcryptjs.compare(password, hashedpass)
    }

}