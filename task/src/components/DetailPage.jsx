import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const DetailPage = () => {
    let { state } = useLocation();
    return(
        <div className="cart-page-container">
       <Table striped>
      <tbody>
        <tr>
          <td>{state.id}</td>
          
          
        </tr>
        <tr>
        <td>{state.name}</td>
        </tr>
        <tr>
        <td>{state.description}</td>
        </tr>
      </tbody>
    </Table>
</div>
    )
}
export default DetailPage;