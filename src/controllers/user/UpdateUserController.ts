import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const { name, address } = request.body;

    const updateUserService = new UpdateUserService();

    const updatedUser = await updateUserService.execute({
      user_id,
      name,
      address,
    });

    return response.json(updatedUser);
  }
}

export { UpdateUserController };
