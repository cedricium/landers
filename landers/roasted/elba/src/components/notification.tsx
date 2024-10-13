import { ReactNode } from "react";

type NotificationProps = {
  avatar: string;
  message: ReactNode;
  timestamp: number;
};

export default function Notification(props: NotificationProps) {
  const { avatar, message, timestamp } = props;

  return (
    <div className="h-16 p-1 grid grid-cols-12 grid-rows-2 grid-flow-row text-xs font-regular bg-white drop-shadow-sm shadow-lg border border-gray-300 rounded-xl">
      <img
        className="w-10 h-10 rounded-full border bg-indigo-700 col-start-1 col-end-3 row-start-1 row-end-3 justify-self-center self-center"
        alt="avatar"
        src={avatar}
      />
      <div className="flex items-center py-1 ml-1 h-full col-start-3 col-end-11 row-start-1 row-end-3">
        {message}
      </div>
      <div className="flex items-center py-1 h-full col-start-12 row-start-1 row-end-3">
        <p className="text-gray-400/80">
          <time dateTime={new Date(timestamp).toISOString()}>now</time>
        </p>
      </div>
    </div>
  );
}

Notification.classes = {
  base: "min-w-60 text-gray-600",
  bold: "text-foreground font-medium",
  badge: "font-medium p-1 rounded-md",
  colorVariants: {
    sky: "text-sky-600 bg-sky-50",
    emerald: "text-emerald-600 bg-emerald-50",
    pink: "text-pink-600 bg-pink-50",
  },
};
