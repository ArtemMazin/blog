"use client";

import { UserInfo } from "@/features/user/user-info";
import { useUser } from "@/features/user/hooks/useUser";
import { ResponseUserDto } from "@/shared/api/generated";
import { UIMain } from "@/shared/ui/ui-main";

export function UserPageContent({
  initialUserData,
}: {
  initialUserData: ResponseUserDto;
}) {
  const { data: user } = useUser(initialUserData._id, initialUserData);

  return (
    <UIMain className="h-full w-full">
      {user && <UserInfo user={user} />}
    </UIMain>
  );
}
