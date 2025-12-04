"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"login" | "signup">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setErrorMsg("");

  console.log("SUBMIT", mode, email, password);

  if (mode === "login") {
    console.log("Logging in...");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
      return setErrorMsg(error.message);
    }
  }

  if (mode === "signup") {
    console.log("Signing up...");
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error(error);
      return setErrorMsg(error.message);
    }
  }

  console.log("SUCCESS, redirecting...");
  router.push("/dashboard");
}


  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="w-full max-w-sm border rounded-lg p-6 shadow">
        <h1 className="text-2xl text-center mb-2 font-semibold">
          {mode === "login" ? "Log In" : "Create Account"}
        </h1>

        <p className="text-center text-gray-500 mb-6">
          {mode === "login"
            ? "Welcome back to With Hope"
            : "Join With Hope today"}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMsg && (
            <p className="text-red-600 text-sm text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition"
          >
            {mode === "login" ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* Toggle link */}
        <p className="mt-4 text-center text-sm">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                className="text-blue-600 underline"
                onClick={() => setMode("signup")}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-600 underline"
                onClick={() => setMode("login")}
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </main>
  );
}
