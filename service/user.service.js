var CryptoUtil = require('../util/crypto.util');

module.exports.checkUser = function(authorization, success, error){
    var user = CryptoUtil.decrypAuthorization(authorization);
    if(user.mail===process.env.NAME_MASTER_LHN && user.pass === process.env.PASS_MASTER_LHN){
        success();
    }else {
        error();
    }
}
