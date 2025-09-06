// import React, { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// // import {ActionButton} from "../../Pages/MinasNotasPage/styled"



// const Container = styled.div`
// display:flex;
// flex-direction: column;
// justify-content:center;
//   max-width: 100vw;
//   height: 100vh;
//   margin: 0 auto;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   color:black;
//   background-color: #333d40;
// `;



// const StepContainer = styled.div`
//   margin-bottom: 20px;
//   margin-top:30px;
//   /* border: 2px solid #007bff; */
//   padding: 15px;
//   border-radius: 8px;
//   background-color: #fdb000;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;


// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-top: 5px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   margin-top: 5px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   /* background-color: #fdb000; */
// `;

// const Title = styled.h3`
//   color: #007bff;
// `;

// const Label = styled.label`
//   font-weight: bold;
//   margin-top: 10px;
//   display: block;
// `;




// export default function RdoFomrExtensionInative() {

//   const navigate = useNavigate();
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     // ordemServico: "",
//     // inicioAtividade: "",
//     // terminoAtividade: "",
//     // larguraVala: "",
//     // comprimentoVala: "",
//     // profundidadeVala: "",
//     // tipoPiso: "",
//     valas: [{}/*{ largura: "", comprimento: "", profundidade: "", tipoPiso: "" }*/],
//     posicaoRamal: "",
//     // atividadeExecutada: "",
//     // numeroNota: "",
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
//     // nomeResponsavel: "",
//     fotoCalcadaAntes: null,
//     fotoRamalExposto: null,
//     fotoRamalCortado: null,
//     fotoCroqui: null,
//     fotoFrenteImovel: null,
//     fotoPlacaRua: null,
//     fotoProtecaoMecanica: null,
//     fotoTachao: null,
//     fotoFaixaSinalizacao: null,
//     componentes: [{}],
//     soldas: [{}],
//     tachaoRedondo: "",
//     protecaoMecanica: "",
//     faixaSinalizacao: "",
//   });


//   const handleFileChange = (field, file) => {
//     setFormData((prev) => ({
//       ...prev,
//       fotos: {
//         ...prev.fotos,
//         [field]: file,
//       },
//     }));
//   };

//   const handleAddComponente = () => {
//     setFormData((prev) => ({
//       ...prev,
//       componentes: [...prev.componentes, { componente: "", de: "", fabricante: "", lote: "" }]
//     }));
//   };

//   const handleRemoveComponente = (index) => {
//     setFormData((prev) => {
//       const newList = [...prev.componentes];
//       newList.splice(index, 1);
//       return { ...prev, componentes: newList };
//     });
//   };

//   const handleAddSolda = () => {
//     setFormData((prev) => ({
//       ...prev,
//       soldas: [...prev.soldas, { componente: "", numeroSolda: "", tempoResfriamento: "", aprovado: "" }]
//     }));
//   };

//   const handleRemoveSolda = (index) => {
//     setFormData((prev) => {
//       const newList = [...prev.soldas];
//       newList.splice(index, 1);
//       return { ...prev, soldas: newList };
//     });
//   };

//   const handleAddVala = () => {
//     setFormData((prev) => ({
//       ...prev,
//       valas: [...prev.valas, { largura: "", comprimento: "", profundidade: "", tipoPiso: "" }],
//     }));
//   };

//   const handleRemoveVala = (index) => {
//     setFormData((prev) => {
//       const novaLista = [...prev.valas];
//       novaLista.splice(index, 1);
//       return { ...prev, valas: novaLista };
//     });
//   };


//   const steps = [

// {
//   title: "Resultado do atendimento",
//   content: (
//     <Select
//       value={formData.resultado}
//       onChange={(e) => setFormData({ ...formData, resultado: e.target.value })}
//     >
//       <option value="">Selecione um resultado</option>
//       <option value="executada">Executado</option>
//       <option value="nao_executada">Não Executado</option>
//     </Select>
//   ),
// },
// {
//   title: "Foto da placa da rua",
//     content: (
//       <Input
//         type="file"
//         accept="image/*"
//         capture="environment"
//         onChange={(e) => setFormData({ ...formData, fotoPlacaRua: e.target.files[0] })}
//       />
//     ),
//     },
// {
//   title: "Foto da frente do imóvel",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoFrenteImovel: e.target.files[0] })}
//       />
//     ),
//     },
// {
//   title: "Foto da calçada antes de iniciar a atividade",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoCalcadaAntes: e.target.files[0] })}
//       />
//     ),
//     },
// // {
// //   title: "Informe o número da ordem",
// //   content: (
// //     <Input
// //       type="text"
// //       value={formData.ordemServico}
// //       onChange={(e) => setFormData({ ...formData, ordemServico: e.target.value })}
// //       placeholder="Número da ordem"
// //     />
// //   ),
// // },
// // {
// //   title: "Data e hora de início da atividade",
// //   content: (
// //     <Input
// //       type="datetime-local"
// //       value={formData.inicioAtividade}
// //       onChange={(e) => setFormData({ ...formData, inicioAtividade: e.target.value })}
// //     />
// //   ),
// // },
// // {
// //   title: "Data e hora de término da atividade",
// //   content: (
// //     <Input
// //       type="datetime-local"
// //       value={formData.terminoAtividade}
// //       onChange={(e) => setFormData({ ...formData, terminoAtividade: e.target.value })}
// //     />
// //   ),
// // },
// // {
// //   title: "Dimensões da Vala",
// //   content: (
// //     <>
// //       <label>Largura</label>
// //       <Input
// //         type="text"
// //         placeholder="Largura (cm)"
// //         value={formData.larguraVala}
// //         onChange={(e) => setFormData({ ...formData, larguraVala: e.target.value })}
// //       />
// //       <label>Comprimento</label>
// //       <Input
// //         type="text"
// //         placeholder="Comprimento (cm)"
// //         value={formData.comprimentoVala}
// //         onChange={(e) => setFormData({ ...formData, comprimentoVala: e.target.value })}
// //       />
// //       <label>profundidade</label>
// //       <Input
// //         type="text"
// //         placeholder="Profundidade (cm)"
// //         value={formData.profundidadeVala}
// //         onChange={(e) => setFormData({ ...formData, profundidadeVala: e.target.value })}
// //       />

// //        <label>Tipo de Piso</label>
// //     <Select
// //       value={formData.tipoPiso}
// //       onChange={(e) => setFormData({ ...formData, tipoPiso: e.target.value })}
// //     >
// //       <option value="">Selecione</option>
// //       <option value="Bloquete">Bloquete</option>
// //       <option value="Cerâmica">Cerâmica</option>
// //       <option value="Concreto">Concreto</option>
// //       <option value="Outro">Outro</option>
// //     </Select>

