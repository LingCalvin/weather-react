import Alert from "../../nws/interfaces/alert";
import AlertInfoGridItem from "./alert-info-grid-item";
import useStyles from "./alert-info-grid.styles";

interface AlertInfoGridProps {
  alert: Alert;
}

export default function AlertInfoGrid({ alert }: AlertInfoGridProps) {
  const classes = useStyles();
  const rows = [
    ["Effective", new Date(alert.effective).toLocaleString()],
    ["Expires", new Date(alert.expires).toLocaleString()],
    ["Status", alert.status],
    ["Message type", alert.messageType],
    ["Category", alert.category],
    ["Severity", alert.severity],
    ["Urgency", alert.urgency],
    ["Sender", alert.senderName],
  ];
  return (
    <div className={classes.alertInfoGrid}>
      {rows.map((row) => (
        <AlertInfoGridItem key={row[0]} heading={row[0]} data={row[1]} />
      ))}
    </div>
  );
}
