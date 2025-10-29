import Link from "next/link";

const SidePanelSubLink: React.FC<any> = (props) => {
  return (
    <Link href={props.link}>
      <div 
        className={`flex justify-start items-center gap-2 cursor-pointer font-cursor w-full text-decoration-none overflow-hidden`}
      >
        <div className="flex-shrink-0">{props.icon}</div>
        <div className="flex-1 min-w-0 text-sm text-vscode-foreground/90 truncate overflow-hidden whitespace-nowrap text-ellipsis max-w-full" style={{ position: "relative" }}>
          {props.name}
        </div>
      </div>
    </Link>
  );
};

export default SidePanelSubLink;
