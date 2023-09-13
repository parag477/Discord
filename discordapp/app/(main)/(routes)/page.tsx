import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      lorem ipsum
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  )
}
