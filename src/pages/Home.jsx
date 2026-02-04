import React, { useState } from "react";
import StudentComponent from "../components/StudentComponent";

export default function Home() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Reyes", course: "Computer Science", year: 2 },
    { id: 2, name: "Ben Cruz", course: "Mathematics", year: 1 },
  ]);

  const remove = (id) => setStudents((s) => s.filter((st) => st.id !== id));

  return (
    <div>
      <h2>Welcome</h2>
      <p>This demo shows component usage, props, state, and routing.</p>

      <h3>Sample Students</h3>
      {students.map((s) => (
        <StudentComponent
          key={s.id}
          name={s.name}
          course={s.course}
          year={s.year}
          onRemove={() => remove(s.id)}
        />
      ))}
    </div>
  );
}
