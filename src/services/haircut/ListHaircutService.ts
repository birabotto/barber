import prismaClient from "../../prisma";

interface ListHaircutRequest {
  user_id: string;
  status: boolean | string;
}

class ListHaircutService {
  async execute({ user_id, status }: ListHaircutRequest) {
    const haircut = await prismaClient.hairCut.findMany({
      where: {
        user_id,
        status: status == "true" ? true : false,
      },
    });

    return haircut;
  }
}

export { ListHaircutService };
