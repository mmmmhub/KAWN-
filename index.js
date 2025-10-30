// ده سيرفر بسيط جداً عشان نبدأ بيه
export default function handler(request, response) {
  response.status(200).json({
    message: "السيرفر يعمل بنجاح (Started Clean!)",
  });
}
