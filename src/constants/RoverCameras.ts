import { Rovers } from "./Rovers";

export enum RoverCameras {
	FHAZ = "FHAZ",
	RHAZ = "RHAZ",
	MAST = "MAST",
	CHEMCAM = "CHEMCAM",
	MAHLI = "MAHLI",
	MARDI = "MARDI",
	NAVCAM = "NAVCAM",
	PANCAM = "PANCAM",
	MINITES = "MINITES",
    EDL_RUCAM = "EDL_RUCAM",
    EDL_RDCAM = "EDL_RDCAM",
    EDL_DDCAM = "EDL_DDCAM",
    EDL_PUCAM1 = "EDL_PUCAM1",
    EDL_PUCAM2 = "EDL_PUCAM2",
    NAVCAM_LEFT = "NAVCAM_LEFT",
    NAVCAM_RIGHT = "NAVCAM_RIGHT",
    MCZ_RIGHT = "MCZ_RIGHT",
    MCZ_LEFT = "MCZ_LEFT",
    FRONT_HAZCAM_LEFT_A = "FRONT_HAZCAM_LEFT_A",
    FRONT_HAZCAM_RIGHT_A = "FRONT_HAZCAM_RIGHT_A",
    REAR_HAZCAM_LEFT = "REAR_HAZCAM_LEFT",
    REAR_HAZCAM_RIGHT = "REAR_HAZCAM_RIGHT",
    SKYCAM = "SKYCAM",
    SHERLOC_WATSON = "SHERLOC_WATSON",
}

export const FriendlyRoverCameras = {
    [RoverCameras.FHAZ]: "Front Hazard Avoidance Camera",
    [RoverCameras.RHAZ]: "Rear Hazard Avoidance Camera",
    [RoverCameras.MAST]: "Mast Camera",
    [RoverCameras.CHEMCAM]: "Chemistry and Camera Complex",
    [RoverCameras.MAHLI]: "Mars Hand Lens Imager",
    [RoverCameras.MARDI]: "Mars Descent Imager",
    [RoverCameras.NAVCAM]: "Navigation Camera",
    [RoverCameras.PANCAM]: "Panoramic Camera",
    [RoverCameras.MINITES]: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    [RoverCameras.EDL_RUCAM]: "Rover Up-Look Camera",
    [RoverCameras.EDL_RDCAM]: "Rover Down-Look Camera",
    [RoverCameras.EDL_DDCAM]: "Descent Stage Down-Look Camera",
    [RoverCameras.EDL_PUCAM1]: "Parachute Up-Look Camera A",
    [RoverCameras.EDL_PUCAM2]: "Parachute Up-Look Camera B",
    [RoverCameras.NAVCAM_LEFT]: "Navigation Camera - Left",
    [RoverCameras.NAVCAM_RIGHT]: "Navigation Camera - Right",
    [RoverCameras.MCZ_RIGHT]: "Mast Camera Zoom - Right",
    [RoverCameras.MCZ_LEFT]: "Mast Camera Zoom - Left",
    [RoverCameras.FRONT_HAZCAM_LEFT_A]: "Front Hazard Avoidance Camera - Left",
    [RoverCameras.FRONT_HAZCAM_RIGHT_A]: "Front Hazard Avoidance Camera - Right",
    [RoverCameras.REAR_HAZCAM_LEFT]: "Rear Hazard Avoidance Camera - Left",
    [RoverCameras.REAR_HAZCAM_RIGHT]: "Rear Hazard Avoidance Camera - Right",
    [RoverCameras.SKYCAM]: "MEDA Skycam",
    [RoverCameras.SHERLOC_WATSON]: "SHERLOC WATSON Camera",
}

