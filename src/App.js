import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ListList from "./pages/listsList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import Login from "./pages/login/Login";
import { useContext } from 'react';
import { AuthContext } from "./context/authContext/AuthContext";



function App() {
  const { user } = useContext(AuthContext);
 
  return (
    <Router>
        <Switch>
          <Route path="/login">
          {user ? <Redirect to="/" /> : <Login /> }
          </Route>
          {user && (   
            <>  
          <Topbar />
          <div className="container">
            <Sidebar />           
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/movies">
            <ProductList />
          </Route>
          <Route path="/product/:productsId">
            <Product />
          </Route>
          <Route path="/newmovie">
            <NewProduct />
          </Route>
          <Route path="/lists">
            <ListList />
          </Route>
          <Route path="/list/:listsId">
            <List />
          </Route>
          <Route path="/newlist">
            <NewList />
          </Route>
      </div>
      </>
      )}
      </Switch>
    </Router>
  );
}

export default App;
