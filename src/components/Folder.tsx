import { useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import "./Folder.css";

type FolderProps = {
  color?: string;
  size?: number;
  items?: ReactNode[];
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const num = parseInt(color, 16);
  let red = (num >> 16) & 0xff;
  let green = (num >> 8) & 0xff;
  let blue = num & 0xff;

  red = Math.max(0, Math.min(255, Math.floor(red * (1 - percent))));
  green = Math.max(0, Math.min(255, Math.floor(green * (1 - percent))));
  blue = Math.max(0, Math.min(255, Math.floor(blue * (1 - percent))));

  return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;
};

function Folder({ color = "#5227FF", size = 1, items = [], className = "", open, onOpenChange }: FolderProps) {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [internalOpen, setInternalOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
  const isOpen = open ?? internalOpen;

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  const handleClick = () => {
    const nextOpen = !isOpen;
    if (onOpenChange) {
      onOpenChange(nextOpen);
    } else {
      setInternalOpen(nextOpen);
    }

    if (isOpen) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (event: MouseEvent<HTMLDivElement>, index: number) => {
    if (!isOpen) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (event.clientX - centerX) * 0.15;
    const offsetY = (event.clientY - centerY) * 0.15;

    setPaperOffsets((previousOffsets) => {
      const nextOffsets = [...previousOffsets];
      nextOffsets[index] = { x: offsetX, y: offsetY };
      return nextOffsets;
    });
  };

  const handlePaperMouseLeave = (_event: MouseEvent<HTMLDivElement>, index: number) => {
    setPaperOffsets((previousOffsets) => {
      const nextOffsets = [...previousOffsets];
      nextOffsets[index] = { x: 0, y: 0 };
      return nextOffsets;
    });
  };

  const folderStyle = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as CSSProperties;

  const folderClassName = `folder ${isOpen ? "open" : ""}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={folderClassName}
        style={folderStyle}
        onClick={(event) => {
          event.stopPropagation();
          handleClick();
        }}
      >
        <div className="folder__back">
          {papers.map((item, index) => (
            <div
              key={index}
              className={`paper paper-${index + 1}`}
              onMouseMove={(event) => handlePaperMouseMove(event, index)}
              onMouseLeave={(event) => handlePaperMouseLeave(event, index)}
              style={
                isOpen
                  ? ({
                      "--magnet-x": `${paperOffsets[index]?.x || 0}px`,
                      "--magnet-y": `${paperOffsets[index]?.y || 0}px`,
                    } as CSSProperties)
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front" />
          <div className="folder__front right" />
        </div>
      </div>
    </div>
  );
}

export default Folder;
