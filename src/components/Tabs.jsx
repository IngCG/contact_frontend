import React from "react";

const Tabs = ({ children, activeTab, onTabChange }) => {
  const tabs = React.Children.map(children, (child) => child.props.label);

  return (
    <div>
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {React.Children.map(children, (child) =>
          child.props.label === activeTab ? child : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
