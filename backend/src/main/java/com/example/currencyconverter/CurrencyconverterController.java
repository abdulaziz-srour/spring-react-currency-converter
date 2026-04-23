package com.example.currencyconverter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CurrencyconverterController {


    @GetMapping(path = "/convert")
    public double convertCurrency(@RequestParam() double amount, @RequestParam String currency){
        double rate = 0;
        switch (currency.toLowerCase()){
            case "usd":
                rate = 1.17;
                break;
            case "jpy":
                rate = 187.17;
                break;
            case "gbp":
                rate = 0.87;
                break;
            case "aud":
                rate = 1.64;
                break;
            case "cad":
                rate = 1.61;
                break;
            case "chf":
                rate = 0.92;
                break;
            case "cny":
                rate = 8.02;
                break;
            case "hkd":
                rate = 9.21;
                break;
            case "sgd":
                rate = 1.50;
                break;
            case "nzd":
                rate = 1.99;
                break;
        }
        return Math.round(amount * rate * 100.) / 100.;
    }
}
