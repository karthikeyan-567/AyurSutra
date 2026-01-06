import { Bell, AlertCircle } from "lucide-react";

export default function Notifications() {
  return (
    <div className="ml-64 p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <Bell size={26}/> Notifications
      </h1>

      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
          <AlertCircle size={18}/> Recent Alerts
        </h2>

        <div className="space-y-3 text-sm text-gray-600">
          <p className="flex items-center gap-2">• 5 new patient reports awaiting approval</p>
          <p className="flex items-center gap-2">• 2 doctors went online in Chennai branch</p>
          <p className="flex items-center gap-2">• Coimbatore seat capacity updated</p>
          <p className="flex items-center gap-2">• New therapy record added in Ooty branch</p>
        </div>
      </div>
    </div>
  );
}
