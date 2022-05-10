import { Grid, Heading } from "@chakra-ui/react";
import React from "react";
import City from "./City";

export default function Cities() {
  const cities = [
    {
      name: "Londres",
      country: "Reino Unico",
      flag: "/assets/bandeiraRN.png",
      picture: "/assets/londres.png",
    },
    {
      name: "Paris",
      country: "França",
      flag: "/assets/bandeiraFR.png",
      picture: "/assets/paris.png",
    },
    {
      name: "Roma",
      country: "Itália",
      flag: "/assets/bandeiraIT.png",
      picture: "/assets/roma.png",
    },
  ];
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {cities.map((city, index) => (
          <City
            flag={city.flag}
            name={city.name}
            country={city.country}
            picture={city.picture}
            key={index}
          />
        ))}
      </Grid>
    </>
  );
}
