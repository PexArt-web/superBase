import { useEffect } from "react";
import supabase from "./supabase-client";

function Dashboard() {
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // const { data, error } =
        const response = await supabase
          .from("sales_deals")
          .select(
            `
            name,
           value,
             `
          )
          .order("value", { ascending: false })
          .limit(1);
        console.log("Response:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;
