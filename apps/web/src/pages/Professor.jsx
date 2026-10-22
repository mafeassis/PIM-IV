import { useEffect, useState } from "react";
import EvaluationCard from "../components/EvaluationCard";
import StatCard from "../components/StatCard";

function Icon({ name, size = 18 }) {
  const icons = {
    home: (
      <path
        d="M3 10.5 12 3l9 7.5M5.5 9.5V21h13V9.5M9 21v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 4.5V3h6v1.5M8.5 9h7M8.5 13h7M8.5 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 6H4.5v2a3.5 3.5 0 0 0 3.5 3.5M16 6h3.5v2a3.5 3.5 0 0 1-3.5 3.5M12 13v4M8.5 21h7M10 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 9a2.6 2.6 0 1 1 4.2 2c-1 .8-1.7 1.1-1.7 2.4M12 16.8v.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    back: <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    users: (
      <>
        <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 11a3 3 0 0 0 0-6M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m7 15 3-4 3 2 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
    plus: <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
    trash: (
      <path d="M5 7h14M10 11v6M14 11v6M9 7V4h6v3M7 7l1 14h8l1-14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 2.94-.08-.02a1.7 1.7 0 0 0-1.8.5l-.05.06h-3.4l-.04-.08a1.7 1.7 0 0 0-1.55-1.02 1.7 1.7 0 0 0-.9.26l-.08.05-2.94-1.7.02-.08a1.7 1.7 0 0 0-.5-1.8l-.06-.05v-3.4l.08-.04a1.7 1.7 0 0 0 .76-2.45l-.05-.08 1.7-2.94.08.02a1.7 1.7 0 0 0 1.8-.5l.05-.06h3.4l.04.08a1.7 1.7 0 0 0 2.45.76l.08-.05 2.94 1.7-.02.08a1.7 1.7 0 0 0 .5 1.8l.06.05v3.4l-.08.04A1.7 1.7 0 0 0 19.4 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
    bell: <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    save: (
      <>
        <path d="M5 4h12l2 2v14H5V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 4v5h7V4M8 20v-6h8v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icons[name] ?? null}
    </svg>
  );
}

function Professor() {
  const [pagina, setPagina] = useState("avaliacoes");
  const [abaConfiguracao, setAbaConfiguracao] = useState("perfil");
  const [mensagemConfiguracao, setMensagemConfiguracao] = useState("");

  const [tamanhoTexto, setTamanhoTexto] = useState(() => {
    try {
      return localStorage.getItem("eduquest-tamanho-texto") || "padrao";
    } catch {
      return "padrao";
    }
  });

  useEffect(() => {
    const tamanhos = { pequeno: "14px", padrao: "16px", grande: "18px" };
    document.documentElement.style.fontSize = tamanhos[tamanhoTexto] || "16px";

    try {
      localStorage.setItem("eduquest-tamanho-texto", tamanhoTexto);
    } catch {
      // a preferência continua funcionando durante esta sessão
    }

    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [tamanhoTexto]);

  const [perfil, setPerfil] = useState(() => {
    try {
      const salvo = localStorage.getItem("eduquest-perfil-professor");
      return salvo
        ? JSON.parse(salvo)
        : { nome: "Professor", email: "professor@eduquest.com", disciplina: "Tecnologia", instituicao: "" };
    } catch {
      return { nome: "Professor", email: "professor@eduquest.com", disciplina: "Tecnologia", instituicao: "" };
    }
  });

  const [preferencias, setPreferencias] = useState(() => {
    try {
      const salvo = localStorage.getItem("eduquest-preferencias");
      return salvo ? JSON.parse(salvo) : { idioma: "Português (Brasil)", itensPorPagina: "10", mostrarDicas: true };
    } catch {
      return { idioma: "Português (Brasil)", itensPorPagina: "10", mostrarDicas: true };
    }
  });

  const [notificacoes, setNotificacoes] = useState(() => {
    try {
      const salvo = localStorage.getItem("eduquest-notificacoes");
      return salvo ? JSON.parse(salvo) : { novasTentativas: true, lembretes: true, novidades: false };
    } catch {
      return { novasTentativas: true, lembretes: true, novidades: false };
    }
  });

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState(null);
  const [faqAberto, setFaqAberto] = useState(null);
  const [modoCriacao, setModoCriacao] = useState(false);
  const [avaliacaoParaExcluir, setAvaliacaoParaExcluir] = useState(null);

  const [avaliacoes, setAvaliacoes] = useState([
    {
      id: 1,
      titulo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Avaliação sobre conceitos de desenvolvimento de sistemas.",
      questoes: 10,
      categoria: "Tecnologia",
      dificuldade: "Médio",
      tentativas: [
        { aluno: "Maria Silva", tentativa: 1, pontuacao: 9.0, data: "30/09/2026" },
        { aluno: "João Santos", tentativa: 1, pontuacao: 7.5, data: "29/09/2026" },
        { aluno: "Ana Oliveira", tentativa: 1, pontuacao: 8.5, data: "29/09/2026" },
        { aluno: "João Santos", tentativa: 2, pontuacao: 9.0, data: "30/09/2026" },
      ],
    },
    {
      id: 2,
      titulo: "Fundamentos de JavaScript",
      descricao: "Avaliação sobre lógica e programação em JavaScript.",
      questoes: 15,
      categoria: "Programação",
      dificuldade: "Difícil",
      tentativas: [
        { aluno: "Maria Silva", tentativa: 1, pontuacao: 8.0, data: "28/09/2026" },
        { aluno: "Carlos Souza", tentativa: 1, pontuacao: 6.5, data: "28/09/2026" },
        { aluno: "Ana Oliveira", tentativa: 1, pontuacao: 9.5, data: "27/09/2026" },
      ],
    },
  ]);

  const [novaAvaliacao, setNovaAvaliacao] = useState({
    titulo: "",
    descricao: "",
    categoria: "Tecnologia",
    dificuldade: "Médio",
  });

  // banco de questões demonstrativo; na integração, estes dados virão de GET /questions.
  const bancoQuestoes = [
    { id: "q-capital-brasil", enunciado: "Qual é a capital do Brasil?", alternativas: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correta: 2, categoria: "Conhecimentos gerais", dificuldade: "Fácil" },
    { id: "q-html", enunciado: "Qual linguagem é utilizada para estruturar o conteúdo de uma página web?", alternativas: ["CSS", "HTML", "SQL", "Python"], correta: 1, categoria: "Desenvolvimento Web", dificuldade: "Fácil" },
    { id: "q-css", enunciado: "Qual é a principal função do CSS?", alternativas: ["Armazenar dados", "Criar consultas", "Estilizar páginas web", "Executar código no servidor"], correta: 2, categoria: "Desenvolvimento Web", dificuldade: "Fácil" },
    { id: "q-js", enunciado: "Qual recurso do JavaScript permite repetir um bloco de código enquanto uma condição for verdadeira?", alternativas: ["while", "class", "import", "return"], correta: 0, categoria: "Programação", dificuldade: "Médio" },
    { id: "q-sql-pk", enunciado: "Qual é a finalidade de uma chave primária em uma tabela?", alternativas: ["Permitir valores duplicados", "Identificar cada registro de forma única", "Excluir automaticamente registros", "Ordenar os resultados"], correta: 1, categoria: "Banco de Dados", dificuldade: "Médio" },
    { id: "q-algoritmo", enunciado: "O que é um algoritmo?", alternativas: ["Uma linguagem de marcação", "Um componente físico do computador", "Uma sequência de passos para resolver um problema", "Um tipo de banco de dados"], correta: 2, categoria: "Programação", dificuldade: "Fácil" },
  ];

  const [questoesSelecionadas, setQuestoesSelecionadas] = useState([]);
  const [buscaQuestao, setBuscaQuestao] = useState("");

  const totalTentativas = avaliacoes.reduce((total, avaliacao) => total + avaliacao.tentativas.length, 0);
  const todasPontuacoes = avaliacoes.flatMap((avaliacao) => avaliacao.tentativas.map((tentativa) => tentativa.pontuacao));
  const mediaGeral = todasPontuacoes.length
    ? todasPontuacoes.reduce((total, nota) => total + nota, 0) / todasPontuacoes.length
    : 0;

  const mudarPagina = (novaPagina) => {
    setPagina(novaPagina);
    setAvaliacaoSelecionada(null);
    setModoCriacao(false);
  };

  const abrirCriacao = () => {
    setModoCriacao(true);
    setAvaliacaoSelecionada(null);
    setPagina("avaliacoes");
  };

  const voltarParaAvaliacoes = () => {
    setModoCriacao(false);
    setAvaliacaoSelecionada(null);
  };

  const abrirConfirmacaoExclusao = (avaliacao) => setAvaliacaoParaExcluir(avaliacao);
  const cancelarExclusao = () => setAvaliacaoParaExcluir(null);

  const excluirAvaliacao = () => {
    if (!avaliacaoParaExcluir) return;

    setAvaliacoes((atuais) => atuais.filter((avaliacao) => avaliacao.id !== avaliacaoParaExcluir.id));
    if (avaliacaoSelecionada?.id === avaliacaoParaExcluir.id) setAvaliacaoSelecionada(null);
    setAvaliacaoParaExcluir(null);
  };

  const alternarQuestaoSelecionada = (id) => {
    setQuestoesSelecionadas((selecionadas) =>
      selecionadas.includes(id)
        ? selecionadas.filter((questaoId) => questaoId !== id)
        : [...selecionadas, id]
    );
  };

  const salvarAvaliacao = () => {
    if (!novaAvaliacao.titulo.trim()) {
      alert("Digite um título para a avaliação.");
      return;
    }
    if (!novaAvaliacao.descricao.trim()) {
      alert("Digite uma descrição para a avaliação.");
      return;
    }
    if (questoesSelecionadas.length === 0) {
      alert("Selecione pelo menos uma questão para a avaliação.");
      return;
    }

    const questoesDaAvaliacao = bancoQuestoes.filter((questao) => questoesSelecionadas.includes(questao.id));
    const nova = {
      id: Date.now(),
      titulo: novaAvaliacao.titulo.trim(),
      descricao: novaAvaliacao.descricao.trim(),
      questoes: questoesDaAvaliacao.length,
      questoesSelecionadas: questoesDaAvaliacao,
      categoria: novaAvaliacao.categoria,
      dificuldade: novaAvaliacao.dificuldade,
      tentativas: [],
    };

    setAvaliacoes((atuais) => [nova, ...atuais]);
    setNovaAvaliacao({ titulo: "", descricao: "", categoria: "Tecnologia", dificuldade: "Médio" });
    setQuestoesSelecionadas([]);
    setBuscaQuestao("");
    setModoCriacao(false);
    setPagina("avaliacoes");
    alert("Avaliação criada com sucesso!");
  };

  const salvarNoNavegador = (chave, valor, mensagem) => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
      setMensagemConfiguracao(mensagem);
    } catch {
      setMensagemConfiguracao("Não foi possível salvar os dados neste navegador.");
    }
  };

  const questoesFiltradas = bancoQuestoes.filter((questao) =>
    `${questao.enunciado} ${questao.categoria}`.toLocaleLowerCase("pt-BR").includes(buscaQuestao.toLocaleLowerCase("pt-BR").trim())
  );

  return (
    <div className="min-h-screen bg-[#a69cf3] text-[#29263d]">
      {/* navbar */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/95 shadow-[0_4px_20px_rgba(49,42,105,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <button type="button" onClick={() => mudarPagina("inicio")} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7665e8] text-sm font-bold text-white shadow-[0_5px_14px_rgba(118,101,232,0.35)]">E</span>
            <span className="text-lg font-bold tracking-tight">EduQuest</span>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["inicio", "Início", "home"],
              ["avaliacoes", "Avaliações", "clipboard"],
              ["leaderboard", "Leaderboard", "trophy"],
              ["faq", "FAQ", "help"],
              ["configuracoes", "Configurações", "settings"],
            ].map(([id, label, icon]) => (
              <button type="button" key={id} onClick={() => mudarPagina(id)} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${pagina === id ? "bg-[#eeeaff] text-[#6b59df] shadow-sm" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`}>
                <Icon name={icon} size={16} />{label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-[#eeeaff] px-3 py-1.5 text-xs font-semibold text-[#6b59df] sm:block">
              {perfil.nome.trim() || "Professor"}
            </span>
            <div
              title={perfil.nome.trim() || "Professor"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8574f0] to-[#6755d7] text-xs font-bold text-white shadow-[0_5px_14px_rgba(118,101,232,0.3)]"
            >
              {perfil.nome
                .trim()
                .split(/\s+/)
                .slice(0, 2)
                .map((nome) => nome[0])
                .join("")
                .toUpperCase() || "PR"}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        {/* início */}
        {pagina === "inicio" && (
          <section className="space-y-5">
            <div className="overflow-hidden rounded-[24px] bg-white p-7 shadow-[0_12px_35px_rgba(57,49,122,0.12)]">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#eeeaff] px-3 py-1.5 text-xs font-semibold text-[#6b59df]"><span className="h-1.5 w-1.5 rounded-full bg-[#7665e8]" />painel do professor</div>
                  <h1 className="text-3xl font-bold tracking-tight">Bem-vindo ao EduQuest!</h1>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">Acompanhe suas avaliações e visualize o desempenho dos alunos em um só lugar.</p>
                </div>
                <button type="button" onClick={() => mudarPagina("avaliacoes")} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7665e8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(118,101,232,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#6958dc]"><Icon name="clipboard" size={17} />Ver avaliações<Icon name="arrow" size={16} /></button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { titulo: "Avaliações", valor: avaliacoes.length, icon: "clipboard" },
                { titulo: "Tentativas realizadas", valor: totalTentativas, icon: "users" },
                { titulo: "Média geral", valor: mediaGeral.toFixed(1), icon: "chart" },
              ].map((item) => (
                <div key={item.titulo} className="rounded-[22px] bg-white p-5 shadow-[0_9px_25px_rgba(57,49,122,0.1)] transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between"><div><p className="text-sm font-medium text-gray-500">{item.titulo}</p><p className="mt-2 text-3xl font-bold tracking-tight">{item.valor}</p></div><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eeeaff] text-[#7665e8]"><Icon name={item.icon} size={20} /></span></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* criação da avaliação */}
        {pagina === "avaliacoes" && modoCriacao && (
          <section>
            <button type="button" onClick={voltarParaAvaliacoes} className="mb-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-[0_6px_18px_rgba(57,49,122,0.08)] transition hover:-translate-x-0.5 hover:text-[#7665e8]"><Icon name="back" size={16} />Voltar para avaliações</button>
            <div className="mb-5 rounded-[24px] bg-white p-7 shadow-[0_12px_32px_rgba(57,49,122,0.1)]">
              <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#7665e8]"><Icon name="plus" size={24} /></div><div><p className="text-xs font-semibold uppercase tracking-wide text-[#7665e8]">professor</p><h1 className="text-2xl font-bold">Criar avaliação</h1><p className="mt-1 text-sm text-gray-500">Crie uma nova avaliação para seus alunos.</p></div></div>
            </div>
            <div className="space-y-5">
              <div className="rounded-[22px] bg-white p-6 shadow-[0_10px_28px_rgba(57,49,122,0.1)]">
                <div className="mb-5"><h2 className="text-lg font-bold">Informações da avaliação</h2><p className="mt-1 text-sm text-gray-500">Preencha as informações básicas antes de adicionar as questões.</p></div>
                <div className="grid gap-5">
                  <div><label htmlFor="titulo-avaliacao" className="mb-2 block text-sm font-semibold">Título da avaliação</label><input id="titulo-avaliacao" type="text" value={novaAvaliacao.titulo} onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, titulo: e.target.value })} placeholder="Ex.: Fundamentos de HTML e CSS" className="w-full rounded-xl border border-gray-200 bg-[#faf9ff] px-4 py-3 text-sm outline-none transition focus:border-[#7665e8] focus:bg-white focus:ring-4 focus:ring-[#7665e8]/10" /></div>
                  <div><label htmlFor="descricao-avaliacao" className="mb-2 block text-sm font-semibold">Descrição</label><textarea id="descricao-avaliacao" rows={3} value={novaAvaliacao.descricao} onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, descricao: e.target.value })} placeholder="Descreva brevemente o conteúdo da avaliação." className="w-full resize-none rounded-xl border border-gray-200 bg-[#faf9ff] px-4 py-3 text-sm outline-none transition focus:border-[#7665e8] focus:bg-white focus:ring-4 focus:ring-[#7665e8]/10" /></div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div><label htmlFor="categoria-avaliacao" className="mb-2 block text-sm font-semibold">Categoria</label><select id="categoria-avaliacao" value={novaAvaliacao.categoria} onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, categoria: e.target.value })} className="w-full rounded-xl border border-gray-200 bg-[#faf9ff] px-4 py-3 text-sm outline-none transition focus:border-[#7665e8] focus:ring-4 focus:ring-[#7665e8]/10"><option>Tecnologia</option><option>Programação</option><option>Banco de Dados</option><option>Desenvolvimento Web</option><option>Outros</option><option>Conhecimentos gerais</option></select></div>
                    <div><label htmlFor="dificuldade-avaliacao" className="mb-2 block text-sm font-semibold">Dificuldade</label><select id="dificuldade-avaliacao" value={novaAvaliacao.dificuldade} onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, dificuldade: e.target.value })} className="w-full rounded-xl border border-gray-200 bg-[#faf9ff] px-4 py-3 text-sm outline-none transition focus:border-[#7665e8] focus:ring-4 focus:ring-[#7665e8]/10"><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] bg-white p-6 shadow-[0_10px_28px_rgba(57,49,122,0.1)]">
                <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><h2 className="text-lg font-bold">Selecionar questões</h2><p className="mt-1 text-sm text-gray-500">Escolha as perguntas já cadastradas no banco de questões do EduQuest.</p></div><span className="w-fit shrink-0 rounded-full bg-[#eeeaff] px-3 py-1.5 text-xs font-bold text-[#6b59df]">{questoesSelecionadas.length} selecionada{questoesSelecionadas.length === 1 ? "" : "s"}</span></div>
                <div className="mb-4"><label htmlFor="buscar-questao" className="mb-2 block text-sm font-semibold">Buscar questão</label><input id="buscar-questao" type="search" value={buscaQuestao} onChange={(e) => setBuscaQuestao(e.target.value)} placeholder="Pesquise pelo enunciado ou categoria..." className="w-full rounded-xl border border-gray-200 bg-[#faf9ff] px-4 py-3 text-sm outline-none transition focus:border-[#7665e8] focus:bg-white focus:ring-4 focus:ring-[#7665e8]/10" /></div>
                <div className="space-y-3">
                  {questoesFiltradas.map((questao) => {
                    const selecionada = questoesSelecionadas.includes(questao.id);
                    return (
                      <label key={questao.id} className={`block cursor-pointer rounded-2xl border p-4 transition ${selecionada ? "border-[#7665e8] bg-[#f5f2ff] ring-2 ring-[#7665e8]/10" : "border-gray-200 bg-white hover:border-[#c9c2fa] hover:bg-[#faf9ff]"}`}>
                        <span className="flex items-start gap-3">
                          <input type="checkbox" checked={selecionada} onChange={() => alternarQuestaoSelecionada(questao.id)} className="mt-1 h-4 w-4 shrink-0 accent-[#7665e8]" />
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2"><span className="font-semibold text-[#29263d]">{questao.enunciado}</span><span className="rounded-full bg-[#eeeaff] px-2.5 py-1 text-[11px] font-semibold text-[#6b59df]">{questao.categoria}</span><span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">{questao.dificuldade}</span></span>
                            <span className="mt-3 grid gap-2 sm:grid-cols-2">
                              {questao.alternativas.map((alternativa, index) => <span key={alternativa} className={`rounded-lg border px-3 py-2 text-xs ${selecionada && index === questao.correta ? "border-[#b9afef] bg-white text-[#5e4acb]" : "border-gray-100 bg-white text-gray-600"}`}><span className="mr-2 font-bold">{String.fromCharCode(65 + index)}.</span>{alternativa}</span>)}
                            </span>
                          </span>
                        </span>
                      </label>
                    );
                  })}
                  {questoesFiltradas.length === 0 && <div className="rounded-xl border border-dashed border-gray-300 px-4 py-8 text-center"><p className="text-sm font-semibold text-gray-700">Nenhuma questão encontrada</p><p className="mt-1 text-sm text-gray-500">Tente buscar por outro termo.</p></div>}
                </div>
                <p className="mt-4 text-xs leading-5 text-gray-500">Você pode selecionar mais de uma questão. O banco exibido aqui é demonstrativo e será conectado à API do sistema na etapa de integração.</p>
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button type="button" onClick={voltarParaAvaliacoes} className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-600 shadow-[0_6px_18px_rgba(57,49,122,0.08)] transition hover:bg-gray-50">Cancelar</button><button type="button" onClick={salvarAvaliacao} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7665e8] px-6 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(118,101,232,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#6958dc]"><Icon name="save" size={17} />Salvar avaliação</button></div>
            </div>
          </section>
        )}

        {/* lista de avaliações */}
        {pagina === "avaliacoes" && !modoCriacao && !avaliacaoSelecionada && (
          <section>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#6b59df]"><Icon name="clipboard" size={15} />professor</div><h1 className="text-3xl font-bold tracking-tight">Minhas avaliações</h1><p className="mt-2 text-sm text-gray-500">Visualize suas avaliações e acompanhe as tentativas dos alunos.</p></div><button type="button" onClick={abrirCriacao} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7665e8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(118,101,232,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#6958dc]"><Icon name="plus" size={17} />Criar avaliação</button></div>
            <div className="grid gap-5 md:grid-cols-2">
              {avaliacoes.map((avaliacao) => <EvaluationCard key={avaliacao.id} avaliacao={avaliacao} Icon={Icon} onVerResultados={() => setAvaliacaoSelecionada(avaliacao)} onExcluir={() => abrirConfirmacaoExclusao(avaliacao)} />)}
            </div>
          </section>
        )}

        {/* resultados */}
        {pagina === "avaliacoes" && !modoCriacao && avaliacaoSelecionada && (
          <section>
            <button type="button" onClick={() => setAvaliacaoSelecionada(null)} className="mb-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-[0_6px_18px_rgba(57,49,122,0.08)] transition hover:-translate-x-0.5 hover:text-[#7665e8]"><Icon name="back" size={16} />Voltar para avaliações</button>
            <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_32px_rgba(57,49,122,0.1)]"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#7665e8]"><Icon name="chart" size={15} />resultados da avaliação</div><h1 className="text-2xl font-bold">{avaliacaoSelecionada.titulo}</h1><p className="mt-2 text-sm text-gray-500">Confira as tentativas e pontuações dos alunos.</p></div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#7665e8]"><Icon name="chart" size={26} /></div></div></div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ["Questões", avaliacaoSelecionada.questoes, "clipboard"],
                ["Tentativas", avaliacaoSelecionada.tentativas.length, "users"],
                ["Média", avaliacaoSelecionada.tentativas.length ? (avaliacaoSelecionada.tentativas.reduce((total, tentativa) => total + tentativa.pontuacao, 0) / avaliacaoSelecionada.tentativas.length).toFixed(1) : "-", "chart"],
              ].map(([titulo, valor, icon]) => <div key={titulo} className="rounded-[20px] bg-white p-5 shadow-[0_8px_24px_rgba(57,49,122,0.09)]"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{titulo}</p><p className="mt-1 text-2xl font-bold">{valor}</p></div><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eeeaff] text-[#7665e8]"><Icon name={icon} size={18} /></span></div></div>)}
            </div>
            <div className="mt-5 overflow-hidden rounded-[22px] bg-white shadow-[0_10px_28px_rgba(57,49,122,0.1)]">
              <div className="border-b px-6 py-5"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eeeaff] text-[#7665e8]"><Icon name="users" size={19} /></div><div><h2 className="font-bold">Tentativas dos alunos</h2><p className="mt-0.5 text-xs text-gray-500">Todos os resultados registrados nesta avaliação.</p></div></div></div>
              {avaliacaoSelecionada.tentativas.length === 0 ? (
                <div className="px-6 py-12 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#7665e8]"><Icon name="users" size={21} /></div><h3 className="mt-4 font-bold">Nenhuma tentativa ainda</h3><p className="mt-1 text-sm text-gray-500">Os resultados dos alunos aparecerão aqui quando eles realizarem a avaliação.</p></div>
              ) : (
                <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-[#f7f6ff]"><tr><th className="px-6 py-4 text-left font-semibold text-gray-600">Aluno</th><th className="px-6 py-4 text-left font-semibold text-gray-600">Tentativa</th><th className="px-6 py-4 text-left font-semibold text-gray-600">Data</th><th className="px-6 py-4 text-left font-semibold text-gray-600">Pontuação</th></tr></thead><tbody>{avaliacaoSelecionada.tentativas.map((tentativa, index) => <tr key={`${tentativa.aluno}-${tentativa.tentativa}-${index}`} className="border-t border-gray-100 transition-colors hover:bg-[#faf9ff]"><td className="px-6 py-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8a79ef] to-[#6958d9] text-xs font-bold text-white">{tentativa.aluno.split(" ").map((nome) => nome[0]).slice(0, 2).join("")}</div><span className="font-semibold">{tentativa.aluno}</span></div></td><td className="px-6 py-4 text-gray-500"><span className="inline-flex items-center gap-1.5"><Icon name="clock" size={15} />{tentativa.tentativa}ª tentativa</span></td><td className="px-6 py-4 text-gray-500">{tentativa.data}</td><td className="px-6 py-4"><span className={`inline-flex min-w-[52px] justify-center rounded-full px-3 py-1.5 text-xs font-bold ${tentativa.pontuacao >= 8 ? "bg-[#dcf6df] text-[#31933b]" : tentativa.pontuacao >= 6 ? "bg-[#fff0d4] text-[#c27a00]" : "bg-[#ffe1e1] text-[#d93636]"}`}>{tentativa.pontuacao.toFixed(1)}</span></td></tr>)}</tbody></table></div>
              )}
            </div>
          </section>
        )}

        {/* leaderboard */}
        {pagina === "leaderboard" && (
          <section>
            <div className="mb-5 rounded-[24px] bg-white p-7 shadow-[0_12px_32px_rgba(57,49,122,0.1)]"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0d4] text-[#e49a17]"><Icon name="trophy" size={23} /></div><div><p className="text-xs font-semibold uppercase tracking-wide text-[#7665e8]">desempenho</p><h1 className="text-2xl font-bold">Leaderboard</h1></div></div><p className="mt-3 text-sm text-gray-500">Acompanhe o desempenho dos alunos nas avaliações.</p></div>
            <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_10px_28px_rgba(57,49,122,0.1)]">{[["Maria Silva", "9,4"], ["Ana Oliveira", "9,1"], ["João Santos", "8,7"], ["Carlos Souza", "7,8"]].map((aluno, index) => <div key={aluno[0]} className="flex items-center justify-between border-b border-gray-100 px-6 py-5 transition hover:bg-[#faf9ff]"><div className="flex items-center gap-4"><span className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? "bg-[#fff0d4] text-[#d8900f]" : index === 1 ? "bg-[#eeeaff] text-[#7665e8]" : "bg-gray-100 text-gray-500"}`}>{index + 1}</span><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8a79ef] to-[#6958d9] text-xs font-bold text-white">{aluno[0].split(" ").map((nome) => nome[0]).join("")}</div><span className="font-semibold">{aluno[0]}</span></div><span className="rounded-full bg-[#eeeaff] px-3 py-1.5 text-sm font-bold text-[#6b59df]">{aluno[1]}</span></div>)}</div>
          </section>
        )}

        {/* configurações */}
        {pagina === "configuracoes" && (
          <section className="space-y-5">
            <div className="rounded-[24px] bg-white p-7 shadow-[0_12px_32px_rgba(57,49,122,0.1)]"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#7665e8]"><Icon name="settings" size={23} /></div><div><p className="text-xs font-semibold uppercase tracking-wide text-[#7665e8]">sua conta</p><h1 className="text-2xl font-bold">Configurações</h1></div></div><p className="mt-3 text-sm text-gray-500">Personalize seu perfil e escolha como deseja usar o EduQuest.</p></div>
            {mensagemConfiguracao && <div role="status" className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"><span>{mensagemConfiguracao}</span><button type="button" onClick={() => setMensagemConfiguracao("")} aria-label="Fechar mensagem" className="ml-3 text-emerald-800">✕</button></div>}
            <div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
              <aside className="h-fit rounded-[22px] bg-white p-3 shadow-[0_8px_24px_rgba(57,49,122,0.08)]">{[["perfil", "Perfil", "users"], ["preferencias", "Preferências", "settings"], ["notificacoes", "Notificações", "bell"], ["seguranca", "Segurança", "shield"]].map(([id, label, icon]) => <button type="button" key={id} onClick={() => { setAbaConfiguracao(id); setMensagemConfiguracao(""); }} className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${abaConfiguracao === id ? "bg-[#eeeaff] text-[#6b59df]" : "text-gray-600 hover:bg-gray-50"}`}><Icon name={icon} size={18} />{label}</button>)}</aside>
              <div className="rounded-[22px] bg-white p-6 shadow-[0_8px_24px_rgba(57,49,122,0.08)] sm:p-8">
                {abaConfiguracao === "perfil" && <form onSubmit={(e) => { e.preventDefault(); if (!perfil.nome.trim() || !perfil.email.trim()) { setMensagemConfiguracao("Preencha seu nome e e-mail."); return; } salvarNoNavegador("eduquest-perfil-professor", perfil, "Perfil salvo neste navegador."); }}>
                  <h2 className="text-xl font-bold">Informações do perfil</h2><p className="mt-1 text-sm text-gray-500">Esses dados ajudam a identificar sua conta no sistema.</p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-gray-700">Nome completo<input required value={perfil.nome} onChange={(e) => setPerfil({ ...perfil, nome: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none transition focus:border-[#8574f0] focus:ring-4 focus:ring-[#eeeaff]" placeholder="Seu nome" /></label>
                    <label className="block text-sm font-semibold text-gray-700">E-mail<input required type="email" value={perfil.email} onChange={(e) => setPerfil({ ...perfil, email: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none transition focus:border-[#8574f0] focus:ring-4 focus:ring-[#eeeaff]" placeholder="voce@exemplo.com" /></label>
                    <label className="block text-sm font-semibold text-gray-700">Área / disciplina<input value={perfil.disciplina} onChange={(e) => setPerfil({ ...perfil, disciplina: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#8574f0] focus:ring-4 focus:ring-[#eeeaff]" placeholder="Ex.: Tecnologia" /></label>
                    <label className="block text-sm font-semibold text-gray-700">Instituição<input value={perfil.instituicao} onChange={(e) => setPerfil({ ...perfil, instituicao: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#8574f0] focus:ring-4 focus:ring-[#eeeaff]" placeholder="Nome da instituição" /></label>
                  </div>
                  <div className="mt-7 flex justify-end"><button type="submit" className="rounded-xl bg-[#7665e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6958dc]">Salvar perfil</button></div>
                </form>}

                {abaConfiguracao === "preferencias" && <form onSubmit={(e) => { e.preventDefault(); salvarNoNavegador("eduquest-preferencias", preferencias, "Preferências salvas neste navegador."); }}>
                  <h2 className="text-xl font-bold">Preferências do sistema</h2><p className="mt-1 text-sm text-gray-500">Ajuste algumas opções de exibição da plataforma.</p>
                  <div className="mt-6 space-y-6">
                    <label className="block text-sm font-semibold text-gray-700">Idioma da interface<select value={preferencias.idioma} onChange={(e) => setPreferencias({ ...preferencias, idioma: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#8574f0] sm:max-w-md"><option>Português (Brasil)</option><option>English</option><option>Español</option></select><span className="mt-1 block text-xs font-normal text-gray-400">A seleção fica salva, mas a tradução completa ainda depende de implementação.</span></label>
                    <div className="rounded-2xl border border-[#eeeaff] p-4 sm:max-w-xl"><label className="block text-sm font-semibold text-gray-700" htmlFor="tamanho-texto">Acessibilidade: tamanho do texto</label><p className="mt-1 text-sm font-normal text-gray-500">Escolha o tamanho mais confortável para ler. A alteração se aplica à interface do EduQuest.</p><div className="mt-4 grid grid-cols-3 gap-2" role="group" aria-label="Tamanho do texto">{[["pequeno", "Pequeno", "text-sm"], ["padrao", "Padrão", "text-base"], ["grande", "Grande", "text-lg"]].map(([valor, rotulo, classe]) => <button type="button" key={valor} aria-pressed={tamanhoTexto === valor} onClick={() => setTamanhoTexto(valor)} className={`rounded-xl border px-3 py-3 font-semibold transition ${classe} ${tamanhoTexto === valor ? "border-[#7665e8] bg-[#eeeaff] text-[#6b59df] ring-2 ring-[#eeeaff]" : "border-gray-200 text-gray-600 hover:border-[#c9c1ff] hover:bg-gray-50"}`}>{rotulo}</button>)}</div><p className="mt-3 text-xs font-normal text-gray-400">Sua escolha fica salva neste navegador e é aplicada automaticamente.</p></div>
                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-100 p-4"><input type="checkbox" checked={preferencias.mostrarDicas} onChange={(e) => setPreferencias({ ...preferencias, mostrarDicas: e.target.checked })} className="mt-1 h-4 w-4 accent-[#7665e8]" /><span><span className="block text-sm font-semibold">Exibir dicas de utilização</span><span className="mt-1 block text-sm font-normal text-gray-500">Permite manter dicas e orientações visíveis quando disponíveis.</span></span></label>
                  </div><div className="mt-7 flex justify-end"><button type="submit" className="rounded-xl bg-[#7665e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6958dc]">Salvar preferências</button></div>
                </form>}

                {abaConfiguracao === "notificacoes" && <form onSubmit={(e) => { e.preventDefault(); salvarNoNavegador("eduquest-notificacoes", notificacoes, "Preferências de notificação salvas neste navegador."); }}>
                  <h2 className="text-xl font-bold">Notificações</h2><p className="mt-1 text-sm text-gray-500">Escolha quais avisos gostaria de receber.</p>
                  <div className="mt-6 divide-y divide-gray-100">{[["novasTentativas", "Novas tentativas", "Avisar quando alunos concluírem avaliações."], ["lembretes", "Lembretes de avaliações", "Receber lembretes sobre atividades e avaliações."], ["novidades", "Novidades do EduQuest", "Receber informações sobre atualizações da plataforma."]].map(([id, titulo, descricao]) => <label key={id} className="flex cursor-pointer items-center justify-between gap-4 py-5"><span><span className="block text-sm font-semibold">{titulo}</span><span className="mt-1 block text-sm text-gray-500">{descricao}</span></span><input type="checkbox" checked={Boolean(notificacoes[id])} onChange={(e) => setNotificacoes({ ...notificacoes, [id]: e.target.checked })} className="h-5 w-5 shrink-0 accent-[#7665e8]" /></label>)}</div>
                  <div className="mt-5 flex justify-end"><button type="submit" className="rounded-xl bg-[#7665e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6958dc]">Salvar notificações</button></div>
                </form>}

                {abaConfiguracao === "seguranca" && <form onSubmit={(e) => { e.preventDefault(); if (!senhaAtual || !novaSenha || !confirmarSenha) { setMensagemConfiguracao("Preencha todos os campos de senha."); return; } if (novaSenha.length < 8) { setMensagemConfiguracao("A nova senha deve ter pelo menos 8 caracteres."); return; } if (novaSenha !== confirmarSenha) { setMensagemConfiguracao("A confirmação não corresponde à nova senha."); return; } setMensagemConfiguracao("Validação concluída. A troca real de senha precisa ser conectada ao backend."); setSenhaAtual(""); setNovaSenha(""); setConfirmarSenha(""); }}>
                  <h2 className="text-xl font-bold">Segurança da conta</h2><p className="mt-1 text-sm text-gray-500">Mantenha suas credenciais protegidas.</p>
                  <div className="mt-6 space-y-5 sm:max-w-md">
                    <label className="block text-sm font-semibold text-gray-700">Senha atual<input required type="password" value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)} autoComplete="current-password" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#8574f0] focus:ring-4 focus:ring-[#eeeaff]" placeholder="Digite a senha atual" /></label>
                    <label className="block text-sm font-semibold text-gray-700">Nova senha<input required type="password" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} autoComplete="new-password" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#8574f0] focus:ring-4 focus:ring-[#eeeaff]" placeholder="Mínimo de 8 caracteres" /></label>
                    <label className="block text-sm font-semibold text-gray-700">Confirmar nova senha<input required type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} autoComplete="new-password" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#8574f0] focus:ring-4 focus:ring-[#eeeaff]" placeholder="Digite novamente a nova senha" /></label>
                  </div>
                  <div className="mt-7 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">A tela valida os campos, mas ainda não altera uma senha real. Isso exige autenticação e integração segura com o servidor.</div><div className="mt-6 flex justify-end"><button type="submit" className="rounded-xl bg-[#7665e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6958dc]">Validar alteração</button></div>
                </form>}
              </div>
            </div>
          </section>
        )}

        {/* faq */}
        {pagina === "faq" && (
          <section>
            <div className="mb-5 rounded-[24px] bg-white p-7 shadow-[0_12px_32px_rgba(57,49,122,0.1)]"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#7665e8]"><Icon name="help" size={23} /></div><div><p className="text-xs font-semibold uppercase tracking-wide text-[#7665e8]">central de ajuda</p><h1 className="text-2xl font-bold">Perguntas frequentes</h1></div></div><p className="mt-3 text-sm text-gray-500">Encontre respostas para as principais dúvidas sobre o EduQuest.</p></div>
            <div className="space-y-3">{[
              { pergunta: "Como visualizar os resultados de uma avaliação?", resposta: "Acesse Avaliações e selecione a avaliação desejada para visualizar as tentativas e pontuações dos alunos." },
              { pergunta: "Onde vejo as tentativas dos alunos?", resposta: "Os resultados ficam disponíveis dentro da avaliação selecionada." },
              { pergunta: "O que aparece nos resultados?", resposta: "São apresentados o aluno, número da tentativa, data e pontuação obtida." },
            ].map((item, index) => {
              const aberto = faqAberto === index;
              return <button type="button" key={item.pergunta} aria-expanded={aberto} onClick={() => setFaqAberto(aberto ? null : index)} className="w-full rounded-[20px] bg-white p-5 text-left shadow-[0_7px_22px_rgba(57,49,122,0.08)] transition-all hover:shadow-[0_10px_28px_rgba(57,49,122,0.12)]"><div className="flex items-center justify-between gap-4"><span className="font-semibold">{item.pergunta}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eeeaff] text-[#7665e8] transition-transform ${aberto ? "rotate-180" : ""}`}><Icon name="chevron" size={16} /></span></div>{aberto && <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-6 text-gray-500">{item.resposta}</p>}</button>;
            })}</div>
          </section>
        )}

        {/* confirmação de exclusão */}
        {avaliacaoParaExcluir && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#29263d]/45 p-4 backdrop-blur-sm" onClick={cancelarExclusao}>
            <div role="dialog" aria-modal="true" aria-labelledby="titulo-confirmacao-exclusao" onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-[0_24px_70px_rgba(41,38,61,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500"><Icon name="trash" size={22} /></div>
              <h2 id="titulo-confirmacao-exclusao" className="mt-5 text-xl font-bold text-[#29263d]">Excluir avaliação?</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">Você tem certeza que deseja excluir <span className="font-semibold text-[#29263d]">"{avaliacaoParaExcluir.titulo}"</span>? Essa ação não poderá ser desfeita.</p>
              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><button type="button" onClick={cancelarExclusao} className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">Cancelar</button><button type="button" onClick={excluirAvaliacao} className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(239,68,68,0.22)] transition hover:bg-red-600"><Icon name="trash" size={17} />Excluir avaliação</button></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Professor;
