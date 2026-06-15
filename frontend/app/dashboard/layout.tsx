import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

console.log("Sidebar:", Sidebar);
console.log("Header:", Header);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}