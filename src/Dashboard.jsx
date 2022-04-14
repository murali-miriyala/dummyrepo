import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "../src/NavBar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import AllEmployee from "./pages/AllEmployees/Components/AllEmployee";
import Admin from "./pages/AdminAttendance/Components/Admin";
import EmpAttendance from "./pages/EmployeeAttendance/Components/EmpAttendance";
import Department from "./pages/Departments/Components/Department";
import Designation from "./pages/Designation/Components/Designation";
import TimeSheet from "./pages/TimeSheet/Components/TimeSheet";




function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllEmployee} />
          <Route path="/admin" component={Admin} />
          <Route path="/employee" component={EmpAttendance} />
          <Route path="/department" component={Department} />
          <Route path="/designation" component={Designation} />
          <Route path="/timeSheet" component={TimeSheet} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
