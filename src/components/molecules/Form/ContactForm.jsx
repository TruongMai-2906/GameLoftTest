import React from "react";
import { useForm } from "react-hook-form";
import container from "./ContactForm.module.scss";
const ContactForm = (props) => {
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form className={container.container} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={container["container__input-field"]}
        placeholder="Name"
        {...register("name", { required: true })}
      />
      <input
        className={container["container__input-field"]}
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <select
        className={container["container__input-field"]}
        placeholder="Country"
        {...register("country")}
      >
        <option value="VN">Viet Nam</option>
        <option value="US">United State</option>
        <option value="JA">Japan</option>
      </select>
      <select
        className={container["container__input-field"]}
        placeholder="Flatform"
        defaultValue={-1}
        {...register("flatform")}
      >
        <option value="android">Android</option>
        <option value="IOS">IOS</option>
        <option value="Window">Window</option>
      </select>
      <div className={container["container__checkbox"]}>
        <div className={container["container__checkbox-item"]}>
          <input
            type="checkbox"
            id="confirmAge"
            name="confirmAge"
            {...register("confirmAge")}
          />
          <label for="confirmAge">
            By signing up, I confirm that I am 13 years old or older. I agree to
            the Gameloft Terms and Conditions and I have read the Privacy
            Policy.
          </label>
          <br></br>
        </div>
        <div className={container["container__checkbox-item"]}>
          <input
            type="checkbox"
            id="confirmPolicy"
            name="confirmPolicy"
            {...register("confirmPolicy")}
          />
          <label for="confirmPolicy">
            I agree to receive promotional offers relating to all Gameloft games
            and services.
          </label>
          <br></br>
        </div>
      </div>
      <button type="submit">Button</button>
    </form>
  );
};

export default ContactForm;
