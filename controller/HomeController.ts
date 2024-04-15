import { Request, Response } from 'express';

class HomeController {
 
  static index(req: Request, res: Response): void {
    res.render("index");
  }
}

export default HomeController;