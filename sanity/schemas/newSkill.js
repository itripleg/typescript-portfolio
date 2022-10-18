export default {
  name: "newSkill",
  title: "NewSkill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the skill.",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of skill from 0 to 100",
      validation: (Rule) => Rule.min(0).max(100),
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
