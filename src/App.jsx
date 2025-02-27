import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const fetchSupplierData = useCallback(async (uuid) => {
    try {
      const response = await fetch(
        "https://api.marketxcel.co.in/webservices/supplier/send_supplier_data",
        {
          method: "GET",
          headers: {
            SupplierId: "ff6a9e1fd6608945d4e4dca7ded50e85",
            Token: "Bearer 06c4e3995dafe6d7fd4afafa4ea2384d",
            uid: uuid,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    fetchSupplierData();
  }, []);

  return (
    <>
      <h1>Testing</h1>
    </>
  );
}

export default App;