// //     </>
// //   ),
// // },
// // {
// //   title: "Tipo de Piso",
// //   content: (
// //     <Select
// //       value={formData.tipoPiso}
// //       onChange={(e) => setFormData({ ...formData, tipoPiso: e.target.value })}
// //     >
// //       <option value="">Selecione</option>
// //       <option value="Bloquete">Bloquete</option>
// //       <option value="Cerâmica">Cerâmica</option>
// //       <option value="Concreto">Concreto</option>
// //       <option value="Outro">Outro</option>
// //     </Select>
// //   ),
// // },


// {
//   title: "Dimensões da Vala",
//     content: (
//       <>
//         {formData.valas.map((vala, index) => (
//           <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
//             <label>Largura</label>
//             <Input
//               type="text"
//               placeholder="Largura (cm)"
//               value={vala.largura}
//               onChange={(e) => {
//                 const novasValas = [...formData.valas];
//                 novasValas[index].largura = e.target.value;
//                 setFormData({ ...formData, valas: novasValas });
//               }}
//             />
//             <label>Comprimento</label>
//             <Input
//               type="text"
//               placeholder="Comprimento (cm)"
//               value={vala.comprimento}
//               onChange={(e) => {
//                 const novasValas = [...formData.valas];
//                 novasValas[index].comprimento = e.target.value;
//                 setFormData({ ...formData, valas: novasValas });
//               }}
//             />
//             <label>Profundidade</label>
//             <Input
//               type="text"
//               placeholder="Profundidade (cm)"
//               value={vala.profundidade}
//               onChange={(e) => {
//                 const novasValas = [...formData.valas];
//                 novasValas[index].profundidade = e.target.value;
//                 setFormData({ ...formData, valas: novasValas });
//               }}
//             />
//             <label>Tipo de Piso</label>
//             <Select
//               value={vala.tipoPiso}
//               onChange={(e) => {
//                 const novasValas = [...formData.valas];
//                 novasValas[index].tipoPiso = e.target.value;
//                 setFormData({ ...formData, valas: novasValas });
//               }}
//             >
//               <option value="">Selecione</option>
//               <option value="Bloquete">Bloquete</option>
//               <option value="Cerâmica">Cerâmica</option>
//               <option value="Concreto">Concreto</option>
//               <option value="Outro">Outro</option>
//             </Select>

//             <button type="button" onClick={() => handleRemoveVala(index)} style={{ marginTop: "5px" }}>
//               Remover Vala
//             </button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddVala}>+ Adicionar nova Vala</button>
//       </>
//     ),
// },


// {
//   title: "Posição do Ramal",
//     content: (
//       <Select
//         value={formData.posicaoRamal}
//         onChange={(e) => setFormData({ ...formData, posicaoRamal: e.target.value })}
//       >
//         <option value="">Selecione</option>
//         <option value="Entre lotes">Entre lotes</option>
//         <option value="Esquina direita">Esquina direita</option>
//         <option value="Esquina esquerda">Esquina esquerda</option>
//       </Select>
//     ),
//     },
// // {
// //   title: "Atividade Executada",
// //   content: (
// //     <Select
// //       value={formData.atividadeExecutada}
// //       onChange={(e) => setFormData({ ...formData, atividadeExecutada: e.target.value })}
// //     >
// //       <option value="">Selecione</option>
// //       <option value="Corte de Ramal">Corte de Ramal</option>
// //       <option value="Recomposição">Recomposição</option>
// //     </Select>
// //   ),
// // },
// // {
// //   title: "Número da Nota",
// //   content: (
// //     <Input
// //       type="text"
// //       placeholder="Número da Nota"
// //       value={formData.numeroNota}
// //       onChange={(e) => setFormData({ ...formData, numeroNota: e.target.value })}
// //     />
// //   ),
// // },
// {
//   title: "Material da Rede",
//     content: (
//       <Select
//         value={formData.materialRede}
//         onChange={(e) => setFormData({ ...formData, materialRede: e.target.value })}
//       >
//         <option value="">Selecione</option>
//         <option value="Aço">Aço</option>
//         <option value="PE">PE</option>
//         <option value="Outro">Outro</option>
//       </Select>
//     ),
//     },
// {
//   title: "Diametro da Rede",
//     content: (
//       <Select
//         value={formData.diametroRede}
//         onChange={(e) => setFormData({ ...formData, diametroRede: e.target.value })}
//       >
//         <option value="">Selecione</option>
//         <option value="40mm">40mm</option>
//         <option value="63mm">63mm</option>
//         <option value="90mm">90mm</option>
//         <option value="125mm">125mm</option>
//         <option value="Outro">Outro</option>
//       </Select>
//     ),
//     },
// {
//   title: "Material do Ramal",
//     content: (
//       <Select
//         value={formData.materialRamal}
//         onChange={(e) => setFormData({ ...formData, materialRamal: e.target.value })}
//       >
//         <option value="">Selecione</option>
//         <option value="Aço">Aço</option>
//         <option value="PE">PE</option>
//         <option value="Outro">Outro</option>
//       </Select>
//     ),
//     },

// {
//   title: "Diametro do Ramal",
//     content: (
//       <Select
//         value={formData.diametroRamal}
//         onChange={(e) => setFormData({ ...formData, diametroRamal: e.target.value })}
//       >
//         <option value="">Selecione</option>
//         <option value="20mm">20mm</option>
//         <option value="32mm">32mm</option>
//         <option value="63mm">63mm</option>
//         <option value="90mm">90mm</option>
//         <option value="Outro"> outro</option>
//       </Select>
//     ),
//     },
// // {
// //   title: "Nome do Responsável",
// //   content: (
// //     <Input
// //       type="text"
// //       placeholder="Nome completo"
// //       value={formData.nomeResponsavel}
// //       onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
// //     />
// //   ),
// // },

// {
//   title: "Foto do ramal exposto antes do corte",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoRamalExposto: e.target.files[0] })}
//       />
//     ),
//     },
// {
//   title: "Foto do ramal após o corte",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoRamalCortado: e.target.files[0] })}
//       />
//     ),
//     },
// {
//   title: "Foto da proteção mecânica e faixa de sinalização",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoProtecaoMecanica: e.target.files[0] })}
//       />
//     ),
//     },
// {
//   title: "Foto da faixa de sinalização aplicada",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoFaixaSinalizacao: e.target.files[0] })}
//       />
//     ),
//     },
// {
//   title: "Foto do tachão redondo instalado",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoTachao: e.target.files[0] })}
//       />
//     ),
//     },
// {
//   title: "Componentes utilizados",
//     content: (
//       <>
//         {formData.componentes.map((item, index) => (
//           <div key={index}>
//             <Label>Componente*</Label>
//             <Select value={item.componente} onChange={(e) => {
//               const newList = [...formData.componentes];
//               newList[index].componente = e.target.value;
//               setFormData({ ...formData, componentes: newList });
//             }}>
//               <option value="">Selecione</option>
//               <option>Cap</option>
//               <option>Cotevelo</option>
//             </Select>

