import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TheoreticalInfo from "./TheoreticalInfo";
import GoodToKnow from "./GoodToKnow";

// Import all exercises
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";
import Exercise7 from "./Exercise7";
import Exercise8 from "./Exercise8";
import Exercise9 from "./Exercise9";
import Exercise10 from "./Exercise10";
import Exercise11 from "./Exercise11";
import Exercise12 from "./Exercise12";
import Exercise13 from "./Exercise13";
import Exercise14 from "./Exercise14";
import Exercise15 from "./Exercise15";
import Exercise16 from "./Exercise16";
import Exercise17 from "./Exercise17";
import Exercise18 from "./Exercise18";
import Exercise19 from "./Exercise19";
import Exercise20 from "./Exercise20";
import Exercise21 from "./Exercise21";
import Exercise22 from "./Exercise22";
import Exercise23 from "./Exercise23";
import Exercise24 from "./Exercise24";
import Exercise25 from "./Exercise25";
import Exercise26 from "./Exercise26";
import Exercise27 from "./Exercise27";
import Exercise28 from "./Exercise28";
import Exercise29 from "./Exercise29";
import Exercise30 from "./Exercise30";
import Exercise31 from "./Exercise31";
import Exercise32 from "./Exercise32";
import Exercise33 from "./Exercise33";
import Exercise34 from "./Exercise34";
import Exercise35 from "./Exercise35";
import Exercise36 from "./Exercise36";
import Exercise37 from "./Exercise37";
import Exercise38 from "./Exercise38";
import Exercise39 from "./Exercise39";
import Exercise40 from "./Exercise40";
import Exercise41 from "./Exercise41";
import Exercise42 from "./Exercise42";
import Exercise43 from "./Exercise43";
import Exercise44 from "./Exercise44";
import Exercise45 from "./Exercise45";
import Exercise46 from "./Exercise46";
import Exercise47 from "./Exercise47";
import Exercise48 from "./Exercise48";
import Exercise49 from "./Exercise49";
import Exercise50 from "./Exercise50";
import Exercise51 from "./Exercise51";
import Exercise52 from "./Exercise52";
import Exercise53 from "./Exercise53";
import Exercise54 from "./Exercise54";
import Exercise55 from "./Exercise55";
import Exercise56 from "./Exercise56";
import Exercise57 from "./Exercise57";
import Exercise58 from "./Exercise58";
import Exercise59 from "./Exercise59";
import Exercise60 from "./Exercise60";
import Exercise61 from "./Exercise61";
import Exercise62 from "./Exercise62";
import Exercise63 from "./Exercise63";
import Exercise64 from "./Exercise64";
import Exercise65 from "./Exercise65";
import Exercise66 from "./Exercise66";
import Exercise67 from "./Exercise67";
import Exercise68 from "./Exercise68";
import Exercise69 from "./Exercise69";
import Exercise70 from "./Exercise70";
import Exercise71 from "./Exercise71";
import Exercise72 from "./Exercise72";
import Exercise73 from "./Exercise73";
import Exercise74 from "./Exercise74";
import Exercise75 from "./Exercise75";
import Exercise76 from "./Exercise76";
import Exercise77 from "./Exercise77";
import Exercise78 from "./Exercise78";
import Exercise79 from "./Exercise79";
import Exercise80 from "./Exercise80";
import Exercise81 from "./Exercise81";
import Exercise82 from "./Exercise82";
import Exercise83 from "./Exercise83";
import Exercise84 from "./Exercise84";
import Exercise85 from "./Exercise85";
import Exercise86 from "./Exercise86";
import Exercise87 from "./Exercise87";
import Exercise88 from "./Exercise88";
import Exercise89 from "./Exercise89";
import Exercise90 from "./Exercise90";
import Exercise91 from "./Exercise91";
import Exercise92 from "./Exercise92";
import Exercise93 from "./Exercise93";
import Exercise94 from "./Exercise94";
import Exercise95 from "./Exercise95";
import Exercise96 from "./Exercise96";
import Exercise97 from "./Exercise97";
import Exercise98 from "./Exercise98";
import Exercise99 from "./Exercise99";
import Exercise100 from "./Exercise100";
import Exercise101 from "./Exercise101";
import Exercise102 from "./Exercise102";
import Exercise103 from "./Exercise103";
import Exercise104 from "./Exercise104";
import Exercise105 from "./Exercise105";
import Exercise106 from "./Exercise106";
import Exercise107 from "./Exercise107";
import Exercise108 from "./Exercise108";
import Exercise109 from "./Exercise109";
import Exercise110 from "./Exercise110";
import Exercise111 from "./Exercise111";
import Exercise112 from "./Exercise112";
import Exercise113 from "./Exercise113";
import Exercise114 from "./Exercise114";
import Exercise115 from "./Exercise115";
import Exercise116 from "./Exercise116";
import Exercise117 from "./Exercise117";
import Exercise118 from "./Exercise118";
import Exercise119 from "./Exercise119";
import Exercise120 from "./Exercise120";
import Exercise121 from "./Exercise121";
import Exercise122 from "./Exercise122";
import Exercise123 from "./Exercise123";
import Exercise124 from "./Exercise124";
import Exercise125 from "./Exercise125";
import Exercise126 from "./Exercise126";
import Exercise127 from "./Exercise127";
import Exercise128 from "./Exercise128";
import Exercise129 from "./Exercise129";
import Exercise130 from "./Exercise130";
import Exercise131 from "./Exercise131";
import Exercise132 from "./Exercise132";
import Exercise133 from "./Exercise133";
import Exercise134 from "./Exercise134";
import Exercise135 from "./Exercise135";
import Exercise136 from "./Exercise136";
import Exercise137 from "./Exercise137";
import Exercise138 from "./Exercise138";
import Exercise139 from "./Exercise139";
import Exercise140 from "./Exercise140";
import Exercise141 from "./Exercise141";
import Exercise142 from "./Exercise142";
import Exercise143 from "./Exercise143";
import Exercise144 from "./Exercise144";
import Exercise145 from "./Exercise145";
import Exercise146 from "./Exercise146";
import Exercise147 from "./Exercise147";
import Exercise148 from "./Exercise148";
import Exercise149 from "./Exercise149";
import Exercise150 from "./Exercise150";
import Exercise151 from "./Exercise151";
import Exercise152 from "./Exercise152";
import Exercise153 from "./Exercise153";
import Exercise154 from "./Exercise154";
import Exercise155 from "./Exercise155";

