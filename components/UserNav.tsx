import { useRouter } from "next/navigation";
import { DEFAULTAVATAR } from "@/app/constants";
import { useGlobalContext } from "@/app/context/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Toggle } from "@/components/ui/toggle"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function UserNav() {
  const { username, setIsLogin, setUsername } = useGlobalContext();
  const router = useRouter();
  const {theme, setTheme } = useTheme()
  const [ themeMode, setThemeMode] = useState("")

  console.log(theme)
   const handleClick = (event: string) => {
   if(event === 'light'){
    setThemeMode(`${<MoonIcon onClick={() => setTheme("light")}/>}`)
   }else{
    //  const setThemeMode = <SunIcon  onClick={() => setTheme("dark")}/>
    setThemeMode(`${<SunIcon  onClick={() => setTheme("dark")}/>}`)
   }
    
   }

  function logOut() {
    setIsLogin(false);
    setUsername("");
    router.replace("/");
  }
  return (
    <>
      <Toggle  >

        {/* {theme ? "dark" :  <MoonIcon onClick={() => setTheme("light")}/>} : <SunIcon  onClick={() => setTheme("dark")}/> } */}
        {/* {theme ? "dark" : <MoonIcon onClick={() => setTheme("light")}/>}  */}
        {/* { themeMode } */}
        <SunIcon  onClick={() => setTheme("light")}/>
        {/* {console.log(theme)} */}
        
      </Toggle>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={DEFAULTAVATAR} alt="user-avatar" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </Button>
          :{username}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {username}@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile - developing
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing - developing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings - developing
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logOut}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
    </>

    
  );
}
