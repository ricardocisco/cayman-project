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
    id: "uuidv4()",
    name: "Seven Mile Beach Resort",
    capacity: "4",
    beds: 2,
    price_per_night: 450,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0b/64/ae/7-mile-beach-resort-and.jpg?w=1200&h=-1&s=1",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Situado na famosa Seven Mile Beach, o Seven Mile Beach Resort oferece acomodações confortáveis e acesso direto a uma das praias mais belas do Caribe. Este resort é ideal para famílias e casais que desejam relaxar e desfrutar do ambiente sereno e das águas cristalinas. O resort dispõe de uma variedade de comodidades, incluindo piscinas de água doce, áreas de lazer para crianças, e atividades aquáticas como snorkeling e mergulho. Os hóspedes podem começar o dia com um delicioso café da manhã servido no restaurante do resort, que oferece uma ampla seleção de pratos quentes e frios, frutas frescas, sucos e café. À noite, o resort organiza eventos temáticos e jantares especiais à beira-mar, proporcionando uma experiência gastronômica inesquecível.",
  },
  {
    id: "uuidv4()",
    name: "The Ritz-Carlton",
    capacity: "2",
    beds: 1,
    price_per_night: 600,
    image:
      "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/hotel/235/235725/235725_EXT_ZB732C/The-Ritz-Carlton-Grand-Cayman-Exterior.JPG?tr=w-780%2Ch-437%2Cfo-auto",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Luxo e elegância se encontram no The Ritz-Carlton, que oferece acomodações requintadas e um serviço impecável. Localizado em uma posição privilegiada em Grand Cayman, este resort é a escolha perfeita para aqueles que procuram uma experiência de férias de alto padrão. O resort dispõe de piscinas de borda infinita, um spa de classe mundial, e várias opções gastronômicas que incluem restaurantes premiados e bares elegantes. Os hóspedes podem desfrutar de um café da manhã gourmet no restaurante principal, que oferece uma ampla variedade de pratos internacionais e locais, preparados com ingredientes frescos e de alta qualidade. Além disso, o The Ritz-Carlton organiza atividades recreativas, como aulas de culinária, degustações de vinhos, e excursões de aventura, garantindo uma estadia memorável para todos os hóspedes.",
  },
  {
    id: "uuidv4()",
    name: "Westin Grand Cayman",
    capacity: "4",
    beds: 2,
    price_per_night: 500,
    image:
      "https://cache.marriott.com/content/dam/marriott-renditions/GCMMI/gcmmi-pool-beach-2880-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Com vistas deslumbrantes para o oceano e comodidades de primeira classe, o Westin Grand Cayman é o destino ideal para umas férias relaxantes na praia. Localizado na icônica Seven Mile Beach, o resort oferece aos hóspedes uma experiência inesquecível com suas piscinas luxuosas, cabanas privadas, e um centro de bem-estar totalmente equipado. Os hóspedes podem participar de uma variedade de atividades aquáticas, como paddleboarding, caiaque, e passeios de barco. O café da manhã é uma ocasião especial no Westin, com um buffet repleto de opções deliciosas, desde omeletes feitos na hora até pastelarias frescas e frutas tropicais. Para os que preferem uma refeição tranquila, o serviço de quarto está disponível 24 horas por dia, proporcionando conforto e conveniência.",
  },
  {
    id: "uuidv4()",
    name: "Kimpton Seafire Resort",
    capacity: "3",
    beds: 2,
    price_per_night: 550,
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNr6wDH4WOq2rPotaMJDGspqa-ROMSnREX7SoxH=s680-w680-h510",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Com uma arquitetura moderna e um ambiente vibrante, o Kimpton Seafire Resort é um refúgio perfeito para quem busca luxo e estilo à beira-mar. O resort oferece acomodações elegantes com vistas panorâmicas do oceano, e uma variedade de comodidades que incluem um spa de luxo, várias piscinas, e restaurantes gourmet. Os hóspedes podem participar de aulas de yoga ao ar livre, excursões de mergulho, e passeios de bicicleta pela ilha. O café da manhã no Kimpton Seafire é uma experiência culinária de alto nível, com pratos preparados na hora e ingredientes frescos de origem local. Os hóspedes também podem desfrutar de coquetéis artesanais e pratos leves nos bares e lounges do resort, criando a atmosfera perfeita para relaxar e socializar.",
  },
  {
    id: "uuidv4()",
    name: "Grand Cayman Marriott",
    capacity: " 4",
    beds: 2,
    price_per_night: 480,
    image:
      "https://cache.marriott.com/is/image/marriotts7prod/mc-gcmgc-230125marriotthoriz18258-06710:Pano-Hor?wid=1920&fit=constrain",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "O Grand Cayman Marriott oferece uma mistura perfeita de conforto e conveniência, com acesso fácil à praia e diversas atividades para todas as idades. Localizado na famosa Seven Mile Beach, o resort dispõe de acomodações confortáveis, piscinas de água doce, e um centro de fitness moderno. Os hóspedes podem explorar a beleza natural da ilha com passeios de snorkel e mergulho, ou simplesmente relaxar nas cabanas à beira-mar. O café da manhã é servido em estilo buffet no restaurante principal, com uma ampla variedade de pratos quentes e frios, frutas frescas, sucos, e café. À noite, o resort oferece jantares temáticos e entretenimento ao vivo, garantindo uma experiência divertida e envolvente para toda a família.",
  },
  {
    id: "uuidv4()",
    name: "Sunshine Suites Resort",
    capacity: "3",
    beds: 2,
    price_per_night: 300,
    image:
      "https://sunshinesuites.com/wp-content/uploads/sunshine-suites-resort-pool.jpg",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Uma opção acessível e acolhedora em Grand Cayman, o Sunshine Suites Resort oferece acomodações confortáveis e um ambiente amigável para famílias. Localizado próximo à Seven Mile Beach, o resort dispõe de uma piscina ao ar livre, um restaurante casual, e uma variedade de atividades recreativas. Os hóspedes podem aproveitar o serviço de aluguel de bicicletas para explorar a ilha, ou participar de excursões de snorkeling e mergulho. O café da manhã é servido diariamente no restaurante do resort, com uma seleção de pratos quentes e frios, frutas frescas, e bebidas. O Sunshine Suites Resort é conhecido por seu atendimento amigável e ambiente acolhedor, tornando-se a escolha ideal para uma escapada relaxante em Grand Cayman.",
  },
  {
    id: "uuidv4()",
    name: "The Meridian",
    capacity: "6",
    beds: 3,
    price_per_night: 700,
    image:
      "https://s3.amazonaws.com/vrp2/vrpimages/5/complexes/2/6384e1f9bbb6e_Seven-Mile-Beach-Cayman.jpg",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "Localizado na famosa Seven Mile Beach, o Meridian oferece villas espaçosas e luxuosas, perfeitas para grupos e famílias que desejam desfrutar do melhor de Grand Cayman. Cada villa possui uma cozinha totalmente equipada, áreas de estar amplas, e varandas com vistas deslumbrantes do oceano. O resort dispõe de piscinas ao ar livre, um centro de fitness, e acesso direto à praia. Os hóspedes podem começar o dia com um café da manhã preparado na sua própria villa ou visitar um dos restaurantes locais nas proximidades. O Meridian também oferece serviços de concierge para ajudar os hóspedes a planejar atividades e excursões, garantindo uma estadia personalizada e inesquecível.",
  },
  {
    id: "uuidv4()",
    name: "Aqua Bay Club",
    capacity: "4",
    beds: 2,
    price_per_night: 450,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0b/de/86/aerial-view-of-aqua-bay.jpg?w=700&h=-1&s=1",
    island: "Grand Cayman",
    city: "George Town",
    description:
      "O Aqua Bay Club oferece uma experiência de férias tranquila e relaxante na deslumbrante Seven Mile Beach. Este resort íntimo dispõe de apartamentos espaçosos com varandas privativas e vistas panorâmicas do oceano. Os hóspedes podem desfrutar da piscina ao ar livre, jacuzzis, e áreas de churrasco, perfeitas para refeições ao ar livre com a família e amigos. O café da manhã é servido diariamente na área de refeições do resort, com uma seleção de pratos quentes e frios, frutas frescas, e bebidas. O Aqua Bay Club também oferece fácil acesso a atividades aquáticas, como snorkeling e mergulho, permitindo que os hóspedes explorem a rica vida marinha de Grand Cayman.",
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
