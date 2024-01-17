import React from "react";

function testCSS() {
  return (
    <section className="flex h-full px-4 bg-lime-50 2xl:py-16 flex-col flex-auto">
      <div className="bg-lime-50 w-full h-screen">
        <card className="ml-14 mt-[50px]">
          <h4 className="ml-8 mt-[100px] text-lime-900">
            Research Experience:
          </h4>
        </card>
        <div>
          <div className="mt-[50px] grid sm:gap-2 md:grid-cols-2 ml-5 mr-5">
            <h4 className=" mx-auto bg-lime-200 rounded-[10px] px-5 shadow-xl text-lime-800">
              Laser desorption molecular beam set-up for astrochemistry at
              HFML-FELIX (BUMA-1 setup)
            </h4>

            <p className="mx-auto bg-lime-100 rounded-[10px] px-5 shadow-xl text-lime-700">
              Recording the far- and mid-infrared spectra of neutral sumanene
              (C21H12)-a bowl-shaped polycyclic aromatic hydrocarbons with
              pentagon rings for its detection using the JWST data.
            </p>
          </div>
          <div className="mt-[10px] grid sm:gap-2 md:grid-cols-2 ml-5 mr-5">
            <h4 className="mx-auto bg-lime-200 rounded-[10px] px-5 shadow-xl">
              Laser desorption molecular beam set-up for astrochemistry at
              HFML-FELIX (BUMA-1 setup)
            </h4>

            <p className="mx-auto bg-lime-100 rounded-[10px] px-5 shadow-xl">
              Recording the far- and mid-infrared spectra of neutral sumanene
              (C21H12)-a bowl-shaped polycyclic aromatic hydrocarbons with
              pentagon rings for its detection using the JWST data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default testCSS;
