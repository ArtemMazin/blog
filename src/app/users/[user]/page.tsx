"use client";

import { UIMain } from "@/shared/ui/ui-main";
import { useUser } from "@/features/user/hooks/useUser";
import { UserInfo } from "@/features/user/user-info";

export default function UserPage({ params }: { params: { user: string } }) {
  const { data: user } = useUser(params.user);

  return (
    <UIMain className="h-full w-full">
      {user && <UserInfo user={user} />}
    </UIMain>
  );
}
