// SettingsItem.tsx
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { SketchPicker } from "react-color";

interface SettingsItemProps {
  label: string;
  type: "text" | "range" | "richText" | "color";
  value: string;
  onChange: (value: string) => void;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="setting-item">
        <div className="label">
          <label>{label.toLocaleUpperCase()}</label>
        </div>
      </div>

      <div className="content">
        {type === "richText" ? (
          <ReactQuill value={value} onChange={onChange} />
        ) : type === "color" ? (
          <SketchPicker
            color={value}
            onChangeComplete={(color) => onChange(color.hex)}
          />
        ) : (
          <>
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default SettingsItem;
