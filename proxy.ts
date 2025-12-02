import { createClient } from "@/lib/supabaseServer";

export default async function proxy(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const isAuthPage = pathname === "/auth";
  const isDashboard = pathname.startsWith("/dashboard");

  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If logged in → redirect away from auth
  if (session && isAuthPage) {
    return Response.redirect(new URL("/dashboard", url), 302);
  }

  // If logged out → redirect away from dashboard
  if (!session && isDashboard) {
    return Response.redirect(new URL("/auth", url), 302);
  }

  // Allow request to continue
  return;
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth"],
};
