import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";

const [x, setX] = useState();
const [urlX, setUrlX] = useQueryState();

export function useSearchParam(key: string) {
    return useQueryState(
        key,
        parseAsString.withDefault("").withOptions({clearOnDefault:true}),
    );
};