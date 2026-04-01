import {
  FiPieChart,
  FiRepeat,
  FiBookOpen,
  FiSettings,
  FiBarChart2,
  FiHeadphones,
} from "react-icons/fi";

import chart from "../assets/images/chart.jpg"
import analysis from "../assets/images/analysis.jpg"

export const featuredServices = [
  {
    title: "Portfolio Management",
    description: "Smart allocation and risk management strategies",
    image: chart,
  },
  {
    title: "Market Analysis",
    description: "Real-time data and expert reports",
    image: analysis,
  },
];

export const mainServices = [
  {
    title: "Fractional Shares",
    description:
      "Invest in Tesla with no minimums required. Start building your portfolio with any amount.",
    icon: FiPieChart,
    perks: [
      "No minimum investment",
      "Partial share ownership",
      "Flexible investment amounts",
    ],
  },
  {
    title: "Auto-Invest",
    description:
      "Set up scheduled investing and Dollar-Cost Averaging strategies to build wealth over time.",
    icon: FiRepeat,
    perks: [
      "Scheduled investments",
      "Dollar-Cost Averaging",
      "Automated portfolio growth",
    ],
  },
  {
    title: "Educational Resources",
    description:
      "Access comprehensive video courses and webinars to enhance your investment knowledge.",
    icon: FiBookOpen,
    perks: ["Video courses", "Expert webinars", "Investment guides"],
  },
  {
    title: "Smart Management",
    description:
      "Smart allocation and risk management strategies tailored to your investment goals.",
    icon: FiSettings,
    perks: ["Smart allocation", "Risk management", "Goal-based strategies"],
  },
  {
    title: "Data Insights",
    description:
      "Real-time data and expert reports to help you make informed investment decisions.",
    icon: FiBarChart2,
    perks: ["Real-time data", "Expert reports", "Market insights"],
  },
  {
    title: "Dedicated Support",
    description:
      "24/7 availability and priority support to assist you with all your investment needs.",
    icon: FiHeadphones,
    perks: ["24/7 availability", "Priority support", "Expert assistance"],
  },
];
