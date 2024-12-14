import LoginLogout from "@/components/LoginLogout";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      <LoginLogout/>
      {JSON.stringify(session)}
    </div>
  );
}
