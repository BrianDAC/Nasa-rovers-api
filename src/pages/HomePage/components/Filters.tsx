import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonSegment,
	IonSegmentButton,
    IonTitle,
} from "@ionic/react";
import { FriendlyRovers, Rovers } from "../../../constants/Rovers";
import {
	CamerasByRover,
	RoverCameras,
} from "../../../constants/RoverCameras";
import { EarthDateString, isValidEarthDate } from "../../../utilities/api/EarthDate";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import curiosityImage from "../../../assets/rovers/curiosity.jpeg";
import opportunityImage from "../../../assets/rovers/opportunity.jpeg";
import perseveranceImage from "../../../assets/rovers/perveserance.jpeg";
import spiritImage from "../../../assets/rovers/spirit.jpeg";
import placeholderImage from "../../../assets/placeholderImg.png";
import { heart } from 'ionicons/icons';

interface FiltersProps {
	page: number;
	setPage: (page: number) => void;
	rover: string;
	setRover: (rover: Rovers) => void;
	sol: number | null;
	setSol: (sol: number | null) => void;
	camera: RoverCameras | null;
	setCamera: (camera: RoverCameras | null) => void;
	earthDate: EarthDateString | null;
	setEarthDate: (earthDate: EarthDateString | null) => void;
    search: () => void,
    saveBookmark: () => void,
    isLastPage: boolean,
    children?: React.ReactNode,
}

export const Filters = ({
	page,
	setPage,
	rover,
	setRover,
	sol,
	setSol,
	camera,
	setCamera,
	earthDate,
	setEarthDate,
    search,
    isLastPage,
    saveBookmark,
    children,
}: FiltersProps) => {
	const [type, setType] = useState("sol");
	const rovers = FriendlyRovers;
	const roverCameras = CamerasByRover[rover as Rovers];

	const resetFilters = () => {
		setSol(null);
		setEarthDate(null);
		setCamera(null);
        setPage(1);
	};

	const validateSol = (sol: number) => {
		if (sol < 0) {
			return 0;
		}
		return sol;
	};
    
    const validateEarthDate = (earthDate: EarthDateString) => {
        if (isValidEarthDate(earthDate)) {
            return earthDate
        }
        return null
    }

	return (
		<div>
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Filters</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<IonSegment
						value={rover}
						onIonChange={(e) => {
							setRover((e.detail.value ?? "") as Rovers);
							resetFilters();
						}}
					>
                        {
                            Object.entries(rovers).map(([roverKey, roverName]) => (
                                <IonSegmentButton value={roverKey}>
                                    <IonLabel>{roverName}</IonLabel>
                                </IonSegmentButton>
                            ))
                        }
					</IonSegment>
					<div className='rover'>
						<LazyLoadImage
							src={
								rover === Rovers.Curiosity
                                    ? curiosityImage
                                    : rover === Rovers.Opportunity
                                    ? opportunityImage
                                    : rover === Rovers.Perseverance
                                    ? perseveranceImage
                                    : spiritImage
							}
							placeholderSrc={placeholderImage}
							effect='blur'
						/>
					</div>

					<IonTitle>Cameras</IonTitle>
					<div className='camera-wrapper'>
						<IonButton
							color={!camera ? "primary" : "light"}
							onClick={() => setCamera(null)}
						>
							<IonLabel>All</IonLabel>
						</IonButton>
						{Object.entries(roverCameras).map(([cameraKey, cameraName]) => (
							<IonButton
								color={camera === cameraKey ? "primary" : "light"}
								onClick={() => setCamera(cameraKey as RoverCameras)}
							>
								<IonLabel>{cameraName}</IonLabel>
							</IonButton>
						))}
					</div>
					<IonSegment
						value={type}
						onIonChange={(e) => {
                            setType(e.detail.value ?? "sol");
                            setSol(null);
                            setEarthDate(null);
                        }}
					>
						<IonSegmentButton value='sol'>
							<IonLabel>Sol</IonLabel>
						</IonSegmentButton>
						<IonSegmentButton value='earth_date'>
							<IonLabel>Earth Date</IonLabel>
						</IonSegmentButton>
					</IonSegment>
					{type === "sol" && (
						<IonItem>
							<IonLabel position='floating'>Sol</IonLabel>
							<IonInput
								type='number'
								value={sol}
								onIonChange={(e) => {
									setSol(validateSol(parseInt(e.detail.value ?? "0")));
								}}
							/>
						</IonItem>
					)}
					{type === "earth_date" && (
						<IonItem>
							<IonLabel position='stacked'>Earth Date</IonLabel>
							<IonInput
								type='date'
								value={earthDate}
								onIonChange={(e) => {
									setEarthDate(validateEarthDate((e.detail.value as EarthDateString ?? null)));
								}}
							/>
						</IonItem>
					)}
                    <div className="submit">
                        <IonButton
                            color="tertiary"
                            onClick={() => {
                                setPage(1);
                                search();
                            }}
                            disabled={!!camera && !sol && !earthDate}
                        >
                            Search
                        </IonButton>
                        <IonButton
                            className="bookmark"
                            color="danger"
                            shape="round"
                            onClick={() => {
                                saveBookmark();
                            }}
                            slot="icon-only"
                            disabled={!!camera && !sol && !earthDate}
                        >
                            <IonIcon icon={heart} />
                        </IonButton>

                    </div>
				</IonCardContent>
			</IonCard>
            {children}
            <div className="pagination">
                <IonButton
                    color="tertiary"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </IonButton>
                <IonLabel>{page}</IonLabel>
                <IonButton
                    disabled={isLastPage}
                    color="tertiary"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </IonButton>
            </div>
		</div>
	);
};
