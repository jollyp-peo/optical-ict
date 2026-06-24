import { notFound } from "next/navigation";

import ServiceDetailPage from "@/features/services/ServiceDetailPage";

import {
  getServiceBySlug,
} from "@/features/services/utils/getServiceBySlug";

export default async function Page({
  params,
}) {
  const { slug } = await params;

  const service =
    getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailPage
      service={service}
    />
  );
}