import { Hash, Mic, Video } from "lucide-react";

import { ChannelType } from "@prisma/client";

import { MobileToggle } from "@/components/mobile-toggle";
import { UserAvatar } from "@/components/user-avatar";
import { SocketIndicator } from "@/components/socket-indicator";

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string;
    channelType?: ChannelType;
}

const chatIconMap = {
    [ChannelType.TEXT]: <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />,
    [ChannelType.AUDIO]: <Mic className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />,
    [ChannelType.VIDEO]: <Video className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />,
}

export const ChatHeader = ({
    serverId,
    name,
    type,
    imageUrl,
    channelType
}: ChatHeaderProps) => {
    return <div className="text-md font-semibold px-3 flex items-center h-12
        border-neutral-200 dark:border-neutral-800 border-b-2">
        <MobileToggle serverId={serverId} />
        {type === 'channel' && channelType && (
            chatIconMap[channelType]
        )}
        {type === 'conversation' && (
            <UserAvatar src={imageUrl} className="h-8 w-8 md:h-8 md:w-8 mr-2" />
        )}
        <p className="font-semibold text-md text-black dark:text-white capitalize">
            {name}
        </p>
        <div className="ml-auto flex items-center">
            <SocketIndicator />
        </div>
    </div>
}