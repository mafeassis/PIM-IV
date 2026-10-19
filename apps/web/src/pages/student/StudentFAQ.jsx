
import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import Navbar from "../../components/layout/Navbar";

const perguntasFrequentes = [
  {
    pergunta: "Como acessar minhas avaliações?",
    resposta:
      "Acesse a seção Avaliações para consultar os questionários disponíveis e verificar os prazos de realização.",
  },
  {
    pergunta: "Como responder a uma avaliação?",
    resposta:
      "Selecione a avaliação desejada e siga as instruções apresentadas na tela para responder às questões.",
  },
  {
    pergunta: "Posso realizar uma avaliação mais de uma vez?",
    resposta:
      "A quantidade de tentativas depende das regras definidas para cada avaliação. Confira as orientações antes de começar.",
  },
  {
    pergunta: "Onde posso consultar minha pontuação?",
    resposta:
      "Consulte a área de desempenho ou os resultados disponibilizados para verificar sua pontuação, conforme os recursos habilitados no sistema.",
  },
  {
    pergunta: "Como funciona o ranking de estudantes?",
    resposta:
      "O ranking apresenta a classificação dos estudantes de acordo com a pontuação registrada no EduQuest.",
  },
  {
    pergunta: "O que fazer se uma avaliação não aparecer?",
    resposta:
      "Verifique se a avaliação está disponível e dentro do prazo. Se o problema continuar, entre em contato com o professor ou responsável pela plataforma.",
  },
];

function StudentFAQ() {
  const [faqAberto, setFaqAberto] = useState(null);

  return (
    <div className="min-h-screen bg-[#a69cf3]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Cabeçalho da central de ajuda */}
        <section className="mb-5 rounded-[24px] bg-white p-6 shadow-[0_12px_32px_rgba(57,49,122,0.1)] sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#7665e8]">
              <FiHelpCircle size={23} aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#7665e8]">
                Central de ajuda
              </p>

              <h1 className="text-xl font-bold text-[#29263d] sm:text-2xl">
                Perguntas frequentes
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Encontre respostas para as principais dúvidas sobre o EduQuest e
            sua jornada de aprendizagem.
          </p>
        </section>

        {/* Lista de perguntas */}
        <section
          className="space-y-3"
          aria-label="Lista de perguntas frequentes"
        >
          {perguntasFrequentes.map((item, index) => {
            const aberto = faqAberto === index;
            const respostaId = `faq-resposta-${index}`;

            return (
              <div
                key={item.pergunta}
                className="overflow-hidden rounded-[20px] bg-white shadow-[0_7px_22px_rgba(57,49,122,0.08)] transition-shadow hover:shadow-[0_10px_28px_rgba(57,49,122,0.12)]"
              >
                <button
                  type="button"
                  aria-expanded={aberto}
                  aria-controls={respostaId}
                  onClick={() => setFaqAberto(aberto ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7665e8]"
                >
                  <span className="font-semibold text-[#29263d]">
                    {item.pergunta}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eeeaff] text-[#7665e8] transition-transform ${aberto ? "rotate-180" : ""
                      }`}
                  >
                    <FiChevronDown size={16} aria-hidden="true" />
                  </span>
                </button>

                {aberto && (
                  <div
                    id={respostaId}
                    className="mx-5 border-t border-gray-100 pb-5 pt-4"
                  >
                    <p className="text-sm leading-6 text-gray-500">
                      {item.resposta}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default StudentFAQ;
