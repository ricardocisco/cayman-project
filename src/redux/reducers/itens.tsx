import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface villasProps {
  id: string;
  image: string;
  island: string;
  capacity: string;
  beds: number;
  name: string;
  price_per_night: number;
  description: string;
  city: string;
}

const INITIAL_STATE: villasProps[] = [
  {
    id: uuidv4(),
    name: "Seven Mile Beach Resort",
    capacity: "4",
    beds: 2,
    price_per_night: 450,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0b/64/ae/7-mile-beach-resort-and.jpg?w=1200&h=-1&s=1",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Situado na famosa Seven Mile Beach, este resort oferece acomodações confortáveis e acesso direto a uma das praias mais belas do Caribe. Ideal para famílias e casais.",
  },
  {
    id: uuidv4(),
    name: "The Ritz-Carlton",
    capacity: "2",
    beds: 1,
    price_per_night: 600,
    image:
      "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/hotel/235/235725/235725_EXT_ZB732C/The-Ritz-Carlton-Grand-Cayman-Exterior.JPG?tr=w-780%2Ch-437%2Cfo-auto",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Luxo e elegância se encontram no The Ritz-Carlton, com acomodações requintadas, serviço impecável e uma localização privilegiada em Grand Cayman.",
  },
  {
    id: uuidv4(),
    name: "Westin Grand Cayman",
    capacity: "4",
    beds: 2,
    price_per_night: 500,
    image:
      "https://cache.marriott.com/content/dam/marriott-renditions/GCMMI/gcmmi-pool-beach-2880-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Com vistas deslumbrantes para o oceano e comodidades de primeira classe, o Westin Grand Cayman é perfeito para umas férias relaxantes na praia.",
  },
  {
    id: uuidv4(),
    name: "Kimpton Seafire Resort",
    capacity: "3",
    beds: 2,
    price_per_night: 550,
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNr6wDH4WOq2rPotaMJDGspqa-ROMSnREX7SoxH=s680-w680-h510",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Com uma arquitetura moderna e um ambiente vibrante, o Kimpton Seafire Resort é um refúgio perfeito para quem busca luxo e estilo à beira-mar.",
  },
  {
    id: uuidv4(),
    name: "Grand Cayman Marriott",
    capacity: "4",
    beds: 2,
    price_per_night: 480,
    image:
      "https://cache.marriott.com/is/image/marriotts7prod/mc-gcmgc-230125marriotthoriz18258-06710:Pano-Hor?wid=1920&fit=constrain",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Este resort oferece uma mistura perfeita de conforto e conveniência, com acesso fácil à praia e diversas atividades para todas as idades.",
  },
  {
    id: uuidv4(),
    name: "Sunshine Suites Resort",
    capacity: "3",
    beds: 2,
    price_per_night: 300,
    image:
      "https://sunshinesuites.com/wp-content/uploads/sunshine-suites-resort-pool.jpg",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Uma opção acessível e acolhedora em Grand Cayman, o Sunshine Suites Resort oferece acomodações confortáveis e um ambiente amigável para famílias.",
  },
  {
    id: uuidv4(),
    name: "The Meridian",
    capacity: "6",
    beds: 3,
    price_per_night: 700,
    image:
      "https://s3.amazonaws.com/vrp2/vrpimages/5/complexes/2/6384e1f9bbb6e_Seven-Mile-Beach-Cayman.jpg",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Localizado na famosa Seven Mile Beach, o Meridian oferece villas espaçosas e luxuosas, perfeitas para grupos e famílias que desejam desfrutar do melhor de Grand Cayman.",
  },
  {
    id: uuidv4(),
    name: "Aqua Bay Club",
    capacity: "4",
    beds: 2,
    price_per_night: 450,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0b/de/86/aerial-view-of-aqua-bay.jpg?w=700&h=-1&s=1",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Oferecendo vistas panorâmicas do oceano e acesso direto à praia, o Aqua Bay Club é ideal para umas férias tranquilas e relaxantes.",
  },
  {
    id: uuidv4(),
    name: "Coral Stone Club",
    capacity: "5",
    beds: 3,
    price_per_night: 650,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/c3/5f/c8/aerial-photo-of-coral.jpg?w=700&h=-1&s=1",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Com villas espaçosas e uma localização privilegiada em Seven Mile Beach, o Coral Stone Club é perfeito para famílias e grupos que buscam luxo e conforto.",
  },
  {
    id: uuidv4(),
    name: "Plantation Village Beach Resort",
    capacity: "4",
    beds: 2,
    price_per_night: 430,
    image: "https://gobeach.com/cayman/plantation41_01.jpg",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Este resort familiar oferece acomodações confortáveis e uma variedade de atividades recreativas, tornando-se uma excelente escolha para férias em família.",
  },
  {
    id: uuidv4(),
    name: "Turtle Nest Inn",
    capacity: "3",
    beds: 2,
    price_per_night: 250,
    image:
      "https://www.thehotelguru.com/_images/c2/b3/c2b35d5109031da1fd18a2228787a0d1/turtle-nest-inn--con-1180x560.jpg",
    island: "Grand Cayman",
    city: "Bodden Town",
    description:
      "Oferecendo uma experiência mais íntima e tranquila, o Turtle Nest Inn é perfeito para casais que buscam um refúgio romântico em Grand Cayman.",
  },
  {
    id: uuidv4(),
    name: "Comfort Suites Seven Mile Beach",
    capacity: "4",
    beds: 2,
    price_per_night: 390,
    image:
      "https://comfort-suites-seven-mile-beach-2.choice-hotels-grandcayman.com/data/Pictures/OriginalPhoto/3198/319851/319851969/picture-george-town-comfort-suites-seven-mile-beach-2-42.JPEG",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Uma opção econômica e conveniente, o Comfort Suites oferece fácil acesso à Seven Mile Beach e acomodações confortáveis para famílias e casais.",
  },
  {
    id: uuidv4(),
    name: "Regal Beach Club",
    capacity: "4",
    beds: 2,
    price_per_night: 460,
    image:
      "https://caymanvacations.com/_include/img/resorts/regal-beach-club-1.jpg",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Localizado na famosa Seven Mile Beach, o Regal Beach Club oferece villas bem equipadas e acesso fácil a atividades de praia e aquáticas.",
  },
  {
    id: uuidv4(),
    name: "Wyndham Reef Resort",
    capacity: "4",
    beds: 2,
    price_per_night: 420,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/454341452.jpg?k=29465edcf0f20b3e388c7b225f782bdec9e9ee4cf035d2b633cb2a7523cec073&o=&hp=1",
    island: "Grand Cayman",
    city: "East End",
    description:
      "Com uma localização privilegiada na East End, o Wyndham Reef Resort oferece uma experiência relaxante à beira-mar com várias atividades recreativas.",
  },
  {
    id: uuidv4(),
    name: "Margaritaville Beach Resort",
    capacity: "4",
    beds: 2,
    price_per_night: 380,
    image:
      "https://images.trvl-media.com/lodging/60000000/59950000/59946400/59946372/aa30d4f5.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Inspirado no estilo de vida de Jimmy Buffett, o Margaritaville Beach Resort oferece uma atmosfera descontraída e diversas opções de entretenimento.",
  },
  {
    id: uuidv4(),
    name: "Beachcomber Grand Cayman",
    capacity: "6",
    beds: 3,
    price_per_night: 750,
    image: "https://caymanvacations.com/_include/img/resorts/beachcomber-1.jpg",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Com acomodações luxuosas e acesso direto à Seven Mile Beach, o Beachcomber é ideal para famílias e grupos que buscam uma estadia de alto padrão.",
  },
  {
    id: uuidv4(),
    name: "Le Soleil d'Or",
    capacity: "4",
    beds: 2,
    price_per_night: 500,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/249057167.jpg?k=3aa2afae3e5db9ef7ea17d04f2bda4d7b6155f0f70ba98d48f5b713e2d00e7e4&o=&hp=1",
    island: "Cayman Brac",
    city: "West End",
    description:
      "Com uma combinação única de luxo e charme natural, Le Soleil d'Or é um resort boutique em Cayman Brac perfeito para quem busca exclusividade e tranquilidade.",
  },
  {
    id: uuidv4(),
    name: "Cayman Brac Beach Resort",
    capacity: "4",
    beds: 2,
    price_per_night: 450,
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/05/52/4e/97/beach-resort-from-the.jpg",
    island: "Cayman Brac",
    city: "Stake Bay",
    description:
      "Localizado na tranquila ilha de Cayman Brac, este resort oferece acomodações confortáveis, excelente mergulho e uma atmosfera relaxante.",
  },
  {
    id: uuidv4(),
    name: "Carib Sands Beach Resort",
    capacity: "3",
    beds: 1,
    price_per_night: 350,
    image: "https://www.caymanbrac.com/assets/images/carib-sands-condos.jpg",
    island: "Cayman Brac",
    city: "West End",
    description:
      "Com acesso direto à praia e vistas deslumbrantes, o Carib Sands Beach Resort é uma ótima escolha para uma escapada tranquila em Cayman Brac.",
  },
  {
    id: uuidv4(),
    name: "Brac Reef Beach Resort",
    capacity: "4",
    beds: 2,
    price_per_night: 480,
    image: "https://www.bracreef.com/assets/images/brac-reef-beach-resort.jpg",
    island: "Cayman Brac",
    city: "West End",
    description:
      "Este resort oferece uma experiência completa de resort com excelentes opções de mergulho, restaurante no local e uma bela praia em Cayman Brac.",
  },
];

export const villasSlice = createSlice({
  name: "villas",
  initialState: INITIAL_STATE as villasProps[],
  reducers: {
    viewVilla: (state, { payload }: PayloadAction<villasProps>) => {
      return [...state];
    },
  },
});

export const { viewVilla } = villasSlice.actions;
export default villasSlice.reducer;
