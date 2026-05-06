// js/data/questions/bloco3.js
// Bloco 3 — Grandezas e Medidas
// EF07MA20, EF08MA07 — Unidades, Área, Perímetro, Conversões

export const bloco3 = [

    // ── UNIDADES DE COMPRIMENTO ─────────────────────────────────────────
    {
        id:"B3Q01", bloco:3, aula:1, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Comprimento",
        display:"2,5 km equivalem a quantos metros?",
        botoes:["2.500 m","250 m","25.000 m","0,25 m"],
        res:"2.500 m", erroConceito:["250 m"],
        passo:"1 km = 1.000 m. 2,5 × 1.000 = 2.500 m.",
        dica:"Para converter km em m, multiplique por 1.000."
    },
    {
        id:"B3Q02", bloco:3, aula:1, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Comprimento",
        display:"350 cm equivalem a quantos metros?",
        botoes:["3,5 m","35 m","0,35 m","3.500 m"],
        res:"3,5 m", erroConceito:["35 m"],
        passo:"1 m = 100 cm. 350 ÷ 100 = 3,5 m.",
        dica:"Para converter cm em m, divida por 100."
    },
    {
        id:"B3Q03", bloco:3, aula:1, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Comprimento",
        display:"Uma sala tem 4,2 m de largura. Quantos centímetros?",
        botoes:["420 cm","42 cm","4.200 cm","0,042 cm"],
        res:"420 cm", erroConceito:["4.200 cm"],
        passo:"1 m = 100 cm. 4,2 × 100 = 420 cm.",
        dica:"Metros para centímetros: multiplique por 100."
    },

    // ── UNIDADES DE MASSA ───────────────────────────────────────────────
    {
        id:"B3Q04", bloco:3, aula:2, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Massa",
        display:"3,75 kg equivalem a quantos gramas?",
        botoes:["3.750 g","375 g","37.500 g","0,375 g"],
        res:"3.750 g", erroConceito:["375 g"],
        passo:"1 kg = 1.000 g. 3,75 × 1.000 = 3.750 g.",
        dica:"Para kg em g, multiplique por 1.000."
    },
    {
        id:"B3Q05", bloco:3, aula:2, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Massa",
        display:"Uma embalagem de 2,4 kg. O rótulo indica o peso em gramas. Qual valor?",
        botoes:["2.400 g","240 g","24 g","24.000 g"],
        res:"2.400 g", erroConceito:["240 g"],
        passo:"2,4 kg × 1.000 = 2.400 g.",
        dica:"Multiplique por 1.000 para converter kg em g."
    },

    // ── UNIDADES DE TEMPO ───────────────────────────────────────────────
    {
        id:"B3Q06", bloco:3, aula:3, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Tempo",
        display:"2 horas e 45 minutos em minutos:",
        botoes:["165 min","245 min","125 min","145 min"],
        res:"165 min", erroConceito:["245 min"],
        passo:"2 h = 120 min. 120 + 45 = 165 minutos.",
        dica:"Converta as horas (× 60) e some os minutos restantes."
    },
    {
        id:"B3Q07", bloco:3, aula:3, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Tempo",
        display:"3.600 segundos equivalem a quantas horas?",
        botoes:["1 hora","36 horas","60 horas","6 horas"],
        res:"1 hora", erroConceito:["60 horas"],
        passo:"1 hora = 3.600 segundos. 3.600 ÷ 3.600 = 1 hora.",
        dica:"1 hora = 60 min = 3.600 s."
    },

    // ── PERÍMETRO ───────────────────────────────────────────────────────
    {
        id:"B3Q08", bloco:3, aula:4, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Perímetro de Retângulo",
        display:"Retângulo: comprimento 8 m e largura 5 m. Qual é o perímetro?",
        botoes:["26 m","40 m","13 m","80 m"],
        res:"26 m", erroConceito:["40 m"],
        passo:"P = 2 × (8 + 5) = 2 × 13 = 26 m.",
        dica:"Perímetro do retângulo = 2 × (comprimento + largura)."
    },
    {
        id:"B3Q09", bloco:3, aula:4, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Perímetro de Quadrado",
        display:"Quadrado com lado de 7,5 cm. Qual é o perímetro?",
        botoes:["30 cm","56,25 cm","15 cm","7,5 cm"],
        res:"30 cm", erroConceito:["56,25 cm"],
        passo:"P = 4 × 7,5 = 30 cm.",
        dica:"Perímetro do quadrado = 4 × lado."
    },
    {
        id:"B3Q10", bloco:3, aula:4, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Perímetro — Contexto Cerca",
        display:"Terreno retangular: 15 m × 10 m. Quantos metros de cerca para cercar tudo?",
        botoes:["50 m","150 m","25 m","52 m"],
        res:"50 m", erroConceito:["150 m"],
        passo:"P = 2 × (15 + 10) = 2 × 25 = 50 m.",
        dica:"Cercar = perímetro. P = 2 × (l + c)."
    },

    // ── ÁREA ─────────────────────────────────────────────────────────────
    {
        id:"B3Q11", bloco:3, aula:5, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Área de Retângulo",
        display:"Retângulo: 9 m de comprimento e 4 m de largura. Qual é a área?",
        botoes:["36 m²","26 m²","13 m²","72 m²"],
        res:"36 m²", erroConceito:["26 m²"],
        passo:"A = 9 × 4 = 36 m².",
        dica:"Área do retângulo = comprimento × largura."
    },
    {
        id:"B3Q12", bloco:3, aula:5, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Área de Quadrado",
        display:"Quadrado com lado de 6 cm. Qual é a área?",
        botoes:["36 cm²","24 cm²","12 cm²","66 cm²"],
        res:"36 cm²", erroConceito:["24 cm²"],
        passo:"A = 6² = 36 cm².",
        dica:"Área do quadrado = lado². Por isso o nome 'quadrado'!"
    },
    {
        id:"B3Q13", bloco:3, aula:5, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Área de Triângulo",
        display:"Triângulo com base 10 cm e altura 6 cm. Qual é a área?",
        botoes:["30 cm²","60 cm²","16 cm²","15 cm²"],
        res:"30 cm²", erroConceito:["60 cm²"],
        passo:"A = (base × altura) ÷ 2 = (10 × 6) ÷ 2 = 30 cm².",
        dica:"Área do triângulo = base × altura ÷ 2."
    },
    {
        id:"B3Q14", bloco:3, aula:5, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Área — Contexto Piso",
        display:"Sala retangular: 5 m × 4 m. Quantos m² de piso?",
        botoes:["20 m²","18 m²","9 m²","40 m²"],
        res:"20 m²", erroConceito:["18 m²"],
        passo:"A = 5 × 4 = 20 m².",
        dica:"Área = comprimento × largura para calcular pisos e revestimentos."
    },
    {
        id:"B3Q15", bloco:3, aula:5, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Área vs Perímetro",
        display:"Dobrando o lado de um quadrado, o que acontece com a área?",
        botoes:["Quadruplica (×4)","Dobra (×2)","Triplica (×3)","Fica igual"],
        res:"Quadruplica (×4)", erroConceito:["Dobra (×2)"],
        passo:"Lado l → área l². Lado 2l → área (2l)² = 4l². A área quadruplica.",
        dica:"Área depende do quadrado do lado. Dobrar o lado quadruplica a área."
    },

    // ── VOLUME ───────────────────────────────────────────────────────────
    {
        id:"B3Q16", bloco:3, aula:6, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Volume de Paralelepípedo",
        display:"Caixa retangular: 5 cm × 3 cm × 4 cm. Qual é o volume?",
        botoes:["60 cm³","47 cm³","12 cm³","120 cm³"],
        res:"60 cm³", erroConceito:["120 cm³"],
        passo:"V = 5 × 3 × 4 = 60 cm³.",
        dica:"Volume do paralelepípedo = comprimento × largura × altura."
    },
    {
        id:"B3Q17", bloco:3, aula:6, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Volume de Cubo",
        display:"Cubo com aresta de 5 cm. Qual é o volume?",
        botoes:["125 cm³","25 cm³","15 cm³","75 cm³"],
        res:"125 cm³", erroConceito:["25 cm³"],
        passo:"V = 5³ = 5 × 5 × 5 = 125 cm³.",
        dica:"Volume do cubo = aresta³. Por isso chamamos de 'cubo'!"
    },

    // ── UNIDADES DE CAPACIDADE ──────────────────────────────────────────
    {
        id:"B3Q18", bloco:3, aula:7, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Capacidade",
        display:"2,5 litros equivalem a quantos mililitros?",
        botoes:["2.500 mL","250 mL","25 mL","25.000 mL"],
        res:"2.500 mL", erroConceito:["250 mL"],
        passo:"1 L = 1.000 mL. 2,5 × 1.000 = 2.500 mL.",
        dica:"Para converter litros em mililitros, multiplique por 1.000."
    },
    {
        id:"B3Q19", bloco:3, aula:7, tipo:"aritmetica",
        bncc:"EF07MA20", bncc_desc:"Conversão de Capacidade — Contexto",
        display:"Uma piscina tem 12.000 litros. Quantos m³?",
        botoes:["12 m³","1.200 m³","0,12 m³","120 m³"],
        res:"12 m³", erroConceito:["1.200 m³"],
        passo:"1 m³ = 1.000 L. 12.000 ÷ 1.000 = 12 m³.",
        dica:"1 m³ = 1.000 L. Para converter L em m³, divida por 1.000."
    },

    // ── PROBLEMAS INTEGRADORES ───────────────────────────────────────────
    {
        id:"B3Q20", bloco:3, aula:8, tipo:"aritmetica",
        bncc:"EF08MA07", bncc_desc:"Grandezas — Problema Integrador",
        display:"Cômodo: 4,5 m × 3 m. Piso de cerâmica: R$45,00/m². Custo total?",
        botoes:["R$ 607,50","R$ 337,50","R$ 135,00","R$ 675,00"],
        res:"R$ 607,50", erroConceito:["R$ 337,50"],
        passo:"Área = 4,5 × 3 = 13,5 m². Custo = 13,5 × 45 = R$ 607,50.",
        dica:"Calcule a área primeiro, depois multiplique pelo preço por m²."
    }
];
