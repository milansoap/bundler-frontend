import React from "react";
import { Header } from "../../../../../models/settings/Header";
import { useGlobalElement } from "../../../../../context/SelectedGobalElementContext";

const PanelContentSettings: React.FC<{ selectedHeader: Header | null }> = ({
  selectedHeader,
}) => {
  const { selectedGlobalElement, setSelectedGlobalElement } =
    useGlobalElement();

  if (!selectedHeader || !selectedGlobalElement)
    return <p>No Header Selected</p>;

  const { settings } = selectedHeader;

  const handleInputChange = (key: string, value: string) => {
    const updatedElement = { ...selectedGlobalElement };
    console.log("TU SAM");
    console.log(updatedElement);
    if (updatedElement.configuration) {
      (updatedElement.configuration as any)[key] = value;
    }
    setSelectedGlobalElement(updatedElement);
    console.log(selectedGlobalElement);
  };

  return (
    <div>
      {Object.keys(settings).map((key, index) => (
        <div key={index}>
          <label>{key}</label>
          <input
            type="text"
            value={(selectedGlobalElement.configuration as any)[key]}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default PanelContentSettings;
