// import React, { createContext, useState, useEffect } from "react";

// export const FormContext = createContext();

// export function FormProvider({ children }) {
//   const [formData, setFormData] = useState({});
//   const [selectedBill, setSelectedBill] = useState(null);

//   // Carrega dados salvos ao selecionar uma nota
//   useEffect(() => {
//     if (selectedBill) {
//       const saved = localStorage.getItem(`rdo-${selectedBill.id}`);
//       if (saved) setFormData(JSON.parse(saved));
//       else setFormData({ 
//         resultado: "",
//         detalhe:"",
//         comentario:"",
//         valas: [{ largura: "", comprimento: "", profundidade: "", tipoPiso: "" }],
//         posicaoRamal: "",
//         tipoRamal: "",
//         materialRede: "",
//         materialRamal: "",
//         diametroRede: "",
//         diametroRamal: "",
//         ramalCortado: "",
//         pressaoRede: "",
//         endereco: "",
//         localCorte: "",
//         tipoCapeamento: "",
//         fotoCalcadaAntes: null,
//         fotoRamalExposto: null,
//         fotoRamalCortado: null,
//         fotoCroqui: null,
//         fotoFrenteImovel: null,
//         fotoPlacaRua: null,
//         fotoProtecaoMecanica: null,
//         fotoTachao: null,
//         fotoProvisorio: null,
//         componentes: [{}],
//         soldas: [{}],
//         tachaoRedondo: "",
//         protecaoMecanica: "",
//         faixaSinalizacao: "",
//         valvFluxo:"",
//       });
//     }
//   }, [selectedBill]);

//   // Salva automaticamente no localStorage
//   useEffect(() => {
//     if (selectedBill) {
//       localStorage.setItem(`rdo-${selectedBill.id}`, JSON.stringify(formData));
//     }
//   }, [formData, selectedBill]);

//   return (
//     <FormContext.Provider value={{ formData, setFormData, selectedBill, setSelectedBill }}>
//       {children}
//     </FormContext.Provider>
//   );
// }

// rev01

// import React, { createContext, useState, useEffect } from "react";

// export const FormContext = createContext();

// export function FormProvider({ children }) {
//   const [formData, setFormData] = useState({});
//   const [selectedBill, setSelectedBill] = useState(null);

//   // Inicialização completa com todos os campos, incluindo croqui
//   const initialFormData = {
//     resultado: "",
//     detalhe: "",
//     comentario: "",
//     valas: [{ largura: "", comprimento: "", profundidade: "", tipoPiso: "" }],
//     posicaoRamal: "",
//     tipoRamal: "",
//     materialRede: "",
//     materialRamal: "",
//     diametroRede: "",
//     diametroRamal: "",
//     ramalCortado: "",
//     pressaoRede: "",
//     endereco: "",
//     localCorte: "",
//     tipoCapeamento: "",
//     fotoCalcadaAntes: null,
//     fotoRamalExposto: null,
//     fotoRamalCortado: null,
//     fotoCroqui: null,
//     fotoFrenteImovel: null,
//     fotoPlacaRua: null,
//     fotoProtecaoMecanica: null,
//     fotoTachao: null,
//     fotoProvisorio: null,
//     componentes: [{}],
//     soldas: [{}],
//     tachaoRedondo: "",
//     protecaoMecanica: "",
//     faixaSinalizacao: "",
//     valvFluxo: "",
//     // campos do croqui
//     A_esquerda: "",
//     A_direita: "",
//     B: "",
//     Pg: "",
//     PCPREVGB: "",
//     Numero_esquerda: "",
//     Numero_centro: "",
//     Numero_direita: "",
//     Largura_logradouro: "",
//     Rua_esquerda: "",
//     Rua_centro: "",
//     Rua_direita: "",
//     CPREVGB_Predial: "",
//   };

//   // Carrega dados salvos ao selecionar uma nota
//   useEffect(() => {
//     if (selectedBill) {
//       const saved = localStorage.getItem(`rdo-${selectedBill.id}`);
//       if (saved) setFormData(JSON.parse(saved));
//       else setFormData(initialFormData);
//     }
//   }, [selectedBill]);

//   // Salva automaticamente no localStorage sempre que formData muda
//   useEffect(() => {
//     if (selectedBill) {
//       localStorage.setItem(`rdo-${selectedBill.id}`, JSON.stringify(formData));
//     }
//   }, [formData, selectedBill]);

//   return (
//     <FormContext.Provider
//       value={{
//         formData,
//         setFormData,
//         selectedBill,
//         setSelectedBill,
//         initialFormData,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// }



//rev2

import React, { createContext, useState, useEffect } from "react";
import { get, set } from "idb-keyval";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const initialFormData = {
    resultado: "",
    detalhe: "",
    comentario: "",
    valas: [{ largura: "", comprimento: "", profundidade: "", tipoPiso: "" }],
    posicaoRamal: "",
    tipoRamal: "",
    materialRede: "",
    materialRamal: "",
    diametroRede: "",
    diametroRamal: "",
    ramalCortado: "",
    pressaoRede: "",
    endereco: "",
    localCorte: "",
    tipoCapeamento: "",
    fotoCalcadaAntes: null,
    fotoRamalExposto: null,
    fotoRamalCortado: null,
    fotoCroqui: null,
    fotoFrenteImovel: null,
    fotoPlacaRua: null,
    fotoProtecaoMecanica: null,
    fotoTachao: null,
    fotoProvisorio: null,
    componentes: [{}],
    soldas: [{}],
    tachaoRedondo: "",
    protecaoMecanica: "",
    faixaSinalizacao: "",
    valvFluxo: "",
    // campos do croqui
    A_esquerda: "",
    A_direita: "",
    B: "",
    Pg: "",
    PCPREVGB: "",
    Numero_esquerda: "",
    Numero_centro: "",
    Numero_direita: "",
    Largura_logradouro: "",
    Rua_esquerda: "",
    Rua_centro: "",
    Rua_direita: "",
    CPREVGB_Predial: "",
  };

  const [formData, setFormData] = useState(null); // inicializa null
  const [selectedBill, setSelectedBill] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Carregar dados do IndexedDB na inicialização
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      let data = null;

      if (selectedBill) {
        data = await get(`rdo-${selectedBill.id}`);
      }
      if (!data) {
        data = await get("lastFormData");
      }
      setFormData(data || initialFormData);
      setLoading(false);
    };

    loadData();
  }, [selectedBill]);

  // 🔹 Salvar dados no IndexedDB sempre que formData mudar
  useEffect(() => {
    if (!formData) return; // evita salvar antes de carregar
    const saveData = async () => {
      if (selectedBill) await set(`rdo-${selectedBill.id}`, formData);
      await set("lastFormData", formData);
    };
    saveData();
  }, [formData, selectedBill]);

  // 🔹 Função para atualizar fotos
  const handleFileChangeField = (field) => async (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const blob = new Blob([reader.result], { type: file.type });
      setFormData((prev) => ({ ...prev, [field]: blob }));
    };
    reader.readAsArrayBuffer(file);
  };

  // 🔹 Renderiza apenas depois de carregar
  if (loading || !formData) {
    return <div>Carregando...</div>;
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        selectedBill,
        setSelectedBill,
        initialFormData,
        handleFileChangeField,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
