"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">My Simple PWA</h1>
      <p className="text-xl mb-4">
        This is a simple Progressive Web App built with Next.js
      </p>
      <p className="text-lg">
        You are currently {isOnline ? "online" : "offline"}
      </p>
    </main>
  );
}
