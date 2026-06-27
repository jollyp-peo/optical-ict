export function createPayload(service, form) {
  return {
    serviceId: service.id,
    serviceTitle: service.title,

    bookingType: service.bookingType,
    serviceType: service.serviceType,

    customer: {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    },

    details: {
      company: form.company,
      businessName: form.businessName,

      device: form.device,
      brand: form.brand,

      projectType: form.projectType,

      employees: form.employees,

      issue: form.issue,
      description: form.description,

      preferredDate: form.preferredDate,
    },

    submittedAt: new Date().toISOString(),
  };
}