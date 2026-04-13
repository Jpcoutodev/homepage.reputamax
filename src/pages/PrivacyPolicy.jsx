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

export default function PrivacyPolicy() {
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
          Politica de <span className="text-gradient">Privacidade</span>
        </h1>
        <p className="mt-4 text-white/55">Ultima atualizacao: 13 de abril de 2026</p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-white/75">
          <section>
            <h2 className="font-display text-xl font-bold text-white">1. Introducao</h2>
            <p className="mt-3">
              A Reputamax ("nos", "nosso" ou "empresa") valoriza a privacidade dos usuarios
              que acessam nosso site e utilizam nossos servicos. Esta Politica de Privacidade
              descreve como coletamos, usamos, armazenamos e protegemos suas informacoes
              pessoais, em conformidade com a Lei Geral de Protecao de Dados (LGPD — Lei
              n. 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">2. Dados que coletamos</h2>
            <p className="mt-3">Podemos coletar os seguintes tipos de dados:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">Dados de identificacao:</strong> nome, e-mail, telefone e nome
                da empresa, fornecidos voluntariamente ao entrar em contato conosco ou
                solicitar um diagnostico.
              </li>
              <li>
                <strong className="text-white">Dados de navegacao:</strong> endereco IP, tipo de navegador,
                paginas visitadas, tempo de permanencia e origem do acesso, coletados
                automaticamente por meio de cookies e ferramentas de analytics.
              </li>
              <li>
                <strong className="text-white">Dados de uso do servico:</strong> informacoes sobre avaliacoes
                do Google, respostas geradas e interacoes com a plataforma.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">3. Finalidade do tratamento</h2>
            <p className="mt-3">Utilizamos seus dados para:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Prestar e melhorar nossos servicos de gestao de reputacao;</li>
              <li>Enviar comunicacoes relacionadas ao servico contratado;</li>
              <li>Realizar analises estatisticas e de desempenho da plataforma;</li>
              <li>Cumprir obrigacoes legais e regulatorias;</li>
              <li>Personalizar sua experiencia e oferecer conteudo relevante.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">4. Cookies e tecnologias de rastreamento</h2>
            <p className="mt-3">
              Utilizamos cookies e tecnologias semelhantes, incluindo o Meta Pixel (Facebook
              Pixel), para medir a eficacia de campanhas publicitarias, entender o
              comportamento dos visitantes e otimizar nossos anuncios. Voce pode gerenciar
              suas preferencias de cookies nas configuracoes do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">5. Compartilhamento de dados</h2>
            <p className="mt-3">
              Nao vendemos seus dados pessoais. Podemos compartilha-los com:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">Prestadores de servico:</strong> empresas que nos auxiliam na
                operacao da plataforma (hospedagem, analytics, processamento de pagamentos).
              </li>
              <li>
                <strong className="text-white">Plataformas de publicidade:</strong> como Meta (Facebook/Instagram)
                para fins de medicao e otimizacao de campanhas.
              </li>
              <li>
                <strong className="text-white">Autoridades legais:</strong> quando exigido por lei ou ordem
                judicial.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">6. Seguranca dos dados</h2>
            <p className="mt-3">
              Adotamos medidas tecnicas e organizacionais adequadas para proteger seus
              dados contra acesso nao autorizado, perda, alteracao ou destruicao. No
              entanto, nenhum sistema e 100% seguro, e nao podemos garantir seguranca
              absoluta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">7. Seus direitos (LGPD)</h2>
            <p className="mt-3">
              Conforme a LGPD, voce tem direito a:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Confirmar a existencia de tratamento dos seus dados;</li>
              <li>Acessar, corrigir ou atualizar seus dados;</li>
              <li>Solicitar a anonimizacao, bloqueio ou eliminacao de dados desnecessarios;</li>
              <li>Solicitar a portabilidade dos dados;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, entre em contato conosco pelo WhatsApp ou
              e-mail informados no site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">8. Retencao de dados</h2>
            <p className="mt-3">
              Mantemos seus dados pessoais pelo tempo necessario para cumprir as
              finalidades descritas nesta politica ou conforme exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">9. Alteracoes nesta politica</h2>
            <p className="mt-3">
              Podemos atualizar esta Politica de Privacidade periodicamente. Quando
              fizermos alteracoes significativas, publicaremos a versao atualizada
              nesta pagina com a nova data de atualizacao.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white">10. Contato</h2>
            <p className="mt-3">
              Se tiver duvidas sobre esta Politica de Privacidade ou sobre o tratamento
              de seus dados, entre em contato conosco:
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
