import Contacts from "../Contacts/Contacts";
import Description from "../Descrption/Descrption";
import Education from "../Education/Education";
import Name from "../Name/Name";
import Stack from "../Stack/Stack";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="column1">
        <Contacts />
      </div>
      <div className="column2">
        <Name />
        <Description />
        <Education />
        <Stack />
      </div>
    </div>
  );
}
