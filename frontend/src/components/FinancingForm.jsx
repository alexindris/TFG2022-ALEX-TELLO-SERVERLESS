import React from "react";
import { useForm } from "react-hook-form";

export default function FinancingForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    props.financing.financingNeeds = data.financingNeeds;
    props.financing.OwnResources = data.OwnResources;
    props.financing.PurchaseCosts = data.PurchaseCosts;
    props.financing.Loans = [data.Loans1, data.Loans2, data.Loans3, data.Loans4];
    console.log(props.financing);
  }


  // type Financing {
  // financingNeeds Float
  // OwnResources   OwnResources
  // PurchaseCosts  PurchaseCosts
  // Loans          Loan[]
  // }


  // type Loan {
  //   loanAmount               Float
  //   interestRate             Float
  //   repaymentInPercent       Float
  //   fixedInterestRateInYears Float
  // }

  // type OwnResources {
  //   liquidAssets               Float
  //   balanceFromBuildingSociety Float
  //   ownManpower                Float
  // }

  // type PurchaseCosts {
  //   priceOfLand               Float
  //   reconstructionCosts       Float
  //   additionalPurchaseCharges Float
  // }
  return (
    <>
      <h1>Financing</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" {...register("financingNeeds", { required: true })} />
        <input type="number" {...register("OwnResources.liquidAssets", { required: true })} />
        <input type="number" {...register("OwnResources.balanceFromBuildingSociety", { required: true })} />
        <input type="number" {...register("OwnResources.ownManpower", { required: true })} />
        <input type="number" {...register("PurchaseCosts.priceOfLand", { required: true })} />
        <input type="number" {...register("PurchaseCosts.reconstructionCosts", { required: true })} />
        <input type="number" {...register("PurchaseCosts.additionalPurchaseCharges", { required: true })} />
        {/* Loans */}
        <h2>Loans</h2>
        <input type="number" {...register("Loans1.loanAmount", { required: true })} />
        <input type="number" {...register("Loans1.interestRate", { required: true })} />
        <input type="number" {...register("Loans1.repaymentInPercent", { required: true })} />
        <input type="number" {...register("Loans1.fixedInterestRateInYears", { required: true })} />
        <input type="number" {...register("Loans2.loanAmount", { required: true })} />
        <input type="number" {...register("Loans2.interestRate", { required: true })} />
        <input type="number" {...register("Loans2.repaymentInPercent", { required: true })} />
        <input type="number" {...register("Loans2.fixedInterestRateInYears", { required: true })} />
        <input type="number" {...register("Loans3.loanAmount", { required: true })} />
        <input type="number" {...register("Loans3.interestRate", { required: true })} />
        <input type="number" {...register("Loans3.repaymentInPercent", { required: true })} />
        <input type="number" {...register("Loans3.fixedInterestRateInYears", { required: true })} />
        <input type="number" {...register("Loans4.loanAmount", { required: true })} />
        <input type="number" {...register("Loans4.interestRate", { required: true })} />
        <input type="number" {...register("Loans4.repaymentInPercent", { required: true })} />
        <input type="number" {...register("Loans4.fixedInterestRateInYears", { required: true })} />





        <input type='submit' value="Validate" />
      </form>
    </>
  );
}
