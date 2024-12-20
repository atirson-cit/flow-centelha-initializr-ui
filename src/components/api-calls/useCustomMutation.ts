import SnippetService, {
  type TBody,
  type TLangReturn,
} from "@/api/snippet.service";
import { useMutation } from "@tanstack/vue-query";

export const useLanguages = () =>
  useMutation<TLangReturn, Error, string>({
    mutationFn: (lang: string) => SnippetService.getLanguages(lang),
  });

export const useInitConfig = () =>
  useMutation<string, Error, TBody>({
    mutationFn: (body: TBody) => SnippetService.initConfig(body),
  });
