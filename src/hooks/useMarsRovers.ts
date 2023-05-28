import { QueryKeys } from "../constants/QueryKeys";
import { useMutation, useQuery } from "react-query";
import { MarsRoversApi } from "../utilities/api/MarsRoversApi";
import { Rovers } from "../constants/Rovers";
import { RoverCameras } from "../constants/RoverCameras";
import { EarthDateString } from "../utilities/api/EarthDate";

export const useMarsRovers = (
	rover: Rovers,
	page = 1,
	camera?: RoverCameras | null,
	sol?: number | null,
	earthDate?: EarthDateString | null
) => {
    const latestPhotos = !camera && !sol && !earthDate;

    const { data, refetch, isFetching } = useQuery(
		[QueryKeys.GET_MARS_ROVERS],
		() => MarsRoversApi.list(rover, page, latestPhotos, camera, sol, earthDate),
		{
			onError: () => {
				console.error("Error loading photos.");
			},
		}
	);

	const makeSearch = () => {
		refetch();
	};

	return {
		photos: (latestPhotos ? data?.latest_photos : data?.photos) ?? [],
        makeSearch,
        isFetching,
        isLatestPhotos: latestPhotos,
	};
};
