import { Request, Response } from "express";
import { FinishScheduleService } from "../../services/shedule/FinishScheduleService";

class FinishScheduleController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const schedule_id = request.query.schedule_id as string;

    const finishScheduleService = new FinishScheduleService();

    const finished = await finishScheduleService.execute({
      user_id,
      schedule_id,
    });

    return response.json(finished);
  }
}

export { FinishScheduleController };
