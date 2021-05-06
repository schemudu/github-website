// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Java',
    competency: 5,
    category: [],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: [],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: [],
  },
  {
    title: 'React',
    competency: 3,
    category: [],
  },
  {
    title: 'Bash',
    competency: 2,
    category: [],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: [],
  },

  {
    title: 'SQL',
    competency: 4,
    category: [],
  },
  {
    title: 'Git',
    competency: 3,
    category: [],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: [],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: [],
  },
  {
    title: 'Python',
    competency: 4,
    category: [],
  },
  {
    title: 'C',
    competency: 5,
    category: [],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: [],
  },
  {
    title: 'R',
    competency: 2,
    category: [],
  },
  {
    title: 'Spark',
    competency: 2,
    category: [],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [];

const categories = [
  new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
