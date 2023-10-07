package com.fire.onboarding.rest;

import com.fire.onboarding.model.entitys.CalculateMonthlyFeeRequest;
import com.fire.onboarding.model.entitys.Credit;
import com.fire.onboarding.model.service.ICreditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
public class CreditController {

    @Autowired
    private ICreditService creditService;

    @GetMapping("credit")
    @ResponseStatus(HttpStatus.OK)
    public List<Credit> getCredits() {
        return creditService.findAll();
    }

    @PostMapping("credit")
    @ResponseStatus(HttpStatus.CREATED)
    public Credit createCredit(@RequestBody Credit credit) {

        return creditService.save(credit);
    }

    @PutMapping("credit/{id}")
    public Credit updateCredit(@RequestBody Credit credit, @PathVariable Long id) {

        Credit existingCredit = creditService.findById(id);
        existingCredit.setAmount(credit.getAmount());
        existingCredit.setOwner(credit.getOwner());
        existingCredit.setTerm(credit.getTerm());
        existingCredit.setInterestRate(credit.getInterestRate());
        existingCredit.setMonthlyFee(credit.getMonthlyFee());

        return creditService.save(existingCredit);
    }

    @PostMapping("monthly-fee")
    public float calculateMonthlyFee(@RequestBody @Validated CalculateMonthlyFeeRequest request) {

        float amount = request.getAmount();
        float interestRate = request.getInterestRate();
        int term = request.getTerm();

        return creditService.calculateMonthlyFee(interestRate, amount, term);

    }


}
