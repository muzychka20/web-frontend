import "./Education.css";

export default function Education() {
  let edu = [
    {
      name: "Dniprodzeržins'kij Deržavnij Tehnicnij Universitet",
      desc: "Bachelor's degree, Computer Software Engineering",
      date: "(September 2021 - June 2025)",
    },
    {
      name: "IT STEP Academy",
      desc: "Розробка програмного забезпечення",
      date: "(November 2023 - November 2025)",
    },
  ];

  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {edu.map((el, index) => (
          <li key={index}>
            <h4 className="title_edu">{el.name}</h4>
            <p className="desc">{el.desc}</p>
            <p className="desc">{el.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
