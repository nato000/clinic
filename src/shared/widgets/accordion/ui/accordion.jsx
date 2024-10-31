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
            {Array.isArray(panel.content) ? (
              panel.content.map((item, i) => {
                if (Array.isArray(item)) {
                  return (
                    <Typography
                      key={i}
                      paragraph
                      className="custom-accordion-item"
                    >
                      <span className="custom-accordion-value-title">
                        {item[0]}
                      </span>
                      <span className="custom-accordion-value">
                        {item[1].split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </span>
                      {item[2] && (
                        <span className="custom-accordion-value-price">
                          {item[2].split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </span>
                      )}
                    </Typography>
                  )
                }
                return (
                  <Typography
                    key={i}
                    paragraph
                    className="custom-accordion-item"
                  >
                    {item.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                )
              })
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
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
          ])
        ),
      ]).isRequired,
    })
  ).isRequired,
}

export default CustomAccordion
