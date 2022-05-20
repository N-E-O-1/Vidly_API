const {User} = require('../../../models/user')
const config = require('config')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

describe('user.generateAuthToken',() => {
    it('should return valid jwt',() => {
        const payload = {_id:new mongoose.Types.ObjectId().toHexString(),isAdmin:true}
        const user = new User(payload)
        const token = user.generateAuthToken();
        const decoded = jwt.verify(token,config.get('jwtPrivateKey'))
        expect(decoded).toMatchObject(payload)

    })
})