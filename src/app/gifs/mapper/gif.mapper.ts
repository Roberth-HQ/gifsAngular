import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper{
    static mapGiphyItemToGif(item: GiphyItem):Gif{
        return{
            id:item.id,
            title:item.title,
            //ojito con el manejo de aqui:s
            url:item.images.original.url,
        }
    }

    static mapGiphyItemsToGiArray(items: GiphyItem[]):Gif[]{
        return items.map(this.mapGiphyItemToGif)
    }
}