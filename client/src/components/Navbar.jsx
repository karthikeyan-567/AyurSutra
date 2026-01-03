import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-white border-b flex items-center justify-between px-6 z-30">
      <div></div> {/* Empty div to maintain spacing like template */}

      <div className="flex items-center gap-2 text-green-700">
        <User size={20} />
        <span className="text-sm font-medium text-gray-700">User</span>
      </div>
    </nav>
  );
}
