// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import pageInfo from "./pageInfo";
import experience from "./experience";
import social from "./social";
import project from "./project";
import skill from "./skill";
import newSkill from "./newSkill";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    pageInfo,
    experience,
    social,
    project,
    skill,
    newSkill,
  ]),
});
