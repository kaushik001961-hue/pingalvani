import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q") || "";

  if (!query) {
    return Response.json([]);
  }

  const poems = await prisma.poem.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          content_en: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          content_hi: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          content_gu: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return Response.json(poems);
}