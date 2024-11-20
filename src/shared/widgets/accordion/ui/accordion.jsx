import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import './accordion.css'

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
    className="custom-accordion"
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} className="custom-accordion-summary" />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const CustomAccordion = ({ panels }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className="custom-accordion-container">
      {panels.map((panel, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            expandIcon={
              expanded === `panel${index}` ? (
                <Typography variant="h6">-</Typography>
              ) : (
                <Typography variant="h6">+</Typography>
              )
            }
          >
            <Typography>{panel.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="custom-accordion-details">
            {typeof panel.content === 'object' &&
            !Array.isArray(panel.content) ? (
              // Content is an object with categories
              Object.entries(panel.content).map(
                ([category, items], categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="custom-accordion-category"
                  >
                    <Typography
                      variant="h6"
                      className="custom-accordion-category-title"
                    >
                      {category}
                    </Typography>
                    {items.map((item, itemIndex) => (
                      <div key={itemIndex} className="custom-accordion-item">
                        <Typography className="custom-accordion-item-title">
                          {item.title}
                        </Typography>
                        <Typography className="custom-accordion-item-value">
                          {item.value}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )
              )
            ) : Array.isArray(panel.content) ? (
              // Content is an array of title-value pairs
              panel.content.map((item, itemIndex) => (
                <div key={itemIndex} className="custom-accordion-item">
                  <Typography className="custom-accordion-item-title">
                    {item.title}
                  </Typography>
                  <Typography className="custom-accordion-item-value">
                    {item.value}
                  </Typography>
                </div>
              ))
            ) : (
              <Typography className="custom-accordion-item">
                {panel.content}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

CustomAccordion.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object, // For category-style content
        PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
          })
        ),
      ]).isRequired,
    })
  ).isRequired,
}

export default CustomAccordion