//             <Label>De*</Label>
//             <Select value={item.de} onChange={(e) => {
//               const newList = [...formData.componentes];
//               newList[index].de = e.target.value;
//               setFormData({ ...formData, componentes: newList });
//             }}>
//               <option value="">Selecione</option>
//               <option>20</option>
//               <option>32</option>
//               <option>63</option>
//               <option>90</option>
//               <option>125</option>
//             </Select>

//             <Label>Fabricante*</Label>
//             <Select value={item.fabricante} onChange={(e) => {
//               const newList = [...formData.componentes];
//               newList[index].fabricante = e.target.value;
//               setFormData({ ...formData, componentes: newList });
//             }}>
//               <option value="">Selecione</option>
//               <option>GF</option>
//               <option>Plason</option>
//             </Select>

//             <Label>Lote*</Label>
//             <Input value={item.lote} onChange={(e) => {
//               const newList = [...formData.componentes];
//               newList[index].lote = e.target.value;
//               setFormData({ ...formData, componentes: newList });
//             }} placeholder="Lote" />
//             <button type="button" onClick={() => handleRemoveComponente(index)}>Remover Linha</button>
//             <hr />
//           </div>
//         ))}
//         <button type="button" onClick={handleAddComponente}>+ Adicionar Linha</button>
//       </>
//     ),
//     },
// {
//   title: "Solda",
//     content: (
//       <>
//         {formData.soldas.map((item, index) => (
//           <div key={index}>
//             <Label>Componente*</Label>
//             <Input value={item.componente} onChange={(e) => {
//               const newList = [...formData.soldas];
//               newList[index].componente = e.target.value;
//               setFormData({ ...formData, soldas: newList });
//             }} placeholder="Componente" />

//             <Label>Nº Solda*</Label>
//             <Input value={item.numeroSolda} onChange={(e) => {
//               const newList = [...formData.soldas];
//               newList[index].numeroSolda = e.target.value;
//               setFormData({ ...formData, soldas: newList });
//             }} placeholder="Número da solda" />

//             <Label>Tempo de Resfriamento*</Label>
//             <Input value={item.tempoResfriamento} onChange={(e) => {
//               const newList = [...formData.soldas];
//               newList[index].tempoResfriamento = e.target.value;
//               setFormData({ ...formData, soldas: newList });
//             }} placeholder="Tempo" />

//             <Label>Aprovado*</Label>
//             <Select value={item.aprovado} onChange={(e) => {
//               const newList = [...formData.soldas];
//               newList[index].aprovado = e.target.value;
//               setFormData({ ...formData, soldas: newList });
//             }}>
//               <option value="">Selecione</option>
//               <option>Sim</option>
//               <option>Não</option>
//             </Select>
//             <button type="button" onClick={() => handleRemoveSolda(index)}>Remover Linha</button>
//             <hr />
//           </div>
//         ))}
//         <button type="button" onClick={handleAddSolda}>+ Adicionar Linha</button>
//       </>
//     ),
//     },
// {
//   title: "Foto do croqui",
//     content: (
//       <Input
//         type="file"
//         onChange={(e) => setFormData({ ...formData, fotoCroqui: e.target.files[0] })}
//       />
//     ),
//     },
//   ];

// const handleNext = () => {
//   if (step < steps.length - 1) setStep(step + 1);
// };

// const handlePrev = () => {
//   if (step > 0) setStep(step - 1);
// };

// const handleSubmit = () => {

//   console.log("Dados enviados:", formData);
//   alert("Formulário enviado!");


//   //*fazer o post

//   navigate("/")
// };

// const handleHome = () => {
//   navigate("/home")
// };

// return (
//   <Container>
//     <h1>Registro de Atividade de Campo (RDO)</h1>

//     <button onClick={handleHome}> Retornar a meus atendimentos</button>

//     <StepContainer>
//       <h3>{steps[step].title}</h3>
//       {steps[step].content}
//     </StepContainer>

//     <ButtonGroup>
//       {step > 0 && <button onClick={handlePrev}>Anterior</button>}
//       {step < steps.length - 1 ? (
//         <button onClick={handleNext}>Próximo</button>
//       ) : (
//         <button onClick={handleSubmit}>Finalizar atendimento</button>
//       )}
//     </ButtonGroup>

//   </Container>
// );
// }




// RdoForm.js
// import React, { useContext, useState } from "react";
// import styled from "styled-components";
// import { FormContext } from "./FormContext";
// // import { FormContext } from "./FormContext";

// const Container = styled.div`
//   display:flex;
//   flex-direction: column;
//   justify-content:center;
//   max-width: 100vw;
//   height: 100vh;
//   margin: 0 auto;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   color:black;
//   background-color: #f0f0f0;
// `;

// const StepContainer = styled.div`
//   margin-bottom: 20px;
//   margin-top:30px;
//   padding: 15px;
//   border-radius: 8px;
//   background-color: #fff;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-top: 5px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   margin-top: 5px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Label = styled.label`
//   font-weight: bold;
//   margin-top: 10px;
//   display: block;
// `;

// export default function RdoForm() {
//   const { formData, setFormData } = useContext(FormContext);
//   const [step, setStep] = useState(0);

//   // Funções para adicionar/remover linhas de arrays
//   const handleAddVala = () => setFormData({ ...formData, valas: [...formData.valas, { largura: "", comprimento: "", profundidade: "", tipoPiso: "" }] });
//   const handleRemoveVala = (i) => {
//     const newValas = [...formData.valas];
//     newValas.splice(i, 1);
//     setFormData({ ...formData, valas: newValas });
//   };

//   const handleAddComponente = () => setFormData({ ...formData, componentes: [...formData.componentes, { componente: "", de: "", fabricante: "", lote: "" }] });
//   const handleRemoveComponente = (i) => {
//     const newComp = [...formData.componentes];
//     newComp.splice(i, 1);
//     setFormData({ ...formData, componentes: newComp });
//   };

