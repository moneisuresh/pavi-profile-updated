import React from "react";
import Link from "next/link";

const Publications = () => {
  return (
    <section className="flex h-full 2xl:py-[30px] flex-col full-screen-container">
      <card className=" text-cyan-400 mt-[75px]">
        <h2 className="mt-10 text-left mb-5">List of Publications</h2>
      </card>

      <div className="flex flex-col justify-between mx-[130px]">
        {/* < className="mx-[50px] grid grid-row"> */}
        <div className=" bg-black rounded-[5px] px-5 shadow-xl text-[#b9c4d4] p-[20px] m-[4px] bg-opacity-25">
          <ol className="list-decimal">
            <Link href="">
              <li className=" ml-2 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Mifsud, D. V., P. Herczku, K. K. Rahul, R. Ramachandran, P.
                Sundararajan, S. T. S. Kovács, et al. (2023). "A systematic
                mid-infrared spectroscopic study of thermally processed SO
                <sub>2</sub> ices." Physical Chemistry Chemical Physics.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Ramachandran, R., K.K. Rahul, JK Meka, S Pavithraa, A Roy, BN
                Rajasekhar, P Janardhan, Anil Bhardwaj, NJ Mason, B Sivaraman.
                (2023). "Stability and morphology of cyanonaphthalene icy
                mantles on ISM cold dust analogues." Journal of Chemical
                Sciences 135(3): 77.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Pavithraa, S., et al. (2022). "VUV photoabsorption of thermally
                processed carbon disulfide and ammonia ice mixtures –
                Implications for icy objects in the solar system."
                Spectrochimica Acta Part A: Molecular and Biomolecular
                Spectroscopy 283: 121645.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Isabelle Weber, Masashi Tsuge, Pavithraa Sundararajan, Masaaki
                Baba, Hidehiro Sakurai, Yuan-Pern Lee (2022). "Infrared and
                Laser-Induced Fluorescence Spectra of Sumanene Isolated in Solid
                para-Hydrogen." The Journal of Physical Chemistry A 126(32):
                5283-5293.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Ramachandran, R., Pavithraa S., Meka J. K., Rahul K. K., Lo J.
                I., Chou S. L., Cheng B. M., Rajasekhar B. N., Bhardwaj Anil,
                Mason N. J. and Sivaraman B. (2022). "Vacuum ultraviolet
                photoabsorption spectra of icy isoprene and its oligomers."
                Spectrochimica Acta Part A: Molecular and Biomolecular
                Spectroscopy, 268: 120586.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Mifsud, D. V.,…., Pavithraa S., et al. (2022). "Mid-IR and VUV
                spectroscopic characterisation of thermally processed and
                electron irradiated CO
                <sub>2</sub> astrophysical ice analogues." Journal of Molecular
                Spectroscopy 385: 111599.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Thombre, R., Gupta, D., Pavithraa, S., et al. (2022). "Vacuum
                ultraviolet photoabsorption spectra of an in-situ synthesized
                peptide precursor: hydroxylamine on a cold astrochemical dust
                analogue." The European Physical Journal D 76(3): 53.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Rahul, K. K., J. K. Meka, Pavithraa Sundararajan et al. (2020).
                "Infrared attenuation due to phase change from amorphous to
                crystalline observed in astrochemical propargyl ether ices."
                Spectrochimica Acta Part A: Molecular and Biomolecular
                Spectroscopy 224: 117393.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Pavithraa Sundararajan, M. Tsuge, et al. (2019). "Infrared
                spectrum of hydrogenated corannulene rim-HC<sub>20</sub>H
                <sub>10</sub> isolated in solid para-hydrogen." The Journal of
                Chemical Physics 151(4): 044304.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Pavithraa Sundararajan, J. I. Lo, et al. (2019). "Identification
                of a unique VUV photoabsorption band of carbonic acid for its
                identification in radiation and thermally processed water-carbon
                dioxide ices." Spectrochimica Acta Part A: Molecular and
                Biomolecular Spectroscopy 215: 130-132.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Pavithraa Sundararajan, M. Tsuge, et al. (2018). "Infrared
                Spectrum of Protonated Corannulene HC<sub>20</sub>H<sub>10</sub>{" "}
                in Solid para-Hydrogen and its Potential Contribution to
                Interstellar Unidentified Infrared Bands." ACS Earth and Space
                Chemistry 2(10): 1001-1010.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Pavithraa Sundararajan, J. I. Lo, et al. (2018). "Vacuum
                ultraviolet photoabsorption of prime ice analogues of Pluto and
                Charon." Spectrochimica Acta Part A: Molecular and Biomolecular
                Spectroscopy 190 (Supplement C): 172-176.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Pavithraa Sundararajan, R. R. J. Methikkalam, et al.
                (2017)."Qualitative observation of reversible phase change in
                astrochemical ethanethiol ices using infrared spectroscopy."
                Spectrochimica Acta Part-A: Molecular and Biomolecular
                Spectroscopy 178: 166-170.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Pavithraa Sundararajan, D. Sahu, et al. (2017). "SH stretching
                vibration of propanethiol ice—a signature for its identification
                in the interstellar icy mantles." Astrophysics and Space Science
                362(7): 126.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Methikkalam, R. R. J., S. Pavithraa, S. P. Murali Babu, H. Hill,
                B. N. Raja Sekhar, T. Pradeep, and B. Sivaraman. "Thio Residue
                from Thermal Processing of Cometary Ices Containing Carbon
                Disulfide and Ammonia." Advances in Space Research, 58, no. 3
                (2016): 438-43.
              </li>
            </Link>
            <Link href="">
              <li className="ml-2 mt-5 bg-black rounded-[5px] bg-opacity-25 text-left p-3">
                Sivaraman, B., S. Pavithraa, J. I. Lo, B. N. Raja Sekhar, H.
                Hill, B. M. Cheng, and N. J. Mason. "Vacuum Ultraviolet
                Photoabsorption Spectra of Nitrile Ices for Their Identification
                on Pluto." The Astrophysical Journal 825, no. 2 (2016): 141.
              </li>
            </Link>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Publications;
