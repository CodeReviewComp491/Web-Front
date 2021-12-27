//config
import { SkillsProps, SkillProps } from "config/skills";

//common
import { Skills } from "common/enum";

export const findSkillProps = (skillName: Skills): SkillProps | undefined => {
  for (let i = 0; i !== SkillsProps.length; i += 1) {
    if (SkillsProps[i].name === skillName)
      return SkillsProps[i];
  }
  return undefined;
}