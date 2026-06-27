import AdminGuard from "@/features/auth/components/AdminGuard";

import AdminLayout from "@/components/layout/AdminLayout";

export default function Layout({
  children,
}) {
  return (
    <AdminGuard>
      <AdminLayout>
        {children}
      </AdminLayout>
    </AdminGuard>
  );
}