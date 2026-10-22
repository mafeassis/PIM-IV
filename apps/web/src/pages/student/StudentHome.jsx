import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import WelcomeSection from "../../components/student/WelcomeSection";
import EvaluationCard from "../../components/student/EvaluationCard";
import Leaderboard from "../../components/student/Leaderboard";
import { buscarAvaliacoes } from "../../services/examService";

function formatarPrazo(data) {
  if (!data) return "Não informado";

  const dataValida = new Date(data);

  if (Number.isNaN(dataValida.getTime())) {
    return "Não informado";
  }

  return dataValida.toLocaleDateString("pt-BR");
}

function StudentHome() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarAvaliacoes() {
      try {
        // O token será conectado ao fluxo de login quando estiver disponível.
        const token = null;

        const dados = await buscarAvaliacoes(token);
        setAvaliacoes(dados);
      } catch (error) {
        setErro(error.message || "Não foi possível carregar as avaliações.");
      } finally {
        setCarregando(false);
      }
    }

    carregarAvaliacoes();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#a69cf3] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <WelcomeSection />

          <section className="mt-8" aria-labelledby="avaliacoes-heading">
            <div className="mb-5">
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

            {carregando && (
              <p className="rounded-xl bg-white p-5 text-[#29263d]" role="status">
                Carregando avaliações...
              </p>
            )}

            {!carregando && erro && (
              <div
                className="rounded-xl bg-white p-5 text-[#29263d]"
                role="alert"
              >
                <p className="font-semibold">Não foi possível exibir as avaliações.</p>
                <p className="mt-2 text-sm">{erro}</p>
              </div>
            )}

            {!carregando && !erro && avaliacoes.length === 0 && (
              <p className="rounded-xl bg-white p-5 text-[#29263d]">
                Nenhuma avaliação disponível no momento.
              </p>
            )}

            {!carregando && !erro && avaliacoes.length > 0 && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {avaliacoes.map((avaliacao) => (
                  <EvaluationCard
                    key={avaliacao.id}
                    materia={avaliacao.materia || "Avaliação"}
                    titulo={avaliacao.title}
                    descricao={avaliacao.description || "Sem descrição disponível."}
                    prazo={formatarPrazo(avaliacao.deadline)}
                  />
                ))}
              </div>
            )}
          </section>

          <Leaderboard />
        </div>
      </main>
    </>
  );
}

export default StudentHome;
