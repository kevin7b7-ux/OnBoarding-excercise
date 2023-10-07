# CreditApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**creditGet**](CreditApi.md#creditGet) | **GET** /credit | Get a list of credits |
| [**creditIdPut**](CreditApi.md#creditIdPut) | **PUT** /credit/{id} | Update an existing credit |
| [**creditPost**](CreditApi.md#creditPost) | **POST** /credit | Create a new credit |


<a name="creditGet"></a>
# **creditGet**
> List&lt;Credit&gt; creditGet()

Get a list of credits

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CreditApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditApi apiInstance = new CreditApi(defaultClient);
    try {
      List<Credit> result = apiInstance.creditGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditApi#creditGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Credit&gt;**](Credit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of credits |  -  |
| **401** | Access token is missing or invalid |  -  |

<a name="creditIdPut"></a>
# **creditIdPut**
> Credit creditIdPut(id, creditRequest)

Update an existing credit

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CreditApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditApi apiInstance = new CreditApi(defaultClient);
    Integer id = 56; // Integer | ID of the credit to be updated
    CreditRequest creditRequest = new CreditRequest(); // CreditRequest | Updated credit object
    try {
      Credit result = apiInstance.creditIdPut(id, creditRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditApi#creditIdPut");
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
| **id** | **Integer**| ID of the credit to be updated | |
| **creditRequest** | [**CreditRequest**](CreditRequest.md)| Updated credit object | |

### Return type

[**Credit**](Credit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Credit updated successfully |  -  |
| **401** | Access token is missing or invalid |  -  |

<a name="creditPost"></a>
# **creditPost**
> Credit creditPost(creditRequest)

Create a new credit

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CreditApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditApi apiInstance = new CreditApi(defaultClient);
    CreditRequest creditRequest = new CreditRequest(); // CreditRequest | Credit object to be created
    try {
      Credit result = apiInstance.creditPost(creditRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditApi#creditPost");
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
| **creditRequest** | [**CreditRequest**](CreditRequest.md)| Credit object to be created | |

### Return type

[**Credit**](Credit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Credit created successfully |  -  |
| **401** | Access token is missing or invalid |  -  |

