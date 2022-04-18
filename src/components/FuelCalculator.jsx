import { useState } from "react";
import styled from "styled-components";
import fueljpg from "../assets/images/fuel station3.jpg";

const FuelCalculator = () => {
  let [distance, setDistance] = useState("");
  let [fuelConsumption, setFuelConsumption] = useState("");
  let [pricePerLitre, setPricePerLitre] = useState("");
  let [fuelCost, setFuelCost] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    fuelCost =
      (parseFloat(distance) / 100) *
      parseFloat(fuelConsumption) *
      parseFloat(pricePerLitre);
    setFuelCost(fuelCost.toFixed(2));
  };

  return (
    <Wrapper>
      <InputsWrapper onSubmit={handleSubmit}>
        <DistanceLabel>
          <h3>Distance of trip in kilometers</h3>
          <input
            value={distance}
            type="number"
            placeholder="Distance in kilometers"
            required="true"
            onChange={(e) => setDistance(e.target.value)}
          />
        </DistanceLabel>
        <FuelLabel>
          <h3>Fuel consumption of vehicle per 100km</h3>
          <input
            value={fuelConsumption}
            type="number"
            placeholder="Fuel consumption of vehicle per 100km"
            required="true"
            onChange={(e) => setFuelConsumption(e.target.value)}
          />
        </FuelLabel>
        <PriceLabel>
          <h3>Price per litre of fuel</h3>
          <input
            value={pricePerLitre}
            type="number"
            placeholder="Price in GHC"
            required="true"
            onChange={(e) => setPricePerLitre(e.target.value)}
          />
        </PriceLabel>
        <Button type="submit">Calculate price</Button>
      </InputsWrapper>
      <ResultWrapper>
        <Text>Estimated fuel cost</Text>
        <Currency>GHC</Currency>
        <Amount>{fuelCost}</Amount>
      </ResultWrapper>
    </Wrapper>
  );
};

export default FuelCalculator;

const Wrapper = styled.div`
  display: flex;
  height: 40.8rem;
  width: 60.8rem;
  padding: 2rem;
  background: linear-gradient(
    108.27deg,
    #acacac 0%,
    #fdfdfd 0.01%,
    rgba(255, 255, 255, 0.2) 98.64%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  border-radius: 20px;
`;

const InputsWrapper = styled.form``;

const DistanceLabel = styled.div`
  h3 {
    font-size: 1.6rem;
  }

  input {
    width: 20rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
  }
`;
const FuelLabel = styled(DistanceLabel)``;

const PriceLabel = styled(DistanceLabel)``;

const ResultWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 18rem;
  height: 16rem;
  margin: 8rem auto;
  padding: 0;
  gap: 0;
`;

const Text = styled.h3`
  font-size: 1.6rem;
  line-height: 1.6rem;
`;

const Currency = styled(Text)``;
const Amount = styled.h3`
  font-size: 3.2rem;
  margin-top: 0rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  border: none;
  border-radius: 1rem;
  width: 14.8rem;
  height: 3.2rem;
  cursor: pointer;
  background: linear-gradient(
    93.49deg,
    #e94b4b 6.92%,
    rgba(166, 63, 63, 0.2) 114.7%
  );
`;
