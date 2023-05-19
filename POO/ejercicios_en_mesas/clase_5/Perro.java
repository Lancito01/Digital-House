package ejercicios_en_mesas.clase_5;

public class Perro{

    boolean isInAdoption;
    String breed;
    int birthYear;
    double weight;
    boolean hasChip;
    boolean isHurt;
    String name;

    Perro(boolean isInAdoption, String breed, int birthYear, double weight, boolean hasChip, boolean isHurt, String name){
        this.isInAdoption = isInAdoption;
        this.breed = breed;
        this.birthYear = birthYear;
        this.weight = weight;
        this.hasChip = hasChip;
        this.isHurt = isHurt;
        this.name = name;
    }

    public int edad(){
        return 2023 - this.birthYear;
    }

    public boolean sePuedePerder(){
        return !this.hasChip;
    }

    public boolean sePuedeAdoptar(){
        return !this.isHurt && this.weight > 5.45;
    }


    public String toString(){
        return String.format("\n> Name: %s\n> Breed: %s\n> Birth Year: %d\n> Weight: %f kg\n> Has Chip: %b\n> Is Hurt: %b\n> Is in Adoption: %b\n", this.name, this.breed, this.birthYear, this.weight, this.hasChip, this.isHurt, this.isInAdoption);
    }
}