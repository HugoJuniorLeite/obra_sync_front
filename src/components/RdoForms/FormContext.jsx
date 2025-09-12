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

// import React, { createContext, useState, useEffect } from "react";
// import { get, set } from "idb-keyval";

// export const FormContext = createContext();

// export function FormProvider({ children }) {
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
//     // A_esquerda: "",
//     // A_direita: "",
//     // B: "",
//     // Pg: "",
//     // PCPREVGB: "",
//     // Numero_esquerda: "",
//     // Numero_centro: "",
//     // Numero_direita: "",
//     // Largura_logradouro: "",
//     // Rua_esquerda: "",
//     // Rua_centro: "",
//     // Rua_direita: "",
//     // CPREVGB_Predial: "",
//   };

//   const [formData, setFormData] = useState(null); // inicializa null
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Carregar dados do IndexedDB na inicialização
//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       let data = null;

//       if (selectedBill) {
//         data = await get(`rdo-${selectedBill.id}`);
//       }
//       if (!data) {
//         data = await get("lastFormData");
//       }
//       setFormData(data || initialFormData);
//       setLoading(false);
//     };

//     loadData();
//   }, [selectedBill]);

//   // 🔹 Salvar dados no IndexedDB sempre que formData mudar
//   useEffect(() => {
//     if (!formData) return; // evita salvar antes de carregar
//     const saveData = async () => {
//       if (selectedBill) await set(`rdo-${selectedBill.id}`, formData);
//       await set("lastFormData", formData);
//     };
//     saveData();
//   }, [formData, selectedBill]);

//   // 🔹 Função para atualizar fotos
//   const handleFileChangeField = (field) => async (file) => {
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = () => {
//       const blob = new Blob([reader.result], { type: file.type });
//       setFormData((prev) => ({ ...prev, [field]: blob }));
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   // 🔹 Renderiza apenas depois de carregar
//   if (loading || !formData) {
//     return <div>Carregando...</div>;
//   }


//   const handleAddItem = (field, item) => {
//   setFormData(prev => ({
//     ...prev,
//     [field]: [...(prev[field] || []), item]
//   }));
// };

// const handleRemoveItem = (field, index) => {
//   setFormData(prev => ({
//     ...prev,
//     [field]: prev[field].filter((_, i) => i !== index)
//   }));
// };

//   return (
//     <FormContext.Provider
//       value={{
//         formData,
//         setFormData,
//         selectedBill,
//         setSelectedBill,
//         initialFormData,
//         handleFileChangeField,
//         handleAddItem,
//         handleRemoveItem,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// }

// //Rev03

// import React, { createContext, useState, useEffect } from "react";
// import { set, get, del } from "idb-keyval";

// export const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formData, setFormData] = useState({});
//   const [selectedBill, setSelectedBill] = useState(null);

//   // Chave única para armazenar os dados no IndexedDB
//   const STORAGE_KEY = "rdoFormData";

//   // Carregar dados persistidos na montagem
//   useEffect(() => {
//     const loadData = async () => {
//       const savedData = await get(STORAGE_KEY);
//       if (savedData) {
//         setFormData(savedData);
//       }
//     };
//     loadData();
//   }, []);

//   // Persistir dados sempre que formData mudar
//   useEffect(() => {
//     if (formData && Object.keys(formData).length > 0) {
//       set(STORAGE_KEY, formData);
//     }
//   }, [formData]);

//   // Manipuladores de campos do formulário
//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleAddItem = (field, item) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: [...(prev[field] || []), item],
//     }));
//   };

//   const handleRemoveItem = (field, index) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: prev[field].filter((_, i) => i !== index),
//     }));
//   };

//   const handleFileChangeField = (field, file) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: file,
//     }));
//   };

//   const clearForm = async () => {
//     setFormData({});
//     await del(STORAGE_KEY);
//   };

//   return (
//     <FormContext.Provider
//       value={{
//         formData,
//         setFormData,
//         handleChange,
//         handleAddItem,
//         handleRemoveItem,
//         handleFileChangeField,
//         clearForm,
//         selectedBill,
//         setSelectedBill,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect, useCallback } from "react";
import { set, get, del } from "idb-keyval";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // 🔹 Carregar dados do IndexedDB por ID
  const loadFormById = useCallback(async (id, initialData = {}) => {
    if (!id) return;
    setLoading(true);
    try {
      const savedData = await get(`rdo-${id}`);
      if (savedData) {
        setFormData(savedData);
      } else {
        const empty = { id, ...initialData };
        setFormData(empty);
        await set(`rdo-${id}`, empty);
      }
    } catch (err) {
      console.error("Erro ao carregar RDO:", err);
    } finally {
      setLoading(false);
    }
  }, []);

 // ⬇️ AQUI entra o carregamento da foto
useEffect(() => {
  async function loadFotos() {
    if (!formData?.id) return;

    const updates = {};
    for (const key of Object.keys(formData)) {
      if (key.endsWith("Key")) {
        const file = await get(formData[key]);
        if (file) {
          updates[key.replace("Key", "")] = URL.createObjectURL(file);
        }
      }
    }

    if (Object.keys(updates).length > 0) {
      setFormData((prev) => ({ ...prev, ...updates }));
    }
  }
  loadFotos();
}, [formData?.id]);

  // 🔹 Salvar automaticamente ao mudar formData
  useEffect(() => {
    if (!formData?.id) return;
    const save = async () => {
      try {
        await set(`rdo-${formData.id}`, formData);
      } catch (err) {
        console.error("Erro ao salvar RDO:", err);
      }
    };
    save();
  }, [formData]);

  // 🔹 Alterar campo simples
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 🔹 Adicionar item a lista
  const handleAddItem = (field, item) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] || []), item],
    }));
  };

  // 🔹 Remover item da lista
  const handleRemoveItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  // 🔹 Campo de arquivo (foto etc.)
  // const handleFileChangeField = (field) => (file) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: URL.createObjectURL(file),
  //   }));
  // };

// const handleFileChangeField = async (e) => {
//   const file = e.target.files[0];
//   if (!file || !formData?.id) return;

//   const key = `foto_rdo_${formData.id}`;
//   await set(key, file);

//   setFormData(prev => ({ ...prev, fotoKey: key }));
// };


// 🔹 Campo de arquivo (foto etc.)
const handleFileChangeField = (field) => async (file) => {
  if (!file || !formData?.id) return;

  const key = `rdo-${formData.id}-${field}`;
  await set(key, file);

  const url = URL.createObjectURL(file);

  setFormData((prev) => ({
    ...prev,
    [field]: url,   // URL para exibir a imagem no preview
    [`${field}Key`]: key, // chave para recuperar do IndexedDB
  }));
};

  // 🔹 Limpar dados de um ID específico
  const clearFormById = async (id) => {
    if (!id) return;
    setFormData({});
    await del(`rdo-${id}`);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        loadFormById,
        handleChange,
        handleAddItem,
        handleRemoveItem,
        handleFileChangeField,
        clearFormById,
        loading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};