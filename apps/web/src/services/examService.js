
export async function buscarAvaliacoes(token) {
  if (!token) {
    throw new Error(
      "É necessário fazer login para carregar as avaliações."
    );
  }

  const response = await fetch("/exams", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error(
        "Sua sessão não foi autorizada. Faça login novamente."
      );
    }

    throw new Error("Não foi possível carregar as avaliações.");
  }

  return response.json();
}
