export type StoneMeaning = {
  stone: string;
  meaning: string;
};

export type Japamala = {
  id: string;
  slug: string;
  name: string;
  description: string;
  material: string;
  beadsCount: number;
  priceLabel: string;
  images: string[];
  available: boolean;
  featured?: boolean;
  meanings?: StoneMeaning[];
};

export const japamalas: Japamala[] = [
  {
    id: "1",
    slug: "devocao-e-vitalidade",
    name: "Devoção & Vitalidade",
    description:
      "Japamala de 108 contas em cristal âmbar e cristal vermelho, unidas por entremeios dourados e guru bead em madeira. Finalizada com medalha em metal envelhecido — coração emoldurando Nossa Senhora — e borla em fio de seda vermelho. Peça única, feita à mão.",
    material: "Cristal âmbar e cristal vermelho",
    beadsCount: 108,
    priceLabel: "Sob consulta",
    images: ["/images/loja/japamala-ambar-vermelho.jpg"],
    available: true,
    featured: true,
    meanings: [
      { stone: "Cristal âmbar", meaning: "luz, vitalidade e proteção" },
      { stone: "Cristal vermelho", meaning: "força, coragem e energia vital" },
      { stone: "Medalha coração & Nossa Senhora", meaning: "fé, amor e devoção" },
    ],
  },
  {
    id: "2",
    slug: "ancoragem-e-protecao",
    name: "Ancoragem & Proteção",
    description:
      "Japamala de 108 contas combinando cristal âmbar, preto e verde folha, hematita, olho de tigre azul, olho de tigre marrom, granada e ônix preta. Guru bead em madeira âmbar e borla em fio de seda dourado. Peça única, feita à mão, ideal para práticas de proteção e ancoragem.",
    material:
      "Cristal âmbar, preto e verde folha, hematita, olho de tigre azul e marrom, granada e ônix preta",
    beadsCount: 108,
    priceLabel: "Sob consulta",
    images: ["/images/loja/japamala-multicolor-protecao.jpg"],
    available: true,
    meanings: [
      { stone: "Cristal âmbar", meaning: "luz e vitalidade" },
      { stone: "Ônix preta", meaning: "proteção e ancoragem" },
      { stone: "Cristal verde folha", meaning: "renovação e equilíbrio" },
      { stone: "Hematita", meaning: "aterramento e força" },
      { stone: "Olho de tigre azul", meaning: "clareza mental e intuição" },
      { stone: "Olho de tigre marrom", meaning: "coragem e autoconfiança" },
      { stone: "Granada", meaning: "paixão e vitalidade criativa" },
    ],
  },
];
