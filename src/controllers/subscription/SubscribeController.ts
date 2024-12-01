import { Request, Response } from "express";

import { SubscribeService } from "../../services/subscriptions/SubscribeService";

class SubscribeController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const subscribeService = new SubscribeService();
    const subscripe = await subscribeService.execute({
      user_id,
    });

    return response.json(subscripe);
  }
}

export { SubscribeController };
