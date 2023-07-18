import { Chat } from '@/types/Chat';
import { ChatMessegeItem } from './ChatMessegeItem';
import { ChatMessegeLoading } from './ChatMessegeLoading';
import { ChatPlaceholder } from './ChatPlaceholder';

type Props = {
  chat: Chat | undefined;
  loading: boolean;
};

export const ChatArea = ({ chat, loading }: Props) => {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat &&
        chat.messages.map((item) => (
          <ChatMessegeItem key={item.id} item={item} />
        ))}
      {loading && <ChatMessegeLoading />}
    </section>
  );
};
