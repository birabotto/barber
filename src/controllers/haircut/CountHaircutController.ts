import { Request, Response } from "express";
import { CountHaircutService } from "../../services/haircut/CountHaircutService";

class CountHaircutsController {
  async handle(resquest: Request, response: Response) {
    const user_id = resquest.user_id;

    const countHaircutService = new CountHaircutService();

    const count = await countHaircutService.execute({ user_id });
    console.log(count);
    return response.json(count);
  }
}

export { CountHaircutsController };
