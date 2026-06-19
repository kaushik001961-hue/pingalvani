import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.poem.update({
    where: { id: params.id },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  return Response.json({ success: true });
}