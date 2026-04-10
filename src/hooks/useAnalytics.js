import { useEffect, useRef, useCallback } from 'react';
import { trackEvent } from '../lib/supabase';

/**
 * Hook de analytics para a landing page.
 *
 * - Dispara um `page_view` automaticamente ao montar o componente (1x).
 * - Lê o parâmetro `?ref=` da URL e grava como `ref_source`.
 * - Retorna `trackClick(elementId)` para ser usado nos botões CTA.
 */
export function useAnalytics() {
  const tracked = useRef(false);
  const refSource = useRef(null);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    // Captura o ?ref= da URL
    const params = new URLSearchParams(window.location.search);
    refSource.current = params.get('ref') || null;

    // Registra a visualização da página
    trackEvent({
      event_type: 'page_view',
      ref_source: refSource.current,
    });
  }, []);

  /** Dispara evento de clique em um botão CTA */
  const trackClick = useCallback((elementId) => {
    trackEvent({
      event_type: 'button_click',
      ref_source: refSource.current,
      element_id: elementId,
    });
  }, []);

  return { trackClick };
}
