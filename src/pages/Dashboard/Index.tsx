import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { format, subMonths } from "date-fns";
import "chart.js/auto";
import "./index.css";
import useTitle from "../../core/components/Header/hook/useTitle";

interface props {
  title: string;
}

export default function Dashboard({ title }: props) {
  const { defineTitle } = useTitle();
  defineTitle(title);

  const currentDate = new Date();
  const months = [];

  for (let i = 0; i < 6; i++) {
    const month = format(subMonths(currentDate, i), "MMMM");
    months.unshift(month);
  }

  const dataqtdSales = {
    labels: months,
    datasets: [
      {
        label: "Pizzas",
        data: [12, 19, 3, 5, 2, 20],
        backgroundColor: "#761616",
        borderColor: "#761616",
        borderWidth: 1,
        barThickness: 120,
      },
    ],
  };

  const optionsqtdSales = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const datatopPizzas = {
    labels: ["Calabresa", "Margherita", "4 Queijos"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#962820", "#465F12", "#BB9800"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const datagastosGanhos = {
    labels: ["Gastos", "Ganhos"],
    datasets: [
      {
        label: "Pizzas",
        data: [12, 19],
        backgroundColor: ["#761616", "#465F12"],
        borderColor: "#761616",
        borderWidth: 1,
      },
    ],
  };

  const optionsgastosGanhos = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container">
      <div className="qtdSales">
        <p className="escritaGrafico">Pizzas Vendidas por Mês</p>
        <Bar
          className="graficoQtdSales"
          data={dataqtdSales}
          options={optionsqtdSales}
        />
      </div>
      <div className="graficosInferiores">
        <div className="topPizzas">
          <p className="escritaGrafico">Top 3 Pizzas Favoritas do Mês</p>
          <Pie data={datatopPizzas} />
        </div>
        <div className="gastosGanhos">
          <p className="escritaGrafico">Lucros no Mês</p>
          <Bar data={datagastosGanhos} options={optionsgastosGanhos} />
        </div>
      </div>
    </div>
  );
}
