import { SiAngular, SiTypescript, SiCss3, SiGit, SiHtml5, SiEslint, SiVisualstudiocode, SiJira, SiConfluence, SiReactivex, SiBitbucket, SiMaterialdesign } from 'react-icons/si';
import { Experience } from '../src/types/experience';

export const dailyTasks = [
  'Setting up codebases',
  'Code refactor',
  'Code review',
  'Setting up back-end architecture',
  'Coming up with suggestions',
  'Write e2e & unit tests',
  'Write documentation',
  'Self-Taught',
];

export const experiences: Experience[] = [
  {
    title: 'Angular 13 developer',
    customer: 'Apple',
    description:
      'I joined the team as a Software Engineer to contribute to the development of the software that manages the Products. My main role was to develop new features for the new version.',
    image: 'apple-ar21_1.svg',
    period: 'June 2022 – Present',
    colors: ['#000', 'blue'],
    technologies: [
      { name: 'Angular', Icon: SiAngular },
      { name: 'Typescript', Icon: SiTypescript },
      { name: 'HTML5', Icon: SiHtml5 },
      { name: 'CSS3', Icon: SiCss3 },
      { name: 'Material', Icon: SiMaterialdesign },
      { name: 'RxJS/NgRx', Icon: SiReactivex },
      { name: 'Git', Icon: SiGit },
      { name: 'ESlint', Icon: SiEslint },
      { name: 'Bitbucket', Icon: SiBitbucket },
      { name: 'Jira', Icon: SiJira },
      { name: 'Confluence', Icon: SiConfluence },
      { name: 'VSCode', Icon: SiVisualstudiocode },
    ],
  },
  {
    title: 'Reactjs developer',
    customer: 'Amazon',
    description:
      'I joined the team as a Software Engineer to contribute to the development of the software that manages the Products. My main role was to develop new features for the new version.',
    image: 'Amazon__company_-Logo.wine.svg',
    period: 'June 2020 – 2022',
    colors: ['#000', 'blue'],
    technologies: [
      { name: 'Angular', Icon: SiAngular },
      { name: 'Typescript', Icon: SiTypescript },
      { name: 'HTML5', Icon: SiHtml5 },
      { name: 'CSS3', Icon: SiCss3 },
      { name: 'Material', Icon: SiMaterialdesign },
      { name: 'RxJS/NgRx', Icon: SiReactivex },
      { name: 'Git', Icon: SiGit },
      { name: 'ESlint', Icon: SiEslint },
    ],
  },
  {
    title: 'Project Engineer',
    customer: 'Meta',
    description:
      'I joined the team as a Backend Engineer to contribute to the development of the software that manages the Products. My main role was to develop new features for the new version.',
    image: 'Meta_Platforms-Logo.wine_1.svg',
    period: 'June 2018 – 2020',
    colors: ['#000', 'blue'],
    technologies: [
      { name: 'Angular', Icon: SiAngular },
      { name: 'Typescript', Icon: SiTypescript },
      { name: 'HTML5', Icon: SiHtml5 },
      { name: 'CSS3', Icon: SiCss3 },
    ],
  },
];




