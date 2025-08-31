import React from "react";

function Biography() {
  return (
    <>
      <div
        name="Biography"
        className="flex flex-col md:flex-row bg-amber-400 p-4 md:p-8"
      >
        {/* Image Section */}
        <div className="md:w-1/2 w-full order-1 md:order-1 flex justify-center">
          <img
            src="/biography.png"
            alt="Biography"
            className="w-full h-auto max-w-md md:max-w-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full order-2 mt-6 md:mt-0 md:pl-8">
          <h1 className="text-2xl md:text-4xl font-bold text-green-700">
            Biography & Rules
          </h1>

          <p className="text-justify mt-4 text-sm md:text-base leading-relaxed">
            A "biography of a hospital" would detail its history, founding,
            services, management structure, and role in the community, including
            its adherence to governing rules and regulations. Such a description
            incorporates the "rules" aspect by explaining how a hospital is
            directed and managed to ensure quality, patient rights, and
            operational efficiency according to laws and standards, such as
            those set by the Islamabad Healthcare Regulatory Authority (IHRA).
          </p>

          <h2 className="text-xl md:text-3xl text-blue-900 font-semibold mt-6">
            Rules
          </h2>

          <ul className="list-disc list-inside mt-3 space-y-2 text-sm md:text-base text-justify">
            <li>
              Provide, to the best of your ability, your medical team with
              accurate, complete details about past and present illnesses,
              hospitalizations, surgical procedures, and medications.
            </li>
            <li>
              Communicate about the need for pain relief with doctors and
              nurses. Inform your medical team whenever you experience a change
              in your condition or a problem with your treatment.
            </li>
            <li>
              Let your medical team know if you do not understand your treatment
              or what you are expected to do.
            </li>
            <li>
              Follow the advice and instructions of your doctors, nurses and
              other hospital personnel concerning your care.
            </li>
            <li>
              Understand and accept the consequences of refusing treatment or
              not following instructions.
            </li>
            <li>
              Pay bills promptly or inform the hospital billing department if
              you cannot pay your bills.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Biography;
