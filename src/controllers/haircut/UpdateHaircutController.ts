import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpdateHaircutController {
  async handle(request: Request, response: Response) {
    const { name, price, status, haircut_id } = request.body;
    console.log(request.body);
    const user_id = request.user_id;

    const updateHaircutService = new UpdateHaircutService();

    const haircut = await updateHaircutService.execute({
      user_id,
      name,
      price,
      status,
      haircut_id,
    });

    return response.json(haircut);
  }
}

export { UpdateHaircutController };
