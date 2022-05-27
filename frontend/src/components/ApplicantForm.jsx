import React from "react";
import { useForm } from "react-hook-form";

export default function ApplicantForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => Object.assign(props.user, data);


  return (
    <>
      <h1>Applicant {props.number ?? ''}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
        <input {...register("employer", { required: true })} />
        <input type="date" {...register("employedSince", { required: true })} />
        <input type="date" {...register("birthday", { required: true })} />
        <input {...register("Address.street", { required: true })} />
        <input {...register("Address.city", { required: true })} />
        <input {...register("Address.postCode", { required: true })} />

        <select {...register("Business", { required: true })}>
          <option value="" hidden></option>
          <option value="BANKING">BANKING</option>
          <option value="INSURANCE">INSURANCE</option>
          <option value="ENERGY">ENERGY</option>
          <option value="CONSTRUCTION">CONSTRUCTION</option>
          <option value="AGRICULTURE">AGRICULTURE</option>
          <option value="INDUSTRY">INDUSTRY</option>
          <option value="PUBLIC_SERVICE">PUBLIC_SERVICE</option>
          <option value="OTHER">OTHER</option>
        </select>

        <select {...register("Employment", { required: true })}>

          <option value="" hidden></option>
          <option value="EMPLOYEE">EMPLOYEE</option>
          <option value="OFFICIAL">OFFICIAL</option>
          <option value="PENSIONER">PENSIONER</option>
          <option value="STUDENT">STUDENT</option>
          <option value="TRAINEE">TRAINEE</option>
          <option value="FREELANCER">FREELANCER</option>
          <option value="UNEMPLOYED">UNEMPLOYED</option>
          <option value="OTHER">OTHER</option>
        </select>


        <select {...register("MaritalStatus", { required: true })}>
          <option value="" hidden></option>
          <option value="MARRIED">MARRIED</option>
          <option value="SINGLE">SINGLE</option>
          <option value="DIVORCED">DIVORCED</option>
          <option value="WIDOWED">WIDOWED</option>
        </select>

        <input type='submit' value="Validate" />
      </form>
    </>
  );
}
