import Head from "next/head";

const threecolpreview = () => {
  const brightOrange = "hsl(31, 77%, 52%)";
  const darkCyan = "hsl(184, 100%, 22%)";
  const veryDarkCyan = "hsl(179, 100%, 13%)";

  const transWhite = "hsla(0, 0%, 100%, 0.75)";
  const veryLightGray = "hsl(0, 0%, 95%)";

  return (
    <div>
      <Head>
        <title>3 Column Preview</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+shoulders+Display:wght@700&family=Lexend+Deca:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col items-center justify-center lg:h-screen">
        <div className="flex py-10 flex-col md:flex-row sm:flex-col ">
          <div
            className="flex p-12 rounded-t-lg md:rounded-t-none flex-1 flex-col w-80 md:rounded-l-lg"
            style={{ backgroundColor: brightOrange }}
          >
            <img className=" w-24" src="/3colpreview/icon-sedans.svg" alt="" />
            <h1
              className="big-shoulder-display py-14 text-5xl"
              style={{ color: transWhite }}
            >
              SEDANS
            </h1>
            <p
              className="lexend-deca text-left pb-10"
              style={{ color: veryLightGray }}
            >
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button
              className="text-center mt-14 border-4 border-white bg-white text-yellow-500 focus:outline-none hover:bg-transparent hover:text-white rounded-full w-40 h-12"
              style={{ padding: "0" }}
            >
              Learn More
            </button>
          </div>
          <div
            className="flex p-12 flex-1 flex-col w-80"
            style={{ backgroundColor: darkCyan }}
          >
            <img className=" w-24" src="/3colpreview/icon-suvs.svg" alt="" />
            <h1
              className="big-shoulder-display py-14 text-5xl"
              style={{ color: transWhite }}
            >
              SUVS
            </h1>
            <p
              className="lexend-deca text-left pb-10"
              style={{ color: veryLightGray }}
            >
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button
              className="text-center mt-14 border-4 border-white bg-white text-green-700 focus:outline-none hover:bg-transparent hover:text-white rounded-full w-40 h-12"
              style={{ padding: "0" }}
            >
              Learn More
            </button>
          </div>
          <div
            className="flex p-12 rounded-b-lg md:rounded-b-none flex-1 flex-col w-80 md:rounded-r-lg"
            style={{ backgroundColor: veryDarkCyan }}
          >
            <img className=" w-24" src="/3colpreview/icon-luxury.svg" alt="" />
            <h1
              className="big-shoulder-display py-14 text-5xl"
              style={{ color: transWhite }}
            >
              LUXURY
            </h1>
            <p
              className="lexend-deca text-left pb-10"
              style={{ color: veryLightGray }}
            >
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
              rental and arrive in style.
            </p>
            <button
              className="text-center mt-14 border-4 border-white bg-white text-green-900 focus:outline-none hover:bg-transparent hover:text-white rounded-full w-40 h-12"
              style={{ padding: "0" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default threecolpreview;
