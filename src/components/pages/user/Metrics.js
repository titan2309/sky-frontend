import CountUp from "react-countup";

const Metrics = () => {
  return (
    <>
      <div className="col-md-3 p-4 metrics-col">
        <h1 className="metrics-heading">
          <CountUp end={1000} duration={2} separator="," suffix="+" />
        </h1>
        <p className="metrics-subheading">Notes Created</p>
      </div>
      <div className="col-md-3 p-4 metrics-col">
        <h1 className="metrics-heading">
          <CountUp end={50} duration={2} separator="," suffix="+" />
        </h1>
        <p className="metrics-subheading">Active Users</p>
      </div>
      <div className="col-md-3 p-4 metrics-col">
        <h1 className="metrics-heading">
          <CountUp end={10} duration={2} suffix=" min" />
        </h1>
        <p className="metrics-subheading">Average Session Time</p>
      </div>
      <div className="col-md-3 p-4 metrics-col">
        <h1 className="metrics-heading">
          <CountUp end={30} duration={2} suffix="+" />
        </h1>
        <p className="metrics-subheading">Writers Empowered</p>
      </div>
    </>
  );
};

export default Metrics;
