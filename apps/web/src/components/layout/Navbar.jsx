
import {
  FiBarChart2,
  FiBookOpen,
  FiHelpCircle,
  FiHome,
  FiUser,
} from "react-icons/fi";
import { Link, useLocation } from "react-router";

const links = [
  {
    nome: "Início",
    icone: FiHome,
    destino: "/",
  },
  {
    nome: "Avaliações",
    icone: FiBookOpen,
    destino: "/avaliacoes",
  },
  {
    nome: "Desempenho",
    icone: FiBarChart2,
    destino: "/desempenho",
  },
  {
    nome: "FAQ",
    icone: FiHelpCircle,
    destino: "/faq",
  },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 border-b border-white/50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[68px] items-center justify-between gap-3 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 sm:gap-3"
            aria-label="EduQuest - Página inicial"
          >
            <strong className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7665e8] text-lg text-white">
              E
            </strong>

            <span className="text-lg font-bold text-[#29263d] sm:text-xl">
              EduQuest
            </span>
          </Link>

          {/* Perfil do estudante */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:order-3">
            <span className="hidden rounded-xl bg-[#eeeaff] px-3 py-2 text-sm font-semibold text-[#6b59df] sm:inline-flex">
              Estudante
            </span>

            <button
              type="button"
              aria-label="Perfil do estudante"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e7e3ff] bg-white text-[#6b59df] transition hover:bg-[#f5f3ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7665e8]"
            >
              <FiUser size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Navegação para desktop */}

          <ul className="hidden items-center gap-1 md:order-2 md:flex">
            {links.map(({ nome, icone: Icone, destino }) => {
              const ativo = location.pathname === destino;

              return (
                <li key={nome}>
                  <Link
                    to={destino}
                    aria-current={ativo ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${ativo
                      ? "bg-[#eeeaff] text-[#6b59df]"
                      : "text-[#625f73] hover:bg-[#f5f3ff] hover:text-[#6b59df]"
                      }`}
                  >
                    <Icone size={18} aria-hidden="true" />
                    {nome}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Navegação para celular */}
        <ul className="grid grid-cols-4 gap-1 pb-2 md:hidden">
          {links.map(({ nome, icone: Icone, destino }) => {
            const ativo = location.pathname === destino;

            return (
              <li key={nome}>
                <Link
                  to={destino}
                  aria-current={ativo ? "page" : undefined}
                  className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-center text-xs font-semibold transition ${ativo
                    ? "bg-[#eeeaff] text-[#6b59df]"
                    : "text-[#625f73] hover:bg-[#f5f3ff] hover:text-[#6b59df]"
                    }`}
                >
                  <Icone size={19} aria-hidden="true" />
                  {nome}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
