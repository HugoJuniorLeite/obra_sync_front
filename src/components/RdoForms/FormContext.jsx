import React, { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({});
  const [selectedBill, setSelectedBill] = useState(null);

  // Carrega dados salvos ao selecionar uma nota
  useEffect(() => {
    if (selectedBill) {
      const saved = localStorage.getItem(`rdo-${selectedBill.id}`);
      if (saved) setFormData(JSON.parse(saved));
      else setFormData({ 
        resultado: "",
        detalhe:"",
        comentario:"",
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
        valvFluxo:"",
      });
    }
  }, [selectedBill]);

  // Salva automaticamente no localStorage
  useEffect(() => {
    if (selectedBill) {
      localStorage.setItem(`rdo-${selectedBill.id}`, JSON.stringify(formData));
    }
  }, [formData, selectedBill]);

  return (
    <FormContext.Provider value={{ formData, setFormData, selectedBill, setSelectedBill }}>
      {children}
    </FormContext.Provider>
  );
}
