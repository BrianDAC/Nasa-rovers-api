import { AppConfig } from "../../constants/AppConfig";
import { RoverCameras } from "../../constants/RoverCameras";
import { Rovers } from "../../constants/Rovers";
import { QueryUtil } from "../Query";
import { Client } from "./Client";
import { EarthDateString } from "./EarthDate";

export type ApiMarsRovers = {
	photos?: {
		id: number;
		sol: number;
		camera: {
			id: number;
			name: string;
			rover_id: number;
			full_name: string;
		};
		img_src: string;
		earth_date: string;
		rover: {
			id: number;
			name: string;
			landing_date: string;
			launch_date: string;
			status: string;
		};
	}[];
    latest_photos?: {
		id: number;
		sol: number;
		camera: {
			id: number;
			name: string;
			rover_id: number;
			full_name: string;
		};
		img_src: string;
		earth_date: string;
		rover: {
			id: number;
			name: string;
			landing_date: string;
			launch_date: string;
			status: string;
		};
	}[];
};

export namespace MarsRoversEndpoint {
	export namespace List {
		export type Response = ApiMarsRovers;
	}
}

export class MarsRoversApi {
	static list(
		rover: Rovers,
		page: number = 1,
		latestPhotos: boolean = true,
		camera?: RoverCameras | null,
		sol?: number | null,
		earthDate?: EarthDateString | null
	): Promise<MarsRoversEndpoint.List.Response> {
		const query = QueryUtil.stringify({
			...(latestPhotos
				? {}
				: {
                    camera,
                    earth_date: earthDate,
                    page,
                    sol,
                }),
			api_key: AppConfig.NasaApiKey,
		});
		return Client(
			`rovers/${rover}/${latestPhotos ? "latest_photos" : "photos"}?${query}`
		);
	}
}
