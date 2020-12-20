import React from "react";

export default function Education() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm"></div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h1>2011-2016</h1>
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Escola Secundária João Gonçalves Zarco
              </h2>
              <p className="leading-relaxed">
                Twelve years of schooling – European Qualification Framework
                (EQF) – Level 4. Completed school in 2016 taking part in a
                project called “Pós-Zarco” from the 10th to the 12th which
                grouped the best students from the school in one class
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm"></div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h1>2016</h1>
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Faculdade de Engenharia da Universidade do Porto
              </h2>
              <p className="leading-relaxed">
                Currently in the 5th and last year of Master in Electrical and
                Computers Engineering. Automation and robotics
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm"></div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h1>2019-2020</h1>

              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Politechnika Poznańska
              </h2>
              <p className="leading-relaxed">
                Studied one semester in Poznan, Poland - Erasmus program
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
