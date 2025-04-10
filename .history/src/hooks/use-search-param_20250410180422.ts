import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam(key: string) {
    return useQueryState(
        "search",
        parseAsString.withDefault("").withOptions({clearOnDefault:true}),
    );
};