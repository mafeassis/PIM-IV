
import { createPortal } from "react-dom";
import { FiLogOut } from "react-icons/fi";

function ConfirmarSaida({ onCancelar, onConfirmar }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) {
          onCancelar();
        }
      }}
    >
      <section
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="titulo-confirmar-saida"
        aria-describedby="descricao-confirmar-saida"
        className="my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
          <FiLogOut size={26} aria-hidden="true" />
        </div>

        <h2
          id="titulo-confirmar-saida"
          className="mt-5 text-center text-xl font-bold text-[#29263d]"
        >
          Deseja realmente sair?
        </h2>

        <p
          id="descricao-confirmar-saida"
          className="mt-3 text-center text-sm leading-6 text-[#625f73]"
        >
          Tem certeza de que deseja sair da sua área de estudante?
        </p>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onCancelar}
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 font-semibold text-[#625f73] transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7665e8]"
          >
            Cancelar
          </button>

          <button
            type="button"
            autoFocus
            onClick={onConfirmar}
            className="flex-1 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Sim, sair
          </button>
        </div>
      </section>
    </div>,
    document.body
  );
}

export default ConfirmarSaida;
