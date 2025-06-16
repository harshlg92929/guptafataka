import React from "react";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import { useSelector } from "react-redux";

const GeneratePdf = () => {
  const { cartList } = useSelector((state) => state.cart);
  // middlware to localStorage
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Welcome to Gupta Fataka Bhandar", 20, 20);
    autoTable(doc, { html: "#CrakerList" });
    const tableData = cartList.map((item, index) => [
      index + 1,
      item.name,
      item.category,
      item.qty,
      item.price,
    ]);
    autoTable(doc, {
      head: [["S.No.", "Name", "Category", "Quantity", "Price"]],
      body: [
        ...tableData,
        [
          {
            content: `Total = ${totalPrice}`,
            colSpan: 12,
            styles: { fillColor: [239, 154, 154], alignSelf: "flex-end" },
          },
        ],
      ],
    });
    doc.save("CrakersList.pdf");
  };

  const handleWhatsAppShare = () => {
    const message = cartList
      .map(
        (p) =>
          `🎆 ${p.name} (${p.category})\nRate: ₹${p.price}\Quantity: ${p.qty}\n`
      )
      .join("\n");

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <button className="incCart p-2" onClick={() => handleDownload()}>
        <i className="fa-solid fa-download"></i> Download List
      </button>
      <button className="incCart p-2 mx-2" onClick={() => handleWhatsAppShare()}>
        <i className="fa-solid fa-download"></i> Send to Whatsapp
      </button>
    </div>
  );
};

export default GeneratePdf;
