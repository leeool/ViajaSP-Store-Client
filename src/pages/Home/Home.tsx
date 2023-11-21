import PackagesShowcase from "@interface/PackagesShowcase/PackagesShowcase";
import React from "react";
import { Container } from "./Home.styled";
import { Packages } from "./Packages/Packages";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTripsQuery } from "@/queries/useTripQueries";

const Home = () => {
  const { data, isLoading } = useTripsQuery();

  if (isLoading || !data) return <PageLoading />;
  return (
    <Container>
      <PackagesShowcase data={data} />
      <Packages data={data} />
    </Container>
  );
};

const PageLoading = () => {
  return (
    <Container>
      <div>
        <Skeleton width={"100%"} height={"30rem"} />
      </div>
      <div style={{ display: "grid", gap: "2rem" }}>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <Skeleton width={"25%"} height={"1.5rem"} />
          <Skeleton width={"50%"} height={"3rem"} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Skeleton width={"20rem"} height={"20rem"} />
          <Skeleton width={"20rem"} height={"20rem"} />
          <Skeleton width={"20rem"} height={"20rem"} />
          <Skeleton width={"20rem"} height={"20rem"} />
          <Skeleton width={"20rem"} height={"20rem"} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
