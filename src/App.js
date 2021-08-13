import { BrowserRouter, Route, Link } from "react-router-dom";
import Create from "./Create";
import Edit from "./Edit";
import Table from "./Table";


function App() {
  return (
    <div className="main">
      <h1>Simple Application</h1>
      <BrowserRouter>
      <Route exact path="/">
      <Link to="/add">tambah item</Link>
      <Table />
      </Route>
      <Route exact path="/add">
      <Create />
      </Route>
      <Route path="/edit/:id">
      <Edit />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
