import api from "./api.service";

const package_managersOpt = ["npm", "yarn", "pnpm"] as const;
const frameworksOpt = ["Next.js", "Node.js"] as const;
const dependenciesOpt = [
  "Express",
  "Async",
  "Lodash",
  "React",
  "Axios",
] as const;

type TBody = {
  language: string;
  package_manager: (typeof package_managersOpt)[number];
  framework: (typeof frameworksOpt)[number];
  dependencies: (typeof dependenciesOpt)[number][];
};

export type TLangReturn = {
  package_managers: string[];
  frameworks: string[];
  dependencies: string[];
};

class SnippetService {
  static async getLanguages(lang: string) {
    const response = await api.get<TLangReturn>(`/languages/${lang}`);

    return response.data;
  }
  static async initConfig(body: TBody) {
    const response = await api.post("/init-configs", body);

    return response.data;
  }
}

export default SnippetService;
