
import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFlag,
} from "react-icons/fi";

const questoesDemo = [
  {
    id: 1,
    materia: "Python",
    enunciado:
      "Qual comando é utilizado para exibir uma mensagem na tela em Python?",
    alternativas: [
      "input()",
      "print()",
      "console.log()",
      "display()",
    ],
    correta: 1,
  },
  {
    id: 2,
    materia: "Python",
    enunciado:
      "Qual tipo de dado representa um valor verdadeiro ou falso em Python?",
    alternativas: ["String", "Integer", "Boolean", "Float"],
    correta: 2,
  },
  {
    id: 3,
    materia: "Python",
    enunciado:
      "Qual estrutura é utilizada para repetir um bloco de código enquanto uma condição for verdadeira?",
    alternativas: ["if", "while", "def", "return"],
    correta: 1,
  },
];

function StudentExam() {
  const { id } = useParams();

  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [finalizada, setFinalizada] = useState(false);

  const questao = questoesDemo[questaoAtual];
  const respondidas = Object.keys(respostas).length;
  const progresso = (respondidas / questoesDemo.length) * 100;

  function selecionarResposta(indice) {
    setRespostas((atuais) => ({
      ...atuais,
      [questao.id]: indice,
    }));
  }

  function finalizarAvaliacao() {
    setFinalizada(true);
  }

  if (finalizada) {
    const acertos = questoesDemo.filter(
      (item) => respostas[item.id] === item.correta,
    ).length;
    const pontosGanhos = acertos * 10;


    return (
      <main className="min-h-screen bg-[#f6f5ff] px-4 py-10 text-[#252344]">
        <section className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <FiCheckCircle className="mx-auto mb-4 text-5xl text-violet-600" />
          <h1 className="text-2xl font-bold">Avaliação finalizada!</h1>
          <p className="mt-3 text-gray-600">
            Você concluiu a avaliação demonstrativa.
          </p>
          <p className="mt-5 text-lg font-semibold">
            Você acertou {acertos} de {questoesDemo.length} questões!
          </p>

          <div className="mt-5 rounded-xl bg-violet-50 p-5">
            <p className="text-sm text-violet-700">
              Pontos conquistados nesta avaliação
            </p>

            <p className="mt-2 text-3xl font-bold text-violet-700">
              +{pontosGanhos} pontos
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Você ganhou 10 pontos por questão correta.
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Este resultado é calculado localmente e ainda não é salvo na API.
          </p>
          <Link
            to="/avaliacoes"
            className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700"
          >
            Voltar às avaliações
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f5ff] px-4 py-6 text-[#252344] sm:px-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/avaliacoes"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-violet-700"
        >
          <FiArrowLeft />
          Voltar às avaliações
        </Link>

        <header className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-violet-700">
              EDUQUEST · AVALIAÇÃO
            </p>
            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
              Fundamentos de {questao.materia}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Avaliação demonstrativa #{id}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-xl bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
            <FiClock className="text-violet-600" />
            <span>Modo de demonstração</span>
          </div>
        </header>

        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-violet-700">
              Questão {questaoAtual + 1} de {questoesDemo.length}
            </span>
            <span className="text-sm text-gray-500">
              {respondidas} respondida(s)
            </span>
          </div>

          <div
            className="mb-8 h-2 overflow-hidden rounded-full bg-violet-100"
            role="progressbar"
            aria-valuenow={progresso}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progresso das respostas"
          >
            <div
              className="h-full rounded-full bg-violet-600 transition-all"
              style={{ width: `${progresso}%` }}
            />
          </div>

          <h2 className="text-lg font-semibold leading-relaxed sm:text-xl">
            {questao.enunciado}
          </h2>

          <div className="mt-6 space-y-3">
            {questao.alternativas.map((alternativa, indice) => {
              const selecionada = respostas[questao.id] === indice;

              return (
                <button
                  key={alternativa}
                  type="button"
                  onClick={() => selecionarResposta(indice)}
                  aria-pressed={selecionada}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${selecionada
                    ? "border-violet-600 bg-violet-50 text-violet-900"
                    : "border-gray-200 hover:border-violet-300 hover:bg-gray-50"
                    }`}
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${selecionada
                      ? "border-violet-600 bg-violet-600 text-white"
                      : "border-gray-300 text-gray-600"
                      }`}
                  >
                    {String.fromCharCode(65 + indice)}
                  </span>
                  <span>{alternativa}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-gray-100 pt-6 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                setQuestaoAtual((atual) => Math.max(0, atual - 1))
              }
              disabled={questaoAtual === 0}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiArrowLeft />
              Anterior
            </button>

            {questaoAtual < questoesDemo.length - 1 ? (
              <button
                type="button"
                onClick={() =>
                  setQuestaoAtual((atual) =>
                    Math.min(questoesDemo.length - 1, atual + 1),
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700"
              >
                Próxima questão
                <FiArrowRight />
              </button>
            ) : (
              <button
                type="button"
                onClick={finalizarAvaliacao}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700"
              >
                <FiFlag />
                Finalizar avaliação
              </button>
            )}
          </div>
        </section>

        <p className="mt-4 text-center text-xs text-gray-500">
          Protótipo com questões fictícias. O envio e a correção oficiais serão
          conectados à API posteriormente.
        </p>
      </div>
    </main>
  );
}

export default StudentExam;