import "./App.css";

// Theoretical information for each day
const theoreticalInfo = {
	day1: {
		title: "Dia 1: Tipos Básicos + Exercícios de Reforço",
		concepts: [
			{
				title: "TypeScript vs JavaScript",
				content:
					"TypeScript é um superset do JavaScript que adiciona tipagem estática. Enquanto o JavaScript é dinamicamente tipado (os tipos são verificados em runtime), o TypeScript verifica os tipos durante a compilação, ajudando a prevenir erros antes da execução.",
			},
			{
				title: "Tipos Primitivos",
				content:
					"• number: Para números inteiros e decimais\n• string: Para texto\n• boolean: Para valores verdadeiro/falso\n• null e undefined: Para valores nulos ou indefinidos",
			},
			{
				title: "Arrays e Tuplos",
				content:
					"• Arrays: number[] ou Array<number> para listas do mesmo tipo\n• Tuplos: [string, number] para arrays com tipos específicos em cada posição",
			},
		],
	},
	day2: {
		title: "Dia 2: Funções & Objetos",
		concepts: [
			{
				title: "Tipagem de Funções",
				content:
					"As funções em TypeScript podem ter tipos explícitos para parâmetros e valores de retorno. Isto ajuda a garantir que a função recebe e retorna os tipos corretos.",
			},
			{
				title: "Parâmetros Opcionais",
				content:
					"Usando ? após o nome do parâmetro, tornamos um parâmetro opcional. Parâmetros opcionais devem vir depois dos obrigatórios.",
			},
			{
				title: "Valores por Defeito",
				content:
					"Podemos definir valores padrão para parâmetros, que também tornam o parâmetro opcional.",
			},
			{
				title: "Tipos de Objetos",
				content:
					"Podemos definir a estrutura de objetos usando interfaces ou tipos inline, especificando as propriedades e seus tipos.",
			},
		],
	},
	day3: {
		title: "Dia 3: Interfaces, Enums, Tipos União & Interseção",
		concepts: [
			{
				title: "Interfaces",
				content:
					"Interfaces definem contratos para objetos, especificando quais propriedades e métodos devem existir. São fundamentais para criar código reutilizável e manter consistência.",
			},
			{
				title: "Enums",
				content:
					"Enums permitem definir um conjunto de constantes nomeadas. São úteis para representar estados, opções ou valores fixos de forma legível.",
			},
			{
				title: "Tipos União",
				content:
					"Usando |, podemos criar tipos que podem ser um de vários tipos diferentes. Útil para funções que aceitam diferentes tipos de entrada.",
			},
			{
				title: "Tipos Interseção",
				content:
					"Usando &, combinamos múltiplos tipos num só, criando um tipo que tem todas as propriedades dos tipos combinados.",
			},
		],
	},
	day4: {
		title:
			"Dia 4: Genéricos, Type Assertions, Tipos Avançados & TypeScript in React",
		concepts: [
			{
				title: "Genéricos",
				content:
					"Genéricos permitem criar código reutilizável que funciona com diferentes tipos. Usando <T>, criamos funções e classes que mantêm a tipagem correta independentemente do tipo usado.",
			},
			{
				title: "Type Assertions",
				content:
					"Permitem dizer ao TypeScript que sabemos mais sobre um tipo do que ele consegue inferir. Usamos as ou <> para fazer assertions, mas devem ser usadas com cuidado.",
			},
			{
				title: "Tipos Utilitários",
				content:
					"• Readonly<T>: Torna todas as propriedades readonly\n• Partial<T>: Torna todas as propriedades opcionais\n• Record<K, V>: Cria um tipo com chaves K e valores V\n• Pick<T, K>: Seleciona propriedades específicas de um tipo\n• Omit<T, K>: Exclui propriedades específicas de um tipo",
			},
			{
				title: "TypeScript em React",
				content:
					"• Props são tipadas usando interfaces\n• State é tipado usando useState<T>\n• Event handlers têm tipos específicos\n• Componentes podem ser genéricos",
			},
		],
	},
};

