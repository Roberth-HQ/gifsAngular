import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifService {
    private http=inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading=signal(true);

    constructor(){
        this.loadTrendingGifs();
        console.log("servicio creado")
    }

    loadTrendingGifs(){
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
            params:{
                api_key:environment.giphyApiKey,
                limit:30,
            }
            }
        ).subscribe((resp)=>{  
            const gifs=GifMapper.mapGiphyItemsToGiArray(resp.data);
            this.trendingGifs.set(gifs);
            
            this.trendingGifsLoading.set(false);
           
            console.log({gifs});

        });
    }
    
}