//   const handleAddSolda = () => setFormData({ ...formData, soldas: [...formData.soldas, { componente: "", numeroSolda: "", tempoResfriamento: "", aprovado: "" }] });
//   const handleRemoveSolda = (i) => {
//     const newSoldas = [...formData.soldas];
//     newSoldas.splice(i, 1);
//     setFormData({ ...formData, soldas: newSoldas });
//   };

//   // Funções de navegação
//   const handleNext = () => { if (step < steps.length - 1) setStep(step + 1); };
//   const handlePrev = () => { if (step > 0) setStep(step - 1); };

//   const handleSubmit = () => {
//     console.log("Dados enviados:", formData);
//     alert("Formulário enviado!");
//     localStorage.removeItem("rdoFormData"); // limpa persistência
//   };

//   // Definir steps
//   const steps = [
//     {
//       title: "Resultado do atendimento",
//       content: (
//         <Select value={formData.resultado} onChange={(e) => setFormData({ ...formData, resultado: e.target.value })}>
//           <option value="">Selecione um resultado</option>
//           <option value="executada">Executado</option>
//           <option value="nao_executada">Não Executado</option>
//         </Select>
//       ),
//     },
//     {
//       title: "Dimensões da Vala",
//       content: (
//         <>
//           {(formData.valas || []).map((v, i) => (
//             <div key={i} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
//               <Label>Largura</Label>
//               <Input value={v.largura} onChange={(e) => { const newValas = [...formData.valas]; newValas[i].largura = e.target.value; setFormData({ ...formData, valas: newValas }); }} />
//               <Label>Comprimento</Label>
//               <Input value={v.comprimento} onChange={(e) => { const newValas = [...formData.valas]; newValas[i].comprimento = e.target.value; setFormData({ ...formData, valas: newValas }); }} />
//               <Label>Profundidade</Label>
//               <Input value={v.profundidade} onChange={(e) => { const newValas = [...formData.valas]; newValas[i].profundidade = e.target.value; setFormData({ ...formData, valas: newValas }); }} />
//               <Label>Tipo de Piso</Label>
//               <Select value={v.tipoPiso} onChange={(e) => { const newValas = [...formData.valas]; newValas[i].tipoPiso = e.target.value; setFormData({ ...formData, valas: newValas }); }}>
//                 <option value="">Selecione</option>
//                 <option>Bloquete</option>
//                 <option>Cerâmica</option>
//                 <option>Concreto</option>
//                 <option>Outro</option>
//               </Select>
//               <button type="button" onClick={() => handleRemoveVala(i)}>Remover Vala</button>
//             </div>
//           ))}
//           <button type="button" onClick={handleAddVala}>+ Adicionar nova Vala</button>
//         </>
//       ),
//     },
//     {
//       title: "Fotos",
//       content: (
//         <>
//           <Label>Foto da calçada antes</Label>
//           <Input type="file" onChange={(e) => setFormData({ ...formData, fotoCalcadaAntes: e.target.files[0] })} />
//           <Label>Foto do ramal exposto</Label>
//           <Input type="file" onChange={(e) => setFormData({ ...formData, fotoRamalExposto: e.target.files[0] })} />
//           <Label>Foto do ramal cortado</Label>
//           <Input type="file" onChange={(e) => setFormData({ ...formData, fotoRamalCortado: e.target.files[0] })} />
//           <Label>Foto do croqui</Label>
//           <Input type="file" onChange={(e) => setFormData({ ...formData, fotoCroqui: e.target.files[0] })} />
//         </>
//       ),
//     },
//     {
//       title: "Componentes",
//       content: (
//         <>
//           {(formData.componentes ||[]).map((c, i) => (
//             <div key={i}>
//               <Label>Componente</Label>
//               <Input value={c.componente || ""} onChange={(e) => { const newC = [...formData.componentes]; newC[i].componente = e.target.value; setFormData({ ...formData, componentes: newC }); }} />
//               <Label>De</Label>
//               <Input value={c.de || ""} onChange={(e) => { const newC = [...formData.componentes]; newC[i].de = e.target.value; setFormData({ ...formData, componentes: newC }); }} />
//               <Label>Fabricante</Label>
//               <Input value={c.fabricante || ""} onChange={(e) => { const newC = [...formData.componentes]; newC[i].fabricante = e.target.value; setFormData({ ...formData, componentes: newC }); }} />
//               <Label>Lote</Label>
//               <Input value={c.lote || ""} onChange={(e) => { const newC = [...formData.componentes]; newC[i].lote = e.target.value; setFormData({ ...formData, componentes: newC }); }} />
//               <button type="button" onClick={() => handleRemoveComponente(i)}>Remover Linha</button>
//             </div>
//           ))}
//           <button type="button" onClick={handleAddComponente}>+ Adicionar Linha</button>
//         </>
//       ),
//     },
//     {
//       title: "Soldas",
//       content: (
//         <>
//           {(formData.soldas || []).map((s, i) => (
//             <div key={i}>
//               <Label>Componente</Label>
//               <Input value={s.componente || ""} onChange={(e) => { const newS = [...formData.soldas]; newS[i].componente = e.target.value; setFormData({ ...formData, soldas: newS }); }} />
//               <Label>Nº Solda</Label>
//               <Input value={s.numeroSolda || ""} onChange={(e) => { const newS = [...formData.soldas]; newS[i].numeroSolda = e.target.value; setFormData({ ...formData, soldas: newS }); }} />
//               <Label>Tempo Resfriamento</Label>
//               <Input value={s.tempoResfriamento || ""} onChange={(e) => { const newS = [...formData.soldas]; newS[i].tempoResfriamento = e.target.value; setFormData({ ...formData, soldas: newS }); }} />
//               <Label>Aprovado</Label>
//               <Select value={s.aprovado || ""} onChange={(e) => { const newS = [...formData.soldas]; newS[i].aprovado = e.target.value; setFormData({ ...formData, soldas: newS }); }}>
//                 <option value="">Selecione</option>
//                 <option>Sim</option>
//                 <option>Não</option>
//               </Select>
//               <button type="button" onClick={() => handleRemoveSolda(i)}>Remover Linha</button>
//             </div>
//           ))}
//           <button type="button" onClick={handleAddSolda}>+ Adicionar Linha</button>
//         </>
//       ),
//     },
//   ];

//   return (
//     <Container>
//       <h1>Registro de Atividade de Campo (RDO)</h1>
//       <StepContainer>
//         <h3>{steps[step].title}</h3>
//         {steps[step].content}
//       </StepContainer>
//       <ButtonGroup>
//         {step > 0 && <button onClick={handlePrev}>Anterior</button>}
//         {step < steps.length - 1 ? (
//           <button onClick={handleNext}>Próximo</button>
//         ) : (
//           <button onClick={handleSubmit}>Finalizar</button>
//         )}
//       </ButtonGroup>
//     </Container>
//   );
// }


