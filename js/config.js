const local_api = "http://127.0.0.1:8000";
const remote_api = "https://api-master.onrender.com";

const api_url = window.location.protocol === "https:" ? remote_api : local_api;

const title = "Technician";

document.querySelector("title").innerHTML = title;

const SKILLS = [
  { id: 0, label: "Electricidade" },
  { id: 1, label: "TI" },
  { id: 2, label: "Canalização" },
  { id: 3, label: "Mecânica" },
  { id: 4, label: "Construção Civil" },
  { id: 5, label: "Contabilidade" },
  { id: 6, label: "Enfermagem" },
  { id: 7, label: "Design gráfico" },
  { id: 8, label: "Frio" },
  { id: 9, label: "Educação de infância" },
  { id: 10, label: "Gestão/Administração" },
];

const BAIRROS = [
  { id: 1, label: " Central (A, B e C)" },
  { id: 2, label: "Alto Maé (A e B)" },
  { id: 3, label: "Malhangalene (A e B)" },
  { id: 4, label: "Polana cimento (A e B)" },
  { id: 5, label: "Coop" },
  { id: 6, label: "Sommerschield" },
  { id: 7, label: "Aeroporto (A e B)" },
  { id: 8, label: "Xipamanine" },
  { id: 9, label: "Minkadjuine" },
  { id: 10, label: "Unidade 7" },
  { id: 11, label: "Chamanculo (A à D)" },
  { id: 12, label: "Malanga" },
  { id: 13, label: "Munhuana" },
  { id: 14, label: "Mafalala" },
  { id: 15, label: "Maxaquene (A à D)" },
  { id: 16, label: "Polana caniço (A e B)" },
  { id: 17, label: "Urbanização" },
  { id: 18, label: "Mavalane (A e B)" },
  { id: 19, label: "FPLM" },
  { id: 20, label: "Hulene (A e B)" },
  { id: 22, label: "Ferroviário" },
  { id: 23, label: "Laulane" },
  { id: 24, label: "3 de Fevereiro" },
  { id: 25, label: "Mahotas" },
  { id: 26, label: "Albazine" },
  { id: 27, label: "Costa do Sol" },
  { id: 28, label: "Bagamoyo" },
  { id: 29, label: "George Dimitrov (Benfica)" },
  { id: 30, label: "Inhagoia (A e B)" },
  { id: 31, label: "Jardim" },
  { id: 32, label: "Luiz Cabral" },
  { id: 33, label: "Magoanine" },
  { id: 34, label: "Malhazine" },
  { id: 35, label: "Nsalane" },
  { id: 36, label: "25 de Junho (A e B - Choupal)" },
  { id: 37, label: "Zimpeto" },
  { id: 38, label: "Guachene" },
  { id: 39, label: "Chali" },
  { id: 40, label: "Inguide" },
  { id: 41, label: "Incassane" },
  { id: 42, label: "Chamissava" },
  { id: 43, label: "Inguane" },
  { id: 44, label: "Rabjene" },
  { id: 45, label: "Nhaquene" },
];
