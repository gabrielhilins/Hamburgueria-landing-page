import { FaTrophy, FaStar, FaFireAlt, FaClipboardList, FaBoxOpen, FaMotorcycle } from 'react-icons/fa';

export const awards = [
  {
    title: "Melhor Burger 2024",
    org: "Guia Gastronômico SP",
    desc: "Eleito pelo júri popular e crítica especializada como o melhor smash da capital.",
    icon: FaTrophy
  },
  {
    title: "Top 10 Delivery",
    org: "iFood Awards",
    desc: "Entre as 10 hamburguerias com melhor avaliação e tempo de entrega do estado.",
    icon: FaStar
  },
  {
    title: "Selo de Excelência",
    org: "TripAdvisor",
    desc: "Certificado de excelência baseado nas avaliações constantes de 5 estrelas.",
    icon: FaFireAlt
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Pedido Confirmado",
    desc: "Recebimento instantâneo no nosso painel digital.",
    icon: FaClipboardList
  },
  {
    step: "02",
    title: "A Forja",
    desc: "O blend vai pra chapa quente. Selagem perfeita.",
    icon: FaFireAlt
  },
  {
    step: "03",
    title: "Montagem Blindada",
    desc: "Conferência de itens e embalagem térmica segura.",
    icon: FaBoxOpen
  },
  {
    step: "04",
    title: "Envio Rápido",
    desc: "Motoboys exclusivos para entrega expressa.",
    icon: FaMotorcycle
  }
];

export const stats = [
  { label: "Burgers Vendidos", value: "50k+" },
  { label: "Anos de Brasa", value: "6" },
  { label: "Avaliação", value: "4.9/5" },
  { label: "Opções no Menu", value: "25+" },
];
