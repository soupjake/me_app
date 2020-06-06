import Skill from "../models/skill";
import Skills from "../store/data/skills.json";

export async function getSkills(): Promise<Skill[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Skills.length > 0) {
        resolve(Skills);
      } else {
        reject({ message: "Failed to get skills." });
      }
    }, 2000);
  });
}
