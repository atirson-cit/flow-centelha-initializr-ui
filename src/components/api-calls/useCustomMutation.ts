import SnippetService, { type TLangReturn } from "@/api/snippet.service";
import { useMutation } from "@tanstack/vue-query";

export const useCustomMutation = () =>
  useMutation<TLangReturn, Error, string>({
    mutationFn: (lang: string) => SnippetService.getLanguages(lang),
  });
