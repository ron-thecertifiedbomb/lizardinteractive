import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppImage } from "@/components/common/AppImage";

export function AppDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Let's Talk</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="flex items-center w-full gap-5">
            <DialogTitle>
              <AppImage
                src="/assets/splash.png"
                alt="logo"
                className="w-15 max-w-[40vw] sm:w-15 sm:max-w-[25vw] h-auto object-contain"
              />
            </DialogTitle>
            <DialogDescription>
              Please provide details about your inquiries
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Email</Label>
              <Input id="name-1" name="email" defaultValue="Your Email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Message</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
