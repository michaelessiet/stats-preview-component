import Head from "next/head";
import Image from "next/image";

export default function StatsPreview() {
  //Primary
  var vdb = "hsl(233, 47%, 7%)";
  var ddb = "hsl(244, 38%, 16%)";
  var sv = "hsl(277, 64%, 61%)";

  //Neutral
  var white = "hsl(0, 0%, 100%)";
  var white2 = "hsla(0, 0%, 100%, 0.75)";
  var white3 = "hsla(0, 0%, 100%, 0.6)";

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <title>Stats Component Preview</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main
        className=" w-full px-6 py-12 flex flex-col md:h-screen items-center justify-center"
        style={{ backgroundColor: vdb }}
      >
        <div
          className="flex rounded-2xl max-w-sm lg:max-w-full md:max-w-md sm:max-w-md flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row "
          style={{ backgroundColor: ddb }}
        >
          <div className="p-12 lg:pr-20 text-center lg:text-left md:text-center sm:text-center max-w-2xl ">
            <h3
              className=" text-2xl sm:text-2xl md:text-4xl"
              style={{ color: white }}
            >
              Get <span style={{ color: sv }}>insights</span> that help your
              business grow.
            </h3>
            <p
              className=" md:text-xl pt-5 md:pt-10"
              style={{ color: white2, lineHeight: 2, fontFamily: "Inter" }}
            >
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="flex md:pt-5 flex-col md:flex-row">
              <div className=" flex flex-1 pt-5 flex-col">
                <h4 className="text-2xl" style={{ color: white }}>
                  10k+
                </h4>
                <p style={{ color: white3 }}>COMPANIES</p>
              </div>
              <div className=" flex flex-1 pt-5 flex-col">
                <h4 className="text-2xl" style={{ color: white }}>
                  314
                </h4>
                <p style={{ color: white3 }}>TEMPLATES</p>
              </div>
              <div className=" flex flex-1 pt-5 flex-col">
                <h4 className="text-2xl" style={{ color: white }}>
                  12M+
                </h4>
                <p style={{ color: white3 }}>QUERIES</p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full bg-purple-800 rounded-tr-2xl rounded-tl-2xl lg:rounded-tl-none lg:rounded-br-2xl lg:rounded-tr-2xl xl:rounded-br-2xl xl:rounded-tr-2xl">
            {/* <div style={{backgroundColor:{sv}}}></div> */}
            <img
              className="flex h-auto rounded-tr-2xl rounded-tl-2xl lg:rounded-tl-none lg:rounded-br-2xl lg:rounded-tr-2xl xl:rounded-br-2xl xl:rounded-tr-2xl  opacity-40"
              src="/image-header-desktop.jpg"
            />
          </div>
        </div>
        <div className=" pt-10 md:pt-0 md:fixed md:bottom-10">
          <p className=" text-white text-center">
            Challenge by{" "}
            <a
              className="text-purple-800 hover:text-white"
              target="_blank"
              href="https://www.frontendmentor.io/"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              className="text-purple-800 hover:text-white"
              target="_blank"
              href="https://github.com/michaelessiet"
            >
              Michael Essiet
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
