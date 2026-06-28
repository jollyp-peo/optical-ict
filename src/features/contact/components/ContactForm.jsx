"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "@phosphor-icons/react";

import { contactSchema } from "../validation/contact.schema";
import { useCreateContact } from "../hooks/useCreateContact";

import InputField from "@/components/forms/InputField";
import TextareaField from "@/components/forms/TextareaField";
import SelectField from "@/components/forms/SelectField";
import Button from "@/components/ui/Button";

import { CONTACT_SERVICE_TYPES } from "../config/contact.config";

export default function ContactForm() {
  const [successData, setSuccessData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const { mutate, isPending } = useCreateContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setApiError(null);

    mutate(data, {
      onSuccess: (response) => {
        setSuccessData(response);
        reset();
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again.";

        setApiError(message);
      },
    });
  };

  if (successData) {
    return (
      <div className="flex flex-col items-center space-y-6 py-4 text-center">
        <div className="rounded-full bg-green-100 p-4">
          <Check size={32} weight="bold" className="text-green-600" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-950">
            Message Sent Successfully
          </h3>
          <p className="text-slate-600">
            Thank you for reaching out. We will get back to you shortly.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-slate-50 p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Reference ID
          </p>
          <p className="mt-2 text-2xl font-bold tracking-wider text-slate-950">
            {successData.id}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Status:{" "}
            <span className="font-medium text-yellow-600">
              {successData.status}
            </span>
          </p>
        </div>

        <Button
          onClick={() => {
            setSuccessData(null);
            setApiError(null);
          }}
          fullWidth
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <InputField
          label="Name"
          placeholder="John Doe"
          required
          {...register("name")}
          error={errors.name?.message}
        />

        <InputField
          label="Email"
          type="email"
          placeholder="john@example.com"
          required
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InputField
          label="Phone"
          placeholder="+263 77 123 4567"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <SelectField
          label="Service Type"
          placeholder="Select Service"
          options={CONTACT_SERVICE_TYPES}
          {...register("serviceType")}
          error={errors.serviceType?.message}
        />
      </div>

      <InputField
        label="Subject"
        placeholder="How can we help you?"
        required
        {...register("subject")}
        error={errors.subject?.message}
      />

      <TextareaField
        label="Message"
        placeholder="Tell us more about your project or inquiry..."
        required
        rows={5}
        {...register("message")}
        error={errors.message?.message}
      />

      {apiError && (
        <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
          {apiError}
        </div>
      )}

      <Button type="submit" fullWidth loading={isPending}>
        Send Message
      </Button>
    </form>
  );
}