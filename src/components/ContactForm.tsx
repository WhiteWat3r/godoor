import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { ContactModal } from "./ContactModal";

interface FormValues {
  name: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export const ContactForm = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [phoneFieldClicked, setPhoneFieldClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validate form values
  const validate = useCallback((values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    if (!values.name.trim()) {
      errors.name = "Имя обязательно";
    } else if (values.name.trim().length < 2) {
      errors.name = "Имя должно содержать минимум 2 символа";
    }

    if (!values.phone.trim() || values.phone === "+7") {
      errors.phone = "Номер телефона обязателен";
    } else if (values.phone.length > 12) {
      errors.phone = "Номер телефона не должен превышать 12 символов";
    }

    return errors;
  }, []);

  // Format phone number as user types
  const formatPhoneNumber = (value: string): string => {
    if (!value.startsWith("+7")) {
      value = "+7" + value.replace(/^\+7/, "");
    }

    const prefix = "+7";
    const digitsAfterPrefix = value.substring(2).replace(/\D/g, "");

    return prefix + digitsAfterPrefix.substring(0, 10);
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setValues({
        ...values,
        [name]: formatPhoneNumber(value),
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  // Handle input blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  // Handle phone field focus
  const handlePhoneFocus = () => {
    setPhoneFieldClicked(true);
    if (!values.phone) {
      setValues({
        ...values,
        phone: "+7",
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const touchedFields = Object.keys(values).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    setTouched(touchedFields);

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setValues({ name: "", phone: "" });
    setTouched({});
    setPhoneFieldClicked(false);
  };

  // Validate on value change
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      setErrors(validate(values));
    }
  }, [values, touched, validate]);

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1">
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Имя:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ваше имя"
            className={`text-m w-full rounded-[6px] border-2 p-[10px] text-black outline-none transition-all duration-200 ${
              touched.name && errors.name
                ? "border-red-500 bg-red-50"
                : "border-transparent hover:border-white/20 focus:border-white/30"
            }`}
          />
          <div className="mt-1 h-5">
            {touched.name && errors.name && (
              <p className="text-sm text-red-400 transition-opacity">
                {errors.name}
              </p>
            )}
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Номер телефона:
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phoneFieldClicked ? values.phone : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handlePhoneFocus}
            placeholder={phoneFieldClicked ? "" : "+7 (___) ___ - __ - __"}
            className={`text-m w-full rounded-[6px] border-2 p-[10px] text-black outline-none transition-all duration-200 ${
              touched.phone && errors.phone
                ? "border-red-500 bg-red-50"
                : "border-transparent hover:border-white/20 focus:border-white/30"
            }`}
          />
          <div className="mt-1 h-5">
            {touched.phone && errors.phone && (
              <p className="text-sm text-red-400 transition-opacity">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-[6px] bg-[#4F4F4F] p-[10px] font-medium transition-all duration-300 hover:bg-[#727272] focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#3A3A3A]"
      >
        Отправить
      </button>
      <ContactModal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="mb-4 text-lg font-semibold text-black">
          Ваши данные успешно отправлены!
        </h2>
        <p className="mb-2 text-black">Мы перезвоним вам в ближайшее время.</p>
        <button
          onClick={closeModal}
          className="mt-5 w-full rounded bg-[#4F4F4F] p-2 text-white transition-colors hover:bg-[#727272]"
        >
          Закрыть
        </button>
      </ContactModal>
    </form>
  );
};
