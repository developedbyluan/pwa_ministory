"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function Home() {
  const [isOnline, setIsOnline] = useState(true);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const onlineHandler = () => setIsOnline(true);
    const offlineHandler = () => setIsOnline(false);

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    const beforeInstallPromptHandler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      beforeInstallPromptHandler as EventListener
    );

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
      window.removeEventListener(
        "beforeinstallprompt",
        beforeInstallPromptHandler as EventListener
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">My Simple PWA</h1>
      <p className="text-xl mb-4">
        This is a simple Progressive Web App built with Next.js
      </p>
      <p className="text-lg mb-4">
        You are currently {isOnline ? "online" : "offline"}
      </p>
      {isInstallable && (
        <Button onClick={handleInstallClick} className="mb-4">
          Install App
        </Button>
      )}
      <p className="text-sm text-gray-500">
        {isInstallable
          ? "Click 'Install App' to add this PWA to your home screen"
          : "This app is already installed or not installable on this device"}
      </p>
    </main>
  );
}
