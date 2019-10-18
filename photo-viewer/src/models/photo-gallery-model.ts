
export class PhotoModel {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Photo[];
}

export class Photo {
    id: number;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: boolean;
    isfriend: boolean;
    isfamily: boolean;
    is_primary: boolean;
    has_comment: string;
    img_url: string;
    isHidden: boolean;
}

export class CombinedViewModel {
    photos: PhotoModel;
    stat: string;
}
