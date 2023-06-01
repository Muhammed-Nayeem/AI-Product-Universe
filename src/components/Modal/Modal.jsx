import React from "react";

const Modal = (props) => {
  const { tool_name, description, pricing, features, integrations, image_link, input_output_examples, accuracy } = props.modalData;

  const featuresArr = Object.values(features || {});

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="border-b-2">
            <h3 className="font-bold text-lg pb-2">{tool_name}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-10 py-4">
            <div className="border border-red-500 rounded bg-red-50 py-4 px-2 order-2 md:order-1">
              <h3 className="text-base font-semibold">
                {description ? description : "No Description Found!"}
              </h3>
              <div className="flex flex-wrap flex-col md:flex-row md:flex-nowrap justify-between">
                <div className="text-green-600 text-center my-4 p-3 bg-white border rounded">
                  <p className="text-sm">
                    {pricing ? pricing[0].price : "Free Of Cost/"}
                    <span className="block">
                      {pricing ? pricing[0].plan : "Basic"}
                    </span>
                  </p>
                </div>
                <div className="text-orange-600 text-center my-4 p-3 bg-white border rounded">
                  <p className="text-sm">
                    {pricing ? pricing[1].price : "Free Of Cost/"}
                    <span className="block">
                      {pricing ? pricing[1].plan : "Pro"}
                    </span>
                  </p>
                </div>
                <div className="text-red-600 text-center my-4 p-3 bg-white border rounded">
                  <p className="text-sm">
                    {pricing ? pricing[2].price : "Free Of Cost/"}
                    <span className="block">
                      {pricing ? pricing[2].plan : "Enterprise"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-left">
                  <h3 className="text-lg text-left font-semibold">Features</h3>
                  <ul className="list-disc px-5">
                    {featuresArr.map((feature, index) => (
                      <li key={index}>
                        {feature.feature_name
                          ? feature.feature_name
                          : "No Feature"}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-lg text-left font-semibold">
                    Integrations
                  </h3>
                  <ul className="list-disc px-5">
                    {integrations?.map((int, index) => (
                      <li key={index}>{int}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">Accuracy Status</h3>
                <p>{accuracy && accuracy.description ? accuracy.description : "No Accuracy Status!"}</p>
              </div>
            </div>
            <div className="border p-3 rounded order-1 md:order-2">
              <div className="relative">
                <img className="w-full h-full" src={image_link &&  image_link[0]} alt={tool_name} />
                <div className={`absolute top-1 right-1 bg-red-500 text-white p-2 rounded ${accuracy?.score !== null ? "block" : "hidden"}`}>
                  <p>{accuracy?.score}% accuracy</p>
                </div>
              </div>
              <div className="text-center py-3">
                <h3 className="font-semibold text-base mb-2">
                  {input_output_examples && input_output_examples[0].input ? input_output_examples[0].input : "No Question Found!"}
                </h3>
                <p>
                  {input_output_examples && input_output_examples[0].output ? input_output_examples[0].output : "No Answers Found!"}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