export const CamerasByRover = {
    [Rovers.Curiosity]: {
        [RoverCameras.FHAZ]: FriendlyRoverCameras[RoverCameras.FHAZ],
        [RoverCameras.RHAZ]: FriendlyRoverCameras[RoverCameras.RHAZ],
        [RoverCameras.MAST]: FriendlyRoverCameras[RoverCameras.MAST],
        [RoverCameras.CHEMCAM]: FriendlyRoverCameras[RoverCameras.CHEMCAM],
        [RoverCameras.MAHLI]: FriendlyRoverCameras[RoverCameras.MAHLI],
        [RoverCameras.MARDI]: FriendlyRoverCameras[RoverCameras.MARDI],
        [RoverCameras.NAVCAM]: FriendlyRoverCameras[RoverCameras.NAVCAM],
    },
    [Rovers.Opportunity]: {
        [RoverCameras.FHAZ]: FriendlyRoverCameras[RoverCameras.FHAZ],
        [RoverCameras.RHAZ]: FriendlyRoverCameras[RoverCameras.RHAZ],
        [RoverCameras.NAVCAM]: FriendlyRoverCameras[RoverCameras.NAVCAM],
        [RoverCameras.PANCAM]: FriendlyRoverCameras[RoverCameras.PANCAM],
        [RoverCameras.MINITES]: FriendlyRoverCameras[RoverCameras.MINITES],
    },
    [Rovers.Spirit]: {
        [RoverCameras.FHAZ]: FriendlyRoverCameras[RoverCameras.FHAZ],
        [RoverCameras.RHAZ]: FriendlyRoverCameras[RoverCameras.RHAZ],
        [RoverCameras.NAVCAM]: FriendlyRoverCameras[RoverCameras.NAVCAM],
        [RoverCameras.PANCAM]: FriendlyRoverCameras[RoverCameras.PANCAM],
        [RoverCameras.MINITES]: FriendlyRoverCameras[RoverCameras.MINITES],
    },
    [Rovers.Perseverance]: {
        [RoverCameras.EDL_RUCAM]: FriendlyRoverCameras[RoverCameras.EDL_RUCAM],
        [RoverCameras.EDL_RDCAM]: FriendlyRoverCameras[RoverCameras.EDL_RDCAM],
        [RoverCameras.EDL_DDCAM]: FriendlyRoverCameras[RoverCameras.EDL_DDCAM],
        [RoverCameras.EDL_PUCAM1]: FriendlyRoverCameras[RoverCameras.EDL_PUCAM1],
        [RoverCameras.EDL_PUCAM2]: FriendlyRoverCameras[RoverCameras.EDL_PUCAM2],
        [RoverCameras.NAVCAM_LEFT]: FriendlyRoverCameras[RoverCameras.NAVCAM_LEFT],
        [RoverCameras.NAVCAM_RIGHT]: FriendlyRoverCameras[RoverCameras.NAVCAM_RIGHT],
        [RoverCameras.MCZ_RIGHT]: FriendlyRoverCameras[RoverCameras.MCZ_RIGHT],
        [RoverCameras.MCZ_LEFT]: FriendlyRoverCameras[RoverCameras.MCZ_LEFT],
        [RoverCameras.FRONT_HAZCAM_LEFT_A]: FriendlyRoverCameras[RoverCameras.FRONT_HAZCAM_LEFT_A],
        [RoverCameras.FRONT_HAZCAM_RIGHT_A]: FriendlyRoverCameras[RoverCameras.FRONT_HAZCAM_RIGHT_A],
        [RoverCameras.REAR_HAZCAM_LEFT]: FriendlyRoverCameras[RoverCameras.REAR_HAZCAM_LEFT],
        [RoverCameras.REAR_HAZCAM_RIGHT]: FriendlyRoverCameras[RoverCameras.REAR_HAZCAM_RIGHT],
        [RoverCameras.SKYCAM]: FriendlyRoverCameras[RoverCameras.SKYCAM],
        [RoverCameras.SHERLOC_WATSON]: FriendlyRoverCameras[RoverCameras.SHERLOC_WATSON],
    }
};