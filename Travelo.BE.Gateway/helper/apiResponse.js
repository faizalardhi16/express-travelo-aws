export default function apiResponse(code, message, isSuccess, data) {
  return {
    meta: {
      code,
      message,
      isSuccess: isSuccess ? "Success" : "Failed",
    },
    data,
  };
}
