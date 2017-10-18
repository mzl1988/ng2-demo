import { Injectable } from '@angular/core';
import * as cryptoJs from 'crypto-js';

/**
 * util 类存放和业务有关的公共方法
 * @description
 */
@Injectable()
export class Util {

    constructor() {
    }

    aesEncrypt(decryptStr, key) {
        let ciphertext = cryptoJs.AES.encrypt(decryptStr, key);
        return ciphertext;
    }

    aesDecrypt(encryptStr, key) {
        let bytes = cryptoJs.AES.decrypt(encryptStr, key);
        let plaintext = bytes.toString(cryptoJs.enc.Utf8);
        return plaintext;
    }

}
