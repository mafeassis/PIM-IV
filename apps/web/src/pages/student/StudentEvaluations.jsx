
import { useState } from "react";
import { FiBookOpen, FiClock, FiSearch } from "react-icons/fi";
import Navbar from "../../components/layout/Navbar";

const avaliacoes = [
  {
    id: 1,
    materia: "C#",
    titulo: "Fundamentos de C#",
    descricao: "Teste seus conhecimentos sobre os fundamentos da linguagem.",
    prazo: "30/10/2026",
  },
  {
    id: 2,
    materia: "Python",
    titulo: "Fundamentos de Python",
    descricao: "Pratique conceitos essenciais de programação com Python.",
    prazo: "05/11/2026",
  },
  {
    id: 3,
    materia: "Desenvolvimento Web",
    titulo: "HTML, CSS e JavaScript",
    descricao: "Revise os conceitos básicos do desenvolvimento web.",
    prazo: "10/11/2026",
  },
];

function StudentEvaluations() {
  const [busca, setBusca] = useState("");

  const avaliacoesFiltradas = avaliacoes.filter((avaliacao) =>
    `${avaliacao.titulo} ${avaliacao.materia}`
      .toLowerCase()
      .includes(busca.toLowerCase()),
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#a69cf3] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="rounded-[22px] bg-white p-6 shadow-sm sm:p-8">
            <span className="inline-flex rounded-full bg-[#eeeaff] px-3 py-1 text-sm font-semibold text-[#6b59df]">
              Área do estudante
            </span>

            <h1 className="mt-4 text-3xl font-bold text-[#29263d]">
              Suas avaliações
            </h1>

            <p className="mt-2 text-[#5f5b73]">
              Consulte os questionários disponíveis e escolha uma avaliação para realizar.
            </p>
          </header>

          <section className="mt-8" aria-labelledby="lista-avaliacoes">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2
                  id="lista-avaliacoes"
                  className="text-2xl font-bold text-[#29263d]"
                >
                  Avaliações disponíveis
                </h2>
                <p className="mt-1 text-sm text-[#29263d]">
                  {avaliacoesFiltradas.length} avaliações encontradas
                </p>
              </div>

              <label className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 sm:w-80">
                <FiSearch className="shrink-0 text-[#6b59df]" aria-hidden="true" />
                <span className="sr-only">Buscar avaliação</span>
                <input
                  type="search"
                  value={busca}
                  onChange={(evento) => setBusca(evento.target.value)}
                  placeholder="Buscar por título ou matéria"
                  className="w-full bg-transparent text-sm text-[#29263d] outline-none placeholder:text-[#8b879e]"
                />
              </label>
            </div>

            {avaliacoesFiltradas.length === 0 ? (
              <p className="rounded-2xl bg-white p-6 text-[#5f5b73]">
                Nenhuma avaliação corresponde à sua busca.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {avaliacoesFiltradas.map((avaliacao) => (
                  <article
                    key={avaliacao.id}
                    className="flex flex-col rounded-[22px] bg-white p-5 shadow-[0_10px_28px_rgba(57,49,122,0.1)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eeeaff] text-xl text-[#6b59df]">
                        <FiBookOpen aria-hidden="true" />
                      </span>

                      <span className="rounded-full bg-[#eeeaff] px-3 py-1 text-xs font-semibold text-[#6b59df]">
                        {avaliacao.materia}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-[#29263d]">
                      {avaliacao.titulo}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-6 text-[#5f5b73]">
                      {avaliacao.descricao}
                    </p>

                    <p className="mt-5 flex items-center gap-2 text-sm text-[#5f5b73]">
                      <FiClock aria-hidden="true" />
                      Prazo: {avaliacao.prazo}
                    </p>

                    <button
                      type="button"
                      disabled
                      title="O acesso ao questionário será habilitado após a integração com o backend."
                      className="mt-5 w-full cursor-not-allowed rounded-xl bg-[#7665e8] px-4 py-3 font-semibold text-white opacity-70"
                    >
                      Realizar avaliação
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default StudentEvaluations;
