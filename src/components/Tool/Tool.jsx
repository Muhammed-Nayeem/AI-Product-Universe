import React from "react";

const Tool = (props) => {
  const { id, name, image, features, published_in } = props.toolData;
  const { modalDataHandler } = props;

  return (
    <div className="card card-compact w-full bg-base-100 border p-3">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">Features</h2>
        {features &&
          features.map((feature, index) => (
            <p key={index}>
              {index + 1}. {feature}
            </p>
          ))}
        <div className="flex justify-between items-center border-t-2 pt-2">
          <div>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <p className="pl-1">{published_in}</p>
            </div>
          </div>
          <label htmlFor="my-modal-5" onClick={() => modalDataHandler(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Tool;
