import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { ListContext } from '../../context/listContext/ListsContext';
import { getLists, deleteList } from '../../context/listContext/apiCall';

export default function ListList() {
  const {lists, dispatch} = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
   deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    { field: "title", headerName: "Title", width: 220 },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "type", headerName: "Type", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={ {pathname : "/list/" + params.row._id, list: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="button">
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>      
        </div>
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  );
}
