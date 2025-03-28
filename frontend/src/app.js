import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const App = () => {
  const [data, setData] = useState({
    labels: Array.from({ length: 100 }, (_, i) => i),
    datasets: [
      {
        label: "HRV Data",
        data: Array.from({ length: 100 }, (_, i) => 70 + 20 * Math.sin((i * 2 * Math.PI) / 100)),
        borderColor: "skyblue",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.datasets[0].data.slice(1), 70 + 20 * Math.sin((prev.labels.length * 2 * Math.PI) / 100)];
        return {
          labels: prev.labels,
          datasets: [{ ...prev.datasets[0], data: newData }],
        };
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <h1>🌬️ BreathState Prototype - HRV Tracker</h1>
      <Line data={data} />
      <p>⚠️ This is just a prototype! Real sensor data will be integrated soon.</p>
    </div>
  );
};

export default App;
