import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
        <Star className="h-5 w-5 text-teal" strokeWidth={2.4} />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Reputa<span className="text-teal">max</span>
      </span>
    </Link>
  );
}

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <header className="bg-navy/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
        <div className="container-page flex h-18 items-center justify-between py-4">
          <Logo />
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container-page max-w-3xl py-16">
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          Termos de <span className="text-gradient">Uso</span>
        </h1>
        <p className="mt-4 text-white/55">Ultima atualizacao: 13 de abril de 2026</p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-white/75">
          <section>
            <h2 className="font-display text-xl font-bold text-white">1. Aceitacao dos termos</h2>
            <p className="mt-3">
              Ao acessar e utilizar o site e os servicos da Reputamax ("Plataforma"), voce
              concorda com estes Termos de Uso. Caso nao concorde com alguma disposicao,
              por favor, nao utilize nossos servicos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">2. Descricao do servico</h2>
            <p className="mt-3">
              A Reputamax e uma plataforma de gestao ativa de reputacao online para
              negocios locais. Nossos servicos incluem:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Monitoramento de avaliacoes no Google;</li>
              <li>Geracao automatica de respostas com inteligencia artificial;</li>
              <li>Alertas em tempo real sobre avaliacoes criticas;</li>
              <li>Estrategias para captacao de avaliacoes positivas;</li>
              <li>Diagnostico gratuito de reputacao online.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">3. Cadastro e conta</h2>
            <p className="mt-3">
              Para utilizar determinados recursos da Plataforma, podera ser necessario
              fornecer informacoes verdadeiras, completas e atualizadas. Voce e
              responsavel por manter a confidencialidade de suas credenciais de acesso
              e por todas as atividades realizadas em sua conta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">4. Uso adequado</h2>
            <p className="mt-3">Ao utilizar a Plataforma, voce se compromete a:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Nao utilizar o servico para fins ilegais ou nao autorizados;</li>
              <li>Nao publicar ou enviar conteudo ofensivo, difamatorio ou fraudulento;</li>
              <li>Nao tentar acessar areas restritas da Plataforma sem autorizacao;</li>
              <li>Nao utilizar bots, scrapers ou ferramentas automatizadas nao autorizadas;</li>
              <li>Respeitar os direitos de propriedade intelectual da Reputamax e de terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">5. Propriedade intelectual</h2>
            <p className="mt-3">
              Todo o conteudo da Plataforma, incluindo textos, graficos, logotipos, icones,
              imagens, codigo-fonte e software, e de propriedade da Reputamax ou de seus
              licenciantes e esta protegido por leis de propriedade intelectual. E proibida
              a reproducao, distribuicao ou modificacao sem autorizacao previa por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">6. Respostas geradas por IA</h2>
            <p className="mt-3">
              As respostas geradas pela inteligencia artificial da Reputamax sao sugestoes
              baseadas em algoritmos. O usuario e responsavel por revisar e aprovar as
              respostas antes de publica-las. A Reputamax nao se responsabiliza por
              conteudo publicado sem revisao previa do usuario.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">7. Limitacao de responsabilidade</h2>
            <p className="mt-3">
              A Reputamax se esforsa para oferecer um servico confiavel e de qualidade.
              No entanto:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Nao garantimos que o uso da Plataforma resultara em melhoria especifica
                da nota no Google, pois isso depende de fatores externos;
              </li>
              <li>
                Nao nos responsabilizamos por interrupcoes temporarias do servico
                decorrentes de manutencao ou fatores fora de nosso controle;
              </li>
              <li>
                Nossa responsabilidade e limitada ao valor pago pelo usuario nos
                ultimos 12 meses pelo servico.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">8. Pagamento e cancelamento</h2>
            <p className="mt-3">
              Os termos de pagamento, valores e condicoes de cancelamento serao informados
              no momento da contratacao do plano. O cancelamento pode ser solicitado a
              qualquer momento, respeitando os prazos contratuais vigentes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">9. Privacidade</h2>
            <p className="mt-3">
              O tratamento de seus dados pessoais e regido pela nossa{' '}
              <Link to="/privacidade" className="text-teal underline hover:text-teal/80">
                Politica de Privacidade
              </Link>
              , que e parte integrante destes Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">10. Alteracoes nos termos</h2>
            <p className="mt-3">
              A Reputamax reserva-se o direito de modificar estes Termos de Uso a qualquer
              momento. As alteracoes entrarao em vigor a partir de sua publicacao nesta
              pagina. O uso continuado da Plataforma apos as alteracoes constitui
              aceitacao dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">11. Legislacao aplicavel</h2>
            <p className="mt-3">
              Estes Termos de Uso sao regidos pelas leis da Republica Federativa do Brasil.
              Eventuais disputas serao submetidas ao foro da comarca de Campinas/SP, com
              exclusao de qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">12. Contato</h2>
            <p className="mt-3">
              Para duvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-white">WhatsApp:</strong> (19) 97145-3289</li>
              <li><strong className="text-white">Site:</strong> reputamax.app</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="bg-navy-deep py-10">
        <div className="container-page text-center text-xs text-white/45">
          © 2026 Reputamax. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