//Rdo rev2

// RdoForm.js
// import React, { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
// import { FormContext } from "./FormContext";
// import { useParams } from "react-router-dom";
import { FormTitle, StyledInput, StyledLabel, StyledSelect, SubmitButton, TextArea } from "../../layouts/Theme";
import { Container, Title } from "../../layouts/StyledComponents";
// import PrincipalPreVgb from "./Croqui/PrincipalPreVgb";
// import axios from "axios";

const StepContainer = styled.div`
  margin-bottom: 10px;
  margin-top:15px;
  padding: 15px;
//  border-radius: 8px;
  //background-color: #fff;
  background: linear-gradient(135deg, #2c2c2c, #3a3a3a);
  color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #f5a400;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
  display: block;
`;

// export default function RdoForm() {
//   const { BillId } = useParams();

//   const { formData, setFormData } = useContext(FormContext);
//   const [step, setStep] = useState(0);

//   // Adicionar/Remover linhas de arrays
//   const handleAddItem = (field, newItem) => {
//     setFormData({ ...formData, [field]: [...(formData[field] || []), newItem] });
//   };

//   const handleRemoveItem = (field, index) => {
//     const newArray = [...formData[field]];
//     newArray.splice(index, 1);
//     setFormData({ ...formData, [field]: newArray });
//   };

//   // Navegação entre steps
//   const handleNext = () => { if (step < steps.length - 1) setStep(step + 1); };
//   const handlePrev = () => { if (step > 0) setStep(step - 1); };

//   // Submit
//   // const handleSubmit = () => {
//   //   console.log("Dados enviados:", formData);
//   //   alert("Formulário enviado!");
//   //   localStorage.removeItem("rdoFormData");
//   // };


//   useEffect(() => {
//     if (formData.resultado === "executada") {
//       // limpamos os campos de "não executada"
//       setFormData(prev => ({
//         ...prev,
//         detalhe: "",
//         comentario: "",
//       }));
//     }

//     if (formData.resultado === "nao_executada") {
//       // limpamos os campos de "executada"
//       setFormData(prev => ({
//         ...prev,
//         detalhe: "",
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
//         valvFluxo: "",
//       }));
//     }
//   }, [formData.resultado]);


//   const handleUpload = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);

//   const response = await axios.post("http://localhost:4000/create-rdo", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

//   return response.data.url;
// };


// // const handleFileChangeField = (field) => async (e) => {
// //   const file = e.target.files[0];
// //   if (file) {
// //     const url = await handleUpload(file);
// //     setFormData(prev => ({ ...prev, [field]: url }));
// //   }
// // };

// const handleFileChangeField = (field) => (e) => {
//   const file = e.target.files[0];
//   if (file) {
//     setFormData(prev => ({ ...prev, [field]: file }));
//   }
// };


// const handleSubmit = async () => {
//   try {
//     const form = new FormData();

//     // Lista dos campos que o backend espera
//     const photoFields = [
//       "fotoCalcadaAntes",
//       "fotoCroqui",
//       "fotoFrenteImovel",
//       "fotoPlacaRua",
//       "fotoProtecaoMecanica",
//       "fotoProvisorio",
//       "fotoRamalCortado",
//       "fotoRamalExposto"
//     ];

//     // Adiciona os arquivos corretos
//     photoFields.forEach(field => {
//       if (formData[field]) {
//         form.append(field, formData[field]);
//       }
//     });

//     // Adiciona os outros dados em JSON
//     form.append("data", JSON.stringify(formData));

//     const response = await axios.post("http://localhost:4000/create-rdo", form, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     console.log("Resposta do backend:", response.data);
//     alert("RDO enviado com sucesso!");
//     localStorage.removeItem("rdoFormData");

//   } catch (error) {
//     console.error("Erro ao enviar RDO:", error);
//     alert("Erro ao enviar o RDO");
//   }
// };





//   const getSteps = () => {
//     const stepResultado = {
//       title: "Resultado",
//       content: (
//         <>
//           <StyledSelect
//             value={formData.resultado || ""}
//             onChange={e => setFormData({ ...formData, resultado: e.target.value })}
//           >
//             <option value="">Selecione um resultado</option>
//             <option value="executada">Executado</option>
//             <option value="nao_executada">Não Executado</option>
//           </StyledSelect>

//           {formData.resultado === "executada" && (
//             <StyledSelect
//               value={formData.detalhe || ""}
//               onChange={e => setFormData({ ...formData, detalhe: e.target.value })}
//             >
//               <option value="">Selecione um resultado</option>
//               <option value="executada">Executado</option>
//               <option value="vala_perdida">Vala perdida</option>
//             </StyledSelect>
//           )}

//           {formData.resultado === "nao_executada" && (
//             <>
//               <StyledSelect
//                 value={formData.detalhe || ""}
//                 onChange={e => setFormData({ ...formData, detalhe: e.target.value })}
//               >
//                 <option value="">Selecione um resultado</option>
//                 <option value="exenão_autorizado">Cliente não autoriza</option>
//                 <option value="com_consumo">Com consumo</option>
//                 <option value="impossibilidade_tecnica">Imóvel não localizado</option>

//               </StyledSelect>

//               <TextArea
//                 value={formData.comentario}
//                 onChange={e => setFormData({ ...formData, comentario: e.target.value })}
//                 rows={3}
//                 placeholder="Descrição da ocupação">
//               </TextArea>
//             </>
//           )}
//         </>
//       )
//     };

//     // se NÃO foi executado, só retorna o primeiro step
//     if (formData.resultado === "nao_executada") {
//       return [stepResultado];
//     }

