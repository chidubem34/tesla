"use client";

import Link from "next/link";
import { useState } from "react";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { fetchUserProfile } from "@/app/lib/auth";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      // Firebase login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Fetch profile from Firestore to get role
      const profile = await fetchUserProfile(user.uid);
      const role = (profile?.role || "user").trim().toLowerCase();
      
      console.log("Login: User authenticated:", user.email);
      console.log("Login: Fetched profile role:", role);

      // Redirect based on role
      if (role === "admin") {
        console.log("Login: Redirecting to Admin Dashboard");
        window.location.href = "/admin-dashboard";
      } else {
        console.log("Login: Redirecting to User Dashboard");
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      const code = err?.code || "";
      if (code === "auth/user-not-found" || code === "auth/wrong-password") {
        setMessage("Invalid email or password.");
      } else if (code === "auth/too-many-requests") {
        setMessage("Too many attempts. Try again later.");
      } else {
        setMessage(err?.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-2 sm:px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 sm:p-6 shadow-xl">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
            Welcome Back
          </h1>
          <p className="text-white/60 text-sm sm:text-base">
            Sign in to your account to continue investing
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white placeholder-white/40"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/70"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white placeholder-white/40"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2 w-4 h-4 text-red-500 bg-white/10 border-white/20 rounded focus:ring-red-500"
              />
              <label htmlFor="remember" className="text-sm text-white/70">
                Remember me
              </label>
            </div>
            <a
              href="#forgot-password"
              className="text-sm text-red-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-lg text-base sm:text-lg transition-colors shadow-sm shadow-red-500/40 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="text-center pt-4">
            <p className="text-white/60 text-sm sm:text-base">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-red-500 hover:underline font-semibold"
              >
                Create Account
              </Link>
            </p>
          </div>

          {message && (
            <div className="mt-4 p-3 rounded-lg text-center text-sm bg-red-100 text-red-700">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
