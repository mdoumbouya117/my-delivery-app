import { useState, useEffect } from "react";
import { ChevronDownIcon, CheckIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

interface ComboboxProps {
  options: { label: string; value: string }[];
  onSelectedValuesChange: (selectedValues: string[]) => void;
}

export default function Combobox({
  options,
  onSelectedValuesChange,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues((prev) => prev.filter((v) => v !== value));
    } else {
      setSelectedValues((prev) => [...prev, value]);
    }
  };

  const removeValue = (value: string) => {
    setSelectedValues((prev) => prev.filter((v) => v !== value));
  };

  const isSelected = (value: string) => selectedValues.includes(value);

  useEffect(() => {
    onSelectedValuesChange(selectedValues);
  }, [selectedValues, onSelectedValuesChange]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between space-x-1"
        >
          {selectedValues.length > 0 ? (
            <div className="flex items-center space-x-1">
              {selectedValues.length > 2 && (
                <span className="text-sm font-medium">
                  +{selectedValues.length - 2}
                </span>
              )}
              <div className="flex gap-1">
                {selectedValues.slice(0, 2).map((value) => (
                  <Badge key={value} className="flex items-center space-x-2">
                    {options.find((option) => option.value === value)?.label}
                    <X
                      className="ml-1 h-3 w-3 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeValue(value);
                      }}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          ) : (
            <span className="text-muted-foreground">Select specialties</span>
          )}
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => toggleValue(option.value)}
                >
                  {option.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      isSelected(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
