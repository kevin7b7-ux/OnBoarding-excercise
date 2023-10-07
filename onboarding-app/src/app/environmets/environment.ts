export const environment = {
    baseUrl:'http://localhost:8080',
    interceptableRoutes: [
        'http://localhost:8080/credit',
        'http://localhost:8080/monthly-fee',
    ],
    interestRates: [
        { value: 0.0085, display: '0.85%' },
        { value: 0.01, display: '1%' },
        { value: 0.0125, display: '1.25%' },
        { value: 0.02, display: '2%' },
        { value: 0.024, display: '2.4%' },
      ],
}

    