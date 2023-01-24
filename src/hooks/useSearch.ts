import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";

export const useSearch = (onSearch: (query: string) => any) => {
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebouncedValue(value, 300);

  const {
    data: options,
    isFetching,
    isError,
    isSuccess
  } = useQuery<string[]>(["options", debouncedValue], () => onSearch(debouncedValue), {
    enabled: debouncedValue !== ""
  });
  const handleChange = (value: string) => setValue(value);

  return [value, handleChange, options, { isSuccess, isFetching, isError }] as const;
};
