interface IElementSettings {
  id: string;
  type: string;
}

interface IPanelProps {
  selectedElement: IElementSettings | null;
}

interface IContentOptionsProps {
  selectedElement: IElementSettings | null;
}

interface IStyleOptionsProps {
  selectedElement: IElementSettings | null;
}
