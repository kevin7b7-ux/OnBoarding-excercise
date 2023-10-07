/*
 * Onboarding Credit API
 * API for managing credit operations in Fire team Onboarding
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import java.math.BigDecimal;
import org.openapitools.client.model.CalculateMonthlyFeeRequest;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for MonthlyFeeApi
 */
@Disabled
public class MonthlyFeeApiTest {

    private final MonthlyFeeApi api = new MonthlyFeeApi();

    /**
     * Calculate monthly fee for a credit
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void monthlyFeePostTest() throws ApiException {
        CalculateMonthlyFeeRequest calculateMonthlyFeeRequest = null;
        BigDecimal response = api.monthlyFeePost(calculateMonthlyFeeRequest);
        // TODO: test validations
    }

}