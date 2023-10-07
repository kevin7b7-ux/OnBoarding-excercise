package com.fire.onboarding.model.service;

import com.fire.onboarding.model.dao.ICreditDao;
import com.fire.onboarding.model.entitys.Credit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class CreditService implements ICreditService{

    @Autowired
    private ICreditDao creditDao;

    @Override
    @Transactional
    public Credit save(Credit credit) {
        return creditDao.save(credit);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Credit> findAll() {
        return (List<Credit>) creditDao.findAll();
    }

    @Override
    public Credit findById(Long id){
        return creditDao.findById(id).orElse(null);
    }

    @Override
    public  float calculateMonthlyFee(float interestRate, float amount, int term) {

       float fee = amount/term;
       float annualInterest = interestRate / 12;
       float interestApplied = annualInterest * fee;
       float monthlyFee = fee + interestApplied;
       return monthlyFee;
    }


}
