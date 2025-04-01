import React, { useMemo } from "react";

export default function FilteredList({ list }) {
  const filteredList = useMemo(() => list.filter((l) => l.age > 18), [list]);

  return (
    <ul>
      {filteredList.map((l) => (
        <li key={l.id}>
          {l.name} - {l.age} anni
        </li>
      ))}
    </ul>
  );
}
