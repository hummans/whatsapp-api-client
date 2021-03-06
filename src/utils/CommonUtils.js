'use strict'

class CommonUtils {
    static validateString (name, val) {
        if (!val || Object.prototype.toString.call(val) !== '[object String]')
            throw new Error(`${name} must be a String!`)
    }
    static validateInteger(name, val) {
        if(!Number.isInteger(val)) 
            throw new Error(`${name} must be an integer!`)
    }

    static validateNumber(name, val) {
        if(!val || !Number(val)) 
            throw new Error(`${name} must be a number!`)
    }

    static validateObject (name, val) {
        if(!val || Object.prototype.toString.call(val) !== '[object Object]') 
            throw new Error(`${name} must be an Object!`)
    }

    static generateMethodURL(params, method, messageId) {
        return `${params.host}/waInstance${params.idInstance}/${method}/${params.apiTokenInstance}`
    }

    static validateChatIdPhoneNumber(chatId, phoneNumber) {
        if (!chatId) {
            CommonUtils.validateInteger('phoneNumber', phoneNumber)
        }
        if (!phoneNumber) {
            CommonUtils.validateString('phoneNumber', chatId)
        }
    }

    static validateArray(name, val) {
        if (!val || !Array.isArray(val))
            throw new Error(`${name} must be an Array!`)
    }
}

export default CommonUtils