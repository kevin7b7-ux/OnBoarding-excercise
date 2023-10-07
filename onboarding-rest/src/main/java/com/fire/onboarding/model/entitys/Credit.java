package com.fire.onboarding.model.entitys;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name = "Credits")
@Getter
@Setter
public class Credit implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String owner;

    private float amount;


    private int term;


    private float interestRate;


    private float monthlyFee;

    @Getter
    private static final Long serialVersionUID = 1L;


}
