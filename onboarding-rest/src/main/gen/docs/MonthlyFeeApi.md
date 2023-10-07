# MonthlyFeeApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**monthlyFeePost**](MonthlyFeeApi.md#monthlyFeePost) | **POST** /monthly-fee | Calculate monthly fee for a credit |


<a name="monthlyFeePost"></a>
# **monthlyFeePost**
> BigDecimal monthlyFeePost(calculateMonthlyFeeRequest)

Calculate monthly fee for a credit

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.MonthlyFeeApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    MonthlyFeeApi apiInstance = new MonthlyFeeApi(defaultClient);
    CalculateMonthlyFeeRequest calculateMonthlyFeeRequest = new CalculateMonthlyFeeRequest(); // CalculateMonthlyFeeRequest | Calculation request parameters
    try {
      BigDecimal result = apiInstance.monthlyFeePost(calculateMonthlyFeeRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MonthlyFeeApi#monthlyFeePost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **calculateMonthlyFeeRequest** | [**CalculateMonthlyFeeRequest**](CalculateMonthlyFeeRequest.md)| Calculation request parameters | |

### Return type

[**BigDecimal**](BigDecimal.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Monthly fee calculated successfully |  -  |
| **401** | Access token is missing or invalid |  -  |

