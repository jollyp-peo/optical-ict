import AdminGuard from "@/features/auth/components/AdminGuard";
import AdminSidebar from "@/features/admin/components/AdminSidebar";

export const metadata = {
  title: "Admin — Optimal ICT",
};

export default function Layout({ children }) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-slate-50">
        <AdminSidebar />

        <main className="lg:ml-64">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </AdminGuard>
  );
}