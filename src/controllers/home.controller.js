export default class HomeController {
  index(request, response) {
    return response.status(200).json({
      name: "express api example",
      success: true
    });
  }
}