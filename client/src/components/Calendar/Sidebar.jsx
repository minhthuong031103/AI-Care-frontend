import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalenda";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-44">
      <CreateEventButton />
      <SmallCalendar />
      <Labels/>
    </aside>
  );
}