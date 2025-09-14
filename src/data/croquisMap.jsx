// src/data/croquisMap.js
export const croquisMap = {
  // 🌐 Principal geral
  principal_geral: {
    file: "/src/assets/croqui/planta_simplicada_princial_geral.png",
    fileIsometric: "/src/assets/isometrico/isometrico_principal_geral.png",
    details: "Principal corte no geral",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "37%", left: "37%" },
      { name: "Numero_centro", label: "Nº", top: "18%", left: "51%" },
      { name: "Numero_direita", label: "Nº", top: "37%", left: "63%" },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "A_direita", label: "A=", top: "67%", left: "55%" },
      { name: "B", label: "B=", top: "61%", left: "33%", rotate: true },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
    ],
  },

  // 🌐 Principal pos vgb
  principal_posVgb: {
    file: "/src/assets/croqui/planta_simplificada_principal_pos_vgb_entre_lotes.png",
    fileIsometric: "/src/assets/isometrico/isometrico_principal_pos_vgb.png",
    details: "Principal corte pós VGB",
    fields: [
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "A_direita", label: "A=", top: "67%", left: "55%" },
      { name: "B", label: "B=", top: "57%", left: "33%", rotate: true },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
      { name: "PCPOSVGB", label: "PCPOSVGB=", top: "45.2%", left: "62.4%" },
      { name: "PVGB", label: "PVGB=", top: "50.2%", left: "57.4%" },
      { name: "Numero_esquerda", label: "Nº", top: "37%", left: "37%" },
      { name: "Numero_centro", label: "Nº", top: "18%", left: "51%" },
      { name: "Numero_direita", label: "Nº", top: "37%", left: "63%" },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "Distancia_VGB_predial", label: "G=", top: "42%", left: "44%", rotate: true },
      { name: "Distancia_CPOSVGB_predial", label: "O=", top: "38%", left: "48%", rotate: true },
    ],
  },

  // 🌐 Principal pre vgb
  principal_preVgb: {
    file: "/src/assets/croqui/planta_simplificada_principal_pre_vbg_entre_lotes.png",
    fileIsometric: "/src/assets/isometrico/isometrico_principal_pre_vgb.png",
    details: "Principal corte pré VGB",
    fields: [
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "A_direita", label: "A=", top: "67%", left: "55%" },
      { name: "B", label: "B=", top: "61%", left: "33%", rotate: true },
      { name: "Pg", label: "Pg=", top: "65%", left: "62%" },
      { name: "PCPREVGB", label: "PCPREVGB=", top: "56.2%", left: "58.4%" },
      { name: "Numero_esquerda", label: "Nº", top: "37%", left: "37%" },
      { name: "Numero_centro", label: "Nº", top: "18%", left: "51%" },
      { name: "Numero_direita", label: "Nº", top: "37%", left: "63%" },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "CPREVGB_predial", label: "N=", top: "50%", left: "40%", rotate: true },
    ],
  },

  // 🌐 Principal geral com extremidade remanescente
  principal_geralComExtremidadeRemanescente: {
    file: "/src/assets/croqui/planta_simplificada_principal_geral_com_extremidade_remanescente.png",
    fileIsometric: "/src/assets/isometrico/isometrico_principal_geral com extremidade remanescente.png",
    details: "Principal corte no geral com extremidade remanescente",
    fields: [
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "A_direita", label: "A=", top: "67%", left: "55%" },
      { name: "B", label: "B=", top: "55%", left: "33%", rotate: true },
      { name: "Pg", label: "Pg=", top: "63%", left: "64%" },
      { name: "PCPREVGB", label: "PCPREVGB=", top: "58.2%", left: "54.4%" },
      { name: "Numero_esquerda", label: "Nº", top: "37%", left: "37%" },
      { name: "Numero_centro", label: "Nº", top: "18%", left: "51%" },
      { name: "Numero_direita", label: "Nº", top: "37%", left: "63%" },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "CPC_predial", label: "M=", top: "50%", left: "36%", rotate: true },
    ],
  },



  // 🌐 Esquerda - Pré VGB (2 cortes)
  preVgb_esquerda_doisCortes: {
    file: "/src/assets/croqui/planta_simplificada_adjacente esquerda_pre_vgb_dois corte.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente esquerda_pre_vgb_dois cortes.png",
    fields: [
      { name: "A_esquerda", label: "A=", top: "67%", left: "39%" },
      { name: "A_direita", label: "A=", top: "67%", left: "57%" },
      { name: "B", label: "B=", top: "50%", left: "32%", rotate: true },
      { name: "Pg", label: "Pg=", top: "58%", left: "61%" },
      { name: "PCPREVGB", label: "PCPREVGB=", top: "50.2%", left: "62.4%" },
      { name: "Numero_esquerda", label: "Nº", top: "34%", left: "43.5%" },
      { name: "Numero_direita", label: "Nº", top: "34%", left: "60%" },
      { name: "Largura_logradouro", label: "C=", top: "73%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "CPREVGB_predial", label: "N=", top: "44%", left: "40%", rotate: true },
    ],
  },

  //🌐 Esquerda - Pré VGB (1 corte)
  preVgb_esquerda_ramalAdjacente: {
    file: "/src/assets/croqui/planta_simplificada_adjacente_esquerda_ramal_adjacente.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente esquerda_ramal adjacente.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59.5%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "66%", left: "41%" },
      { name: "A_direita", label: "A=", top: "70%", left: "58.5%" },
      { name: "B", label: "B=", top: "52%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "58%", left: "64%" },
      { name: "PCRA", label: "PCRA=", top: "45%", left: "47%", rotate: true },
      { name: "Q", label: "Q=", top: "45%", left: "68%", rotate: true },
      { name: "P", label: "P=", top: "56%", left: "47.2%" },
    ],
  },


  // 🌐 Esquerda - Corte geral
  geral_esquerda: {
    file: "/src/assets/croqui/planta_simplificada_adjacente esquerta_geral.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente esquerda_geral.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "67%", left: "40%" },
      { name: "A_direita", label: "A=", top: "69%", left: "56.5%" },
      { name: "B", label: "B=", top: "52%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "60%", left: "61%" },
    ],
  },

  // 🌐 Esquerda - Pós VGB (1 corte)
  posVgb_esquerda_umCorte: {
    file: "/src/assets/croqui/planta_simplificada_adjacente_esquerda_pos_vgb_um corte.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente esquerda_pos_vgb_um corte.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59.5%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "66%", left: "41%" },
      { name: "A_direita", label: "A=", top: "70%", left: "58.5%" },
      { name: "B", label: "B=", top: "52%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "58%", left: "64%" },
      { name: "Q", label: "Q=", top: "36%", left: "50%", rotate: true },
      { name: "R", label: "R=", top: "48%", left: "47%", rotate: true },
      { name: "G", label: "G=", top: "45%", left: "68%", rotate: true },
      { name: "S", label: "S=", top: "48%", left: "73%", rotate: true },
      { name: "H", label: "H=", top: "58%", left: "47.2%" },
      { name: "PCRA=", label: "PCRA=", top: "43%", left: "58.5%" },
      { name: "PVGB=", label: "PVGB=", top: "51%", left: "58.5%" },
    ],
  },

  //  🌐 Esquerda - Pós VGB (2 cortes)
  posVgb_esquerda_doisCortes: {
    file: "/src/assets/croqui/planta_simplificada_adjacente_esquerda_pos_vgb_dois cortes.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente esquerda_pos_vgb_dois cortes.png",
    fields: [

      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59.5%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "66%", left: "41%" },
      { name: "A_direita", label: "A=", top: "72%", left: "58.5%" },
      { name: "B", label: "B=", top: "52%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "58%", left: "64%" },
      { name: "Q", label: "Q=", top: "22%", left: "47%", rotate: true },
      { name: "R", label: "R=", top: "36%", left: "50%", rotate: true },
      { name: "G_esquerda", label: "G=", top: "40%", left: "25%", rotate: true },
      { name: "G_direira", label: "G=", top: "45%", left: "68%", rotate: true },
      { name: "S", label: "S=", top: "48%", left: "73%", rotate: true },
      { name: "H", label: "H=", top: "58%", left: "47.2%" },
      { name: "PCRA=", label: "PCRA=", top: "43%", left: "58.5%" },
      { name: "PVGB_esquerda=", label: "PVGB=", top: "51%", left: "44.5%" },
      { name: "PVGB_direita=", label: "PVGB=", top: "51%", left: "58.5%" },
      { name: "PCPOSVGB_esquerda", label: "PCPOSVGB=", top: "43%", left: "44.5%" },
      { name: "O", label: "O=", top: "36%", left: "30%", rotate: true },
    ],
  },

  // 🌐 Direita - Pós VGB (1 corte)
  posVgb_direita_umCorte: {
    file: "/src/assets/croqui/planta_simplificada_adjacente_direita_pos_vgb_um corte.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente direita_pos_vgb_um corte.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59.5%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "85%", left: "24%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "85%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "66%", left: "41%" },
      { name: "A_direita", label: "A=", top: "70%", left: "58.5%" },
      { name: "B", label: "B=", top: "68%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "58%", left: "64%" },
      { name: "Q", label: "Q=", top: "36%", left: "30%", rotate: true },
      { name: "R", label: "R=", top: "45%", left: "57%", rotate: true },
      { name: "G", label: "G=", top: "45%", left: "25%", rotate: true },
      { name: "S", label: "S=", top: "54%", left: "20%", rotate: true },
      { name: "H", label: "H=", top: "56%", left: "46.2%" },
      { name: "PCRA=", label: "PCRA=", top: "37%", left: "74.5%" },
      { name: "PVGB=", label: "PVGB=", top: "45%", left: "68.5%" },
    ],
  },

  // 🌐 Direita - Pós VGB (2 cortes)
  posVgb_direita_doisCortes: {
    file: "/src/assets/croqui/planta_simplificada_adjacente_direita_pos_vgb_dois cortes.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente_direita_pos_vgb_dois_cortes.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59.5%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "83%", left: "24%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "83%", left: "71%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "66%", left: "41%" },
      { name: "A_direita", label: "A=", top: "71%", left: "55.5%" },
      { name: "B", label: "B=", top: "67%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "58%", left: "64%" },
      { name: "O", label: "O=", top: "22%", left: "47%", rotate: true },
      { name: "R", label: "R=", top: "36%", left: "50%", rotate: true },
      { name: "G_esquerda", label: "G=", top: "40%", left: "25%", rotate: true },
      { name: "G_direira", label: "G=", top: "45%", left: "78%", rotate: true },
      { name: "S", label: "S=", top: "48%", left: "20%", rotate: true },
      { name: "H", label: "H=", top: "56%", left: "46.2%" },
      { name: "PCPOSVGB_direita=", label: "PCPOSVGB=", top: "41%", left: "68.5%" },
      { name: "PVGB_esquerda=", label: "PVGB=", top: "51%", left: "26.5%" },
      { name: "PVGB_direita=", label: "PVGB=", top: "50%", left: "68.5%" },
      { name: "PCRA_esquerda", label: "PCRA=", top: "46%", left: "33.5%" },
      { name: "Q", label: "Q=", top: "36%", left: "30%", rotate: true },
    ],
  },

  // 🌐 Direita - Corte geral
  geral_direita: {
    file: "/src/assets/croqui/planta_simplificada_adjacente_direita_corte_geral.png",
    fileIsometric: "/src/assets/isometrico/ismoetrico_adjacente direita_corte geral.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "63%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "72%", left: "40%" },
      { name: "A_direita", label: "A=", top: "72%", left: "56.5%" },
      { name: "B", label: "B=", top: "52%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "57%", left: "61%" },
    ],
  },

  // 🌐 Direita - Ramal adjacente
  preVgb_direita_ramalAdjacente: {
    file: "/src/assets/croqui/planta_simplificada_adjacente_direira_ramal_adjacente.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente direita_ramal adjacente.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59.5%" },
      { name: "Largura_logradouro", label: "C=", top: "69%", left: "64%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "66%", left: "41%" },
      { name: "A_direita", label: "A=", top: "70%", left: "58.5%" },
      { name: "B", label: "B=", top: "52%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "58%", left: "64%" },
      { name: "PCRA", label: "PCRA=", top: "45%", left: "58%", rotate: true },
      { name: "Q", label: "Q=", top: "45%", left: "44%", rotate: true },
      { name: "P", label: "P=", top: "56%", left: "47.2%" },
    ],
  },

    //🌐 Esquerda - Pré VGB (2 corte)
  preVgb_direita_doisCortes: {
    file: "/src/assets/croqui/plata_simplificada_adjacente direita_pre_vgb_dois cortes.png",
    fileIsometric: "/src/assets/isometrico/isometrico_adjacente direita_pre_vgb_dois cortes.png",
    fields: [
      { name: "Numero_esquerda", label: "Nº", top: "35%", left: "43%" },
      { name: "Numero_direita", label: "Nº", top: "35%", left: "59.5%" },
      { name: "Largura_logradouro", label: "C=", top: "74%", left: "68%", rotate: true },
      { name: "Rua_esquerda", label: "Rua a esquerda", top: "73%", left: "26%", rotate: true },
      { name: "Rua_centro", label: "Rua do ramal", top: "78%", left: "48%" },
      { name: "Rua_direita", label: "Rua a direita", top: "73%", left: "73%", rotate: true },
      { name: "A_esquerda", label: "A=", top: "71%", left: "41%" },
      { name: "A_direita", label: "A=", top: "71%", left: "58.5%" },
      { name: "B", label: "B=", top: "52%", left: "31%", rotate: true },
      { name: "Pg", label: "Pg=", top: "57%", left: "64%" },
      { name: "PCRA", label: "PCRA=", top: "45%", left: "60%" },
      { name: "N", label: "N=", top: "46%", left: "44%", rotate: true },
  
    ],
  },


};