//     // se foi executado, retorna TODOS os steps
//     if (formData.resultado === "executada") {
//       return [
//         stepResultado,
//         {
//           title: "Fotos antes da atividade",
//           content: (
//             <>
//               {["fotoPlacaRua", "fotoFrenteImovel", "fotoCalcadaAntes"].map((field) => (
//                 <>
//                   <StyledLabel>{field.replace(/([A-Z])/g, " $1")}</StyledLabel>
//                   <StyledInput type="file" accept="image/*" capture="camera" onChange={handleFileChangeField("fotoPlacaRua")}  />
//                 </>
//               ))}
//             </>
//           )
//         },
//         {
//           title: "Dimensões da Vala",
//           content: (
//             <>
//               {(formData.valas || []).map((v, i) => (
//                 <div key={i} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
//                   <StyledLabel>Largura</StyledLabel>
//                   <StyledInput value={v.largura} onChange={e => {
//                     const newValas = [...formData.valas];
//                     newValas[i].largura = e.target.value;
//                     setFormData({ ...formData, valas: newValas });
//                   }} />
//                   <StyledLabel>Comprimento</StyledLabel>
//                   <StyledInput value={v.comprimento} onChange={e => {
//                     const newValas = [...formData.valas];
//                     newValas[i].comprimento = e.target.value;
//                     setFormData({ ...formData, valas: newValas });
//                   }} />
//                   <StyledLabel>Profundidade</StyledLabel>
//                   <StyledInput value={v.profundidade} onChange={e => {
//                     const newValas = [...formData.valas];
//                     newValas[i].profundidade = e.target.value;
//                     setFormData({ ...formData, valas: newValas });
//                   }} />
//                   <StyledLabel>Tipo de Piso</StyledLabel>
//                   <StyledSelect value={v.tipoPiso} onChange={e => {
//                     const newValas = [...formData.valas];
//                     newValas[i].tipoPiso = e.target.value;
//                     setFormData({ ...formData, valas: newValas });
//                   }}>
//                     <option value="">Selecione</option>
//                     <option>Bloquete</option>
//                     <option>Cerâmica</option>
//                     <option>Concreto</option>
//                     <option>Outro</option>
//                   </StyledSelect>
//                   <SubmitButton type="button" onClick={() => handleRemoveItem("valas", i)}>- Remover</SubmitButton>
//                 </div>
//               ))}
//               <SubmitButton type="button" onClick={() => handleAddItem("valas", { largura: "", comprimento: "", profundidade: "", tipoPiso: "" })}>+ Adicionar</SubmitButton>
//             </>
//           )
//         },
//         {
//           title: "Croqui",
//           content: (
//             <PrincipalPreVgb formData={formData} setFormData={setFormData} BillId={BillId}/>
//           )
//         },
//         {
//           title: "Fotos durante",
//           content: (
//             <>
//               {["fotoRamalExposto", "fotoRamalCortado", "fotoProtecaoMecanica", "fotoProvisorio"].map((field) => (
//                 <>
//                   <StyledLabel>{field.replace(/([A-Z])/g, " $1")}</StyledLabel>
//                   <StyledInput type="file" accept="image/*" capture="camera" onChange={handleFileChangeField("fotoRamalExposto")} />
//                 </>
//               ))}
//             </>
//           )
//         },
//         {
//           title: "Posição do Ramal",
//           content: (
//             <StyledSelect
//               value={formData.posicaoRamal}
//               onChange={(e) => setFormData({ ...formData, posicaoRamal: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="Entre lotes">Entre lotes</option>
//               <option value="Esquina direita">Esquina direita</option>
//               <option value="Esquina esquerda">Esquina esquerda</option>
//             </StyledSelect>
//           ),
//         },
//         {
//           title: "Valv. Ex. Fluxo",
//           content: (
//             <StyledSelect
//               value={formData.valvFluxo}
//               onChange={(e) => setFormData({ ...formData, valvFluxo: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="false">não</option>
//               <option value="true">sim</option>
//             </StyledSelect>
//           ),
//         },

//         {
//           title: "Material da Rede",
//           content: (
//             <StyledSelect
//               value={formData.materialRede}
//               onChange={(e) => setFormData({ ...formData, materialRede: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="Aço">Aço</option>
//               <option value="PE">PE</option>
//               <option value="Outro">Outro</option>
//             </StyledSelect>
//           ),
//         },
//         {
//           title: "Diametro da Rede",
//           content: (
//             <StyledSelect
//               value={formData.diametroRede}
//               onChange={(e) => setFormData({ ...formData, diametroRede: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="40mm">40mm</option>
//               <option value="63mm">63mm</option>
//               <option value="90mm">90mm</option>
//               <option value="125mm">125mm</option>
//               <option value="Outro">Outro</option>
//             </StyledSelect>
//           ),
//         },

//         {
//           title: "Presão da Rede",
//           content: (
//             <StyledSelect
//               value={formData.pressaoRede}
//               onChange={(e) => setFormData({ ...formData, pressaoRede: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="250mbar">250mbar</option>
//               <option value="750mbar">750mbar</option>
//               <option value="1Bar">1Bar</option>
//               <option value="4Bar">4Bar</option>
//               <option value="7bar"> 7bar</option>
//             </StyledSelect>
//           ),
//         },
//         {
//           title: "Material do Ramal",
//           content: (
//             <StyledSelect
//               value={formData.materialRamal}
//               onChange={(e) => setFormData({ ...formData, materialRamal: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="Aço">Aço</option>
//               <option value="PE">PE</option>
//               <option value="Outro">Outro</option>
//             </StyledSelect>
//           ),
//         },

//         {
//           title: "Diametro do Ramal",
//           content: (
//             <StyledSelect
//               value={formData.diametroRamal}
//               onChange={(e) => setFormData({ ...formData, diametroRamal: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="20mm">20mm</option>
//               <option value="32mm">32mm</option>
//               <option value="63mm">63mm</option>
//               <option value="90mm">90mm</option>
//               <option value="Outro"> outro</option>
//             </StyledSelect>
//           ),
//         },

//         {
//           title: "Ramal Cortado",
//           content: (
//             <StyledSelect
//               value={formData.ramalCortado}
//               onChange={(e) => setFormData({ ...formData, ramalCortado: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="Principal">Principal</option>
//               <option value="Adjacente">Adjacente</option>
//               <option value="Conjulgado">Conjulgado</option>
//             </StyledSelect>
//           ),
//         },
//         {
//           title: "Tipo do ramal",
//           content: (
//             <StyledSelect
//               value={formData.tipoRamal}
//               onChange={(e) => setFormData({ ...formData, tipoRamal: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="mesmoLado">mesmo lado</option>
//               <option value="ladoOposto">lado oposto</option>
//             </StyledSelect>
//           ),
//         },
//         // {
//         //   title: "Posição do ramal",
//         //   content: (
//         //     <StyledSelect
//         //       value={formData.posicaoRamal}
//         //       onChange={(e) => setFormData({ ...formData, posicaoRamal: e.target.value })}
//         //     >
//         //       <option value="">Selecione</option>
//         //       <option value="mesmoLado">Entre lotes</option>
//         //     </StyledSelect>
//         //   ),
//         // },
//         {
//           title: "Local do corte",
//           content: (
//             <StyledSelect
//               value={formData.localCorte}
//               onChange={(e) => setFormData({ ...formData, localCorte: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="preVgb">Pré vgb</option>
//               <option value="posVgb">Pós vgb</option>
//             </StyledSelect>
//           ),
//         },
//         {
//           title: "Tipo do capeamento",
//           content: (
//             <StyledSelect
//               value={formData.tipoCapeamento}
//               onChange={(e) => setFormData({ ...formData, tipoCapeamento: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="flange">Flangeado</option>
//               <option value="rosca">Roscado</option>
//             </StyledSelect>
//           ),
//         },

