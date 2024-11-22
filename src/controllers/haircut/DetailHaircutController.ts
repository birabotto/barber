import { Request, Response } from "express";
import { DetailHaircutService } from "../../services/haircut/DetailHaircutServices";
class DetailHaircutController {
  async handle(request: Request, response: Response) {
    const haircut_id = request.query.haircut_id as string;

    const detailHaircutService = new DetailHaircutService();

    const haircut = await detailHaircutService.execute({ haircut_id });

    return response.json(haircut);
  }
}

export { DetailHaircutController };
