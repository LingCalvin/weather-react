import Alert from "../../nws/interfaces/alert";
import AlertAccordion from "../components/alert-accordion";

interface AlertsPageProps {
  alerts: Alert[];
}

export default function AlertsPage({ alerts }: AlertsPageProps) {
  return (
    <>
      {alerts.map((alert) => (
        <AlertAccordion key={alert.id} alert={alert} />
      ))}
    </>
  );
}
