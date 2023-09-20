import React from "react";
import "react-quill/dist/quill.snow.css";
import { Header } from "../../../../../models/settings/Header";
import { useGlobalElement } from "../../../../../context/SelectedGobalElementContext";
import SettingsItem from "./SettingsItem/SettingsItem";
import { usePanelContext } from "../../../../../context/PanelContext";

const PanelContentSettings: React.FC<{ selectedHeader: Header | null }> = ({
  selectedHeader,
}) => {
  const { setActivePanel } = usePanelContext();

  const { selectedGlobalElement, setSelectedGlobalElement } =
    useGlobalElement();

  const settings = selectedHeader?.settings || {};

  const handleInputChange = (key: string, value: any) => {
    let finalValue = value;

    if (key === "margin" || key === "padding" || key === "border_width") {
      finalValue = `${value}px`;
    }

    const updatedElement = JSON.parse(JSON.stringify(selectedGlobalElement));
    if (updatedElement.configuration) {
      (updatedElement.configuration as any)[key] = finalValue;
    }
    setSelectedGlobalElement(updatedElement);
  };

  if (!selectedGlobalElement) {
    setActivePanel("DatabasePages");
    return null;
  }

  return (
    <div className="content-settings">
      {Object.keys(settings).map((key, index) => {
        let type: "text" | "range" | "richText" | "color" = "text";

        let sliderValue: string | number = (
          selectedGlobalElement.configuration as any
        )[key];

        if (key === "content") {
          type = "richText";
        } else if (
          key === "background_color" ||
          key === "text_color" ||
          key === "border_color"
        ) {
          // or any other color fields
          type = "color";
        } else if (
          key === "margin" ||
          key === "padding" ||
          key === "border_width"
        ) {
          type = "range";
        }

        if (type === "range") {
          sliderValue = parseInt((sliderValue as string).replace("px", ""), 10);
        }

        return (
          <SettingsItem
            key={index}
            label={key}
            type={type}
            value={
              type === "range"
                ? sliderValue
                : (selectedGlobalElement.configuration as any)[key]
            }
            onChange={(value) => handleInputChange(key, value)}
          />
        );
      })}
    </div>
  );
};

export default PanelContentSettings;
