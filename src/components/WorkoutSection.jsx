import workoutImg from "../assets/workouts.png";

function WorkoutSection() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl overflow-hidden rounded-sm shadow-lg">

        <img
          src={workoutImg}
          alt="Workout"
          className="w-full object-cover"
        />

      </div>

    </section>
  );
}

export default WorkoutSection;