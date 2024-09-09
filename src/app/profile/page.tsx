"use client";

import { UIMain } from "@/shared/ui/ui-main";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { UserInfo } from "@/features/user/user-info";

export default function ProfilePage() {
  const { data: user } = useProfile();

  return <UIMain>{user && <UserInfo user={user} />}</UIMain>;
}
