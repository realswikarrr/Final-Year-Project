import React from "react";
import BegineerWorkout from "./BegineerWorkout";
import ExpertWorkout from "./ExpertWorkout";
import IntermidiateWorkout from "./IntermidiateWorkout";

const Workout = () => {
  return (
    <section style={{ marginTop: "40px" }}>
      <BegineerWorkout />
      <IntermidiateWorkout />
      <ExpertWorkout />
    </section>
  );
};

export default Workout;
