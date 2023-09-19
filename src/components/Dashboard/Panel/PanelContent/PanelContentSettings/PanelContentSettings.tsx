import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Header } from "../../../../../models/settings/Header";
import { useGlobalElement } from "../../../../../context/SelectedGobalElementContext";
import SettingsItem from "./SettingsItem/SettingsItem";

const PanelContentSettings: React.FC<{ selectedHeader: Header | null }> = ({
  selectedHeader,
}) => {
  const { selectedGlobalElement, setSelectedGlobalElement } =
    useGlobalElement();


  if (!selectedHeader || !selectedGlobalElement)
    return <p className="justify-center">No Header Selected</p>;

  const { settings } = selectedHeader;

  const handleInputChange = (key: string, value: string) => {
    const updatedElement = JSON.parse(JSON.stringify(selectedGlobalElement));
    if (updatedElement.configuration) {
      (updatedElement.configuration as any)[key] = value;
    }
    setSelectedGlobalElement(updatedElement);
  };

  return (
    <div className="content-settings">
      {Object.keys(settings).map((key, index) => {
        const type = key === "content" ? "richText" : "text";
        return (
          <SettingsItem
            key={index}
            label={key}
            type={type}
            value={(selectedGlobalElement.configuration as any)[key]}
            onChange={(value) => handleInputChange(key, value)}
          />
        );
      })}
    </div>
  );
};

export default PanelContentSettings;
