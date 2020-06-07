import Skill from "../models/skill";

export async function getSkills(): Promise<Skill[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const skills: Skill[] = require("../store/data/skills.json");
        resolve(skills);
      } catch (e) {
        reject({ message: e });
      }
    }, 1000);
  });
}