//         {
//           title: "Proteção mecânica",
//           content: (
//             <StyledSelect
//               value={formData.protecaoMecanica}
//               onChange={(e) => setFormData({ ...formData, protecaoMecanica: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="false">Não</option>
//               <option value="true">Sim</option>
//             </StyledSelect>
//           ),
//         },

//         {
//           title: "Tachão instalado",
//           content: (
//             <StyledSelect
//               value={formData.tachaoRedondo}
//               onChange={(e) => setFormData({ ...formData, tachaoRedondo: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="false">Não</option>
//               <option value="true">Sim</option>
//             </StyledSelect>
//           ),
//         },

//         {
//           title: "Faixa de sinalização instalada",
//           content: (
//             <StyledSelect
//               value={formData.faixaSinalizacao}
//               onChange={(e) => setFormData({ ...formData, faixaSinalizacao: e.target.value })}
//             >
//               <option value="">Selecione</option>
//               <option value="false">Não</option>
//               <option value="true">Sim</option>
//             </StyledSelect>
//           ),
//         },


//         {
//           title: "Componentes",
//           content: (
//             <>
//               {(formData.componentes || []).map((c, i) => (
//                 <div key={i} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
//                   {["componente", "de", "fabricante", "lote"].map(field => (
//                     <>
//                       <StyledLabel>{field}</StyledLabel>
//                       <StyledInput
//                         value={c[field] || ""}
//                         onChange={e => {
//                           const newC = [...formData.componentes];
//                           newC[i][field] = e.target.value;
//                           setFormData({ ...formData, componentes: newC });
//                         }}
//                       />
//                     </>
//                   ))}
//                   <SubmitButton type="button" onClick={() => handleRemoveItem("componentes", i)}>Remover Linha</SubmitButton>
//                 </div>
//               ))}
//               <SubmitButton type="button" onClick={() => handleAddItem("componentes", { componente: "", de: "", fabricante: "", lote: "" })}>+ Adicionar Linha</SubmitButton>
//             </>
//           )
//         },
//         {
//           title: "Soldas",
//           content: (
//             <>
//               {(formData.soldas || []).map((s, i) => (
//                 <div key={i} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
//                   {["componente", "numeroSolda", "tempoResfriamento"].map(field => (
//                     <>
//                       <StyledLabel>{field}</StyledLabel>
//                       <StyledInput
//                         value={s[field] || ""}
//                         onChange={e => {
//                           const newS = [...formData.soldas];
//                           newS[i][field] = e.target.value;
//                           setFormData({ ...formData, soldas: newS });
//                         }}
//                       />
//                     </>
//                   ))}
//                   <StyledLabel>Aprovado</StyledLabel>
//                   <StyledSelect value={s.aprovado || ""} onChange={e => {
//                     const newS = [...formData.soldas];
//                     newS[i].aprovado = e.target.value;
//                     setFormData({ ...formData, soldas: newS });
//                   }}>
//                     <option value="">Selecione</option>
//                     <option>Sim</option>
//                     <option>Não</option>
//                   </StyledSelect>
//                   <SubmitButton type="button" onClick={() => handleRemoveItem("soldas", i)}>- Remover</SubmitButton>
//                 </div>
//               ))}
//               <SubmitButton type="button" onClick={() => handleAddItem("soldas", { componente: "", numeroSolda: "", tempoResfriamento: "", aprovado: "" })}>+ Adicionar</SubmitButton>
//             </>
//           )
//         }
//       ];
//     }
//     return [stepResultado];
//   };

//   const steps = getSteps();
//   return (
//     // <FormWrapper>
//     <Container>
//       <FormTitle>RDO</FormTitle>
//       <StepContainer>
//         <Title>{steps[step].title}</Title>
//         {steps[step].content}
//       </StepContainer>
//       <ButtonGroup>
//         {step > 0 && <SubmitButton onClick={handlePrev}>Anterior</SubmitButton>}
//         {step < steps.length - 1 ? (
//           <SubmitButton onClick={handleNext}>Próximo</SubmitButton>
//         ) : (
//           <SubmitButton onClick={handleSubmit}>Finalizar</SubmitButton>
//         )}
//       </ButtonGroup>
//     </Container>
//     // </FormWrapper>
//   );
// }





import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FormContext } from "./FormContext";
import PrincipalPreVgb from "./Croqui/PrincipalPreVgb";

