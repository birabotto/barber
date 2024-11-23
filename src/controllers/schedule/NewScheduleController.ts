import { Request, Response } from "express";
import { NewScheduleService } from "../../services/shedule/NewScheduleService";

class NewScheduleController {
  async handle(request: Request, response: Response) {
    const { customer, haircut_id } = request.body;
    const user_id = request.user_id;

    const newScheduleService = new NewScheduleService();

    const schedule = await newScheduleService.execute({
      customer,
      haircut_id,
      user_id,
    });

    return response.json(schedule);
  }
}

export { NewScheduleController };
