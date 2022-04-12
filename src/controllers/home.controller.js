export default class HomeController {
  index(request, response) {
    return response.status(200).json({
      message: "Hello World from Home Controller",
      success: true
    });
  }

  create(request, response) {
    return response.status(200).json({
      message: "Creating something!",
      success: true
    });
  }
}