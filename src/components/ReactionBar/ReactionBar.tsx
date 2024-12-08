import { useGetMyId } from '@/apis/member';
import { type ReactionType } from '@/apis/reaction';
import MyReactionBar from '@/components/ReactionBar/MyReactionBar/MyReactionBar';
import OtherReactionBar from '@/components/ReactionBar/OtherReactionBar/OtherReactionBar';

interface Props {
  memberId: number;
  recordId: number;
  reactions: ReactionType[];
}

function ReactionBar({ memberId, recordId, reactions, ...props }: Props) {
  const { memberId: myId } = useGetMyId();
  const isMyFeed = memberId === myId;

  if (isMyFeed) {
    return <MyReactionBar reactions={reactions} {...props} />;
  }
  return <OtherReactionBar recordId={recordId} reactions={reactions} {...props} />;
}

export default ReactionBar;
