package com.metapop.backend.dto.StoreDTO;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class StoreUpdateDTO {
    private String name;
    private LocalDate period;
    private String info;
    private Float x;
    private Float y;
    private Float z;
    private String signName;
}
