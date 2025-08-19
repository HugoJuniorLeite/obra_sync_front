// import { useEffect, useState } from "react"
// import serviceOs from "../services/apiOs";

// export default function GetOss(){

// const [bills, setBills] = useState([]) 



//     useEffect(() => {
//     const fetchBills = async () => {
//       try {
//         const response = await serviceOs.getService()
//         setBills(response);
//       } catch (error) {
//         console.error("Erro ao buscar contratos:", error);
//       }
//     };
//     fetchBills();

//     },[])


//     return(
//          <div className="grid grid-cols-1 gap-4 p-4">
//       {bills.map((bill) => (
//         <div
//           key={bill.id}
//           className="rounded-2xl shadow-md p-4 border border-gray-200 bg-white"
//         >
//           <div className="mt-2">
//             <p><strong>Nota:</strong> {bill.id}</p>  
//             <p><strong>Status:</strong> {bill.status}</p>
//                <h2 className="text-lg font-bold text-gray-800">
//             Projeto: {bill.project?.name}
//           </h2>
//             <p><strong>Serviço:</strong> {bill.service?.name}</p>
//           </div>

//           <div className="mt-2">
//             <p>
//               <strong>Endereço:</strong>{" "}
//               {bill.customer_address?.street}, {bill.customer_address?.number} -{" "}
//               {bill.customer_address?.neighborhood},{" "}
//               {bill.customer_address?.city}/{bill.customer_address?.state}
//             </p>
//           </div>

//           <div className="mt-2">

//             <p><strong>Tecnico:</strong> {bill.technical}</p>
//             <p><strong>Programado:</strong> {bill.scheduled_at?.toLocaleString("pt-BR")}</p>
//             <p><strong>Inicio:</strong> {bill.service_started_at?.toLocaleString("pt-BR")}</p>
//             <p><strong>Termino:</strong> {bill.service_completed_at?.toLocaleString("pt-BR")}</p>

//             <p>
//               <strong>Criada em:</strong>{" "}
//               {new Date(bill.created_at).toLocaleString("pt-BR")}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>

//     )
// }


import { useEffect, useState } from "react";
import serviceOs from "../services/apiOs";
import {
  Container,
  Title,
  TableWrapper,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  ActionButton,
  DispatchButton
} from "../layouts/StyledComponents";
import { CheckboxContainer, customSelectStyles, HiddenCheckbox, RowDespech, StyledCheckbox, StyledLabel } from "../layouts/Theme";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BillSchema } from "../schemas/BillSchema";


export default function GetOss() {
  const [bills, setBills] = useState([]);
  const [selectedBills, setSelectedBills] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BillSchema),
    defaultValues: {
      sameAddress: false,
      selectedOptionTechnician: ""
    },
  });
  const selectedOptionTechnician = watch("selectedOptionTechnician");


  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await serviceOs.getService();
        setBills(response);
      } catch (error) {
        console.error("Erro ao buscar contratos:", error);
      }
    };
    fetchBills();
  }, []);

  // useEffect(() => {
  //     if (!selectedOptionProject) {
  //       setServices([]);
  //       setValue("selectedOptionService", []);
  //       return;
  //     }
  //     async function fetchServicos() {
  //       try {
  //         const res = await contract.getService(selectedOptionProject)
  //         setServices(res);
  //         setValue("selectedOptionService", []);
  //       } catch (err) {
  //         console.error("Erro ao buscar serviços:", err);
  //         setServices([]);
  //       }
  //     }
  //     fetchServicos();
  //   }, [selectedOptionProject, setValue]);




  const toggleSelect = (id) => {
    if (selectedBills.includes(id)) {
      setSelectedBills(selectedBills.filter((billId) => billId !== id));
    } else {
      setSelectedBills([...selectedBills, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedBills.length === bills.length) {
      setSelectedBills([]);
    } else {
      setSelectedBills(bills.map((bill) => bill.id));
    }
  };

  const handleDispatch = () => {
    console.log("Despachando OSs:", selectedBills);
    // Aqui você pode chamar sua API de despacho
    setSelectedBills([]);
  };

  return (
    <Container>
      <Title>Ordens de Serviço</Title>

      {/* {selectedBills.length > 0 && (
        <DispatchButton onClick={handleDispatch}>
          Despachar ({selectedBills.length})
        </DispatchButton>
      )} */}
      <StyledLabel >Ténico</StyledLabel>
      <RowDespech>
        <Controller
          name="selectedOptionTechnician"
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select
              {...rest}
              onChange={(selected) => {
                console.log("tecnico selecionado:", selected); // 🔍 debug
                onChange(selected);
              }}
              options={technicians?.map((srv) => ({ value: srv.id, label: srv.name }))}
              placeholder="Selecione o técnico..."
              isDisabled={!selectedOptionTechnician}
              styles={customSelectStyles}
            />
          )}
        />



        <DispatchButton onClick={handleDispatch}>
          Despachar ({selectedBills.length})
        </DispatchButton>



      </RowDespech>

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <CheckboxContainer>
                  <HiddenCheckbox
                    type="checkbox"
                    checked={selectedBills.length === bills.length && bills.length > 0}
                    onChange={toggleSelectAll}
                  />
                  <StyledCheckbox />
                </CheckboxContainer>
              </Th>
              <Th>Nota</Th>
              <Th>Status</Th>
              <Th>Projeto</Th>
              <Th>Serviço</Th>
              <Th>Endereço</Th>
              <Th>Técnico</Th>
              <Th>Programado</Th>
              <Th>Início</Th>
              <Th>Término</Th>
              <Th>Criada em</Th>
              {/* <Th>Ações</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {bills.map((bill) => (
              <Tr key={bill.id}>
                <Td>
                  <CheckboxContainer>
                    <HiddenCheckbox
                      checked={selectedBills.includes(bill.id)}
                      onChange={() => toggleSelect(bill.id)}
                    />
                    <StyledCheckbox />
                  </CheckboxContainer>
                </Td>
                <Td>{bill.id}</Td>
                <Td>{bill.status}</Td>
                <Td>{bill.project?.name}</Td>
                <Td>{bill.service?.name}</Td>
                <Td>
                  {bill.customer_address?.street}, {bill.customer_address?.number} -{" "}
                  {bill.customer_address?.neighborhood}, {bill.customer_address?.city}/
                  {bill.customer_address?.state}
                </Td>
                <Td>{bill.technical}</Td>
                <Td>{bill.scheduled_at?.toLocaleString("pt-BR")}</Td>
                <Td>{bill.service_started_at?.toLocaleString("pt-BR")}</Td>
                <Td>{bill.service_completed_at?.toLocaleString("pt-BR")}</Td>
                <Td>{new Date(bill.created_at).toLocaleString("pt-BR")}</Td>
                {/* <Td>
                  <ActionButton className="view">Ver</ActionButton>
                  <ActionButton className="accept">Aceitar</ActionButton>
                </Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}
