import { stripe } from "./../../utils/stripe";
import prismaClient from "../../prisma";
import Stripe from "stripe";
interface SubscribeRequest {
  user_id: string;
}

class SubscribeService {
  async execute({ user_id }: SubscribeRequest) {
    const stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: "2024-11-20.acacia",
      appInfo: {
        name: "barberpro",
        version: "1",
      },
    });

    const findUser = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    let customerId = findUser.stripe_customer_id;

    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: findUser.email,
      });

      await prismaClient.user.update({
        where: {
          id: user_id,
        },
        data: {
          stripe_customer_id: stripeCustomer.id,
        },
      });

      customerId = stripeCustomer.id;
    }

    const stripeCheckOutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [{ price: process.env.STRIPE_PRICE, quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return { sessionId: stripeCheckOutSession.id };
  }
}

export { SubscribeService };
