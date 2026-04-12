// Supabase REST API client (sem SDK — usa fetch nativo)
const SUPABASE_URL = 'https://qgbxduvipeadycxremqa.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnYnhkdXZpcGVhZHljeHJlbXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNDMxNTMsImV4cCI6MjA4MTgxOTE1M30.IqbONOZfy6OUXSqARdzkIW1XZfhJu2CxMk5oeVhZtrc';

/**
 * Gera ou recupera um ID único do visitante no localStorage.
 * Persiste entre sessões no mesmo navegador/dispositivo.
 */
function getVisitorId() {
  const KEY = 'rpx_visitor_id';
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
}

/**
 * Insere uma linha na tabela landingpage_reputamax via REST API.
 * Usa a política RLS insert-only — nenhum dado pode ser lido pelo anon.
 */
export async function trackEvent({ event_type, ref_source, element_id }) {
  try {
    // Dispara Facebook Pixel "InitiateCheckout" para cliques nos botões do WhatsApp
    if (event_type === 'button_click' && window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }


    await fetch(`${SUPABASE_URL}/rest/v1/landingpage_reputamax`, {
      method: 'POST',
      keepalive: true,
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        event_type,
        ref_source: ref_source || null,
        element_id: element_id || null,
        user_agent: navigator.userAgent,
        visitor_id: getVisitorId(),
      }),
    });
  } catch {
    // Silencia erros de tracking para não afetar a UX
  }
}
