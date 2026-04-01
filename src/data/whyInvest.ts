import { FiTrendingUp } from "react-icons/fi";
import { LuShield, LuUsers } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import type { IconType } from "react-icons";

export type benefitsItem = {
  title: string;
  description: string;
  icon: IconType;
};

export const benefits: benefitsItem[] = [
  {
    title: "High Growth Potential",
    description:
      "Investing in Tesla means participating in the rapid expansion of electric vehicles and renewable energy markets.",
    icon: FiTrendingUp,
  },
  {
    title: "Secure Investment",
    description:
      "Our high-security standards ensure your investments are protected with military-grade encryption.",
    icon: LuShield,
  },
  {
    title: "Instant Execution",
    description:
      "Enjoy lightning-fast trade executions and real-time portfolio updates on our advanced trading terminal.",
    icon: BsLightningCharge,
  },
  {
    title: "Expert Support",
    description:
      "Our team of financial specialists is available 24/7 to help you navigate the ever-changing market landscape.",
    icon: LuUsers,
  },
];