package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tab_jogador")
public class Jogador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @NotBlank(message = "Sexo é obrigatório.")
    private String sexo;

    @Min(value = 1, message = "Idade deve ser maior que zero.")
    private int idade;

    @Positive(message = "Altura deve ser um número positivo.")
    private double altura;

    @Positive(message = "Peso deve ser um número positivo.")
    private double peso;

    @NotBlank(message = "Posição é obrigatória.")
    private String posicao;

    @Min(value = 1, message = "Número da camisa deve ser maior que zero.")
    private int numeroCamisa;

    public Jogador() {}

    // Getters e Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }

    public void setNome(String nome) { this.nome = nome; }

    public String getSexo() { return sexo; }

    public void setSexo(String sexo) { this.sexo = sexo; }

    public int getIdade() { return idade; }

    public void setIdade(int idade) { this.idade = idade; }

    public double getAltura() { return altura; }

    public void setAltura(double altura) { this.altura = altura; }

    public double getPeso() { return peso; }

    public void setPeso(double peso) { this.peso = peso; }

    public String getPosicao() { return posicao; }

    public void setPosicao(String posicao) { this.posicao = posicao; }

    public int getNumeroCamisa() { return numeroCamisa; }

    public void setNumeroCamisa(int numeroCamisa) { this.numeroCamisa = numeroCamisa; }
}
