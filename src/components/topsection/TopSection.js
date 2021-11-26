import { Row } from "react-bootstrap";
import TotalMoneyComponent from "./moneytotal/TotalMoneyComponent";
import ProgressGraph from "./progressgraph/ProgressGraph";

function TopSection({ balance }) {
  return (
    <Row className="mt-5">
      <TotalMoneyComponent balance={balance} />
      <ProgressGraph />
    </Row>
  );
}

export default TopSection;
