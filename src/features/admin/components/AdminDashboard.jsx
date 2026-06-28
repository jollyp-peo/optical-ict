"use client";

import {
  ClipboardText,
  Envelope,
  Clock,
  CheckCircle,
} from "@phosphor-icons/react";

import { useGetBookings } from "../hooks/useGetBookings";
import { useGetContacts } from "../hooks/useGetContacts";
import { useUpdateBookingStatus } from "../hooks/useUpdateBookingStatus";
import { useUpdateContactStatus } from "../hooks/useUpdateContactStatus";
import { StatCard } from "./StatCard";
import { DataTable } from "./DataTable";

import StatusBadge from "./StatusBadge";

import { BOOKING_STATUSES, CONTACT_STATUSES } from "../config/admin.config";

export default function AdminDashboard() {
  const { data: bookings, isLoading: bookingsLoading } = useGetBookings();
  const { data: contact, isLoading: contactsLoading } = useGetContacts();

  const updateBooking = useUpdateBookingStatus();
  const updateContact = useUpdateContactStatus();

  const bookingsList = Array.isArray(bookings) ? bookings : [];
  const contactsList = Array.isArray(contact) ? contact : [];

  const totalBookings = bookingsList.length;
  const pendingBookings = bookingsList.filter((b) => b.status === "PENDING").length;
  const totalContacts = contactsList.length;
  const pendingContacts = contactsList.filter((c) => c.status === "PENDING").length;

  const handleBookingStatusChange = (reference, status) => {
    updateBooking.mutate({ reference, status });
  };

  const handleContactStatusChange = (id, status) => {
    updateContact.mutate({ id, status });
  };

  return (
    <div className="space-y-8">
      {/* Stats */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Bookings"
          value={totalBookings}
          icon={ClipboardText}
          colorClass="bg-yellow-400/10 text-yellow-600"
        />

        <StatCard
          title="Pending Bookings"
          value={pendingBookings}
          icon={Clock}
          colorClass="bg-orange-400/10 text-orange-600"
        />

        <StatCard
          title="Total Messages"
          value={totalContacts}
          icon={Envelope}
          colorClass="bg-blue-400/10 text-blue-600"
        />

        <StatCard
          title="Pending Messages"
          value={pendingContacts}
          icon={CheckCircle}
          colorClass="bg-green-400/10 text-green-600"
        />
      </div>

      {/* Bookings Table */}

      <DataTable
        title="Recent Bookings"
        data={bookingsList}
        isLoading={bookingsLoading}
        emptyText="No bookings yet."
        columns={[
          { key: "reference", label: "Reference" },
          { key: "customerName", label: "Customer" },
          { key: "customerPhone", label: "Phone" },
          {
            key: "bookingType",
            label: "Type",
            render: (row) => (
              <span className="font-medium text-slate-950">
                {row.bookingType}
              </span>
            ),
          },
          {
            key: "serviceType",
            label: "Service",
            render: (row) => (
              <span className="text-slate-600">
                {row.serviceType?.replace(/_/g, " ")}
              </span>
            ),
          },
          {
            key: "status",
            label: "Status",
            render: (row) => <StatusBadge status={row.status} />,
          },
          {
            key: "createdAt",
            label: "Date",
            render: (row) => (
              <span className="text-slate-500">
                {row.createdAt
                  ? new Date(row.createdAt).toLocaleDateString()
                  : "—"}
              </span>
            ),
          },
          {
            key: "actions",
            label: "Update",
            render: (row) => (
              <select
                value={row.status}
                onChange={(e) =>
                  handleBookingStatusChange(row.reference, e.target.value)
                }
                disabled={updateBooking.isPending}
                className="
                  rounded-lg
                  border
                  border-slate-300
                  bg-white
                  px-3
                  py-1.5
                  text-sm
                  text-slate-950
                  outline-none
                  transition
                  focus:border-yellow-400
                  focus:ring-2
                  focus:ring-yellow-400/20
                  disabled:opacity-50
                "
              >
                {BOOKING_STATUSES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            ),
          },
        ]}
      />

      {/* Contacts Table */}

      <DataTable
        title="Contact Messages"
        data={contactsList}
        isLoading={contactsLoading}
        emptyText="No messages yet."
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
          {
            key: "subject",
            label: "Subject",
            render: (row) => (
              <span className="max-w-xs truncate" title={row.subject}>
                {row.subject}
              </span>
            ),
          },
          {
            key: "serviceType",
            label: "Service",
            render: (row) =>
              row.serviceType ? (
                <span className="text-slate-600">
                  {row.serviceType.replace(/_/g, " ")}
                </span>
              ) : (
                <span className="text-slate-400">—</span>
              ),
          },
          {
            key: "status",
            label: "Status",
            render: (row) => <StatusBadge status={row.status} />,
          },
          {
            key: "createdAt",
            label: "Date",
            render: (row) => (
              <span className="text-slate-500">
                {row.createdAt
                  ? new Date(row.createdAt).toLocaleDateString()
                  : "—"}
              </span>
            ),
          },
          {
            key: "actions",
            label: "Update",
            render: (row) => (
              <select
                value={row.status}
                onChange={(e) =>
                  handleContactStatusChange(row.id, e.target.value)
                }
                disabled={updateContact.isPending}
                className="
                  rounded-lg
                  border
                  border-slate-300
                  bg-white
                  px-3
                  py-1.5
                  text-sm
                  text-slate-950
                  outline-none
                  transition
                  focus:border-yellow-400
                  focus:ring-2
                  focus:ring-yellow-400/20
                  disabled:opacity-50
                "
              >
                {CONTACT_STATUSES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            ),
          },
        ]}
      />
    </div>
  );
}