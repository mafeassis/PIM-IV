
import Navbar from "../../components/layout/Navbar";
import WelcomeSection from "../../components/student/WelcomeSection";
import EvaluationCard from "../../components/student/EvaluationCard";
import Leaderboard from "../../components/student/Leaderboard";

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

function StudentHome() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#a69cf3] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <WelcomeSection />

          <section className="mt-8" aria-labelledby="avaliacoes-heading">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  id="avaliacoes-heading"
                  className="text-2xl font-bold text-[#29263d]"
                >
                  Suas avaliações
                </h2>

                <p className="mt-1 text-sm text-[#29263d]">
                  Confira as avaliações disponíveis para você.
                </p>
              </div>

              <a
                href="/avaliacoes"
                className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#29263d] transition hover:text-white"
              >
                Ver todas
                <span aria-hidden="true">→</span>
              </a>
            </div>


            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {avaliacoes.map((avaliacao) => (
                <EvaluationCard
                  key={avaliacao.id}
                  materia={avaliacao.materia}
                  titulo={avaliacao.titulo}
                  descricao={avaliacao.descricao}
                  prazo={avaliacao.prazo}
                />
              ))}
            </div>
          </section>

          <Leaderboard />
        </div>
      </main>
    </>
  );
}

export default StudentHome;
