import { from } from 'rxjs/observable/from'
import { Track } from './track';

export interface Album {
    name: String,
    releaseDate: string,
    coverImage: string,
    tracks: Track[]
}
