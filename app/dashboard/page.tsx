import { createClient } from "@/lib/supabaseServer";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Welcome back, {data.user?.email}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
