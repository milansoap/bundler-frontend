import { MyElement } from "../../models/MyElement";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

export const optionsForDiv = (selectedElement: MyElement) => {
  console.log(selectedElement);
  return [
    {
      title: "Style",
      settings: {
        background_color: selectedElement.configuration.background_color,
      },
    },
    {
      title: "Text",
      settings: {
        content: selectedElement.configuration.content,
        text_color: selectedElement.configuration.text_color,
        font_size: selectedElement.configuration.font_size,
        font_family: selectedElement.configuration.font_family,
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
