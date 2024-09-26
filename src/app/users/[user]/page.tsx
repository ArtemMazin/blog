import { UserPageContent } from "@/features/user/user-page-content";

export default function UserPage({ params }: { params: { user: string } }) {
  return <UserPageContent userID={params.user} />;
}
