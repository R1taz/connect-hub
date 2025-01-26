import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
	AccordionSummaryProps,
	accordionSummaryClasses,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.divider}`,
	borderBottom: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&::before': {
		display: 'none',
	},
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	[`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
		{
			transform: 'rotate(45deg)',
		},
	[`& .${accordionSummaryClasses.content}`]: {
		marginLeft: theme.spacing(1),
	},
	...theme.applyStyles('dark', {
		backgroundColor: 'rgba(77, 62, 62, 0.05)',
	}),
	padding: '10px 0px',
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions() {
	const [expanded, setExpanded] = React.useState<string | false>('panel1')

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<Box sx={{ mt: 5 }}>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary
					expandIcon={<AddCircleOutlineOutlinedIcon sx={{ color: 'black' }} />}
				>
					<Typography component='span'>ОТСЛЕЖИВАНИЕ СОСТОЯНИЯ ОПОР</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Мы проводим регулярные обследования опор линий электропередачи,
						чтобы выявить возможные проблемы и предотвратить аварийные ситуации.
						Наши специалисты используют современное оборудование и методы,
						которые позволяют получить точные и достоверные данные о состоянии
						опор.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<AccordionSummary
					expandIcon={<AddCircleOutlineOutlinedIcon sx={{ color: 'black' }} />}
				>
					<Typography component='span'>ПОИСК ОПТИМАЛЬНЫХ ОПОР</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Мы помогаем предприятиям и организациям выбрать наиболее подходящие
						опоры для их нужд. Мы учитываем все факторы, влияющие на выбор опор,
						включая технические характеристики, стоимость, доступность и другие
						параметры.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<AccordionSummary
					expandIcon={<AddCircleOutlineOutlinedIcon sx={{ color: 'black' }} />}
				>
					<Typography component='span'>
						УСТРАНЕНИЕ НЕЛЕГАЛЬНЫХ ПОДКЛЮЧЕНИЙ
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Мы боремся с нелегальными подключениями к опорам линий
						электропередачи, которые могут привести к авариям и перебоям в
						электроснабжении. Наши специалисты проводят рейды и проверки,
						выявляют нелегальные подключения и принимают меры по их устранению.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}
			>
				<AccordionSummary
					expandIcon={<AddCircleOutlineOutlinedIcon sx={{ color: 'black' }} />}
				>
					<Typography component='span'>
						ОТПРАВКА ЗАЯВОК НА ПОДКЛЮЧЕНИЕ
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Мы помогаем предприятиям и организациям быстро и просто отправить
						заявку на подключение к опорам линий электропередачи. Мы
						предоставляем онлайн-форму для заполнения заявки, которая позволяет
						отправить её в один клик.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}
