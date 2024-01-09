import { type MissionCategory, type MissionVisibility } from '@/apis/schema/mission';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import apiInstance from './instance.api';

interface CreateMissionRequest {
  name: string;
  content: string;
  category: MissionCategory;
  visibility: MissionVisibility;
}

interface GetMissionsParams {
  size: number;
  lastId?: number;
}

const MISSION_APIS = {
  createMission: (data: CreateMissionRequest) => {
    return apiInstance.post('/missions', {
      ...data,
    });
  },

  getMissions: async (params: GetMissionsParams): Promise<GetMissionsResponse> => {
    const { data } = await apiInstance.get<GetMissionsResponse>('/missions', {
      params,
    });
    // TODO: data 객체 wrapper 삭제하기 (확인 필요)
    return data;
  },
};

export default MISSION_APIS;

export interface MissionContentType {
  missionId: string;
  name: string;
  content: string;
  category: MissionCategory;
  visibility: string;
  status: string;
  sort: number;
}

interface PageableType {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface GetMissionsResponse {
  content: MissionContentType[];
  first: boolean;
  last: boolean;
  pageable: PageableType;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
}

const getMissionsIdQueryKey = (params: GetMissionsParams) => ['missions', ...Object.values(params)];

export const useGetMissions = (params: GetMissionsParams, option?: UseQueryOptions<GetMissionsResponse>) => {
  return useQuery<GetMissionsResponse>({
    queryKey: getMissionsIdQueryKey(params),
    queryFn: () => MISSION_APIS.getMissions(params),
    // queryFn: () => apiInstance.get('/missions', { params }), // 2번 방법
    ...option,
  });
};
