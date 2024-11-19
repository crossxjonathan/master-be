const response = (res, status, success, result, message) => {
    const resultPrint = {};
    resultPrint.status = success ? "Success" : "Error";
    resultPrint.statusCode = status;
    resultPrint.data = result;
    resultPrint.message = message;
    res.status(status).json(resultPrint);
}

module.exports = {
    response,
};
