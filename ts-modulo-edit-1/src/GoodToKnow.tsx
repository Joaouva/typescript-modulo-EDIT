import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {
	School as SchoolIcon,
	Code as CodeIcon,
	Book as BookIcon,
	VideoLibrary as VideoIcon,
	Forum as ForumIcon,
	GitHub as GitHubIcon,
	Article as ArticleIcon,
} from "@mui/icons-material";

const GoodToKnow: React.FC = () => {
	const resources = [
		{
			title: "📚 Documentação Oficial",
			items: [
				{
					name: "TypeScript Handbook",
					url: "https://www.typescriptlang.org/docs/",
					description: "Guia oficial completo do TypeScript",
					icon: <BookIcon />,
				},
				{
					name: "TypeScript Playground",
					url: "https://www.typescriptlang.org/play",
					description: "Experimente TypeScript online",
					icon: <CodeIcon />,
				},
			],
		},
		{
			title: "🎓 Cursos e Tutoriais",
			items: [
				{
					name: "TypeScript Tutorial for Beginners",
					url: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
					description: "Curso completo no YouTube",
					icon: <VideoIcon />,
				},
				{
					name: "TypeScript Crash Course",
					url: "https://www.youtube.com/watch?v=ahCwqrYpIuM",
					description: "Curso rápido de 2 horas",
					icon: <SchoolIcon />,
				},
			],
		},
		{
			title: "💡 Artigos e Blog Posts",
			items: [
				{
					name: "TypeScript Best Practices",
					url: "https://blog.logrocket.com/typescript-best-practices/",
					description: "Melhores práticas para TypeScript",
					icon: <ArticleIcon />,
				},
				{
					name: "TypeScript Utility Types",
					url: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
					description: "Guia completo dos tipos utilitários",
					icon: <CodeIcon />,
				},
			],
		},
		{
			title: "🔧 Ferramentas e Extensões",
			items: [
				{
					name: "ESLint TypeScript",
					url: "https://github.com/typescript-eslint/typescript-eslint",
					description: "Linter para TypeScript",
					icon: <GitHubIcon />,
				},
				{
					name: "Prettier TypeScript",
					url: "https://prettier.io/docs/en/options.html#typescript",
					description: "Formatador de código",
					icon: <CodeIcon />,
				},
			],
		},
		{
			title: "🤝 Comunidade e Fóruns",
			items: [
				{
					name: "TypeScript Discord",
					url: "https://discord.gg/typescript",
					description: "Comunidade oficial no Discord",
					icon: <ForumIcon />,
				},
				{
					name: "Stack Overflow TypeScript",
					url: "https://stackoverflow.com/questions/tagged/typescript",
					description: "Perguntas e respostas",
					icon: <ForumIcon />,
				},
			],
		},
		{
			title: "📖 Livros Recomendados",
			items: [
				{
					name: "Programming TypeScript",
					url: "https://www.oreilly.com/library/view/programming-typescript/9781492037644/",
					description: "Livro completo por Boris Cherny",
					icon: <BookIcon />,
				},
				{
					name: "TypeScript in 50 Lessons",
					url: "https://typescript-book.com/",
					description: "50 lições práticas",
					icon: <BookIcon />,
				},
			],
		},
	];

	return (
		<Box my={3}>
			<Card variant="outlined" sx={{ backgroundColor: "#f0f8ff" }}>
				<CardContent>
					<Typography variant="h4" color="primary" gutterBottom align="center">
						💡 Good to Know - Recursos para Reforço
					</Typography>
					<Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
						Aqui estão alguns recursos excelentes para continuar a sua
						aprendizagem de TypeScript
					</Typography>

					{resources.map((section, sectionIndex) => (
						<Box key={sectionIndex} mb={4}>
							<Typography variant="h5" color="text.secondary" gutterBottom>
								{section.title}
							</Typography>
							<List>
								{section.items.map((item, itemIndex) => (
									<React.Fragment key={itemIndex}>
										<ListItem>
											<ListItemIcon>{item.icon}</ListItemIcon>
											<ListItemText
												primary={
													<Link
														href={item.url}
														target="_blank"
														rel="noopener noreferrer"
														color="primary"
														sx={{ fontWeight: "bold" }}>
														{item.name}
													</Link>
												}
												secondary={item.description}
											/>
										</ListItem>
										{itemIndex < section.items.length - 1 && <Divider />}
									</React.Fragment>
								))}
							</List>
						</Box>
					))}

					<Box
						mt={4}
						p={2}
						sx={{ backgroundColor: "#e3f2fd", borderRadius: 1 }}>
						<Typography variant="h6" color="primary" gutterBottom>
							🎯 Dicas para Praticar:
						</Typography>
						<Typography variant="body2" component="div">
							<ul>
								<li>
									Experimente converter projetos JavaScript existentes para
									TypeScript
								</li>
								<li>Participe em projetos open source que usam TypeScript</li>
								<li>
									Crie pequenos projetos pessoais aplicando os conceitos
									aprendidos
								</li>
								<li>Junte-se a comunidades online para trocar experiências</li>
								<li>
									Mantenha-se atualizado com as novas funcionalidades do
									TypeScript
								</li>
							</ul>
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default GoodToKnow;
