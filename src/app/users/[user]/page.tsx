import { UserPageContent } from "@/features/user/user-page-content";
import { usersControllerGetUserById } from "@/shared/api/generated";

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const userData = await usersControllerGetUserById(params.user);

  return <UserPageContent initialUserData={userData.data} />;
}
