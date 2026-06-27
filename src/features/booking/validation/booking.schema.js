import { z } from "zod";

const customerInfoSchema = z.object({
  customerName: z.string().min(1, "Full name is required"),
  customerPhone: z.string().min(1, "Phone number is required"),
  customerEmail: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
});

const pickupSchema = z.object({
  required: z.preprocess((val) => {
    if (typeof val === "string") return val === "true";
    return Boolean(val);
  }, z.boolean()),
  preferredDay: z.string().optional().or(z.literal("")),
  preferredTime: z.string().optional().or(z.literal("")),
});

export const repairBookingSchema = z.object({
  ...customerInfoSchema.shape,

  bookingType: z.literal("REPAIR"),
  serviceType: z.string().min(1, "Service type is required"),

  payload: z.object({
    details: z.object({
      deviceType: z.string().min(1, "Device type is required"),
      brand: z.string().min(1, "Brand is required"),
      model: z.string().min(1, "Model is required"),
      issue: z.string().min(1, "Issue description is required"),
    }),

    pickup: pickupSchema,
  }),
});

export const serviceBookingSchema = z.object({
  ...customerInfoSchema.shape,

  bookingType: z.literal("SERVICE"),
  serviceType: z.string().min(1, "Service type is required"),

  payload: z.object({
    details: z.object({
      companyName: z.string().optional().or(z.literal("")),
      projectDescription: z.string().min(1, "Project description is required"),
      budget: z.string().optional().or(z.literal("")),
    }),

    pickup: z.object({}).default({}),
  }),
});