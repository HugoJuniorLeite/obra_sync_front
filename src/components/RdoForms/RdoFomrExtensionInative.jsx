
import { FormTitle, StyledInput, StyledLabel, StyledSelect, SubmitButton, TextArea } from "../../layouts/Theme";
import { Container, Title } from "../../layouts/StyledComponents";
import styled from "styled-components";

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



import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";
import PrincipalPreVgb from "./Croqui/PrincipalPreVgb";
import { useParams } from "react-router-dom";

export default function RdoFomrExtensionInative() {
  const { id } = useParams(); // 🔹 pega ID da rota
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
    // A_esquerda: "",
    // A_direita: "",
    // B: "",
    // Pg: "",
    // PCPREVGB: "",
    // Numero_esquerda: "",
    // Numero_centro: "",
    // Numero_direita: "",
    // Largura_logradouro: "",
    // Rua_esquerda: "",
    // Rua_centro: "",
    // Rua_direita: "",
    // CPREVGB_Predial: "",
  };

  
  const {
    formData,
    setFormData,
    loadFormById,
    handleAddItem,
    handleRemoveItem,
    handleFileChangeField,
    selectedBill,
    loading,
  } = useContext(FormContext);
 


  const [step, setStep] = useState(0);

  // 🔹 Carregar RDO pelo ID da rota
