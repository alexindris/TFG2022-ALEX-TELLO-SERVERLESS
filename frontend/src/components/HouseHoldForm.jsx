import React from "react";
import { useForm } from "react-hook-form";

export default function HouseHoldForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => Object.assign(props.household, data);



  return (
    <>
      <h1>HouseHold</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" {...register("adultsInHousehold", { required: true, min: 1 })} />
        <input type="number" {...register("childrenInHousehold", { required: true, min: 0 })} />
        <input type="text" {...register("iban", { required: true })} />
        <input type="text" {...register("bic", { required: true })} />
        <input type="number" {...register("EarningCapacity.salaryFirstApplicant", { required: true, min: 1000 })} />
        <input type="number" {...register("EarningCapacity.salarySecondApplicant", { required: true, min: 1000 })} />
        <input type="number" {...register("EarningCapacity.rentalIncomeFinancedProperty", { required: true, min: 0 })} />
        <input type="number" {...register("EarningCapacity.rentalIncomeOtherProperties", { required: true, min: 0 })} />
        <input type="number" {...register("EarningCapacity.furtherIncome", { required: true, min: 0 })} />
        <input type="number" {...register("EarningCapacity.childBenefit", { required: true, min: 0 })} />
        <input type="number" {...register("EarningCapacity.assetsOnBankAccounts", { required: true, min: 0 })} />
        <input type="number" {...register("EarningCapacity.assetsOther", { required: true, min: 0 })} />
        <input type="number" {...register("MonthlyExpenses.healthInsuranceFirstApplicant", { required: true, min: 0 })} />
        <input type="number" {...register("MonthlyExpenses.healthInsuranceSecondApplicant", { required: true, min: 0 })} />
        <input type="number" {...register("MonthlyExpenses.otherLoansRemainderOfDebt", { required: true, min: 0 })} />
        <input type="number" {...register("MonthlyExpenses.otherLoansMonthlyRepayments", { required: true, min: 0 })} />
        <input type="number" {...register("MonthlyExpenses.costOfLiving", { required: true, min: 0 })} />
        <input type="number" {...register("MonthlyExpenses.rent", { required: true, min: 0 })} />
        <input type="checkbox" {...register("MonthlyExpenses.rentNotApplicableInFuture", { required: true })} />
        <input type='submit' value="Validate" />
      </form>
    </>
  );
}
