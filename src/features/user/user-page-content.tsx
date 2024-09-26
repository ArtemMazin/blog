"use client";

import { UserInfo } from "@/features/user/user-info";
import { useUser } from "@/features/user/hooks/useUser";
import { UIMain } from "@/shared/ui/ui-main";

export function UserPageContent({ userID }: { userID: string }) {
  const { data: user } = useUser(userID);

  return (
    <UIMain className="h-full w-full">
      {user && <UserInfo user={user} />}
    </UIMain>
  );
}
