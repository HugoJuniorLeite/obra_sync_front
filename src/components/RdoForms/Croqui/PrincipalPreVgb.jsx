import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { set, get } from "idb-keyval"; // persistência

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: auto;
  aspect-ratio: 16 / 9;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background: #f8f8f8;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const InputWrapper = styled.div`
  position: absolute;
  display: inline-block;
  transform: translateX(-50%);
`;

const InputField = styled.input`
  border: 1px solid #333;
  background: #fdb000;
  font-size: clamp(8px, 2vw, 14px);
  padding: 0.5vw;
  border-radius: 4px;
  text-align: center;
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "none")};
  transform-origin: center;
  width: ${(props) => props.width}px;
`;

const SpanMeasure = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  font-size: clamp(8px, 2vw, 14px);
  padding: 0.5vw;
  font-family: inherit;
`;

// Campos posicionados na planta
const fields = [
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
  { name: "CPREVGB_Predial", label: "N=", top: "50%", left: "40%", rotate: true },
];

export default function PrincipalPreVgb({ formData, setFormData, BillId }) {
   const { control, setValue, reset, handleSubmit } = useForm();
  const [widths, setWidths] = useState({});
  const spansRef = useRef({});
  

  // Carregar dados já salvos (IndexedDB ou do formData global)
useEffect(() => {
  (async () => {
    const saved = await get(`croqui-${BillId}`) || {};
    const clonedSaved = { ...saved }; // garante objeto novo
    reset(clonedSaved);

    setFormData((prev) => ({
      ...prev,
      croquis: {
        ...(prev.croquis || {}),
        [BillId]: clonedSaved,
      },
    }));
  })();
}, [BillId, reset]);


  const updateWidth = (name, value, placeholder) => {
    if (spansRef.current[name]) {
      spansRef.current[name].textContent = value || placeholder;
      const newWidth = spansRef.current[name].offsetWidth + 4;
      setWidths((prev) => ({ ...prev, [name]: newWidth }));
    }
  };

const handleChange = (name, value, placeholder) => {
  updateWidth(name, value, placeholder);

  const newCroqui = {
    ...((formData.croquis?.[BillId] && { ...formData.croquis[BillId] }) || {}),
    [name]: value,
  };

  setFormData((prev) => ({
    ...prev,
    croquis: {
      ...(prev.croquis || {}),
      [BillId]: newCroqui, // novo objeto independente
    },
  }));

  set(`croqui-${BillId}`, newCroqui);
};


  const onSubmit = (data) => {
    console.log("Croqui enviado:", data);
    alert("Croqui salvo e vinculado ao RDO!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Background src="/src/assets/plantasimplificada.png" alt="Planta simplificada" />
        {fields.map((f, i) => (
          <Controller
            key={i}
            name={f.name}
            control={control}
            defaultValue={formData.croquis?.[BillId]?.[f.name] || ""}

            render={({ field }) => (
              <InputWrapper style={{ top: f.top, left: f.left }}>
                <InputField
                  {...field}
                  placeholder={f.label}
                  rotate={f.rotate}
                  width={widths[f.name] || 40}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange(f.name, e.target.value, f.label);
                  }}
                />
                <SpanMeasure ref={(el) => (spansRef.current[f.name] = el)} />
              </InputWrapper>
            )}
          />
        ))}
      </Container>
    </form>
  );
}
