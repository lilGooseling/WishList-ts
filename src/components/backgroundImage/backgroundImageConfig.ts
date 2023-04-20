import {BackgroundImageEnum} from "../../interfaces/data";

interface response {
    [name: string]: string | number
}

const BackgroundImageConfig = (imageTemplate: BackgroundImageEnum): response => {
    switch (imageTemplate) {
        case BackgroundImageEnum.CONTAIN:
            return {
                backgroundAttachment: 'fixed'
            };
        case BackgroundImageEnum.COVER:
            return {
                backgroundAttachment: 'local'
            }
        case BackgroundImageEnum.REPEAT:
            return {
                backgroundRepeat: 'repeat'
            }
    }
};

export default BackgroundImageConfig;