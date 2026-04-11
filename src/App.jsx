import { useEffect, useRef, useState } from 'react';
import { trackEvent } from './lib/supabase';
import {
  ArrowRight,
  Menu,
  X,
  StarOff,
  Eye,
  MessageSquareX,
  Zap,
  Sparkles,
  BellRing,
  Link2,
  FileSearch,
  Rocket,
  TrendingUp,
  Check,
  XCircle,
  Utensils,
  Stethoscope,
  ShoppingBag,
  Dumbbell,
  Scissors,
  Hotel,
  Plus,
  Minus,
  Instagram,
  Linkedin,
  Youtube,
  Star,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5519971453289?text=Ol%C3%A1!%20Quero%20descobrir%20como%20melhorar%20minha%20nota%20no%20Google.%20Vim%20pelo%20site%20do%20Reputamax.';

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-2">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          light ? 'bg-white/10' : 'bg-navy'
        }`}
      >
        <Star className="h-5 w-5 text-teal" strokeWidth={2.4} />
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        Reputa<span className="text-teal">max</span>
      </span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#para-quem', label: 'Para quem' },
    { href: '#faq', label: 'Dúvidas' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Logo light />
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent({ event_type: 'button_click', element_id: 'cta_navbar' })}
          className="hidden rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-mint-light md:inline-flex"
        >
          Diagnóstico gratuito
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="container-page flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent({ event_type: 'button_click', element_id: 'cta_navbar_mobile' })}
              className="mt-2 rounded-full bg-mint px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              Diagnóstico gratuito
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function HeroMockup() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const score = useCountUp(87, 1800, mounted);
  const note = useCountUp(4.7, 1800, mounted);
  const rate = useCountUp(98, 1800, mounted);

  const bars = [42, 56, 49, 63, 71, 68, 79, 82, 87];

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-10 animate-pulse-slow rounded-[3rem] bg-mint/20 blur-3xl" />
      <div
        className="absolute -inset-16 animate-rotate-slow opacity-40"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-mint/20" />
      </div>

      <div className="relative rounded-3xl border border-white/10 bg-navy-light/70 p-6 shadow-soft backdrop-blur-xl gradient-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint/15">
              <Star className="h-4 w-4 fill-mint text-mint" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                Reputamax Dashboard
              </p>
              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-mint shadow-[0_0_10px_#00d4aa]" />
                <span className="text-[11px] font-medium text-white/70">
                  Ao vivo
                </span>
              </div>
            </div>
          </div>
          <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-[11px] font-semibold text-mint">
            Saudável
          </span>
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-wider text-white/50">
            Score de reputação
          </p>
          <div className="mt-1 flex items-end gap-2">
            <p className="font-display text-5xl font-extrabold text-white tabular-nums">
              {Math.round(score)}
            </p>
            <span className="mb-2 text-sm text-white/40">/100</span>
            <span className="mb-2 ml-auto inline-flex items-center gap-1 rounded-full bg-mint/10 px-2 py-0.5 text-[11px] font-semibold text-mint">
              <TrendingUp className="h-3 w-3" />
              +12
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-mint/20 to-mint shadow-[0_0_12px_rgba(78,166,32,0.35)] bar-live"
              style={{
                height: `${h}px`,
                animationDelay: `${i * 90}ms`,
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-white/40">
          <span>Jan</span>
          <span>Mar</span>
          <span>Mai</span>
          <span>Jul</span>
          <span>Set</span>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint/15">
                <Star className="h-4 w-4 fill-mint text-mint" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Nota Google
                </p>
                <p className="text-xs text-mint">+0.4 neste mês</p>
              </div>
            </div>
            <p className="font-display text-lg font-bold text-white tabular-nums">
              {note.toFixed(1)}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint/15">
                <MessageCircle className="h-4 w-4 text-mint" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Taxa de resposta
                </p>
                <p className="text-xs text-white/50">última semana</p>
              </div>
            </div>
            <p className="font-display text-lg font-bold text-white tabular-nums">
              {Math.round(rate)}%
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 -top-6 hidden animate-float rounded-2xl border border-white/10 bg-navy-deep/90 p-4 shadow-soft backdrop-blur-xl sm:block">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-mint/20">
            <BellRing className="h-5 w-5 text-mint" />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-blink rounded-full bg-mint shadow-[0_0_10px_#00d4aa]" />
          </div>
          <div>
            <p className="text-xs text-white/60">Nova avaliação</p>
            <div className="mt-0.5 flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-mint text-mint"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden animate-float-slow rounded-2xl border border-white/10 bg-navy-deep/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:flex sm:items-center sm:gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint/15">
          <Sparkles className="h-4 w-4 text-mint" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/45">
            IA respondeu
          </p>
          <p className="text-xs font-semibold text-white">
            12 avaliações hoje
          </p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient pt-32 pb-28 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-pattern grid-pattern-fade animate-grid-move opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-[30rem] w-[30rem] animate-blob rounded-full bg-mint/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] animate-blob-delay rounded-full bg-cyan-400/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/3 -bottom-20 h-96 w-96 animate-blob rounded-full bg-mint/10 blur-[100px]"
      />
      <div aria-hidden="true" className="absolute inset-0 noise" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <Sparkles className="absolute left-[8%] top-[22%] h-4 w-4 animate-star-twinkle text-teal/70" />
        <Sparkles
          className="absolute right-[12%] top-[18%] h-3 w-3 animate-star-twinkle text-teal/50"
          style={{ animationDelay: '0.8s' }}
        />
        <Star
          className="absolute left-[52%] top-[12%] h-3 w-3 animate-star-twinkle fill-teal/40 text-teal/40"
          style={{ animationDelay: '1.4s' }}
        />
        <Sparkles
          className="absolute left-[18%] bottom-[22%] h-3 w-3 animate-star-twinkle text-teal/60"
          style={{ animationDelay: '2.1s' }}
        />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal">
            <span className="eyebrow gradient-border">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Gestão ativa de reputação
            </span>

            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] text-white sm:text-5xl md:text-[3.75rem]">
              Cada estrela a menos no Google é{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient">
                  dinheiro saindo
                </span>
                <svg
                  className="absolute -bottom-2 left-0 z-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q 75 2 150 6 T 298 5"
                    stroke="#00d4aa"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>{' '}
              pela porta.
            </h1>

            <div className="relative mt-8 max-w-xl">
              <div
                aria-hidden="true"
                className="absolute -left-4 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-teal via-teal/70 to-transparent shadow-[0_0_20px_rgba(78,166,32,0.6)]"
              />
              <p className="font-display text-2xl font-bold leading-tight text-white sm:text-[1.75rem]">
                O <span className="text-gradient">Reputamax</span>{' '}
                resolve isso.
              </p>
            </div>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/65">
              Respostas com IA em segundos, alertas em tempo real a cada
              avaliação crítica e um sistema inteligente que faz sua nota
              subir mês após mês.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent({ event_type: 'button_click', element_id: 'cta_hero' })}
                className="btn-primary"
              >
                Quero melhorar minha nota
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#solucao" className="btn-outline">
                Veja como funciona
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal" />
                Diagnóstico gratuito
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-teal" />
                Resultado em 30 segundos
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-teal" />
                Sem cartão
              </div>
            </div>
          </div>

          <div className="reveal">
            <HeroMockup />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-navy/40" />
    </section>
  );
}

function Problem() {
  const cards = [
    {
      icon: StarOff,
      title: 'Clientes insatisfeitos avaliam mais',
      text: 'Estudos mostram que clientes insatisfeitos têm até 3x mais chance de deixar uma avaliação do que clientes satisfeitos. Sem gestão ativa, sua nota é naturalmente distorcida para baixo. Seus clientes felizes saem calados. Os irritados vão direto pro Google.',
    },
    {
      icon: Eye,
      title: '90% pesquisam antes de comprar',
      text: '9 em cada 10 consumidores leem avaliações antes de escolher um negócio local. Se sua nota está abaixo de 4.5, você perde clientes todos os dias para concorrentes melhor avaliados — mesmo que seu serviço seja superior.',
    },
    {
      icon: MessageSquareX,
      title: 'Avaliações negativas sem resposta',
      text: 'Cada avaliação negativa sem resposta diz ao próximo cliente: "esse negócio não se importa". 45% dos consumidores evitam negócios que não respondem críticas. Seu silêncio está custando dinheiro.',
    },
  ];

  return (
    <section className="section relative overflow-hidden light-bg">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-mint/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/5 blur-3xl"
      />
      <div className="container-page relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">O problema</span>
          <h2 className="section-title mt-5">
            O problema que você não vê{' '}
            <span className="text-slategray">
              (mas seus clientes veem)
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="reveal gradient-border group relative overflow-hidden rounded-3xl border border-navy/10 bg-white/80 p-8 shadow-[0_10px_40px_-15px_rgba(26,26,46,0.15)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_20px_60px_-15px_rgba(78,166,32,0.35)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-mint/5 blur-2xl transition group-hover:bg-mint/15" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-light text-teal shadow-[0_8px_25px_-8px_rgba(78,166,32,0.5)]">
                <c.icon className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="relative mt-6 font-display text-xl font-bold text-navy">
                {c.title}
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-slategray">
                {c.text}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy px-8 py-12 text-center shadow-[0_25px_80px_-20px_rgba(26,26,46,0.5)] sm:px-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid-pattern opacity-20"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/10 blur-3xl"
          />
          <div className="relative">
            <p className="mx-auto max-w-3xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              A diferença entre 3.8 e 4.6 estrelas pode significar até{' '}
              <span className="text-gradient">35% mais clientes</span>{' '}
              entrando pela sua porta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const features = [
    {
      icon: Zap,
      title: 'Diagnóstico instantâneo gratuito',
      text: 'Conecte sua conta Google e em 30 segundos descubra: sua nota real, avaliações sem resposta, tendência da nota, e um score de saúde da sua reputação de 0 a 100. Grátis, para sempre.',
    },
    {
      icon: Sparkles,
      title: 'Respostas inteligentes com IA',
      text: 'A IA do Reputamax gera respostas personalizadas para cada avaliação — empáticas para críticas, calorosas para elogios. Você revisa, ajusta se quiser, e publica com um clique. Sem perder horas pensando no que escrever.',
    },
    {
      icon: BellRing,
      title: 'Alertas em tempo real',
      text: 'No instante em que uma nota baixa é publicada, você recebe uma notificação. Atue em minutos, não em semanas — uma resposta rápida pode até fazer o cliente mudar a avaliação e impedir que uma crise de reputação se espalhe.',
    },
    {
      icon: TrendingUp,
      title: 'Sua nota subindo mês a mês',
      text: 'O Reputamax usa um motor inteligente que canaliza a voz dos seus clientes satisfeitos para o lugar certo. Resultado: mais avaliações positivas no Google, sua nota crescendo de forma consistente e mais clientes encontrando seu negócio na busca.',
    },
  ];

  return (
    <section
      id="solucao"
      className="section relative overflow-hidden mist-bg"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-mint/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-mint/10 blur-3xl"
      />
      <div className="container-page relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">A solução</span>
          <h2 className="section-title mt-5">
            Gestão ativa de reputação: sua nota sobe, seus clientes
            aumentam
          </h2>
          <p className="mt-5 text-lg text-slategray">
            O Reputamax transforma suas avaliações em uma máquina de
            atrair clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <article
              key={i}
              className="reveal gradient-border group relative overflow-hidden rounded-3xl border border-white bg-white p-8 shadow-[0_10px_40px_-15px_rgba(26,26,46,0.15)] transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_25px_70px_-20px_rgba(78,166,32,0.4)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mint/5 blur-2xl transition group-hover:bg-mint/15" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-teal shadow-[0_8px_30px_-8px_rgba(78,166,32,0.5)] transition group-hover:shadow-glow">
                <f.icon className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="relative mt-6 font-display text-xl font-bold text-navy">
                {f.title}
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-slategray">
                {f.text}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent({ event_type: 'button_click', element_id: 'cta_solution' })}
            className="btn-primary"
          >
            Quero melhorar minha nota
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      title: 'Conecte seu Google',
      text: 'Vincule sua conta em um clique. Sem configuração complicada.',
    },
    {
      icon: FileSearch,
      title: 'Receba seu diagnóstico',
      text: 'Em 30 segundos, veja o raio-x completo da sua reputação online.',
    },
    {
      icon: Rocket,
      title: 'Ative a gestão ativa',
      text: 'Respostas com IA, alertas em tempo real e coleta de avaliações começam a funcionar automaticamente.',
    },
    {
      icon: TrendingUp,
      title: 'Veja sua nota subir',
      text: 'Acompanhe a evolução no dashboard e veja mais clientes chegando.',
    },
  ];

  return (
    <section
      id="como-funciona"
      className="section relative overflow-hidden light-bg"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl"
      />
      <div className="container-page relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Passo a passo</span>
          <h2 className="section-title mt-5">Como o Reputamax funciona</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {i < steps.length - 1 && (
                <div className="absolute left-16 top-8 hidden h-px w-full bg-gradient-to-r from-teal/60 via-teal/30 to-transparent md:block" />
              )}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-mist shadow-[0_15px_40px_-15px_rgba(78,166,32,0.5)]">
                <s.icon className="h-7 w-7 text-teal" strokeWidth={1.8} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-mint to-mint-dark font-display text-xs font-bold text-navy shadow-glow-mint">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slategray">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyActive() {
  const without = [
    'Avaliações negativas sem resposta há meses',
    'Apenas clientes insatisfeitos avaliam espontaneamente',
    'Nota caindo gradualmente',
    'Clientes potenciais escolhendo o concorrente',
    'Problemas recorrentes que você nem sabe que existem',
  ];
  const withR = [
    'Toda avaliação respondida em minutos com IA',
    'Clientes satisfeitos direcionados para avaliar no Google',
    'Nota subindo mês a mês',
    'Mais clientes chegando pela busca do Google',
    'Relatórios mostrando exatamente onde melhorar',
  ];

  return (
    <section className="section relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-pattern grid-pattern-fade animate-grid-move opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,170,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,212,170,0.1),transparent_50%)]" />
      <div className="container-page relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Por que gestão ativa</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Sem gestão ativa, você está{' '}
            <span className="text-teal">perdendo dinheiro</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Sem Reputamax
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {without.map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-white/75"
                >
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl border border-teal/30 bg-mint/5 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/20 text-teal">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Com Reputamax
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {withR.map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-white/90"
                >
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ target, suffix, label, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const value = useCountUp(target, 1600, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal gradient-border group relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-[0_10px_40px_-15px_rgba(26,26,46,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_25px_70px_-15px_rgba(78,166,32,0.45)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-mint/5 blur-2xl transition group-hover:bg-mint/15" />
      <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-navy/5 blur-2xl transition group-hover:bg-navy/10" />
      <p className="relative font-display text-5xl font-extrabold text-navy tabular-nums sm:text-6xl">
        {Math.round(value)}
        <span className="text-teal">{suffix}</span>
      </p>
      <p className="relative mt-4 text-sm leading-relaxed text-slategray">
        {label}
      </p>
    </div>
  );
}

function Numbers() {
  const stats = [
    {
      target: 90,
      suffix: '%',
      label:
        'dos consumidores leem avaliações antes de visitar um negócio local',
    },
    {
      target: 3,
      suffix: 'x',
      label:
        'clientes insatisfeitos têm 3x mais chance de avaliar do que os satisfeitos',
    },
    {
      target: 35,
      suffix: '%',
      label: 'mais clientes com nota acima de 4.5 vs abaixo de 4.0',
    },
    {
      target: 45,
      suffix: '%',
      label:
        'dos consumidores evitam negócios que não respondem avaliações negativas',
    },
  ];

  return (
    <section className="section relative overflow-hidden light-bg">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-400/8 blur-3xl"
      />
      <div className="container-page relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Números de impacto</span>
          <h2 className="section-title mt-5">
            O peso real das avaliações
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const segments = [
    { icon: Utensils, label: 'Restaurantes e bares' },
    { icon: Stethoscope, label: 'Clínicas e consultórios' },
    { icon: ShoppingBag, label: 'Lojas e comércio' },
    { icon: Dumbbell, label: 'Academias' },
    { icon: Scissors, label: 'Salões e estética' },
    { icon: Hotel, label: 'Hotéis e pousadas' },
  ];

  return (
    <section
      id="para-quem"
      className="section relative overflow-hidden mist-bg"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-mint/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl"
      />
      <div className="container-page relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Para quem é</span>
          <h2 className="section-title mt-5">
            Feito para negócios locais que querem crescer
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {segments.map((s, i) => (
            <div
              key={i}
              className="reveal group flex flex-col items-center gap-4 rounded-2xl border border-white bg-white p-6 text-center shadow-[0_10px_30px_-15px_rgba(26,26,46,0.2)] transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_20px_50px_-15px_rgba(78,166,32,0.4)]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-light shadow-[0_8px_20px_-8px_rgba(78,166,32,0.5)] transition group-hover:shadow-glow">
                <s.icon
                  className="h-6 w-6 text-teal"
                  strokeWidth={1.8}
                />
              </div>
              <p className="text-sm font-semibold text-navy">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, open, onClick }) {
  const contentRef = useRef(null);
  return (
    <div className="reveal">
      <div
        className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
          open
            ? 'border-teal/40 shadow-[0_15px_45px_-15px_rgba(78,166,32,0.35)]'
            : 'border-navy/10 shadow-[0_8px_25px_-15px_rgba(26,26,46,0.15)]'
        }`}
      >
        <button
          onClick={onClick}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-base font-semibold text-navy sm:text-lg">
            {q}
          </span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition ${
              open
                ? 'bg-mint text-navy shadow-glow-mint'
                : 'bg-mist text-navy'
            }`}
          >
            {open ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </span>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: open ? contentRef.current?.scrollHeight + 'px' : '0px',
          }}
        >
          <p className="px-6 pb-6 text-base leading-relaxed text-slategray">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const items = [
    {
      q: 'Preciso de conhecimento técnico?',
      a: 'Nenhum. Você conecta sua conta Google com um clique e o Reputamax faz o resto.',
    },
    {
      q: 'O diagnóstico é realmente grátis?',
      a: 'Sim. Você pode ver o raio-x completo da sua reputação sem pagar nada. Os recursos avançados como respostas com IA e coleta de avaliações são dos planos pagos.',
    },
    {
      q: 'Funciona para qualquer tipo de negócio?',
      a: 'Sim. Se seu negócio tem um perfil no Google, o Reputamax funciona. Restaurantes, clínicas, lojas, academias, salões — qualquer negócio local.',
    },
    {
      q: 'Como o sistema faz minha nota subir?',
      a: 'O Reputamax combina respostas com IA, alertas em tempo real e um motor inteligente de coleta de avaliações. Na prática, sua nota sobe de forma consistente mês após mês, com mais avaliações positivas no Google e menos problemas públicos.',
    },
    {
      q: 'É seguro conectar minha conta Google?',
      a: 'Totalmente. Usamos o sistema oficial de autorização do Google (OAuth 2.0). Não temos acesso à sua senha e você pode desconectar a qualquer momento.',
    },
  ];

  return (
    <section
      id="faq"
      className="section relative overflow-hidden light-bg"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-mint/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-indigo-400/5 blur-3xl"
      />
      <div className="container-page relative max-w-4xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-5">Dúvidas frequentes</h2>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-cta-gradient py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-pattern grid-pattern-fade animate-grid-move opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/4 top-10 h-96 w-96 animate-blob rounded-full bg-mint/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-1/4 bottom-0 h-96 w-96 animate-blob-delay rounded-full bg-mint/20 blur-[120px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.2),transparent_65%)]" />
      <div className="container-page relative text-center">
        <div className="reveal mx-auto max-w-3xl">
          <span className="eyebrow">Última chance</span>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Sua reputação{' '}
            <span className="text-gradient">não pode esperar</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Enquanto você lê isso, clientes estão pesquisando seu negócio
            no Google e decidindo se entram ou passam direto. Descubra
            como está sua reputação e comece a reverter o jogo.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent({ event_type: 'button_click', element_id: 'cta_final' })}
              className="btn-primary text-lg"
            >
              Quero melhorar minha nota
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-6 text-sm text-white/55">
            Diagnóstico gratuito. Sem cartão de crédito. Resultado em 30
            segundos.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-14">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm text-white/55">
              Gestão ativa de reputação para negócios locais brasileiros.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <a
              href="#"
              className="text-sm text-white/65 transition hover:text-teal"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-sm text-white/65 transition hover:text-teal"
            >
              Termos de Uso
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          © 2026 Reputamax. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackEvent({ event_type: 'button_click', element_id: 'whatsapp_flutuante' })}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-glow-whatsapp transition hover:-translate-y-0.5 hover:bg-whatsapp-light sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40" />
    </a>
  );
}

export default function App() {
  useReveal();

  // Registra page_view + captura ?ref= ao carregar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref') || null;
    trackEvent({ event_type: 'page_view', ref_source: ref });
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyActive />
        <Numbers />
        <ForWho />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
