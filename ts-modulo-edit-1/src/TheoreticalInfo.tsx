import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import { Collapse } from "@mui/material";

interface TheoreticalInfoProps {
	title: string;
	concepts: {
		title: string;
		content: string;
	}[];
}

const TheoreticalInfo: React.FC<TheoreticalInfoProps> = ({
	title,
	concepts,
}) => {
	const [expanded, setExpanded] = React.useState(false);

	return (
		<Box my={3}>
			<Card variant="outlined" sx={{ backgroundColor: "#f8f9fa" }}>
				<CardContent>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						mb={2}>
						<Typography variant="h5" color="primary">
							📚 {title}
						</Typography>
						<Button
							variant="outlined"
							size="small"
							onClick={() => setExpanded(!expanded)}
							endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
							{expanded ? "Hide Theory" : "Show Theory"}
						</Button>
					</Box>
					<Collapse in={expanded}>
						<Box>
							{concepts.map((concept, index) => (
								<Box key={index} mb={2}>
									<Typography variant="h6" color="text.secondary" gutterBottom>
										{concept.title}
									</Typography>
									<Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
										{concept.content}
									</Typography>
								</Box>
							))}
						</Box>
					</Collapse>
				</CardContent>
			</Card>
		</Box>
	);
};

export default TheoreticalInfo;
