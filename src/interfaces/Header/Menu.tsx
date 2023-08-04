import useUserStore from "@/stores/useUserStore"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@component/DropdownMenu/DropdownMenu"
import { Button } from "@component/Form/Button"
import React from "react"

const Menu = () => {
  const logout = useUserStore((state) => state.userLogout)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Minha conta</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Meus dados</DropdownMenuItem>
          <DropdownMenuItem onClick={() => logout()}>Sair</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Menu
