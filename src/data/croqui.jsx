// src/data/croquisMap.js
export const croquisMap = {
  // 🌐 Principal
  principal_geral: {
    file: "/croquis/planta_simplicada_princial_geral.png",
    fields: [
      { name: "Numero_centro", label: "Nº", top: "18%", left: "51%" },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
    ],
  },

  // 🌐 Esquerda - Pré VGB
  preVgb_esquerda: {
    file: "/croquis/planta_simplificada_adjacente_esquerda_pre_vgb.png",
    fields: [
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "B", label: "B=", top: "61%", left: "33%", rotate: true },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
      { name: "PCPREVGB", label: "PCPREVGB=", top: "56.2%", left: "58.4%" },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
    ],
  },

  // 🌐 Esquerda - Pós VGB (1 corte)
  posVgb_esquerda_umCorte: {
    file: "/croquis/planta_simplificada_adjacente_esquerda_pos_vgb_um_corte.png",
    fields: [
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
      { name: "PCPOSVGB", label: "PCPOSVGB=", top: "50%", left: "52%" },
    ],
  },

  // 🌐 Esquerda - Pós VGB (2 cortes)
  posVgb_esquerda_doisCortes: {
    file: "/croquis/planta_simplificada_adjacente_esquerda_pos_vgb_dois_cortes.png",
    fields: [
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
      { name: "PCPOSVGB_1", label: "PC1=", top: "50%", left: "48%" },
      { name: "PCPOSVGB_2", label: "PC2=", top: "50%", left: "56%" },
    ],
  },

  // 🌐 Direita - Pós VGB (1 corte)
  posVgb_direita_umCorte: {
    file: "/croquis/planta_simplificada_adjacente_direita_pos_vgb_um_corte.png",
    fields: [
      { name: "A_direita", label: "A=", top: "67%", left: "55%" },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
      { name: "PCPOSVGB", label: "PCPOSVGB=", top: "50%", left: "52%" },
    ],
  },

  // 🌐 Direita - Pós VGB (2 cortes)
  posVgb_direita_doisCortes: {
    file: "/croquis/planta_simplificada_adjacente_direita_pos_vgb_dois_cortes.png",
    fields: [
      { name: "A_direita", label: "A=", top: "67%", left: "55%" },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
      { name: "PCPOSVGB_1", label: "PC1=", top: "50%", left: "48%" },
      { name: "PCPOSVGB_2", label: "PC2=", top: "50%", left: "56%" },
    ],
  },

  // 🌐 Direita - Corte geral
  geral_direita: {
    file: "/croquis/planta_simplificada_adjacente_direita_corte_geral.png",
    fields: [
      { name: "A_direita", label: "A=", top: "67%", left: "55%" },
      { name: "Rua_direita", label: "Rua à direita", top: "73%", left: "73%", rotate: true },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
    ],
  },

  // 🌐 Direita - Ramal adjacente
  ramal_direita: {
    file: "/croquis/planta_simplificada_adjacente_direira_ramal_adjacente.png",
    fields: [
      { name: "Numero_direita", label: "Nº", top: "37%", left: "63%" },
      { name: "Rua_direita", label: "Rua à direita", top: "73%", left: "73%", rotate: true },
    ],
  },

  // 🌐 Esquerda - Ramal adjacente
  ramal_esquerda: {
    file: "/croquis/planta_simplificada_adjacente_esquerda_ramal_adjacente.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "37%", left: "37%" },
      { name: "Rua_esquerda", label: "Rua à esquerda", top: "73%", left: "26%", rotate: true },
    ],
  },
};
