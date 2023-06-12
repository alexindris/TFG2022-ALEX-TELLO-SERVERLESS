import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Swal from "sweetalert2";
import ApplicationForm, { isEmpty } from "../../pages/Application";


jest.mock("sweetalert2", () => ({
    fire: jest.fn(),
  }));

describe('Application', () => {
    test('submits the form with valid input', async () => {
        
        const mockFetch = jest.fn().mockImplementation(() =>
            Promise.resolve({ ok: true })
        );
        global.fetch = mockFetch;

        
        const { getByLabelText, getAllByText , getByText, queryAllByText} = render(
            <ApplicationForm />,
        );

        // Step 1: Fill in personal information
        act(() => {
            fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
            fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
            fireEvent.change(getByLabelText('Birthday'), { target: { value: '1990-01-01' } });
            fireEvent.change(getByLabelText('Marital Status'), { target: { value: 'MARRIED' } });
            fireEvent.change(getByLabelText('Street'), { target: { value: '123 Street' } });
            fireEvent.change(getByLabelText('City'), { target: { value: 'City' } });
            fireEvent.change(getByLabelText('Post Code'), { target: { value: '12345' } });
            fireEvent.change(getByLabelText('Business'), { target: { value: 'BANKING' } });
            fireEvent.change(getByLabelText('Employment'), { target: { value: 'EMPLOYEE' } });
            fireEvent.change(getByLabelText('Employer'), { target: { value: 'Company' } });
            fireEvent.change(getByLabelText('Employed Since'), { target: { value: '2020-01-01' } });
        });

        // Step 2: Fill in financial information
        act(() => {
            fireEvent.change(getByLabelText('Financing Needs'), { target: { value: '100000' } });
            fireEvent.change(getByLabelText('Liquid Assets'), { target: { value: '50000' } });
            fireEvent.change(getByLabelText('Balance from Building Society'), { target: { value: '20000' } });
            fireEvent.change(getByLabelText('Own Manpower'), { target: { value: '30000' } });
            fireEvent.change(getByLabelText('Price of Land'), { target: { value: '150000' } });
            fireEvent.change(getByLabelText('Reconstruction Costs'), { target: { value: '50000' } });
            fireEvent.change(getByLabelText('Additional Purchase Charges'), { target: { value: '10000' } });
        });

        // Step 3: Fill in loan details
        act(() => {
            Array.from({ length: 4 }, (_, i) => {
                fireEvent.change(getByLabelText(`Loan Amount`, {
                    selector: `input[id='loanAmount${i + 1}']`,
                }), { target: { value: `${50000 * (i + 1)}` } });
                fireEvent.change(getByLabelText(`Interest Rate`, {
                    selector: `input[id='interestRate${i + 1}']`,
                }), { target: { value: `${5 * (i + 1)}` } });
                fireEvent.change(getByLabelText(`Repayment In Percent`, {
                    selector: `input[id='repaymentInPercent${i + 1}']`,
                }), { target: { value: `${20 * (i + 1)}` } });
                fireEvent.change(getByLabelText(`Fixed Interest Rate In Years`, {
                    selector: `input[id='fixedInterestRateInYears${i + 1}']`,
                }), { target: { value: `${2 * (i + 1)}` } });
            });
        });

        // Step 4: Fill in additional information
        act(() => {
            fireEvent.change(getByLabelText('Adults in HouseHold'), { target: { value: '2' } });
            fireEvent.change(getByLabelText('Children in HouseHold'), { target: { value: '1' } });
            fireEvent.change(getByLabelText('IBAN'), { target: { value: 'example-iban' } });
            fireEvent.change(getByLabelText('BIC'), { target: { value: 'example-bic' } });
            fireEvent.change(getByLabelText('Salary First Applicant'), { target: { value: '2000' } });
            fireEvent.change(getByLabelText('Salary Second Applicant'), { target: { value: '1500' } });
            fireEvent.change(getByLabelText('Rental Income Financed Property'), { target: { value: '500' } });
            fireEvent.change(getByLabelText('Rental Income Other Properties'), { target: { value: '300' } });
            fireEvent.change(getByLabelText('Further Income'), { target: { value: '100' } });
            fireEvent.change(getByLabelText('Child Benefit'), { target: { value: '50' } });
            fireEvent.change(getByLabelText('Assets on Bank Accounts'), { target: { value: '2000' } });
            fireEvent.change(getByLabelText('Assets Other'), { target: { value: '1000' } });
            fireEvent.change(getByLabelText('Health Insurance First Applicant'), { target: { value: '150' } });
            fireEvent.change(getByLabelText('Health Insurance Second Applicant'), { target: { value: '100' } });
            fireEvent.change(getByLabelText('Other Loans Remainder Of Debt'), { target: { value: '500' } });
            fireEvent.change(getByLabelText('Other Loans Monthly Repayments'), { target: { value: '200' } });
            fireEvent.change(getByLabelText('Cost Of Living'), { target: { value: '1000' } });
            fireEvent.change(getByLabelText('Rent'), { target: { value: '800' } });
            fireEvent.change(getByLabelText('Rent Not Applicable In Future'), { target: { value: 'true' } });
        });

        // Step 5: Submit the form
        act(() => {
            getAllByText('Validate').forEach((button) => {
                fireEvent.click(button);
            });
        });



        // Step 6: Assert the result
        await waitFor(() => {
            const accordionItems = queryAllByText(/✔️/);
            expect(accordionItems).toHaveLength(3);
        });

        // Step 7: Submit the form
        act(() => {
            getByText('Send').click();
        });
        

        expect(mockFetch).toHaveBeenCalledWith(
            `${process.env.REACT_APP_API_URL}/applications`,
            expect.objectContaining({
                method: 'POST',
                mode: 'no-cors',
                body: expect.anything(),
            })
        );

        await waitFor(() => {
            expect(Swal.fire).toHaveBeenCalled();
        });

    });

    it('should display an error message when the form is invalid', async () => {
;

        const { getByText } = render(
            <ApplicationForm />,
        );

        // Step 1: Submit the form
        act(() => {
            getByText('Send').click();
        });

        await waitFor(() => {
            expect(Swal.fire).toHaveBeenCalled();

            expect(Swal.fire).toHaveBeenCalledWith({
                title: 'Error!',
                text: 'Check that all fields are filled out and try again.',
                icon: 'error',
                confirmButtonText: 'Okay',
              }
            );

        });

    });

    it('should display an error message when the form fetch gives an error', async () => {
            
            const mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject());
    
            global.fetch = mockFetch;
    
            const { getByLabelText, getAllByText , getByText, queryAllByText} = render(
                <ApplicationForm />,
            );
    
        
                // Step 1: Fill in personal information
                act(() => {
                    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
                    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
                    fireEvent.change(getByLabelText('Birthday'), { target: { value: '1990-01-01' } });
                    fireEvent.change(getByLabelText('Marital Status'), { target: { value: 'MARRIED' } });
                    fireEvent.change(getByLabelText('Street'), { target: { value: '123 Street' } });
                    fireEvent.change(getByLabelText('City'), { target: { value: 'City' } });
                    fireEvent.change(getByLabelText('Post Code'), { target: { value: '12345' } });
                    fireEvent.change(getByLabelText('Business'), { target: { value: 'BANKING' } });
                    fireEvent.change(getByLabelText('Employment'), { target: { value: 'EMPLOYEE' } });
                    fireEvent.change(getByLabelText('Employer'), { target: { value: 'Company' } });
                    fireEvent.change(getByLabelText('Employed Since'), { target: { value: '2020-01-01' } });
                });
        
                // Step 2: Fill in financial information
                act(() => {
                    fireEvent.change(getByLabelText('Financing Needs'), { target: { value: '100000' } });
                    fireEvent.change(getByLabelText('Liquid Assets'), { target: { value: '50000' } });
                    fireEvent.change(getByLabelText('Balance from Building Society'), { target: { value: '20000' } });
                    fireEvent.change(getByLabelText('Own Manpower'), { target: { value: '30000' } });
                    fireEvent.change(getByLabelText('Price of Land'), { target: { value: '150000' } });
                    fireEvent.change(getByLabelText('Reconstruction Costs'), { target: { value: '50000' } });
                    fireEvent.change(getByLabelText('Additional Purchase Charges'), { target: { value: '10000' } });
                });
        
                // Step 3: Fill in loan details
                act(() => {
                    Array.from({ length: 4 }, (_, i) => {
                        fireEvent.change(getByLabelText(`Loan Amount`, {
                            selector: `input[id='loanAmount${i + 1}']`,
                        }), { target: { value: `${50000 * (i + 1)}` } });
                        fireEvent.change(getByLabelText(`Interest Rate`, {
                            selector: `input[id='interestRate${i + 1}']`,
                        }), { target: { value: `${5 * (i + 1)}` } });
                        fireEvent.change(getByLabelText(`Repayment In Percent`, {
                            selector: `input[id='repaymentInPercent${i + 1}']`,
                        }), { target: { value: `${20 * (i + 1)}` } });
                        fireEvent.change(getByLabelText(`Fixed Interest Rate In Years`, {
                            selector: `input[id='fixedInterestRateInYears${i + 1}']`,
                        }), { target: { value: `${2 * (i + 1)}` } });
                    });
                });
        
                // Step 4: Fill in additional information
                act(() => {
                    fireEvent.change(getByLabelText('Adults in HouseHold'), { target: { value: '2' } });
                    fireEvent.change(getByLabelText('Children in HouseHold'), { target: { value: '1' } });
                    fireEvent.change(getByLabelText('IBAN'), { target: { value: 'example-iban' } });
                    fireEvent.change(getByLabelText('BIC'), { target: { value: 'example-bic' } });
                    fireEvent.change(getByLabelText('Salary First Applicant'), { target: { value: '2000' } });
                    fireEvent.change(getByLabelText('Salary Second Applicant'), { target: { value: '1500' } });
                    fireEvent.change(getByLabelText('Rental Income Financed Property'), { target: { value: '500' } });
                    fireEvent.change(getByLabelText('Rental Income Other Properties'), { target: { value: '300' } });
                    fireEvent.change(getByLabelText('Further Income'), { target: { value: '100' } });
                    fireEvent.change(getByLabelText('Child Benefit'), { target: { value: '50' } });
                    fireEvent.change(getByLabelText('Assets on Bank Accounts'), { target: { value: '2000' } });
                    fireEvent.change(getByLabelText('Assets Other'), { target: { value: '1000' } });
                    fireEvent.change(getByLabelText('Health Insurance First Applicant'), { target: { value: '150' } });
                    fireEvent.change(getByLabelText('Health Insurance Second Applicant'), { target: { value: '100' } });
                    fireEvent.change(getByLabelText('Other Loans Remainder Of Debt'), { target: { value: '500' } });
                    fireEvent.change(getByLabelText('Other Loans Monthly Repayments'), { target: { value: '200' } });
                    fireEvent.change(getByLabelText('Cost Of Living'), { target: { value: '1000' } });
                    fireEvent.change(getByLabelText('Rent'), { target: { value: '800' } });
                    fireEvent.change(getByLabelText('Rent Not Applicable In Future'), { target: { value: 'true' } });
                });
        
                // Step 5: Submit the form
                act(() => {
                    getAllByText('Validate').forEach((button) => {
                        fireEvent.click(button);
                    });
                });
        
        
        
                // Step 6: Assert the result
                await waitFor(() => {
                    const accordionItems = queryAllByText(/✔️/);
                    expect(accordionItems).toHaveLength(3);
                });
        
                // Step 7: Submit the form
                act(() => {
                    getByText('Send').click();
                });

        
                expect(mockFetch).toHaveBeenCalledWith(
                    `${process.env.REACT_APP_API_URL}/applications`,
                    expect.objectContaining({
                        method: 'POST',
                        mode: 'no-cors',
                        body: expect.anything(),
                    })
                );
        
                await waitFor(() => {
                    expect(Swal.fire).toHaveBeenCalled();
                });
        
        });


});
