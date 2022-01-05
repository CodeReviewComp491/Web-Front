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

export const SkillToAceLanguageTranslator = (skill: Skills): string | undefined => {
  switch (skill) {
    case Skills.C:
      return 'c_cpp'
    case Skills.CPP:
      return 'c_cpp'
    case Skills.CSHARP:
      return 'csharp'
    case Skills.CSS:
      return 'css'
    case Skills.GO:
      return 'golang'
    case Skills.HTML:
      return 'html'
    case Skills.JAVASCRIPT:
      return 'javascript'
    case Skills.PYTHON:
      return 'python'
    case Skills.REACT:
      return 'tsx'
    case Skills.RUST:
      return 'rust'
    default:
      return undefined;
  }
}