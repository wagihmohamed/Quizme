import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, BarChart4, Edit2, ListOrdered } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export const NavSearch = () => {
  const user = false;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search className="w-6 h-6 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Features">
              <CommandItem>
                <Edit2 className="mr-2 h-4 w-4" />
                Online Quizes
              </CommandItem>
              <CommandItem>
                <BarChart4 className="mr-2 h-4 w-4" />
                Realtime Grading
              </CommandItem>
              <CommandItem>
                <ListOrdered className="mr-2 h-4 w-4" />
                Realtime Leaderboards
              </CommandItem>
            </CommandGroup>
            {user && (
              <>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};
