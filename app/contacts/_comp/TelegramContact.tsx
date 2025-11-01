"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Send, RefreshCcw } from "lucide-react";

export default function TelegramContact() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setStatus("⚠️ Please enter a Telegram username");
      return;
    }

    if (!message.trim()) {
      setStatus("⚠️ Message cannot be empty.");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const formattedUsername = username.startsWith('@') ? username.substring(1) : username;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://t.me/${formattedUsername}?text=${encodedMessage}`, '_blank');
      setStatus("✅ Opening Telegram...");
      setLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setUsername("");
    setMessage("");
    setStatus("");
  };

  return (
    <section className="py-20 flex justify-center bg-gradient-to-b">
      <Card className="w-full max-w-md shadow-xl border-2 border-secondary">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0088CC] to-[#2AABEE] flex items-center justify-center gap-2">
            <Send className="w-6 h-6" /> Telegram Me
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                @
              </div>
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border-none pl-6"
              />
            </div>

            <Textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className="border-none"
            />

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#0088CC] to-[#2AABEE] text-white hover:from-[#2AABEE] hover:to-[#0088CC]"
              >
                {loading ? (
                  <>
                    <RefreshCcw className="animate-spin w-4 h-4 mr-2" />
                    Preparing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Send via Telegram
                  </>
                )}
              </Button>

              <Button
                type="button"
                onClick={handleReset}
                variant="outline"
                className="w-1/3"
              >
                Clear
              </Button>
            </div>

            {status && (
              <p className={`text-sm mt-2 text-center ${
                status.startsWith("✅") ? "text-green-500" : "text-amber-500"
              }`}>
                {status}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
