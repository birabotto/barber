import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const { email, password } = request.body;

    const userDetailService = new DetailUserService();

    const detailUser = await userDetailService.execute();

    return response.json(detailUser);
  }
}

export { DetailUserController };
