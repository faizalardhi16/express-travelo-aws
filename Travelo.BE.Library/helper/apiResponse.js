export default function apiResponse(code, message, isSuccess, data) {
  return {
    meta: {
      code: code,
      message: message,
      status: isSuccess ? "Success" : "Failed",
    },
    data,
  };
}
