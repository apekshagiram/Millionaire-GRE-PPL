
export default function AdminDashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-50">

      <main className="flex-1">{children}</main>
    </div>
  );
}
