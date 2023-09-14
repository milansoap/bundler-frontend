import { MyElement } from "../../models/MyElement";

export const optionsForDiv = (selectedElement: MyElement) => {
  console.log(selectedElement);
  return [
    {
      title: "Style",
      settings: {
        text_color: selectedElement.configuration.text_color,
        background_color: selectedElement.configuration.background_color,
        font_size: selectedElement.configuration.font_size,
        font_family: selectedElement.configuration.font_family,
      },
    },
    {
      title: "Content",
      settings: {
        content: selectedElement.configuration.content,
      },
    },
    {
      title: "Advanced",
      settings: {
        margin: selectedElement.configuration.margin,
        padding: selectedElement.configuration.padding,
        border_color: selectedElement.configuration.border_color,
        border_width: selectedElement.configuration.border_width,
        border_style: selectedElement.configuration.border_style,
      },
    },
  ];
};
