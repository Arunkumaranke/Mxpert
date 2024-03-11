import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";

const TableData = (props) => {
    const [users, setUsers] = useState(props?.data?.slice(0,30));
    const [pageNumber, setPageNumber] = useState(0);

    const userperPage = 10;
    const pageVisited = pageNumber * userperPage;
    const pageCount = Math.ceil(users.length / userperPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
      useEffect(() => {
        setUsers(props?.data?.slice(0,30))
      },[props?.data])
    const displayUsers = users.slice(pageVisited, pageVisited + userperPage).map((item,key) =>
        
          
            <tr key={key}>
                        <td>{key+1}</td>
                        <td>{item.name}</td>
         <td>
            <Link to={`/${key+1}`} state={item}>
            <img src={item.img} alt="" />
            </Link>
            </td>
        </tr>
        
        );
        
    return(
        <>
<Table striped responsive className="user">
      <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Car</th>
        </tr>
        
      </thead>
      <tbody>
        
            {displayUsers}
        
      </tbody>
    </Table>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
            </>
    )
}
export default TableData;