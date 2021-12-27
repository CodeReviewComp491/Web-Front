import { Skills } from 'common/enum'

const picturesDirectory = '/global/ComputerSkills/'

export interface SkillProps {
  name: Skills;
  iconUrl: string;
}

declare type SkillsPropsType = Array<SkillProps>;

export const SkillsProps: SkillsPropsType = [
  {
    name: Skills.C,
    iconUrl: picturesDirectory + 'C.png',
  },
  {
    name: Skills.CPP,
    iconUrl: picturesDirectory + 'CPP.png',
  },
  {
    name: Skills.CSHARP,
    iconUrl: picturesDirectory + 'CSHARP.png',
  },
  {
    name: Skills.CSS,
    iconUrl: picturesDirectory + 'CSS.png',
  },
  {
    name: Skills.GO,
    iconUrl: picturesDirectory + 'GO.png',
  },
  {
    name: Skills.HTML,
    iconUrl: picturesDirectory + 'HTML.png',
  },
  {
    name: Skills.JAVASCRIPT,
    iconUrl: picturesDirectory + 'JAVASCRIPT.png',
  },
  {
    name: Skills.MONGO,
    iconUrl: picturesDirectory + 'MONGO.png',
  },
  {
    name: Skills.NODEJS,
    iconUrl: picturesDirectory + 'NODEJS.png',
  },
  {
    name: Skills.PYTHON,
    iconUrl: picturesDirectory + 'PYTHON.png',
  },
  {
    name: Skills.REACT,
    iconUrl: picturesDirectory + 'REACT.png',
  },
  {
    name: Skills.RUST,
    iconUrl: picturesDirectory + 'RUST.png',
  },
];
