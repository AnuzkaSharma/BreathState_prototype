import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const App = () => {
  const initialData = Array.from({ length: 100 }, (_, i) => ({
    x: i,
    y: 70 + 20 * Math.sin((i * 2 * Math.PI) / 100),
  }));

  const [chartData, setChartData] = useState({
    labels: initialData.map((point) => point.x),
    datasets: [
      {
        label: "HRV Data",
        data: initialData.map((point) => point.y),
        borderColor: "skyblue",
        borderWidth: 2,
        tension: 0.3, // Adds a smooth curve
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const nextX = prev.labels[prev.labels.length - 1] + 1;
        const nextY = 70 + 20 * Math.sin((nextX * 2 * Math.PI) / 100);

        return {
          labels: [...prev.labels.slice(1), nextX],
          datasets: [
            {
              ...prev.datasets[0],
              data: [...prev.datasets[0].data.slice(1), nextY],
            },
          ],
        };
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <h1>🌬️ BreathState Prototype - HRV Tracker</h1>
      <Line data={chartData} />
      <p>⚠️ This is just a prototype! Real sensor data will be integrated soon.</p>
    </div>
  );
};

export default App;
