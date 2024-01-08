import { useRouter } from 'next/navigation';
import APIS from '@/apis';
import { ROUTER } from '@/constants/router';
import { useMutation } from '@tanstack/react-query';

const useRecordTime = (missionId: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: APIS.recordTime,
    onSuccess: () => {
      router.push(ROUTER.MISSION.RECORD(missionId));
    },
    onError: () => {
      // TODO: error handling
    },
  });
};

export default useRecordTime;
