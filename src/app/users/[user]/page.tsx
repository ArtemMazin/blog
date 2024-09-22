import { notFound } from "next/navigation";
import { UserPageContent } from "@/features/user/user-page-content";
import {
  usersControllerGetAllUsers,
  usersControllerGetUserById,
} from "@/shared/api/generated";

async function getUser(id: string) {
  try {
    const res = await usersControllerGetUserById(id);
    return res.data;
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const users = await usersControllerGetAllUsers();
    return users.data.map((user) => ({
      user: user._id.toString(),
    }));
  } catch (error) {
    console.error("Ошибка при генерации статических параметров:", error);
    return [];
  }
}

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  try {
    const userData = await getUser(params.user);

    if (!userData) {
      console.error("Пользователь не найден");
      notFound();
    }

    return <UserPageContent initialUserData={userData} />;
  } catch (error) {
    console.error("Ошибка при загрузке страницы пользователя:", error);
    notFound();
  }
}
