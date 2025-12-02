import { createClient } from "@/lib/supabaseServer";

export default async function DashboardPage() {
  const supabase = await createClient();   // ⬅ FIX

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="p-10">
      <h1 className="text-3xl mb-4">Welcome to With Hope</h1>
      <p>You are logged in as: <strong>{user?.email}</strong></p>
    </main>
  );
}
