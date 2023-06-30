import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.user.findMany({
      where: {
        id: {
          in: [...(currentUser.favoritesIds || [])],
        },
      },
    });
    const saveFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }));

    return saveFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
