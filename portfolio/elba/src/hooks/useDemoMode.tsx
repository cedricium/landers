import Notification from "@/components/notification";
import { cn } from "@/lib/utils";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

type UseDemoModeProps = {
  autoplay?: boolean;
  delay?: number;
};

interface UseDemoMode {
  status: boolean;
  start: () => void;
  stop: () => void;
  push: (msg?: string, duration?: number) => void;
}

export function useDemoMode({
  autoplay = false,
  delay = 2000,
}: UseDemoModeProps = {}): UseDemoMode {
  const [isActive, setIsActive] = useState(autoplay);

  const triggerToast = useCallback(
    (msg?: string | ReactElement, duration?: number) => {
      const opts = { duration: duration || 3000 };
      if (React.isValidElement(msg))
        return toast.custom((id) => <div id={id.toString()}>{msg}</div>, opts);
      return toast(msg || "New Update Received!", opts);
    },
    [delay]
  );

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const push = () => {
    const notification =
      DEMO_DATA[Math.floor(Math.random() * DEMO_DATA.length)];

    triggerToast(notification, Infinity);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isActive) {
      intervalId = setInterval(() => {
        const notification =
          DEMO_DATA[Math.floor(Math.random() * DEMO_DATA.length)];

        triggerToast(notification);
      }, delay);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive, delay, triggerToast, Notification]);

  const demoMode = Object.freeze({ status: isActive, start, stop, push });
  if (process.env.NODE_ENV !== "production") {
    if (typeof window !== undefined) window.__DEMO_MODE__ = demoMode;
  }
  return demoMode;
}

const DEMO_DATA = [
  <Notification
    avatar="https://mighty.tools/mockmind-api/content/human/2.jpg"
    message={
      <p className={Notification.classes.base}>
        <span className={Notification.classes.bold}>Thomas</span> revoked{" "}
        <span
          className={`${cn(
            Notification.classes.badge,
            Notification.classes.colorVariants["pink"]
          )}`}
        >
          M365 OAuth
        </span>{" "}
        tokens for 2 unused apps.
      </p>
    }
    timestamp={Date.now() - 1000 * 60 * 15}
  />,
  <Notification
    avatar="https://mighty.tools/mockmind-api/content/human/43.jpg"
    message={
      <p className={Notification.classes.base}>
        <span className={Notification.classes.bold}>Janet</span> completed{" "}
        <span
          className={`${cn(
            Notification.classes.badge,
            Notification.classes.colorVariants["emerald"]
          )}`}
        >
          Q3 GitHub
        </span>
        access review.
      </p>
    }
    timestamp={Date.now() - 1000 * 60 * 8}
  />,
  <Notification
    avatar="https://mighty.tools/mockmind-api/content/human/42.jpg"
    message={
      <p className={Notification.classes.base}>
        <span className={Notification.classes.bold}>Vincent</span> activated{" "}
        <span
          className={`${cn(
            Notification.classes.badge,
            Notification.classes.colorVariants["sky"]
          )}`}
        >
          SSO
        </span>{" "}
        auth on JIRA.
      </p>
    }
    timestamp={Date.now() - 1000 * 60 * 5}
  />,
];
