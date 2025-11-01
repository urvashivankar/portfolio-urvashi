import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getSupabaseAdmin } from "./_supabase";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = (req.body || {}) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || name.trim().length < 2) return res.status(400).json({ error: "Invalid name" });
    if (!email || !/^([^\s@]+)@([^\s@]+)\.([^\s@]{2,})$/.test(email)) return res.status(400).json({ error: "Invalid email" });
    if (!message || message.trim().length < 10) return res.status(400).json({ error: "Invalid message" });

    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("contacts")
      .insert({ name: name.trim(), email: email.trim(), message: message.trim() });
    if (error) throw error;
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("submit-contact error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}


