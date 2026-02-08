import { useState } from "react";
import {
  HiHome,
  HiBookOpen,
  HiDocumentText,
  HiPresentationChartLine,
  HiAcademicCap,
  HiOfficeBuilding,
  HiClipboardList,
  HiUsers,
  HiLogout,
  HiFolderOpen,
  HiUserAdd,
  HiUserGroup,
} from "react-icons/hi";
import { HiChevronLeft, HiChevronDown, HiUserPlus } from "react-icons/hi2"; 


/* Reusable Sidebar Link */
function SidebarLink({ href, icon: Icon, children, active = false }) {
    return (
    <a
      href={href}
      className={`flex items-center gap-3 p-2 text-sm ml-4 transition-all duration-200
        ${
          active
            ? "bg-gray-800 rounded-l-md"
            : "hover:bg-gray-800 hover:rounded-l-md"
        }`}
    >
      <Icon className="w-4 h-4 text-transparent" 
      style={{ stroke: "#fff", strokeWidth: 1.5 }}/>
      <span>{children}</span>
    </a>
  );
}

export default function Layout({ children }) {
const [openTrainings, setOpenTrainings] = useState(false);
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white fixed h-screen flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
          <div className="flex items-center">
            <img
                src="/RDMS-logo.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
                />
                <h1 className="text-l font-bold ml-3">BUCS-RDMS</h1>
        </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto pb-4">

            <div className="flex items-center p-3">
                <img
                    src="/all_user.png"
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                    <p className="text-white text-sm ">Wendee Diane F. Llona</p>
                    <p className="text-white text-xs uppercase">SUPERADMIN</p>
                </div>
            </div>

          {/* Dashboard */}
          <SidebarLink href="#" icon={HiHome} active>
            Home
          </SidebarLink>

          {/* Research Section */}
          <div className="px-4 py-2 text-xs text-gray-400 uppercase">
            Research
          </div>

          <SidebarLink href="#" icon={HiFolderOpen}>
            Faculty Research
          </SidebarLink>

          <SidebarLink href="#" icon={HiDocumentText}>
            Publications
          </SidebarLink>

          <SidebarLink href="#" icon={HiPresentationChartLine}>
            Presentations
          </SidebarLink>

          <SidebarLink href="#" icon={HiAcademicCap}>
            Student Research
          </SidebarLink>

          <SidebarLink href="#" icon={HiClipboardList}>
            Documents
          </SidebarLink>

        {/* Trainings Dropdown */}
        <div className="ml-4">
            <button
                onClick={() => setOpenTrainings(!openTrainings)}
                className="flex items-center justify-between w-full p-4 text-sm hover:bg-gray-800 hover:rounded-l-md transition-all duration-200"
            >
                {/* Icon */}
                <div className="flex items-center gap-3">
                <HiBookOpen
                    className="w-4 h-4 text-transparent"
                    style={{ stroke: "#fff", strokeWidth: 1.5 }}
                />
                </div>

                {/* Text + Chevron together, no gap between */}
                <div className="flex items-center gap-0">
                <span>Trainings and Seminars</span>
                <span
                    className="transition-transform duration-200 font-bold text-lg"
                    style={{ userSelect: "none" }}
                >
                    {openTrainings ? (
                    <HiChevronDown className="w-3 h-3" style={{ strokeWidth: 3 }} />
                    ) : (
                    <HiChevronLeft className="w-3 h-3" style={{ strokeWidth: 3 }} />
                    )}
                </span>
                </div>
            </button>
        <div className={`overflow-hidden transition-all duration-300 ${
                openTrainings ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                <div className="ml-8 flex flex-col text-sm text-gray-300 pb-2">
                    <a href="#" className="py-2 hover:text-white flex items-center gap-3">
                        <HiUsers className="w-4 h-4 text-transparent" style={{ stroke: "#fff", strokeWidth: 1.5 }} />
                        Faculty
                    </a>
                    <a href="#" className="py-2 hover:text-white flex items-center gap-3">
                        <HiUserAdd className="w-4 h-4 text-transparent" style={{ stroke: "#fff", strokeWidth: 1.5 }} />
                        Students
                    </a>
                    <a href="#" className="py-2 hover:text-white flex items-center gap-3">
                        <HiUserGroup className="w-4 h-4 text-transparent" style={{ stroke: "#fff", strokeWidth: 1.5 }} />
                        Non-Teaching
                    </a>
                </div>
            </div>
        </div>

          <SidebarLink href="#" icon={HiOfficeBuilding}>
            Research Linkages
          </SidebarLink>

          <SidebarLink href="#" icon={HiOfficeBuilding}>
            Facilities
          </SidebarLink>

          <SidebarLink href="#" icon={HiPresentationChartLine}>
            College Conference
          </SidebarLink>

          <SidebarLink href="#" icon={HiClipboardList}>
            Citations
          </SidebarLink>

          <SidebarLink href="#" icon={HiDocumentText}>
            Intellectual Property
          </SidebarLink>

          <SidebarLink href="#" icon={HiClipboardList}>
            Reports
          </SidebarLink>

          {/* Admin Section */}
          <div className="px-4 py-2 text-xs text-gray-400 uppercase">
            Admin
          </div>

          <SidebarLink href="#" icon={HiUsers}>
            Accounts
          </SidebarLink>

          {/* Account Section */}
          <div className="px-4 py-2 text-xs text-gray-400 uppercase">
            Account
          </div>

          <SidebarLink href="#" icon={HiLogout}>
            Log Out
          </SidebarLink>

        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">
        {children}
      </div>
    </div>
  );
}
