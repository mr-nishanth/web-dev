class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {

    }
}
const nisha = new TakePhoto("Selfie", "No")


abstract class TakePhotoAbstract {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {

    }
}
const nishaAbstract = new TakePhotoAbstract("Selfie", "No")

class Instagram extends TakePhotoAbstract {

}

const nishaAbstractInstagram = new TakePhotoAbstract("Selfie", "No")
export { }