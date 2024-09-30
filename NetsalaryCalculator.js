// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
let basic_salary = 7000
let benefits = 4000
}
    // Assumptions for the parameters which were not implemented in detail, were made for deduction costs.   

function calculate_nssf(gross_salary){
    tier_1_limit = 7000
    tier_2_limit = 36000
    tier_1_contribution = min(gross_salary, tier_1_limit) * 0.06
    tier_2_contribution = max(0, min(gross_salary - tier_1_limit, tier_2_limit - tier_1_limit)) * 0.06
    return tier_1_contribution + tier_2_contribution
}
console.log(calculate_nssf);

function calculate_nhif(gross_salary){
    if (gross_salary <= 5999)
        return 150
    else if (gross_salary <= 7999)
        return 300
    else if (gross_salary <= 9999)
        return 400
    else if (gross_salary <= 14999)
        return 500
    else if (gross_salary <= 19999)
        return 600
    else if (gross_salary <= 24999)
        return 750
    else if (gross_salary <= 29999)
        return 850
    else if (gross_salary <= 34999)
        return 900
    else if (gross_salary <= 39999)
        return 950
    else if (gross_salary <= 44999)
        return 1000
    else if (gross_salary <= 49999)
        return 1100
    else if (gross_salary <= 59999)
        return 1200
    else if (gross_salary <= 69999)
        return 1300
    else if (gross_salary <= 79999)
        return 1400
    else if (gross_salary <= 89999)
        return 1500
    else
        return 1700
}
console.log(calculate_nhif);

 function calculate_paye(monthly_taxable_pay){
    if (monthly_taxable_pay <= 24000)
        return monthly_taxable_pay * 0.10
    else if (monthly_taxable_pay <= 32333)
        return (24000 * 0.10) + ((monthly_taxable_pay - 24000) * 0.25)
    else if (monthly_taxable_pay <= 500000)
        return (24000 * 0.10) + (8333 * 0.25) + ((monthly_taxable_pay - 32333) * 0.30)
    else if (monthly_taxable_pay <= 800000)
        return (24000 * 0.10) + (8333 * 0.25) + (17667 * 0.30) + ((monthly_taxable_pay - 500000) * 0.325)
    else
         return (24000 * 0.10) + (8333 * 0.25) + (17667 * 0.30) + (300000 * 0.325) + ((monthly_taxable_pay - 800000) * 0.35)
 }
 console.log(calculate_paye);
 
function calculate_net_salary(basic_salary, benefits){
    gross_salary = basic_salary + benefits
    nssf = calculate_nssf(gross_salary)
    nhif = calculate_nhif(gross_salary)
    paye = calculate_paye(gross_salary)

    net_salary = gross_salary - (nssf + nhif + paye)
    return net_salary
}
console.log(calculateNetSalary);





