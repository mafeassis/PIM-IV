
import { FiAward, FiTrendingUp } from "react-icons/fi";

const estudantes = [
  { id: 1, nome: "Estudante exemplo 1", pontos: 250 },
  { id: 2, nome: "Estudante exemplo 2", pontos: 220 },
  { id: 3, nome: "Estudante exemplo 3", pontos: 180 },
];

function Leaderboard() {
  return (
    <section className="mt-8 rounded-[22px] bg-white p-5 shadow-[0_10px_28px_rgba(57,49,122,0.1)] sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eeeaff] text-xl text-[#6b59df]">
          <FiAward aria-hidden="true" />
        </span>

        <div>
          <h2 className="text-xl font-bold text-[#29263d]">
            Ranking de estudantes
          </h2>
          <p className="text-sm text-[#5f5b73]">
            Acompanhe a pontuação da comunidade.
          </p>
        </div>
      </div>

      <ol className="mt-5 divide-y divide-[#eeeaff]">
        {estudantes.map((estudante, index) => (
          <li
            key={estudante.id}
            className="flex items-center justify-between gap-3 py-4"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eeeaff] font-bold text-[#6b59df]">
                {index + 1}
              </span>

              <span className="truncate font-semibold text-[#29263d]">
                {estudante.nome}
              </span>
            </div>

            <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-[#6b59df]">
              <FiTrendingUp aria-hidden="true" />
              {estudante.pontos} pts
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Leaderboard;
