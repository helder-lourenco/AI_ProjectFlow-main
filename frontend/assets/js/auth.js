import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://xxxx.supabase.co",
  "your-anon-key"
);

// Verifica se usuário está logado
export async function checkAuth() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("Você precisa estar logado.");
    window.location.href = "login.html";
  }
}