useEffect(() => {
  if (id) {
    loadFormById(id, { ...initialFormData, id });
  } else {
    setFormData(initialFormData);
  }
}, [id, loadFormById, setFormData]);

  // Navegação
  const handleNext = () => { if (step < steps.length - 1) setStep(step + 1); };
  const handlePrev = () => { if (step > 0) setStep(step - 1); };

  const handleSubmit = async () => {
    console.log(formData, "formulario");
    try {
      alert("RDO finalizado e sincronizado!");
    } catch (err) {
      console.error(err);
      alert("Falha ao enviar RDO, salvo localmente.");
    }
  };

  if (loading || !formData) {
    return <div>Carregando RDO...</div>;
  }

  // Steps
  const getSteps = () => {
    const stepResultado = {
      title: "Resultado",
      content: (
        <>
          <StyledSelect
            value={formData.resultado || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "nao_executada") {
                // Reseta todos os campos e mantém apenas o resultado
                setFormData({ ...initialFormData, resultado: value });
              } else {
                setFormData({ ...formData, resultado: value, comentario: "", detalhe: "" });
              }
            }}
          >
            <option value="">Selecione um resultado</option>
            <option value="executada">Executado</option>
            <option value="nao_executada">Não Executado</option>
          </StyledSelect>

          {formData.resultado === "executada" && (
            <>
              <div>
                Resultado
              </div>
              <StyledSelect
                value={formData.detalhe || ""}
                onChange={e => setFormData({ ...formData, detalhe: e.target.value })}
              >
                <option value="">Selecione um detalhe</option>
                <option value="executada">Executado</option>
                <option value="vala_perdida">Vala perdida</option>
              </StyledSelect>
            </>
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
                placeholder="Descreva os motivos que impedem a execução da atividade"
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
        content: ["fotoPlacaRua", "fotoFrenteImovel", "fotoCalcadaAntes"].map(f => (
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
        content: (formData.valas || []).map((v, i) => (
          <div key={i} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
            {["largura", "comprimento", "profundidade"].map(f => (
              <div key={f}>
                <StyledLabel>{f}</StyledLabel>
                <StyledInput value={v[f]} onChange={e => {
                  const newValas = [...formData.valas];
                  newValas[i][f] = e.target.value;
                  setFormData({ ...formData, valas: newValas });
                }} />
              </div>
            ))}
            <StyledLabel>Tipo de Piso</StyledLabel>
            <StyledSelect value={v.tipoPiso} onChange={e => {
              const newValas = [...formData.valas];
              newValas[i].tipoPiso = e.target.value;
              setFormData({ ...formData, valas: newValas });
            }}>
              <option value="">Selecione</option>
              <option>Bloquete</option>
              <option>Cerâmica</option>
              <option>Concreto</option>
              <option>Outro</option>
            </StyledSelect>
            <SubmitButton type="button" onClick={() => handleRemoveItem("valas", i)}>- Remover</SubmitButton>
          </div>
        )).concat(
          <SubmitButton key="addVala" type="button" onClick={() => handleAddItem("valas", { largura: "", comprimento: "", profundidade: "", tipoPiso: "" })}>+ Adicionar</SubmitButton>
        )
      },
      {
        title: "Material do Ramal",
        content: (
          <StyledSelect
            value={formData.materialRamal}
            onChange={(e) => setFormData({ ...formData, materialRamal: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="Aço">Aço</option>
            <option value="PE">PE</option>
            <option value="Outro">Outro</option>
          </StyledSelect>
        ),
      },

      {
        title: "Diametro do Ramal",
        content: (
          <StyledSelect
            value={formData.diametroRamal}
            onChange={(e) => setFormData({ ...formData, diametroRamal: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="20mm">20mm</option>
            <option value="32mm">32mm</option>
            <option value="63mm">63mm</option>
            <option value="90mm">90mm</option>
            <option value="Outro"> outro</option>
          </StyledSelect>
        ),
      },

      {
        title: "Ramal Cortado",
        content: (
          <StyledSelect
            value={formData.ramalCortado}
            onChange={(e) => setFormData({ ...formData, ramalCortado: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="Principal">Principal</option>
            <option value="Adjacente">Adjacente</option>
            <option value="Conjulgado">Conjulgado</option>
          </StyledSelect>
        ),
      },
      {
        title: "Tipo do ramal",
        content: (
          <StyledSelect
            value={formData.tipoRamal}
            onChange={(e) => setFormData({ ...formData, tipoRamal: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="mesmoLado">mesmo lado</option>
            <option value="ladoOposto">lado oposto</option>
          </StyledSelect>
        ),
      },
      {
        title: "Local do corte",
        content: (
          <StyledSelect
            value={formData.localCorte}
            onChange={(e) => setFormData({ ...formData, localCorte: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="preVgb">Pré vgb</option>
            <option value="posVgb">Pós vgb</option>
          </StyledSelect>
        ),
      },
      {
        title: "Tipo do capeamento",
        content: (
          <StyledSelect
            value={formData.tipoCapeamento}
            onChange={(e) => setFormData({ ...formData, tipoCapeamento: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="flange">Flangeado</option>
            <option value="rosca">Roscado</option>
          </StyledSelect>
        ),
      },
      {
        title: "Croqui",
        content: <PrincipalPreVgb formData={formData} setFormData={setFormData} BillId={id} />
      },
      {
        title: "Fotos durante",
        content: ["fotoRamalExposto", "fotoRamalCortado", "fotoProtecaoMecanica", "fotoProvisorio"].map(f => (
          <div key={f}>
            <StyledLabel>{f.replace(/([A-Z])/g, " $1")}</StyledLabel>
            {formData[f] && <img src={formData[f]} width={100} alt={f} />}
            <StyledInput type="file" accept="image/*" capture="camera" onChange={e => handleFileChangeField(f)(e.target.files[0])} />
          </div>
        ))
      },

      // dados do form antigo

      {
        title: "Posição do Ramal",
        content: (
          <StyledSelect
            value={formData.posicaoRamal}
            onChange={(e) => setFormData({ ...formData, posicaoRamal: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="Entre lotes">Entre lotes</option>
            <option value="Esquina direita">Esquina direita</option>
            <option value="Esquina esquerda">Esquina esquerda</option>
          </StyledSelect>
        ),
      },
      {
        title: "Valv. Ex. Fluxo",
        content: (
          <StyledSelect
            value={formData.valvFluxo}
            onChange={(e) => setFormData({ ...formData, valvFluxo: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="false">não</option>
            <option value="true">sim</option>
          </StyledSelect>
        ),
      },

      {
        title: "Material da Rede",
        content: (
          <StyledSelect
            value={formData.materialRede}
            onChange={(e) => setFormData({ ...formData, materialRede: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="Aço">Aço</option>
            <option value="PE">PE</option>
            <option value="Outro">Outro</option>
          </StyledSelect>
        ),
      },
      {
        title: "Diametro da Rede",
        content: (
          <StyledSelect
            value={formData.diametroRede}
            onChange={(e) => setFormData({ ...formData, diametroRede: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="40mm">40mm</option>
            <option value="63mm">63mm</option>
            <option value="90mm">90mm</option>
            <option value="125mm">125mm</option>
            <option value="Outro">Outro</option>
          </StyledSelect>
        ),
      },

      {
        title: "Presão da Rede",
        content: (
          <StyledSelect
            value={formData.pressaoRede}
            onChange={(e) => setFormData({ ...formData, pressaoRede: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="250mbar">250mbar</option>
            <option value="750mbar">750mbar</option>
            <option value="1Bar">1Bar</option>
            <option value="4Bar">4Bar</option>
            <option value="7bar"> 7bar</option>
          </StyledSelect>
        ),
      },


      {
        title: "Proteção mecânica",
        content: (
          <StyledSelect
            value={formData.protecaoMecanica}
            onChange={(e) => setFormData({ ...formData, protecaoMecanica: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </StyledSelect>
        ),
      },

      {
        title: "Tachão instalado",
        content: (
          <StyledSelect
            value={formData.tachaoRedondo}
            onChange={(e) => setFormData({ ...formData, tachaoRedondo: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </StyledSelect>
        ),
      },

      {
        title: "Faixa de sinalização instalada",
        content: (
          <StyledSelect
            value={formData.faixaSinalizacao}
            onChange={(e) => setFormData({ ...formData, faixaSinalizacao: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </StyledSelect>
        ),
      },


      // form novo 

      // {
      //   title: "Ramal e Rede",
      //   content: ["posicaoRamal","tipoRamal","materialRede","materialRamal","diametroRede","diametroRamal","ramalCortado","pressaoRede","localCorte","tipoCapeamento"].map(f=>(
      //     <StyledSelect key={f} value={formData[f]} onChange={e=>setFormData({...formData,[f]:e.target.value})}>
      //       <option value="">Selecione {f}</option>
      //       <option value="Exemplo">Exemplo</option>
      //     </StyledSelect>
      //   ))
      // },
      // {
      //   title: "Proteção e sinalização",
      //   content: ["protecaoMecanica","tachaoRedondo","faixaSinalizacao","valvFluxo"].map(f=>(
      //     <StyledSelect key={f} value={formData[f]} onChange={e=>setFormData({...formData,[f]:e.target.value})}>
      //       <option value="">Selecione {f}</option>
      //       <option value="true">Sim</option>
      //       <option value="false">Não</option>
      //     </StyledSelect>
      //   ))
      // },

      //termino

      {
        title: "Componentes",
        content: (formData.componentes || []).map((c, i) => (
          <div key={i}>
            {["componente", "de", "fabricante", "lote"].map(f => (
              <StyledInput key={f} value={c[f] || ""} placeholder={f} onChange={e => {
                const newC = [...formData.componentes];
                newC[i][f] = e.target.value;
                setFormData({ ...formData, componentes: newC });
              }} />
            ))}
            <SubmitButton type="button" onClick={() => handleRemoveItem("componentes", i)}>- Remover</SubmitButton>
          </div>
        )).concat(
          <SubmitButton key="addComp" type="button" onClick={() => handleAddItem("componentes", { componente: "", de: "", fabricante: "", lote: "" })}>+ Adicionar</SubmitButton>
        )
      },
      {
        title: "Soldas",
        content: (formData.soldas || []).map((s, i) => (
          <div key={i}>
            {["componente", "numeroSolda", "tempoResfriamento"].map(f => (
              <StyledInput key={f} value={s[f] || ""} placeholder={f} onChange={e => {
                const newS = [...formData.soldas];
                newS[i][f] = e.target.value;
                setFormData({ ...formData, soldas: newS });
              }} />
            ))}
            <StyledSelect value={formData.soldas[i].aprovado || ""} onChange={e => {
              const newS = [...formData.soldas];
              newS[i].aprovado = e.target.value;
              setFormData({ ...formData, soldas: newS });
            }}>
              <option value="">Aprovado?</option>
              <option>Sim</option>
              <option>Não</option>
            </StyledSelect>
            <SubmitButton
              type="button"
              onClick={() => handleRemoveItem("soldas", i)}
            >
              - Remover
            </SubmitButton>
          </div>

        )).concat(
          <SubmitButton key="addSolda" type="button" onClick={() => handleAddItem("soldas", { componente: "", numeroSolda: "", tempoResfriamento: "", aprovado: "" })}>+ Adicionar</SubmitButton>
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
        {step < steps.length - 1 ? <SubmitButton onClick={handleNext}>Próximo</SubmitButton>
          : <SubmitButton onClick={handleSubmit}>Finalizar</SubmitButton>}
      </ButtonGroup>
    </Container>
  );
}
