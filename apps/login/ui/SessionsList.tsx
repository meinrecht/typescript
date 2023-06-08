"use client";

import { Session } from "@zitadel/server";
import SessionItem from "./SessionItem";
import Alert from "./Alert";
import { useEffect, useState } from "react";

type Props = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: Props) {
  const [list, setList] = useState<Session[]>(sessions);

  return sessions ? (
    <div className="flex flex-col">
      {list
        .filter((session) => session?.factors?.user?.loginName)
        .map((session, index) => {
          return (
            <SessionItem
              session={session}
              reload={() => {
                setList(list.filter((s) => s.id !== session.id));
              }}
              key={"session-" + index}
            />
          );
        })}
    </div>
  ) : (
    <Alert>No Sessions available!</Alert>
  );
}