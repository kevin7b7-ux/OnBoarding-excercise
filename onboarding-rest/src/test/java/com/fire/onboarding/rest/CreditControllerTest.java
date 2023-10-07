package com.fire.onboarding.rest;
import com.fire.onboarding.model.entitys.Credit;
import com.fire.onboarding.model.service.ICreditService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CreditControllerTest {

    @InjectMocks
    private CreditController creditController;

    @Mock
    private ICreditService creditService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetCredits() {

        List<Credit> credits = new ArrayList<>();
        when(creditService.findAll()).thenReturn(credits);


        List<Credit> result = creditController.getCredits();


        assertEquals(credits, result);
    }

    @Test
    public void testCreateCredit() {
        // Mock data
        Credit credit = new Credit();
        when(creditService.save(any(Credit.class))).thenReturn(credit);


        Credit result = creditController.createCredit(credit);


        assertEquals(credit, result);
    }

    @Test
    public void testUpdateCredit() {

        Long id = 1L;
        Credit existingCredit = new Credit();
        existingCredit.setId(id);

        when(creditService.findById(id)).thenReturn(existingCredit);
        when(creditService.save(any(Credit.class))).thenReturn(existingCredit);

        Credit updatedCredit = new Credit();
        updatedCredit.setId(id);


        Credit result = creditController.updateCredit(updatedCredit, id);


        assertEquals(id, result.getId());
    }

    @Test
    public void testUpdateCreditNotFound() {

        Long id = 1L;
        when(creditService.findById(id)).thenReturn(null);

        Credit updatedCredit = new Credit();
        updatedCredit.setId(id);

        assertThrows(NullPointerException.class, () -> {
            creditController.updateCredit(updatedCredit, id);
        });
    }

    @Test
    public void testCalculateMonthlyFee() {
        when(creditService.calculateMonthlyFee(0.024f, 100000.0f, 5)).thenReturn(200400.0f);
        float result = creditService.calculateMonthlyFee(0.024f, 100000.0f, 5);
        assertEquals(200400.0, result, 0.01f);
    }

    @Test
    public void testCalculateMonthlyFeeWhitTermZero(){
        float amount = 100000f;
        float interestRate = 0.024f;
        int term = 0;

        assertThrows( ArithmeticException.class, () -> {
            creditService.calculateMonthlyFee(interestRate, amount, term);
        });
    }
}