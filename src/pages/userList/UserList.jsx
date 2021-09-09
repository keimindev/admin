import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { useEffect, useContext } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCall";

export default function UserList() {
  const {users, dispatch} = useContext(UserContext);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  useEffect( () => {
    getUsers(dispatch)
  }, [dispatch])


  
  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "createdAt", headerName: "Created", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={ {pathname: "/user/" + params.row._id, user: params.row} }>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  );
}
