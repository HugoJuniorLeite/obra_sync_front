import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import {ActionButton} from "../../Pages/MinasNotasPage/styled"

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color:black;
  background-color: #333d40;
`;



const StepContainer = styled.div`
  margin-bottom: 20px;
  margin-top:30px;
  /* border: 2px solid #007bff; */
  padding: 15px;
  border-radius: 8px;
  background-color: #fdb000;
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
  /* background-color: #fdb000; */
`;

const Title = styled.h3`
  color: #007bff;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
  display: block;
`;

  


export default function  RdoFomrExtensionInative(){
  
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // ordemServico: "",
    // inicioAtividade: "",
    // terminoAtividade: "",
    // larguraVala: "",
    // comprimentoVala: "",
    // profundidadeVala: "",
    // tipoPiso: "",
    valas: [{}/*{ largura: "", comprimento: "", profundidade: "", tipoPiso: "" }*/],
    posicaoRamal: "",
    // atividadeExecutada: "",
    // numeroNota: "",
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
    // nomeResponsavel: "",
    fotoCalcadaAntes: null,
    fotoRamalExposto: null,
    fotoRamalCortado: null,
    fotoCroqui: null,
    fotoFrenteImovel: null,
    fotoPlacaRua: null,
    fotoProtecaoMecanica: null,
    fotoTachao: null,
    fotoFaixaSinalizacao: null,
        componentes: [{}],
    soldas: [{}],
    tachaoRedondo: "",
    protecaoMecanica: "",
    faixaSinalizacao: "",
  });


    const handleFileChange = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      fotos: {
        ...prev.fotos,
        [field]: file,
      },
    }));
  };

  const handleAddComponente = () => {
    setFormData((prev) => ({
      ...prev,
      componentes: [...prev.componentes, { componente: "", de: "", fabricante: "", lote: "" }]
    }));
  };

  const handleRemoveComponente = (index) => {
    setFormData((prev) => {
      const newList = [...prev.componentes];
      newList.splice(index, 1);
      return { ...prev, componentes: newList };
    });
  };

  const handleAddSolda = () => {
    setFormData((prev) => ({
      ...prev,
      soldas: [...prev.soldas, { componente: "", numeroSolda: "", tempoResfriamento: "", aprovado: "" }]
    }));
  };

  const handleRemoveSolda = (index) => {
    setFormData((prev) => {
      const newList = [...prev.soldas];
      newList.splice(index, 1);
      return { ...prev, soldas: newList };
    });
  };

  const handleAddVala = () => {
  setFormData((prev) => ({
    ...prev,
    valas: [...prev.valas, { largura: "", comprimento: "", profundidade: "", tipoPiso: "" }],
  }));
};

const handleRemoveVala = (index) => {
  setFormData((prev) => {
    const novaLista = [...prev.valas];
    novaLista.splice(index, 1);
    return { ...prev, valas: novaLista };
  });
};


  const steps = [


    {
      title: "Foto da placa da rua",
      content: (
        <Input
          type="file"
          accept="image/*" 
         capture="environment" 
          onChange={(e) => setFormData({ ...formData, fotoPlacaRua: e.target.files[0] })}
        />
      ),
    },
            {
      title: "Foto da frente do imóvel",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoFrenteImovel: e.target.files[0] })}
        />
      ),
    },
        {
      title: "Foto da calçada antes de iniciar a atividade",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoCalcadaAntes: e.target.files[0] })}
        />
      ),
    },
    // {
    //   title: "Informe o número da ordem",
    //   content: (
    //     <Input
    //       type="text"
    //       value={formData.ordemServico}
    //       onChange={(e) => setFormData({ ...formData, ordemServico: e.target.value })}
    //       placeholder="Número da ordem"
    //     />
    //   ),
    // },
    // {
    //   title: "Data e hora de início da atividade",
    //   content: (
    //     <Input
    //       type="datetime-local"
    //       value={formData.inicioAtividade}
    //       onChange={(e) => setFormData({ ...formData, inicioAtividade: e.target.value })}
    //     />
    //   ),
    // },
    // {
    //   title: "Data e hora de término da atividade",
    //   content: (
    //     <Input
    //       type="datetime-local"
    //       value={formData.terminoAtividade}
    //       onChange={(e) => setFormData({ ...formData, terminoAtividade: e.target.value })}
    //     />
    //   ),
    // },
    // {
    //   title: "Dimensões da Vala",
    //   content: (
    //     <>
    //       <label>Largura</label>
    //       <Input
    //         type="text"
    //         placeholder="Largura (cm)"
    //         value={formData.larguraVala}
    //         onChange={(e) => setFormData({ ...formData, larguraVala: e.target.value })}
    //       />
    //       <label>Comprimento</label>
    //       <Input
    //         type="text"
    //         placeholder="Comprimento (cm)"
    //         value={formData.comprimentoVala}
    //         onChange={(e) => setFormData({ ...formData, comprimentoVala: e.target.value })}
    //       />
    //       <label>profundidade</label>
    //       <Input
    //         type="text"
    //         placeholder="Profundidade (cm)"
    //         value={formData.profundidadeVala}
    //         onChange={(e) => setFormData({ ...formData, profundidadeVala: e.target.value })}
    //       />

    //        <label>Tipo de Piso</label>
    //     <Select
    //       value={formData.tipoPiso}
    //       onChange={(e) => setFormData({ ...formData, tipoPiso: e.target.value })}
    //     >
    //       <option value="">Selecione</option>
    //       <option value="Bloquete">Bloquete</option>
    //       <option value="Cerâmica">Cerâmica</option>
    //       <option value="Concreto">Concreto</option>
    //       <option value="Outro">Outro</option>
    //     </Select>
          
    //     </>
    //   ),
    // },
    // {
    //   title: "Tipo de Piso",
    //   content: (
    //     <Select
    //       value={formData.tipoPiso}
    //       onChange={(e) => setFormData({ ...formData, tipoPiso: e.target.value })}
    //     >
    //       <option value="">Selecione</option>
    //       <option value="Bloquete">Bloquete</option>
    //       <option value="Cerâmica">Cerâmica</option>
    //       <option value="Concreto">Concreto</option>
    //       <option value="Outro">Outro</option>
    //     </Select>
    //   ),
    // },


{
  title: "Dimensões da Vala",
  content: (
    <>
      {formData.valas.map((vala, index) => (
        <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <label>Largura</label>
          <Input
            type="text"
            placeholder="Largura (cm)"
            value={vala.largura}
            onChange={(e) => {
              const novasValas = [...formData.valas];
              novasValas[index].largura = e.target.value;
              setFormData({ ...formData, valas: novasValas });
            }}
          />
          <label>Comprimento</label>
          <Input
            type="text"
            placeholder="Comprimento (cm)"
            value={vala.comprimento}
            onChange={(e) => {
              const novasValas = [...formData.valas];
              novasValas[index].comprimento = e.target.value;
              setFormData({ ...formData, valas: novasValas });
            }}
          />
          <label>Profundidade</label>
          <Input
            type="text"
            placeholder="Profundidade (cm)"
            value={vala.profundidade}
            onChange={(e) => {
              const novasValas = [...formData.valas];
              novasValas[index].profundidade = e.target.value;
              setFormData({ ...formData, valas: novasValas });
            }}
          />
          <label>Tipo de Piso</label>
          <Select
            value={vala.tipoPiso}
            onChange={(e) => {
              const novasValas = [...formData.valas];
              novasValas[index].tipoPiso = e.target.value;
              setFormData({ ...formData, valas: novasValas });
            }}
          >
            <option value="">Selecione</option>
            <option value="Bloquete">Bloquete</option>
            <option value="Cerâmica">Cerâmica</option>
            <option value="Concreto">Concreto</option>
            <option value="Outro">Outro</option>
          </Select>

          <button type="button" onClick={() => handleRemoveVala(index)} style={{ marginTop: "5px" }}>
            Remover Vala
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddVala}>+ Adicionar nova Vala</button>
    </>
  ),
},


    {
      title: "Posição do Ramal",
      content: (
        <Select
          value={formData.posicaoRamal}
          onChange={(e) => setFormData({ ...formData, posicaoRamal: e.target.value })}
        >
          <option value="">Selecione</option>
          <option value="Entre lotes">Entre lotes</option>
          <option value="Esquina direita">Esquina direita</option>
          <option value="Esquina esquerda">Esquina esquerda</option>
        </Select>
      ),
    },
    // {
    //   title: "Atividade Executada",
    //   content: (
    //     <Select
    //       value={formData.atividadeExecutada}
    //       onChange={(e) => setFormData({ ...formData, atividadeExecutada: e.target.value })}
    //     >
    //       <option value="">Selecione</option>
    //       <option value="Corte de Ramal">Corte de Ramal</option>
    //       <option value="Recomposição">Recomposição</option>
    //     </Select>
    //   ),
    // },
    // {
    //   title: "Número da Nota",
    //   content: (
    //     <Input
    //       type="text"
    //       placeholder="Número da Nota"
    //       value={formData.numeroNota}
    //       onChange={(e) => setFormData({ ...formData, numeroNota: e.target.value })}
    //     />
    //   ),
    // },
    {
      title: "Material da Rede",
      content: (
        <Select
          value={formData.materialRede}
          onChange={(e) => setFormData({ ...formData, materialRede: e.target.value })}
        >
          <option value="">Selecione</option>
          <option value="Aço">Aço</option>
          <option value="PE">PE</option>
          <option value="Outro">Outro</option>
        </Select>
      ),
    },
        {
      title: "Diametro da Rede",
      content: (
        <Select
          value={formData.diametroRede}
          onChange={(e) => setFormData({ ...formData, diametroRede: e.target.value })}
        >
          <option value="">Selecione</option>
          <option value="40mm">40mm</option>
          <option value="63mm">63mm</option>
          <option value="90mm">90mm</option>
          <option value="125mm">125mm</option>
          <option value="Outro">Outro</option>
        </Select>
      ),
    },
    {
      title: "Material do Ramal",
      content: (
        <Select
          value={formData.materialRamal}
          onChange={(e) => setFormData({ ...formData, materialRamal: e.target.value })}
        >
          <option value="">Selecione</option>
          <option value="Aço">Aço</option>
          <option value="PE">PE</option>
          <option value="Outro">Outro</option>
        </Select>
      ),
    },

    {
      title: "Diametro do Ramal",
      content: (
        <Select
          value={formData.diametroRamal}
          onChange={(e) => setFormData({ ...formData, diametroRamal: e.target.value })}
        >
          <option value="">Selecione</option>
          <option value="20mm">20mm</option>
          <option value="32mm">32mm</option>
          <option value="63mm">63mm</option>
          <option value="90mm">90mm</option>
          <option value="Outro"> outro</option>
        </Select>
      ),
    },
    // {
    //   title: "Nome do Responsável",
    //   content: (
    //     <Input
    //       type="text"
    //       placeholder="Nome completo"
    //       value={formData.nomeResponsavel}
    //       onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
    //     />
    //   ),
    // },

    {
      title: "Foto do ramal exposto antes do corte",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoRamalExposto: e.target.files[0] })}
        />
      ),
    },
    {
      title: "Foto do ramal após o corte",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoRamalCortado: e.target.files[0] })}
        />
      ),
    },
    {
      title: "Foto da proteção mecânica e faixa de sinalização",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoProtecaoMecanica: e.target.files[0] })}
        />
      ),
    },
       {
      title: "Foto da faixa de sinalização aplicada",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoFaixaSinalizacao: e.target.files[0] })}
        />
      ),
    },
    {
      title: "Foto do tachão redondo instalado",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoTachao: e.target.files[0] })}
        />
      ),
    },
     {
      title: "Componentes utilizados",
      content: (
        <>
          {formData.componentes.map((item, index) => (
            <div key={index}>
              <Label>Componente*</Label>
              <Select value={item.componente} onChange={(e) => {
                const newList = [...formData.componentes];
                newList[index].componente = e.target.value;
                setFormData({ ...formData, componentes: newList });
              }}>
                <option value="">Selecione</option>
                <option>Cap</option>
                <option>Cotevelo</option>
              </Select>

              <Label>De*</Label>
              <Select value={item.de} onChange={(e) => {
                const newList = [...formData.componentes];
                newList[index].de = e.target.value;
                setFormData({ ...formData, componentes: newList });
              }}>
                <option value="">Selecione</option>
                <option>20</option>
                <option>32</option>
                <option>63</option>
                <option>90</option>
                <option>125</option>
              </Select>

              <Label>Fabricante*</Label>
              <Select value={item.fabricante} onChange={(e) => {
                const newList = [...formData.componentes];
                newList[index].fabricante = e.target.value;
                setFormData({ ...formData, componentes: newList });
              }}>
                <option value="">Selecione</option>
                <option>GF</option>
                <option>Plason</option>
              </Select>

              <Label>Lote*</Label>
              <Input value={item.lote} onChange={(e) => {
                const newList = [...formData.componentes];
                newList[index].lote = e.target.value;
                setFormData({ ...formData, componentes: newList });
              }} placeholder="Lote" />
              <button type="button" onClick={() => handleRemoveComponente(index)}>Remover Linha</button>
              <hr />
            </div>
          ))}
          <button type="button" onClick={handleAddComponente}>+ Adicionar Linha</button>
        </>
      ),
    },
    {
      title: "Solda",
      content: (
        <>
          {formData.soldas.map((item, index) => (
            <div key={index}>
              <Label>Componente*</Label>
              <Input value={item.componente} onChange={(e) => {
                const newList = [...formData.soldas];
                newList[index].componente = e.target.value;
                setFormData({ ...formData, soldas: newList });
              }} placeholder="Componente" />

              <Label>Nº Solda*</Label>
              <Input value={item.numeroSolda} onChange={(e) => {
                const newList = [...formData.soldas];
                newList[index].numeroSolda = e.target.value;
                setFormData({ ...formData, soldas: newList });
              }} placeholder="Número da solda" />

              <Label>Tempo de Resfriamento*</Label>
              <Input value={item.tempoResfriamento} onChange={(e) => {
                const newList = [...formData.soldas];
                newList[index].tempoResfriamento = e.target.value;
                setFormData({ ...formData, soldas: newList });
              }} placeholder="Tempo" />

              <Label>Aprovado*</Label>
              <Select value={item.aprovado} onChange={(e) => {
                const newList = [...formData.soldas];
                newList[index].aprovado = e.target.value;
                setFormData({ ...formData, soldas: newList });
              }}>
                <option value="">Selecione</option>
                <option>Sim</option>
                <option>Não</option>
              </Select>
              <button type="button" onClick={() => handleRemoveSolda(index)}>Remover Linha</button>
              <hr />
            </div>
          ))}
          <button type="button" onClick={handleAddSolda}>+ Adicionar Linha</button>
        </>
      ),
    },
        {
      title: "Foto do croqui",
      content: (
        <Input
          type="file"
          onChange={(e) => setFormData({ ...formData, fotoCroqui: e.target.files[0] })}
        />
      ),
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    
    console.log("Dados enviados:", formData);
    alert("Formulário enviado!");
    
    
    //*fazer o post

    navigate("/")
  };

  const handleHome = () =>{
    navigate("/home")
  };

  return (
    <Container>
      <h1>Registro de Atividade de Campo (RDO)</h1>

      <button onClick={handleHome}> Retornar a meus atendimentos</button>

      <StepContainer>
        <h3>{steps[step].title}</h3>
        {steps[step].content}
      </StepContainer>

     <ButtonGroup>
  {step > 0 && <button onClick={handlePrev}>Anterior</button>}
  {step < steps.length - 1 ? (
    <button onClick={handleNext}>Próximo</button>
  ) : (
    <button onClick={handleSubmit}>Finalizar atendimento</button>
  )}
</ButtonGroup>

    </Container>
  );
}