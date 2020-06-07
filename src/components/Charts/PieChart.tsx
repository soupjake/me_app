import React from "react";
import { Theme } from "@material-ui/core/styles";
import { Pie } from "react-chartjs-2";
import { ChartData as ChartDataJS, ChartOptions } from "chart.js";
import { useTheme } from "@material-ui/styles";
import Skill from "../../models/skill";
import { chartFont, tooltipStyle } from "../../helpers/chart-helper";
import { pink, purple, deepPurple } from "@material-ui/core/colors";
import { darkBackground2, lightBackground2 } from "../../styles/styles-base";

interface PieChartProps {
  skills: Skill[];
  handleOnHover: (name: string) => void;
  smAndDown: boolean;
}

export default function PieChart(props: PieChartProps) {
  const theme: Theme = useTheme();
  const { skills, handleOnHover, smAndDown } = props;
  const colors: string[] = [pink[500], purple[500], deepPurple[500]];

  function formatData(): ChartDataJS {
    return {
      labels: skills.map((skill: Skill) => skill.name),
      datasets: [
        {
          data: skills.map((skill: Skill) => skill.value),
          backgroundColor: skills.map((_, index) => colors[index]),
          borderColor: theme.palette.type === "dark" ? darkBackground2 : lightBackground2,
          borderWidth: theme.spacing(0.5)
        }
      ]
    };
  }

  const chartOptions: ChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "right",
      align: "center",
      labels: {
        ...chartFont(theme),
        usePointStyle: true
      }
    },
    rotation: 0.5 * Math.PI,
    tooltips: tooltipStyle(theme),
    onHover: function (this: Chart, event: MouseEvent, activeElements: Array<any>) {
      if (activeElements.length) {
        const hoverIndex: number = activeElements[0]._index;
        handleOnHover(skills[hoverIndex].name);
      } else {
        handleOnHover("");
      }
    }
  };

  return <Pie height={smAndDown ? 300 : 400} data={formatData()} options={chartOptions} />;
}
