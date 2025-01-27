package com.metapop.backend.entity;

import com.metapop.backend.dto.ProductDTO.ProductUpdateDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private Store storeId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long price;

    @Column(nullable = false)
    private Long amount;

    @Column(nullable = false)
    private String info;

    @ElementCollection
    @CollectionTable(name = "product_img_list", joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"))
    private List<String> imgList = new ArrayList<>();

    @Builder
    public Product(Store store, String name, Long price, Long amount, String info, List<String> imgList) {
        this.storeId = store;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.info = info;
        this.imgList = imgList;
    }

    public void update(ProductUpdateDTO productUpdateDTO) {
        this.name = productUpdateDTO.getName();
        this.price = productUpdateDTO.getPrice();
        this.amount = productUpdateDTO.getAmount();
        this.info = productUpdateDTO.getInfo();
        this.imgList = productUpdateDTO.getImgList();
    }
}
