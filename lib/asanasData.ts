export type Categoria =
  | "Força"
  | "Alongamento"
  | "Equilíbrio"
  | "Invertidas"
  | "Sentadas/Torções";

export type Nivel = "Iniciante" | "Intermediário" | "Avançado";

export type Asana = {
  id: number;
  nome: string;
  traducao: string;
  cat: Categoria;
  nivel: Nivel;
  exp: string;
  real: string;
};

export const asanasData: Asana[] = [
  // --- 1. DE PÉ E FORÇA ---
  {
    id: 1, nome: "Tadasana", traducao: "Postura da Montanha", cat: "Força", nivel: "Iniciante",
    exp: "Encontrar estabilidade, presença e aterramento como uma montanha milenar.",
    real: "Ficar em pé parado torcendo pro professor não ver que você está desequilibrando ou pensando se desligou o ferro em casa."
  },
  {
    id: 2, nome: "Virabhadrasana I", traducao: "Guerreiro 1", cat: "Força", nivel: "Iniciante",
    exp: "Despertar a coragem espiritual e o foco inabalável mirando o horizonte.",
    real: "Tentar virar o quadril para frente enquanto o calcanhar de trás insiste em descolar do chão. Cadê a leveza?"
  },
  {
    id: 3, nome: "Virabhadrasana II", traducao: "Guerreiro 2", cat: "Força", nivel: "Iniciante",
    exp: "Manifestar a força do guerreiro, determinação e expansão dos braços.",
    real: "Sua coxa começa a queimar na terceira respiração. Você olha para o braço de trás e ele caiu sozinho."
  },
  {
    id: 4, nome: "Virabhadrasana III", traducao: "Guerreiro 3", cat: "Equilíbrio", nivel: "Avançado",
    exp: "Voar em equilíbrio perfeito, alinhando corpo e mente paralelos ao chão.",
    real: "O tornozelo da base vira uma britadeira, o tronco cai e você parece um avião monomotor caindo sem asa."
  },
  {
    id: 5, nome: "Utkatasana", traducao: "Postura da Cadeira", cat: "Força", nivel: "Iniciante",
    exp: "Gerar calor interno, purificação e fortalecer intensamente a base do corpo.",
    real: "Simulação de tortura numa cadeira invisível. Você oscila entre 'por que eu pago por isso?' e 'minha coxa vai explodir'."
  },
  {
    id: 6, nome: "Utthita Trikonasana", traducao: "Postura do Triângulo Extended", cat: "Alongamento", nivel: "Iniciante",
    exp: "Alongar as laterais do tronco e abrir o peito em perfeita geometria sagrada.",
    real: "A mão tenta chegar no pé, mas só vai até a canela. O pescoço dói de tanto olhar para a mão lá no teto."
  },
  {
    id: 7, nome: "Parivrtta Trikonasana", traducao: "Triângulo Torcido", cat: "Sentadas/Torções", nivel: "Intermediário",
    exp: "Uma torção profunda de pé que desafia o equilíbrio e limpa os canais energéticos.",
    real: "Seu cérebro buga tentando cruzar o braço oposto por fora do pé, enquanto você reza para não cair de cara no chão."
  },
  {
    id: 8, nome: "Parsvottanasana", traducao: "Alongamento Intenso Lateral", cat: "Alongamento", nivel: "Iniciante",
    exp: "Alongar profundamente os jarretes e curvar-se em reverência sobre a perna.",
    real: "A testa deveria tocar o joelho, mas sua coluna faz o formato de um corcunda de Notre Dame."
  },

  // --- 2. EQUILÍBRIO ---
  {
    id: 9, nome: "Vrikshasana", traducao: "Postura da Árvore", cat: "Equilíbrio", nivel: "Iniciante",
    exp: "Encontrar o eixo central do corpo e a estabilidade de uma raiz firme.",
    real: "Uma árvore no meio de um furacão. O pé escorrega pela calça de lycra e destrói toda a sua dignidade zen."
  },
  {
    id: 10, nome: "Garudasana", traducao: "Postura da Águia", cat: "Equilíbrio", nivel: "Intermediário",
    exp: "Foco mental absoluto e dissolução das amarras do ego através do cruzamento de membros.",
    real: "Você se amarra tanto entre braços e pernas que parece que deu um nó cego em si mesmo. Se o nariz coçar, já era."
  },
  {
    id: 11, nome: "Ardha Chandrasana", traducao: "Postura da Meia Lua", cat: "Equilíbrio", nivel: "Intermediário",
    exp: "Expandir-se em todas as direções radiando como a luz da lua.",
    real: "Equilibrar em um pé e um bloco enquanto tenta olhar pro teto sem despencar de lado feito uma jaca gorda."
  },
  {
    id: 12, nome: "Natarajasana", traducao: "Postura do Dançarino", cat: "Equilíbrio", nivel: "Avançado",
    exp: "A dança cósmica de Shiva, unindo graça, abertura de peito e equilíbrio sutil.",
    real: "A foto do Instagram fica linda, mas na realidade você chuta a mão para trás, perde o foco e sai pulando num pé só."
  },

  // --- 3. FLEXÕES E ALONGAMENTOS ---
  {
    id: 13, nome: "Uttanasana", traducao: "Flexão para Frente de Pé", cat: "Alongamento", nivel: "Iniciante",
    exp: "Soltar o peso do mundo dos ombros e alongar completamente a cadeia posterior.",
    real: "Encarar os próprios joelhos de perto enquanto descobre que a gravidade é sua inimiga e suas mãos não passam da canela."
  },
  {
    id: 14, nome: "Paschimottanasana", traducao: "Alongamento Intenso Sentado", cat: "Alongamento", nivel: "Iniciante",
    exp: "Entrega profunda ao momento presente, acalmando o sistema nervoso.",
    real: "O teste definitivo de alcance. Suas mãos miram nos pés, mas você passa o tempo todo encarando suas canelas."
  },
  {
    id: 15, nome: "Prasarita Padottanasana", traducao: "Flexão com Pernas Afastadas", cat: "Alongamento", nivel: "Iniciante",
    exp: "Inverter o fluxo sanguíneo abrindo espaço na pelve e nos adutores.",
    real: "Ficar de cabeça para baixo olhando o mundo pelo vão das pernas e torcendo para a calça não rasgar atrás."
  },
  {
    id: 16, nome: "Janu Sirsasana", traducao: "Postura do Joelho no Peito", cat: "Alongamento", nivel: "Iniciante",
    exp: "Dobrar-se com compaixão sobre uma das pernas estendidas.",
    real: "Sua testa quer encostar no joelho, mas o máximo que você consegue é agarrar a canela e puxar o ar com dificuldade."
  },

  // --- 4. RETROFLEXÕES (ABERTURA DE PEITO) ---
  {
    id: 17, nome: "Bhujangasana", traducao: "Postura da Cobra", cat: "Força", nivel: "Iniciante",
    exp: "Abrir o chakra cardíaco para o amor universal e flexibilizar a coluna.",
    real: "Tentar empurrar o chão sem usar os ombros de brinco, percebendo que sua coluna tem a flexibilidade de uma porta de madeira."
  },
  {
    id: 18, nome: "Urdhva Mukha Svanasana", traducao: "Cachorro Olhando para Cima", cat: "Força", nivel: "Iniciante",
    exp: "Iluminar o peito para frente tirando as coxas do chão com os braços fortes.",
    real: "Sustentar o corpo nos peitos dos pés enquanto esmaga a lombar e tenta lembrar de não tensionar o pescoço."
  },
  {
    id: 19, nome: "Ustrasana", traducao: "Postura do Camelo", cat: "Alongamento", nivel: "Intermediário",
    exp: "Uma abertura emocional intensa que libera vulnerabilidade e coragem.",
    real: "Uma leve tontura, a sensação de que o coração vai pular pela boca e uma vontade louca de chorar ou rir histericamente."
  },
  {
    id: 20, nome: "Dhanurasana", traducao: "Postura do Arco", cat: "Força", nivel: "Intermediário",
    exp: "Massagear os órgãos abdominais virando um arco perfeito tensionado pelas pernas.",
    real: "Você vira uma gangorra humana. Tenta segurar os tornozelos e descobre que seus braços encolheram 10 centímetros."
  },
  {
    id: 21, nome: "Urdhva Dhanurasana", traducao: "Postura da Roda (Ponte)", cat: "Força", nivel: "Avançado",
    exp: "Elevar-se em direção ao divino em uma extensão total da coluna e força dos membros.",
    real: "Tentar subir o corpo e descobrir que sua cabeça parece colada no tapete por um ímã de 2 toneladas. Os braços tremem."
  },
  {
    id: 22, nome: "Setu Bandha Sarvangasana", traducao: "Postura da Ponte", cat: "Força", nivel: "Iniciante",
    exp: "Fortalecer glúteos e pernas, estimulando a glândula tireoide.",
    real: "Entrelaçar as mãos embaixo do corpo e subir o quadril rezando para o professor não segurar por 10 respirações."
  },

  // --- 5. FORÇA SOBRE OS BRAÇOS E ABDÔMEN ---
  {
    id: 23, nome: "Chaturanga Dandasana", traducao: "Prancha Baixa", cat: "Força", nivel: "Intermediário",
    exp: "Uma transição fluida, elegante e controlada como um rio de energia.",
    real: "Uma flexão de braço gourmet. Você tenta descer travando os cotovelos e desaba feito um saco de batatas."
  },
  {
    id: 24, nome: "Navasana", traducao: "Postura do Barco", cat: "Força", nivel: "Intermediário",
    exp: "Fortalecimento do core e ativação do plexo solar, seu centro de poder.",
    real: "O abdômen treme tanto que parece um liquidificador ligado por dentro. O professor diz 'sorria' e você emana ódio."
  },
  {
    id: 25, nome: "Bakasana", traducao: "Postura do Corvo", cat: "Equilíbrio", nivel: "Avançado",
    exp: "Superar o medo tirando os pés do chão com leveza absoluta.",
    real: "Equilibrar os joelhos nos tríceps enquanto calcula mentalmente o plano de saúde caso seu nariz encontre o chão de frente."
  },
  {
    id: 26, nome: "Vasisthasana", traducao: "Prancha Lateral", cat: "Força", nivel: "Intermediário",
    exp: "Sustentar o peso em um único braço abrindo o corpo lateralmente com elegância.",
    real: "Seu pulso chora, o quadril insiste em cair atraído pelo centro da Terra e seu braço de cima parece pesado demais."
  },

  // --- 6. SENTADAS, TORÇÕES E PAUSAS ---
  {
    id: 27, nome: "Adho Mukha Svanasana", traducao: "Cachorro Olhando para Baixo", cat: "Força", nivel: "Iniciante",
    exp: "Uma postura de descanso e transição para acalmar o sistema nervoso.",
    real: "Onde os braços tremem, a panturrilha chora e você se pergunta quem achou que ficar em V invertido é descanso."
  },
  {
    id: 28, nome: "Balasana", traducao: "Postura da Criança", cat: "Alongamento", nivel: "Iniciante",
    exp: "Momento de introspecção, rendição e conexão com sua essência.",
    real: "O único momento que você agradece a Deus por encostar a testa no chão e fingir demência por 2 minutos."
  },
  {
    id: 29, nome: "Ardha Matsyendrasana", traducao: "Torção Espinal", cat: "Sentadas/Torções", nivel: "Iniciante",
    exp: "Massagear profundamente os órgãos internos e rotacionar o eixo da coluna.",
    real: "Tentar olhar para trás sem tirar o bumbum do chão, enquanto percebe que deu um nó no próprio estômago."
  },
  {
    id: 30, nome: "Baddha Konasana", traducao: "Postura da Borboleta", cat: "Alongamento", nivel: "Iniciante",
    exp: "Abertura pélvica suave e liberação de tensões emocionais estocadas no quadril.",
    real: "Bater as pernas feito uma borboleta com asa quebrada enquanto os joelhos teimam em ficar na altura das costelas."
  },
  {
    id: 31, nome: "Gomukhasana", traducao: "Postura da Cara de Vaca", cat: "Alongamento", nivel: "Iniciante",
    exp: "Alinhamento simétrico e abertura profunda de ombros e quadris simultaneamente.",
    real: "Seus dedos das mãos ficam a uma distância frustrante de 10 centímetros de se tocarem nas costas. Anatomia impossível."
  },
  {
    id: 32, nome: "Ananda Balasana", traducao: "Postura do Bebê Feliz", cat: "Alongamento", nivel: "Iniciante",
    exp: "Resgatar a leveza da infância, massageando a lombar com alegria.",
    real: "Deitado de costas segurando os pés com as pernas abertas, torcendo para que a calça não seja transparente."
  },

  // --- 7. INVERTIDAS E FINALIZAÇÃO ---
  {
    id: 33, nome: "Sirsasana", traducao: "Invertida sobre a Cabeça", cat: "Invertidas", nivel: "Avançado",
    exp: "Mudar totalmente a perspectiva da vida e oxigenar o cérebro trazendo clareza.",
    real: "O mundo ao contrário. Você prende a respiração e torce para a parede de trás estar exatamente onde você lembrava."
  },
  {
    id: 34, nome: "Sarvangasana", traducao: "Postura da Vela", cat: "Invertidas", nivel: "Intermediário",
    exp: "A rainha das posturas, estimulando todo o sistema endócrino e trazendo paz.",
    real: "Seu queixo esmaga sua garganta, sua voz some e você tenta não olhar para os lados para não travar o pescoço."
  },
  {
    id: 35, nome: "Halasana", traducao: "Postura do Arado", cat: "Invertidas", nivel: "Intermediário",
    exp: "Alongar profundamente a espinha e canalizar a energia vital para os centros superiores.",
    real: "Seus joelhos colam na sua orelha, você não consegue puxar o ar e se pergunta se é possível engolir a própria língua."
  },
  {
    id: 36, nome: "Savasana", traducao: "Postura do Cadáver", cat: "Invertidas", nivel: "Iniciante",
    exp: "Morte simbólica do ego e absorção completa de todos os benefícios da prática.",
    real: "O ápice da aula. 50% dos alunos cochilam e roncam, os outros 50% pensam na lista de compras do supermercado."
  }
];
