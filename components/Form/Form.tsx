"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import Button from "../Button/Button";
import styles from "./form.module.css";

interface IFormInput {
  fullName: string;
  email: string;
  message: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    toast.success("Message sent!");
    reset();
  };

  const onError = () => {
    toast.error("Please fill in all fields!");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Your full name"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <p className={styles.error}>Full name can't be empty.</p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className={styles.error}>Email can't be empty.</p>
            )}
          </div>
        </div>
        <textarea
          placeholder="I wanna talk about..."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className={styles.error}>You need to write something</p>
        )}
        <Button>Let's talk!</Button>
      </form>
      <Toaster position="top-right" />
    </div>
  );
}
