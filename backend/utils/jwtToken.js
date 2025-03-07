const sendToken = (user,statusCode,res) => {
    const token = user.getJWTToken();

    const options = {
        expires: new DataTransfer(
            Date.now() + 90 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,

    };
    res.staus(statusCode).cookie("token",token ,options).json({
        sucess:true,
        token,
        user,
    })
}
module.exports = sendToken;