function App() {
	const [selectedDay, setSelectedDay] = useState(1);

	const renderExercises = () => {
		switch (selectedDay) {
			case 1:
				return (
					<>
						<TheoreticalInfo
							title={theoreticalInfo.day1.title}
							concepts={theoreticalInfo.day1.concepts}
						/>
						<Exercise1 />
						<Exercise2 />
						<Exercise3 />
						<Exercise4 />
						<Exercise5 />
						<Exercise26 />
						<Exercise27 />
						<Exercise28 />
						<Exercise29 />
						<Exercise30 />
						<Exercise31 />
						<Exercise32 />
						<Exercise33 />
						<Exercise34 />
						<Exercise35 />
						<Exercise36 />
						<Exercise37 />
						<Exercise38 />
						<Exercise39 />
						<Exercise40 />
					</>
				);
			case 2:
				return (
					<>
						<TheoreticalInfo
							title={theoreticalInfo.day2.title}
							concepts={theoreticalInfo.day2.concepts}
						/>
						<Exercise6 />
						<Exercise7 />
						<Exercise8 />
						<Exercise9 />
						<Exercise10 />
						<Exercise11 />
						<Exercise12 />
						<Exercise13 />
						<Exercise14 />
						<Exercise15 />
						<Exercise16 />
						<Exercise17 />
						<Exercise18 />
						<Exercise19 />
						<Exercise20 />
						<Exercise21 />
						<Exercise22 />
						<Exercise23 />
						<Exercise24 />
						<Exercise25 />
						<Exercise26 />
						<Exercise27 />
						<Exercise28 />
						<Exercise29 />
						<Exercise30 />
						<Exercise31 />
						<Exercise32 />
						<Exercise33 />
						<Exercise34 />
						<Exercise35 />
						<Exercise36 />
						<Exercise37 />
						<Exercise38 />
						<Exercise39 />
						<Exercise40 />
						<Exercise41 />
						<Exercise42 />
						<Exercise43 />
						<Exercise44 />
						<Exercise45 />
						<Exercise46 />
						<Exercise47 />
						<Exercise48 />
						<Exercise49 />
						<Exercise50 />
						<Exercise51 />
						<Exercise52 />
						<Exercise53 />
						<Exercise54 />
						<Exercise55 />
					</>
				);
			case 3:
				return (
					<>
						<TheoreticalInfo
							title={theoreticalInfo.day3.title}
							concepts={theoreticalInfo.day3.concepts}
						/>
						<Exercise56 />
						<Exercise57 />
						<Exercise58 />
						<Exercise59 />
						<Exercise60 />
						<Exercise61 />
						<Exercise62 />
						<Exercise63 />
						<Exercise64 />
						<Exercise65 />
						<Exercise66 />
						<Exercise67 />
						<Exercise68 />
						<Exercise69 />
						<Exercise70 />
						<Exercise71 />
						<Exercise72 />
						<Exercise73 />
						<Exercise74 />
						<Exercise75 />
						<Exercise76 />
						<Exercise77 />
						<Exercise78 />
						<Exercise79 />
						<Exercise80 />
						<Exercise81 />
						<Exercise82 />
						<Exercise83 />
						<Exercise84 />
						<Exercise85 />
						<Exercise86 />
						<Exercise87 />
						<Exercise88 />
						<Exercise89 />
						<Exercise90 />
						<Exercise91 />
						<Exercise92 />
						<Exercise93 />
						<Exercise94 />
						<Exercise95 />
						<Exercise96 />
						<Exercise97 />
						<Exercise98 />
						<Exercise99 />
						<Exercise100 />
						<Exercise101 />
						<Exercise102 />
						<Exercise103 />
						<Exercise104 />
						<Exercise105 />
					</>
				);
			case 4:
				return (
					<>
						<TheoreticalInfo
							title={theoreticalInfo.day4.title}
							concepts={theoreticalInfo.day4.concepts}
						/>
						<Exercise106 />
						<Exercise107 />
						<Exercise108 />
						<Exercise109 />
						<Exercise110 />
						<Exercise111 />
						<Exercise112 />
						<Exercise113 />
						<Exercise114 />
						<Exercise115 />
						<Exercise116 />
						<Exercise117 />
						<Exercise118 />
						<Exercise119 />
						<Exercise120 />
						<Exercise121 />
						<Exercise122 />
						<Exercise123 />
						<Exercise124 />
						<Exercise125 />
						<Exercise126 />
						<Exercise127 />
						<Exercise128 />
						<Exercise129 />
						<Exercise130 />
						<Exercise131 />
						<Exercise132 />
						<Exercise133 />
						<Exercise134 />
						<Exercise135 />
						<Exercise136 />
						<Exercise137 />
						<Exercise138 />
						<Exercise139 />
						<Exercise140 />
						<Exercise141 />
						<Exercise142 />
						<Exercise143 />
						<Exercise144 />
						<Exercise145 />
						<Exercise146 />
						<Exercise147 />
						<Exercise148 />
						<Exercise149 />
						<Exercise150 />
						<Exercise151 />
						<Exercise152 />
						<Exercise153 />
						<Exercise154 />
						<Exercise155 />
					</>
				);
			case 5:
				return <GoodToKnow />;
			default:
				return null;
		}
	};

	return (
		<Container maxWidth="md">
			<Typography variant="h3" align="center" gutterBottom sx={{ mt: 4 }}>
				TypeScript Exercises
			</Typography>
			<Typography
				variant="body1"
				align="center"
				sx={{ mb: 3, maxWidth: 600, mx: "auto" }}>
				Welcome! Use the navigation below to select a day. Each day contains
				exercises covering different TypeScript topics. Read the theoretical
				information at the top of each day for concepts, then try to solve the
				exercises yourself before looking at the solution!
			</Typography>
			<Box
				display="flex"
				justifyContent="center"
				mb={3}
				flexWrap="wrap"
				gap={1}>
				{[1, 2, 3, 4, 5].map((day) => (
					<button
						key={day}
						onClick={() => setSelectedDay(day)}
						style={{
							padding: "8px 16px",
							background: selectedDay === day ? "#1976d2" : "#eee",
							color: selectedDay === day ? "#fff" : "#222",
							border: "none",
							borderRadius: 4,
							cursor: "pointer",
							fontWeight: selectedDay === day ? "bold" : "normal",
						}}>
						{day <= 4 ? `Day ${day}` : "Good to Know"}
					</button>
				))}
			</Box>
			<Typography variant="h5" align="center" gutterBottom>
				{selectedDay <= 4 ? `Day ${selectedDay}` : "Good to Know"}
			</Typography>
			{renderExercises()}
		</Container>
	);
}

export default App;
