import { Armchair, ClipboardList } from "lucide-react";

export default function SeatAvailability() {
  return (
    <div className="ml-64 p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <Armchair size={26} /> Seat Availability
      </h1>

      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
          <ClipboardList size={18}/> Branch Capacity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { branch: "Chennai", seats: 40, filled: 28 },
            { branch: "Ooty", seats: 15, filled: 10 },
            { branch: "Coimbatore", seats: 25, filled: 20 },
          ].map((b,i) => (
            <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="text-md font-semibold text-green-700">{b.branch} Branch</h3>
              <p className="text-xs text-gray-500 mt-1">Total Seats: {b.seats}</p>
              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>Filled: <strong>{b.filled}</strong></p>
                <p>Available: <strong className="text-green-700">{b.seats - b.filled}</strong></p>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3">
                <div className="h-1.5 rounded-full bg-green-600" style={{ width: `${(b.filled/b.seats)*100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
