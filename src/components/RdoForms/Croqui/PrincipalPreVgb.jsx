// import React from "react";
// import styled from "styled-components";
// import { useForm, Controller } from "react-hook-form";

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 1000px;
//   margin: auto;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   overflow: hidden;
// `;

// const Background = styled.img`
//   width: 100%;
//   display: block;
// `;

// const InputField = styled.input`
//   position: absolute;
//   border: 1px solid #333;
//   background: rgba(255, 255, 255, 0.85);
//   font-size: 12px;
//   padding: 2px;
//   width: 80px;
//   border-radius: 4px;
//   text-align: center;
// `;

// // campos posicionados na planta
// const fields = [
//   { name: "A_esquerda", label: "A=", top: "88%", left: "20%" },
//   { name: "A_direita", label: "A=", top: "88%", left: "48%" },
//   { name: "B", label: "B=", top: "62%", left: "7%" },
//   { name: "Pg", label: "Pg=", top: "88%", left: "65%" },
//   { name: "PCPREVGB", label: "PCPREVGB=", top: "72%", left: "47%" },
//   { name: "Numero_esquerda", label: "Nº", top: "38%", left: "12%" },
//   { name: "Numero_centro", label: "Nº", top: "18%", left: "45%" },
//   { name: "Numero_direita", label: "Nº", top: "38%", left: "80%" },
// ];

// export default function PrincipalPreVgb() {
//   const { control, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log("Dados preenchidos:", data);
//     alert("Valores salvos! Veja no console.");
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Container>
//         <Background src="/src/assets/plantasimplificada.png" alt="Planta simplificada" />
//         {fields.map((f, i) => (
//           <Controller
//             key={i}
//             name={f.name}
//             control={control}
//             render={({ field }) => (
//               <InputField
//                 {...field}
//                 placeholder={f.label}
//                 style={{ top: f.top, left: f.left }}
//               />
//             )}
//           />
//         ))}
//       </Container>
//       <div style={{ textAlign: "center", marginTop: "10px" }}>
//         <button
//           type="submit"
//           style={{
//             padding: "6px 14px",
//             border: "none",
//             borderRadius: "6px",
//             background: "#2d89ef",
//             color: "white",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Salvar
//         </button>
//       </div>
//     </form>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";

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
  background: rgba(255, 255, 255, 0.9);
  font-size: clamp(8px, 2vw, 14px);
  padding: 0.5vw;
  border-radius: 4px;
  text-align: center;
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "none")};
  transform-origin: center;
  width: ${(props) => props.width}px; /* largura dinâmica */
`;

const SpanMeasure = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  font-size: clamp(8px, 2vw, 14px);
  padding: 0.5vw;
  font-family: inherit;
`;

// Posições relativas (em %)
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

export default function PrincipalPreVgb(formData, setFormData, BillId) {
  const { control, handleSubmit } = useForm();
  const [widths, setWidths] = useState({});
  const spansRef = useRef({});

  useEffect(() => {
  fields.forEach((f) => {
    if (spansRef.current[f.name]) {
      spansRef.current[f.name].textContent = f.label; // placeholder
      const newWidth = spansRef.current[f.name].offsetWidth + 4;
      setWidths((prev) => ({ ...prev, [f.name]: newWidth }));
    }
  });
}, []);



  const onSubmit = (data) => {
    console.log("Dados preenchidos:", data,"data", formData, "formData", BillId, "billId");
    alert("Valores salvos! Veja no console.");
  };

  const updateWidth = (name, value, placeholder) => {
    if (spansRef.current[name]) {
      spansRef.current[name].textContent = value || placeholder;
      const newWidth = spansRef.current[name].offsetWidth + 4; // +4px de folga
      setWidths((prev) => ({ ...prev, [name]: newWidth }));
    }
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
            render={({ field }) => (
              <InputWrapper style={{ top: f.top, left: f.left }}>
                <InputField
                  {...field}
                  placeholder={f.label}
                  rotate={f.rotate}
                  width={widths[f.name] || 40} // largura mínima inicial
                  onChange={(e) => {
                    field.onChange(e);
                    updateWidth(f.name, e.target.value, f.label);
                  }}
                />
                <SpanMeasure ref={(el) => (spansRef.current[f.name] = el)} />
              </InputWrapper>
            )}
          />
        ))}
      </Container>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background: "#2d89ef",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
