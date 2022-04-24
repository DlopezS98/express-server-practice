import { Request, Response } from 'express';

export default class HomeController {
  index(request: Request, response: Response): Response {

    const pkg = request.app.get('pkg');

    return response.status(200).json({
      name: pkg.name,
      version: pkg.version,
      description: pkg.description,
      author: pkg.author,
      license: pkg.license,
      source: {
        repositoryUrl: pkg.homepage
      }
    });
  }
}