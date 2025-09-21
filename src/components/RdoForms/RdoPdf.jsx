import { useState } from "react";
import createRdo from "../../services/apiRdo";

export default function RdoPdf() {
  const [loading, setLoading] = useState(false);

  const gerarPdf = async () => {
    if (loading) return; // evita múltiplos popups
    setLoading(true);

    try {
      const blob = await createRdo.getPdf();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={gerarPdf}>
      {loading ? "Gerando PDF..." : "Abrir PDF"}
    </button>
  );
}