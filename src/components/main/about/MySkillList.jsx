import styled from "styled-components";

import { IconContext } from "react-icons";

import { MY_SKILLS, MY_SKILL_ICONS, MY_SKILLS_CAPITALIZED } from "@/constants";

const SkillListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SkillContainer = styled.li`
  text-align: center;
  margin: 8px;
`;

export default function MySkillList() {
  return (
    <SkillListContainer>
      {MY_SKILLS.map((skill, idx) => (
        <SkillContainer key={idx}>
          <IconContext.Provider value={{ size: "50px" }}>
            {MY_SKILL_ICONS[skill]}
          </IconContext.Provider>
          <p>{MY_SKILLS_CAPITALIZED[skill]}</p>
        </SkillContainer>
      ))}
    </SkillListContainer>
  );
}
