import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonPage,
	IonSpinner,
	IonText,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./HomePage.css";
import { Filters } from "./components/Filters";
import { useMarsRovers } from "../../hooks/useMarsRovers";
import { Rovers } from "../../constants/Rovers";
import { useEffect, useState } from "react";
import {
	FriendlyRoverCameras,
	RoverCameras,
} from "../../constants/RoverCameras";
import { EarthDateString } from "../../utilities/api/EarthDate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholderImage from "../../assets/placeholderImg.png";
import { AppConfig } from "../../constants/AppConfig";
import { useBookmarks } from "../../hooks/useBookmarks";
import { trash } from "ionicons/icons";

export const Home: React.FC = () => {
	const [page, setPage] = useState(1);
	const [rover, setRover] = useState(Rovers.Curiosity);
	const [sol, setSol] = useState<number | null>(null);
	const [camera, setCamera] = useState<RoverCameras | null>(null);
	const [earthDate, setEarthDate] = useState<EarthDateString | null>(null);
	const { bookmarks, saveBookmark, deleteBookmark } = useBookmarks();
	const { photos, makeSearch, isFetching, isLatestPhotos } = useMarsRovers(
		rover,
		page,
		camera,
		sol,
		earthDate
	);

  console.log("🚀 ~ file: HomePage.tsx:44 ~ photos:", photos, isLatestPhotos)

	useEffect(() => {
		if (!isLatestPhotos) {
			makeSearch();
		}
	}, [page]);

  

	const startIndex = isLatestPhotos ? (page - 1) * AppConfig.PageSize : 0;
	const endIndex = startIndex + AppConfig.PageSize;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Nasa Mars Rovers Image Viewer</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Nasa Mars Rovers Image Viewer</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<p>
							This is a simple app that uses the Nasa API to display images from
							the Nasa Mars Rovers Image Library.
						</p>
					</IonCardContent>
				</IonCard>
				<IonList>
					<IonListHeader>
						<IonLabel>Bookmarks</IonLabel>
					</IonListHeader>
					{bookmarks.map((bookmark) => (
						<>
							<IonItem
								className='bookmark'
								key={bookmark.id}
								onClick={() => {
									setRover(bookmark.rover as Rovers);
									setCamera(bookmark.camera as RoverCameras);
									setSol(bookmark.sol);
									setEarthDate(bookmark.earthDate as EarthDateString);
								}}
							>
								<IonText>
									Rover: {bookmark.rover}
									<br />
									Camera:{" "}
									{FriendlyRoverCameras[bookmark.camera as RoverCameras]}
									<br />
									Sol: {bookmark.sol}
									<br />
									Earth Date: {bookmark.earthDate}
								</IonText>
								<IonIcon
									slot='end'
									icon={trash}
									color='danger'
									onClick={() => deleteBookmark(bookmark)}
								/>
							</IonItem>
						</>
					))}
				</IonList>
				<Filters
					page={page}
					setPage={setPage}
					rover={rover}
					setRover={setRover}
					sol={sol}
					setSol={setSol}
					camera={camera}
					setCamera={setCamera}
					earthDate={earthDate}
					setEarthDate={setEarthDate}
					search={() => {
						makeSearch();
					}}
					saveBookmark={() => {
						saveBookmark({
							id: String(Date.now()),
							rover,
							camera,
							sol,
							earthDate,
						});
					}}
					isLastPage={photos.length < 25}
				>
					{isFetching && <IonSpinner color='primary' />}
					{!isFetching && photos.length !== 0 && (
						<div className='photos-wrapper'>
							{photos.slice(startIndex, endIndex).map((photo) => (
								<div key={photo.id} className='photo'>
									<LazyLoadImage
										src={photo.img_src}
										placeholderSrc={placeholderImage}
										effect='blur'
										width={300}
										height={300}
									/>
								</div>
							))}
						</div>
					)}
					{!isFetching && photos.length === 0 && (
						<div className='no-photos'>
							<p>No photos found</p>
						</div>
					)}
				</Filters>
			</IonContent>
		</IonPage>
	);
};
