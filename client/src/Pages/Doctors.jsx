import { UserCheck, PhoneCall, Mail } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
export default function Doctors() {
  return (
    <div className="ml-64 p-8 bg-green-50 min-h-screen">
    <AdminNavbar></AdminNavbar>
    <AdminSidebar></AdminSidebar>
    
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <UserCheck size={26} /> Doctors List
      </h1>

      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-600">
            <thead className="text-green-700 border-b">
              <tr>
                <th className="text-left pb-2">Name</th>
                <th className="text-left pb-2">Contact</th>
                <th className="text-left pb-2">Email</th>
                <th className="text-left pb-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                { name: "Dr. Arun Kumar", email: "arun@ayursutra.com", phone: "+91 98765 43210", status: "Online" },
                { name: "Dr. Meena S", email: "meena@ayursutra.com", phone: "+91 91234 56789", status: "Offline" },
                { name: "Dr. Kavin Raj", email: "kavin@ayursutra.com", phone: "+91 99887 66554", status: "Online" }
              ].map((doc, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3">{doc.name}</td>
                  <td className="flex items-center gap-2 py-3"><PhoneCall size={14}/> {doc.phone}</td>
                  <td className="flex items-center gap-2 py-3"><Mail size={14}/> {doc.email}</td>
                  <td className={`font-medium ${doc.status === "Online" ? "text-green-600" : "text-red-600"}`}>
                    {doc.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
