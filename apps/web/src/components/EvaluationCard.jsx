
function EvaluationCard({
  avaliacao,
  Icon,
  onVerResultados,
  onExcluir,
}) {
  return (
    <article
      className="group overflow-hidden rounded-[22px] bg-white shadow-[0_10px_28px_rgba(57,49,122,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(57,49,122,0.16)]"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-[#7665e8] to-[#8c7bf2] px-6 py-6 text-white">
        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <Icon name="clipboard" size={20} />
            </div>

            <p className="text-xs font-medium text-white/70">
              avaliação
            </p>

            <h2 className="mt-1 text-xl font-bold leading-tight">
              {avaliacao.titulo}
            </h2>
          </div>

          <span className="shrink-0 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
            {avaliacao.questoes} questões
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="min-h-[48px] text-sm leading-6 text-gray-500">
          {avaliacao.descricao}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#f7f6ff] px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Icon name="users" size={15} />
              tentativas
            </div>

            <p className="mt-1 font-bold">
              {avaliacao.tentativas.length}
            </p>
          </div>

          <div className="rounded-xl bg-[#f7f6ff] px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Icon name="star" size={15} />
              dificuldade
            </div>

            <p className="mt-1 font-bold">
              {avaliacao.dificuldade}
            </p>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          <button
            onClick={onVerResultados}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#7665e8] px-4 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(118,101,232,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#6958dc]"
          >
            Ver resultados
            <Icon name="arrow" size={16} />
          </button>

          <button
            onClick={onExcluir}
            aria-label={`Excluir ${avaliacao.titulo}`}
            title="Excluir avaliação"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-all hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-100 hover:text-red-600"
          >
            <Icon name="trash" size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default EvaluationCard;
