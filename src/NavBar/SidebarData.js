import React from "react";



import { FaHome, FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { MdSend, MdPeople, MdHelp } from "react-icons/md";



export const SidebarData = [
{
title: "All Employees",
path: "/",
icon: <FaHome />,
cName: "nav-text"
},
{
title: "Attendance (Admin)",
path: "/admin",
icon: <MdSend />,
cName: "nav-text"
},
{
title: "Attendance (Employee)",
path: "/employee",
icon: <FaCartPlus />,
cName: "nav-text"
},
{
title: "Departments",
path: "/department",
icon: <MdPeople />,
cName: "nav-text"
},
{
title: "Designations",
path: "/designation",
icon: <FaEnvelopeOpenText />,
cName: "nav-text"
},
{
title: "Timesheet",
path: "/timeSheet",
icon: <MdHelp />,
cName: "nav-text"
}
];