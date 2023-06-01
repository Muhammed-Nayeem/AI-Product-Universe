import React, { useEffect, useState } from "react";
import Tool from "../Tool/Tool";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Tools = () => {
  const [toolsData, setToolsData] = useState([]);
  const [modalData, setModalData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

  useEffect(() => {
    const loadToolsData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await res.json();
      setToolsData(data.data.tools);
    };
    loadToolsData();
  }, []);

  useEffect(() => {
    const loadToolData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`
      );
      const data = await res.json();
      setModalData(data.data);
    };
    loadToolData();
  }, [uniqueId]);

  const seeMoreHandler = () => {
    setShowAll(true);
  };

  const modalDataHandler = (id) => {
    setUniqueId(id);
  };

  const sortByDateHandler = () => {
    const sortedData = toolsData.sort((a, b) => {
      if (new Date(a.published_in) > new Date(b.published_in)) {
        return 1;
      } else if (new Date(a.published_in) < new Date(b.published_in)) {
        return -1;
      } else {
        return 0;
      }
    });
    setToolsData([...toolsData, sortedData]);
  };

  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="my-2 text-center">
          <article className="text-center mb-10">
            <h1 className="text-3xl font-sans font-bold mb-5">
              AI Universe Hub
            </h1>
            <span onClick={() => sortByDateHandler()}>
              <Button>Sort By Date</Button>
            </span>
          </article>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-5">
            {toolsData?.slice(0, showAll ? 12 : 6).map((toolData) => (
              <Tool
                key={toolData.id}
                toolData={toolData}
                modalDataHandler={modalDataHandler}
              />
            ))}
          </div>
          {!showAll && (
            <span className="pt-3" onClick={() => seeMoreHandler()}>
              <Button>See More</Button>
            </span>
          )}
        </div>
        <Modal modalData={modalData} />
      </div>
    </section>
  );
};

export default Tools;
