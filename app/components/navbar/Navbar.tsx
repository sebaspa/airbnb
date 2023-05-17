"use client";

import { Container } from "../Container"
import { Logo } from "./Logo"
import { Search } from "./Search"
import { UserMenu } from "./UserMenu"

export const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="border-b py-4">
            <Container>
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo />
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </div>
    </div>
  )
}