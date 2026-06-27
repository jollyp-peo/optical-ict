export const bookingFields = {
  repair: [
    {
      name: "device",
      label: "Device",
      type: "text",
      placeholder: "Laptop or Mobile Phone",
    },
    {
      name: "brand",
      label: "Brand",
      type: "text",
      placeholder: "HP, Dell, Lenovo, Samsung...",
    },
    {
      name: "issue",
      label: "Describe the Issue",
      type: "textarea",
      placeholder:
        "Tell us what problem you're experiencing...",
    },
  ],

  development: [
    {
      name: "businessName",
      label: "Business Name",
      type: "text",
      placeholder: "Business or Organization",
    },
    {
      name: "projectType",
      label: "Project Type",
      type: "select",

      options: [
        "Website",
        "E-Commerce",
        "Web Application",
        "Mobile App",
      ],
    },
    {
      name: "description",
      label: "Project Description",
      type: "textarea",
      placeholder:
        "Describe your project...",
    },
  ],

  it: [
    {
      name: "company",
      label: "Company",
      type: "text",
      placeholder: "Company Name",
    },
    {
      name: "employees",
      label: "Company Size",
      type: "number",
      placeholder: "Number of Employees",
    },
    {
      name: "description",
      label: "Required Service",
      type: "textarea",
      placeholder:
        "Tell us how we can help...",
    },
  ],
};