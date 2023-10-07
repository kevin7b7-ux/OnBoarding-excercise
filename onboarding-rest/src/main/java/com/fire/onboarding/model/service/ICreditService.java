package com.fire.onboarding.model.service;

import com.fire.onboarding.model.entitys.Credit;

import java.util.List;


public  interface  ICreditService {
    public Credit save(Credit credit);
    public List<Credit> findAll();
    public Credit findById(Long id);
    public float calculateMonthlyFee(float interestRate, float amount, int term);
}
