export default function AuthLayout({ children, title, icon }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white border shadow-sm rounded-2xl p-6 w-80 space-y-4">
        <div className="flex justify-center text-green-700">{icon}</div>
        <h2 className="text-center text-lg font-semibold text-green-700">{title}</h2>
        {children}
      </div>
    </div>
  );
}
