package com.fire.onboarding.model.entitys;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CalculateMonthlyFeeRequest {

    private float amount;
    private float interestRate;
    private int term;
}
