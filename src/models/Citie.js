import { Schema , model } from "mongoose";


const CitiesSchema = Schema({
    // country: "Tahiti",
    // fundation: "1722-01-01",
    // population: 10605,
    // photo: "https://i.im.ge/2022/08/31/OE8fih.boraBora.png",
    // city: "Bora Bora Island",
    // description: "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist's palette of bright blues and greens, romantics from around the world appreciate Bora Bora's, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus. Known for gorgeous luxury resorts and numerous adventurous activities, a Bora Bora vacation has something for everyone. Whether you like getting your adrenaline pumping or prefer a relaxing day at the beach, the Bora Bora things to do options are endless. ",
    // smalldescription: "This south pacific island could easily be defined as the center of the romantic universe, where luxury, beach resorts, and spas dot the island with overwater bungalows, thatched-roof villas, and a fabled ambiance. Simply put, Bora Bora is one of the most beautiful islands in the world.",
    // featuredLocation: "Matira Beach"

    country: { type : String , require:true },
    fundation: {type: Date},
    population: {type: Number},
    photo: { type: String },
    city: {type: String},
    description: {type: String},
    smalldescription: {type : String },
    featuredLocation: {type : String}
});

const Citie = model('Citie',CitiesSchema);

export default Citie