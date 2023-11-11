"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import {
	ChevronDown,
	LogOut,
	PlusCircle,
	Settings,
	Trash,
	UserPlus,
	Users,
} from "lucide-react";
import { MemberRole } from "@prisma/client";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

interface ServerHeaderProps {
	server: ServerWithMembersWithProfiles;
	role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
	const isAdmin = role === MemberRole.ADMIN;
	const isModerator = isAdmin || MemberRole.MODERATOR;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus outline-none" asChild>
				<button
					className="w-full text-md font-semibold px-3 flex items-center 
                h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700
                dark:hover:bg-zinc-700/50 transition"
				>
					{server.name}
					<ChevronDown className="h-5 w-5 ml-auto" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
				{isModerator && (
					<DropdownMenuItem className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer flex">
						Invite People
						<UserPlus className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
				{isAdmin && (
					<DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer flex">
						Server Settings
						<Settings className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
				{isAdmin && (
					<DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer flex">
						Manage Members
						<Users className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
				{isModerator && (
					<DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer flex">
						Create Channel
						<PlusCircle className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
				{isModerator && <DropdownMenuSeparator />}
				{isAdmin && (
					<DropdownMenuItem className="text-rose-500 px-3 py-2 text-sm cursor-pointer flex">
						Delete Server
						<Trash className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
				{!isAdmin && (
					<DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer flex">
						Leave Server
						<LogOut className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
