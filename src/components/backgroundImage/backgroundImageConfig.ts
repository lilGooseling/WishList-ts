import {BackgroundImageEnum} from "../../interfaces/data";

interface response {
    [name: string]: string | number
}

const BackgroundImageConfig = (imageTemplate: BackgroundImageEnum | undefined): response => {
    switch (imageTemplate) {
        case BackgroundImageEnum.CONTAIN:
            return {
                backgroundAttachment: 'fixed'
            };
        case BackgroundImageEnum.COVER:
            return {
                backgroundSize: 'cover'
            }
        case BackgroundImageEnum.REPEAT:
            return {
                backgroundRepeat: 'repeat'
            }
        default:
            return {}
    }
};

export default BackgroundImageConfig;