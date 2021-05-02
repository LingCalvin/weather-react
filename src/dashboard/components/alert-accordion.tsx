import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import {
  Error as ErrorIcon,
  ExpandMore as ExpandMoreIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
} from "@material-ui/icons";
import Alert from "../../nws/interfaces/alert";
import { Severity } from "../../nws/types/severity";
import useStyles from "./alert-accordion.styles";
import AlertInfoGrid from "./alert-info-grid";

interface AlertAccordionProps {
  alert: Alert;
}

export default function AlertAccordion({ alert }: AlertAccordionProps) {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.alertSummary}>
          {mapSeverityToIcon(alert.severity)}
          <div>{alert.event}</div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.alertDetails}>
          <Typography variant="h6">{alert.headline}</Typography>
          <Typography className={classes.preformattedElement}>
            {alert.description}
          </Typography>
          <Typography className={classes.preformattedElement}>
            {alert.instruction}
          </Typography>
          <AlertInfoGrid alert={alert} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

function mapSeverityToIcon(severity: Severity) {
  switch (severity) {
    case "extreme":
    case "severe":
      return <ErrorIcon />;
    case "moderate":
      return <WarningIcon />;
    case "minor":
      return <InfoIcon />;
    default:
      return <HelpIcon />;
  }
}