export default function RdoFomrExtensionInative() {
  const {
    formData,
    setFormData,
    handleAddItem,
    handleRemoveItem,
    handleFileChangeField,
    selectedBill
  } = useContext(FormContext);

  const [step, setStep] = useState(0);

  // Navegação steps
  const handleNext = () => { if (step < steps.length - 1) setStep(step + 1); };
  const handlePrev = () => { if (step > 0) setStep(step - 1); };

  // Submit final
  const handleSubmit = async () => {
    try {
      alert("RDO finalizado e sincronizado!");
    } catch (err) {
      console.error(err);
      alert("Falha ao enviar RDO, salvo localmente.");
    }
  };

  // Steps
  const getSteps = () => {
    const stepResultado = {
      title: "Resultado",
      content: (
        <>
          <StyledSelect
            value={formData.resultado || ""}
            onChange={e => setFormData({ ...formData, resultado: e.target.value })}
          >
            <option value="">Selecione um resultado</option>
            <option value="executada">Executado</option>
            <option value="nao_executada">Não Executado</option>
          </StyledSelect>

          {formData.resultado === "executada" && (
            <StyledSelect
              value={formData.detalhe || ""}
              onChange={e => setFormData({ ...formData, detalhe: e.target.value })}
            >
              <option value="">Selecione um detalhe</option>
              <option value="executada">Executado</option>
              <option value="vala_perdida">Vala perdida</option>
            </StyledSelect>
          )}

          {formData.resultado === "nao_executada" && (
            <>
              <StyledSelect
                value={formData.detalhe || ""}
                onChange={e => setFormData({ ...formData, detalhe: e.target.value })}
              >
                <option value="">Selecione motivo</option>
                <option value="cliente_nao_autoriza">Cliente não autoriza</option>
                <option value="com_consumo">Com consumo</option>
                <option value="impossibilidade_tecnica">Imóvel não localizado</option>
              </StyledSelect>

              <TextArea
                value={formData.comentario}
                onChange={e => setFormData({ ...formData, comentario: e.target.value })}
                rows={3}
                placeholder="Descrição da ocupação"
              />
            </>
          )}
        </>
      )
    };

    if (formData.resultado === "nao_executada") return [stepResultado];

    // Executada: todos os steps
    return [
      stepResultado,
      {
        title: "Fotos antes da atividade",
        content: ["fotoPlacaRua","fotoFrenteImovel","fotoCalcadaAntes"].map(f => (
          <div key={f}>
            <StyledLabel>{f.replace(/([A-Z])/g, " $1")}</StyledLabel>
            {formData[f] && <img src={formData[f]} width={100} alt={f} />}
            <StyledInput
              type="file"
              accept="image/*"
              capture="camera"
              onChange={e => handleFileChangeField(f)(e.target.files[0])}
            />
          </div>
        ))
      },
      {
        title: "Dimensões da Vala",
        content: (formData.valas || []).map((v,i)=>(
          <div key={i} style={{borderBottom:"1px solid #ccc", marginBottom:"10px"}}>
            {["largura","comprimento","profundidade"].map(f=>(
              <div key={f}>
                <StyledLabel>{f}</StyledLabel>
                <StyledInput value={v[f]} onChange={e=>{
                  const newValas = [...formData.valas];
                  newValas[i][f]=e.target.value;
                  setFormData({...formData, valas:newValas});
                }} />
              </div>
            ))}
            <StyledLabel>Tipo de Piso</StyledLabel>
            <StyledSelect value={v.tipoPiso} onChange={e=>{
              const newValas = [...formData.valas];
              newValas[i].tipoPiso=e.target.value;
              setFormData({...formData, valas:newValas});
            }}>
              <option value="">Selecione</option>
              <option>Bloquete</option>
              <option>Cerâmica</option>
              <option>Concreto</option>
              <option>Outro</option>
            </StyledSelect>
            <SubmitButton type="button" onClick={()=>handleRemoveItem("valas",i)}>- Remover</SubmitButton>
          </div>
        )).concat(
          <SubmitButton key="addVala" type="button" onClick={()=>handleAddItem("valas",{largura:"",comprimento:"",profundidade:"",tipoPiso:""})}>+ Adicionar</SubmitButton>
        )
      },
      {
        title: "Croqui",
        content: <PrincipalPreVgb formData={formData} setFormData={setFormData} BillId={selectedBill?.id} />
      },
      {
        title: "Fotos durante",
        content: ["fotoRamalExposto","fotoRamalCortado","fotoProtecaoMecanica","fotoProvisorio"].map(f=>(
          <div key={f}>
            <StyledLabel>{f.replace(/([A-Z])/g," $1")}</StyledLabel>
            {formData[f] && <img src={formData[f]} width={100} alt={f} />}
            <StyledInput type="file" accept="image/*" capture="camera" onChange={e=>handleFileChangeField(f)(e.target.files[0])} />
          </div>
        ))
      },
      {
        title: "Ramal e Rede",
        content: ["posicaoRamal","tipoRamal","materialRede","materialRamal","diametroRede","diametroRamal","ramalCortado","pressaoRede","localCorte","tipoCapeamento"].map(f=>(
          <StyledSelect key={f} value={formData[f]} onChange={e=>setFormData({...formData,[f]:e.target.value})}>
            <option value="">Selecione {f}</option>
            <option value="Exemplo">Exemplo</option>
          </StyledSelect>
        ))
      },
      {
        title: "Proteção e sinalização",
        content: ["protecaoMecanica","tachaoRedondo","faixaSinalizacao","valvFluxo"].map(f=>(
          <StyledSelect key={f} value={formData[f]} onChange={e=>setFormData({...formData,[f]:e.target.value})}>
            <option value="">Selecione {f}</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </StyledSelect>
        ))
      },
      {
        title: "Componentes",
        content: (formData.componentes||[]).map((c,i)=>(
          <div key={i}>
            {["componente","de","fabricante","lote"].map(f=>(
              <StyledInput key={f} value={c[f]||""} placeholder={f} onChange={e=>{
                const newC = [...formData.componentes];
                newC[i][f]=e.target.value;
                setFormData({...formData,componentes:newC});
              }} />
            ))}
            <SubmitButton type="button" onClick={()=>handleRemoveItem("componentes",i)}>- Remover</SubmitButton>
          </div>
        )).concat(
          <SubmitButton key="addComp" type="button" onClick={()=>handleAddItem("componentes",{componente:"",de:"",fabricante:"",lote:""})}>+ Adicionar</SubmitButton>
        )
      },
      {
        title: "Soldas",
        content: (formData.soldas||[]).map((s,i)=>(
          <div key={i}>
            {["componente","numeroSolda","tempoResfriamento"].map(f=>(
              <StyledInput key={f} value={s[f]||""} placeholder={f} onChange={e=>{
                const newS=[...formData.soldas];
                newS[i][f]=e.target.value;
                setFormData({...formData,soldas:newS});
              }} />
            ))}
            <StyledSelect value={formData.soldas[i].aprovado||""} onChange={e=>{
              const newS=[...formData.soldas];
              newS[i].aprovado=e.target.value;
              setFormData({...formData,soldas:newS});
            }}>
              <option value="">Aprovado?</option>
              <option>Sim</option>
              <option>Não</option>
            </StyledSelect>
            <SubmitButton type="button" onClick={()=>handleRemoveItem("soldas",i)}>- Remover</SubmitButton>
          </div>
        )).concat(
          <SubmitButton key="addSolda" type="button" onClick={()=>handleAddItem("soldas",{componente:"",numeroSolda:"",tempoResfriamento:"",aprovado:""})}>+ Adicionar</SubmitButton>
        )
      }
    ];
  };

  const steps = getSteps();

  return (
    <Container>
      <FormTitle>RDO</FormTitle>
      <StepContainer>
        <Title>{steps[step].title}</Title>
        {steps[step].content}
      </StepContainer>
      <ButtonGroup>
        {step > 0 && <SubmitButton onClick={handlePrev}>Anterior</SubmitButton>}
        {step < steps.length-1 ? <SubmitButton onClick={handleNext}>Próximo</SubmitButton>
          : <SubmitButton onClick={handleSubmit}>Finalizar</SubmitButton>}
      </ButtonGroup>
    </Container>
  );
}