import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const messageRef = useRef(null);

  const autoResize = () => {
    const textarea = messageRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset
      textarea.style.height = textarea.scrollHeight + "px"; // grow
    }
  };

  useEffect(() => {
    autoResize(); // Por si hay texto por defecto
  }, []);
  const validateEmail = (email) => {
    const re =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    const emailValue = form.current.email.value;

    if (!validateEmail(emailValue)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Por favor ingresa un correo electrónico válido.",
      });
      return;
    }

    setIsSending(true); // Desactiva el botón

    Swal.fire({
      title: "Enviando mensaje...",
      html: "Espere un momento <b></b>",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await emailjs.sendForm(
        "service_t1e9f4i",
        "template_ki7f7al",
        form.current,
        "8-0wtUcCXWqlLXgyl"
      );

      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme",
        timer: 2000,
        showConfirmButton: false,
      });

      form.current.reset();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el mensaje.",
      });
    } finally {
      setIsSending(false); // Reactiva el botón
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          />
          <path
            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          />
        </svg>
        <span className="ml-3">Contáctame</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Envíame tu mensaje o propuesta a mi correo.
      </p>

      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-6">
        <label className="sr-only" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="email"
          inputMode="email"
          className="min-w-0 w-full mb-4 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />

        <label className="sr-only" htmlFor="message">Mensaje</label>
        <textarea
      id="message"
      name="message"
      ref={messageRef}
      onInput={autoResize}
      rows={1}
      placeholder="Escribe tu mensaje..."
      required
      className="min-w-0 w-full mb-4 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 overflow-hidden resize-none"
    ></textarea>

        <button
        type="submit"
        disabled={isSending}
        className={`boton inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition font-semibold text-zinc-100 ${
            isSending
            ? "bg-zinc-500 cursor-not-allowed"
            : "bg-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-200 active:text-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:hover:text-zinc-100 dark:active:bg-zinc-700 dark:active:text-zinc-100"
        }`}
        >
        {isSending ? "Enviando..." : "Enviar"}
        </button>

      </div>
    </form>
  );
};

export default ContactForm;
