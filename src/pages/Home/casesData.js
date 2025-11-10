// O ARRAY DE DADOS
export const casesData = [
  // Sistemas embarcados
  { id: 1, grupo: "Sistemas embarcados", img: "/imagens/index_cases/index_cases_mac.png", alt: "fachada MacDonalds", titulo: "Case 1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  { id: 2, grupo: "Sistemas embarcados", img: "/imagens/index_cases/index_cases_petrobras.png", alt: "fachada Petrobras", titulo: "Case 2", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  { id: 3, grupo: "Sistemas embarcados", img: "/imagens/index_cases/index_cases_itau.png", alt: "fachada Itaú", titulo: "Case 3", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  // CORREÇÃO 1: Removido o caminho incorreto 'ccases/public/'
  { id: 4, grupo: "Sistemas embarcados", img: "/imagens/index_cases/nubank.png", alt: "nubank", titulo: "Case 4", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" }, 

  // Projetos Front-end/Back-end
  { id: 5, grupo: "Projetos Front-end/Back-end", img: "/imagens/index_cases/index_cases_nasa.png", alt: "logo NASA", titulo: "Case 5", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  { id: 6, grupo: "Projetos Front-end/Back-end", img: "/imagens/index_cases/index_cases_governo.png", alt: "logo Governo do Brasil", titulo: "Case 6", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  { id: 7, grupo: "Projetos Front-end/Back-end", img: "/imagens/index_cases/index_cases_sony.png", alt: "fachada Sony", titulo: "Case 7", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  // CORREÇÃO 2: Adicionada a subpasta index_cases/
  { id: 8, grupo: "Projetos Front-end/Back-end", img: "/imagens/index_cases/amazon.png", alt: "amazon", titulo: "Case 8", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },

  // Projetos Mobile
  // CORREÇÃO 2: Adicionada a subpasta index_cases/ aos demais
  { id: 9, grupo: "Projetos Mobile", img: "/imagens/index_cases/ifood.png", alt: "logo iFood", titulo: "Case 9", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  { id: 10, grupo: "Projetos Mobile", img: "/imagens/index_cases/ambev.png", alt: "logo Ambev", titulo: "Case 10", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  { id: 11, grupo: "Projetos Mobile", img: "/imagens/index_cases/celular.png", alt: "case Now", titulo: "Case 11", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
  { id: 12, grupo: "Projetos Mobile", img: "/imagens/index_cases/microsoft.png", alt: "microsoft", titulo: "Case 12", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "case-aberto.html" },
];

// FUNÇÃO PARA AGRUPAR OS DADOS
export const groupedCases = casesData.reduce((acc, caseItem) => {
  if (!acc[caseItem.grupo]) {
    acc[caseItem.grupo] = [];
  }
  acc[caseItem.grupo].push(caseItem);
  return acc;
}, {});