import { Injectable } from '@angular/core';
import { FotosHeroe } from '../interfaces/fotos.heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosHeroeService {

  fotosHeroe:FotosHeroe[]=[
        {
          "id": 1,
          "idHeroe": 1,
          "images": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F69%2Fec%2Fdb%2F69ecdb2d56aaad371438389888d0df52.jpg&f=1&nofb=1&ipt=bf903d8b8217da250b14e422b5cad917e72034a465c93dd009516f231c490129&ipo=images"
        },
        {
          "id": 2,
          "idHeroe": 1,
          "images": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-J_fsOACGu0E%2FXBILZdEUBSI%2FAAAAAAABN84%2FVyCw-e-MHbslMxj3nqaRfYKcnuyUx7aLQCLcBGAs%2Fs320%2Faquaman001.jpg&f=1&nofb=1&ipt=b138dad6af74096f30bd276a34d7949b406f51e2e6a4dd00378881c49bf96632&ipo=images"

        },
        {
          "id":3,
          "idHeroe":2,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrrmUk2YUm14%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=405e6f8b05e042882ef857fcacb88ec076a853de726ea5a74acf3fa586a7f3d5&ipo=images"
        },
        {
          "id":4,
          "idHeroe":2,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fdownload%2Fbatman-commission-2t-1920x1080.jpg&f=1&nofb=1&ipt=9866395149ffb99bb4e21c3d224877ff06f22ad59a06b9fbab80202ad41182be&ipo=images"
        },
        {
          "id":5,
          "idHeroe":3,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fwxl-daredevil-fanart-2021_75478.jpg&f=1&nofb=1&ipt=0d42e8a437bc991d57d3e42222098586764313db4d2a7056298e232773cbed14&ipo=images"
        },
        {
          "id":6,
          "idHeroe":3,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F51%2Fb1%2Fec%2F51b1ecb00b64b4a3a13a84418eca0c86--otaku-scifi.jpg&f=1&nofb=1&ipt=97dd38e95bd25d8b559aff05c693526b5600f5174b8c1d7a5e732ae33e4f343a&ipo=images"
        },
        {
          "id":7,
          "idHeroe":4,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsobrecomic.com%2Fwp-content%2Fuploads%2F2008%2F04%2Fel-increible-hulk.jpg&f=1&nofb=1&ipt=57f237f959d2a5aed6c8d94972e769410ab9a2cc7d310d43cd53ff0a9b97d85f&ipo=images"
        },
        {
          "id":8,
          "idHeroe":4,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F07%2F18%2F23%2F37%2Fincredible-hulk-1527199_1280.jpg&f=1&nofb=1&ipt=c3995f7c02ac6bf210873898c43d44c1b71177fbd732f371770f7de6260b0467&ipo=images"
        },
        {
          "id":9,
          "idHeroe":5,
          "images":"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F03%2F27%2F67816-Green_Lantern-green-artwork-character_design-world.jpg&f=1&nofb=1&ipt=e27296a93ac5abba0eefff5779e6e77b97d4ee04be4347d59ea3249029469acf&ipo=images"
        },
        {
          "id":10,
          "idHeroe":5,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FzYARGakIhHUvPuVJzlbqU40FrnV.jpg&f=1&nofb=1&ipt=a3602da164f03eca988876b4eb7281000cdb8a004af5f1811d62cbd7aa3e6c2b&ipo=images"
        },
        {
          "id":11,
          "idHeroe":6,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F608%2F60829.jpg&f=1&nofb=1&ipt=841224b2ef3983e1b0606d6e01e0942842db25099c049f056e05e29f91d85be8&ipo=images"
        },
        {
          "id":12,
          "idHeroe":6,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3ObUbZlmLU_w-TSLUNS3mwAAAA%26pid%3DApi&f=1&ipt=bcb7a3f6f77688d6f054301c8513f1a4fb7f7c48982162a291a74758381b6399&ipo=images"
        },
        {
          "id":13,
          "idHeroe":7,
          "images":"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F23400000%2FWolverine-hugh-jackman-as-wolverine-23433633-1440-960.jpg&f=1&nofb=1&ipt=2cbaea9d6639feb6139c961a91e1e805c1b108085704eaea67f09702ce3ab641&ipo=images"
        },
        {
          "id":14,
          "idHeroe":7,
          "images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc2%2Fe5%2F17%2Fc2e517327534cb0851d92a5e745f7b92.png&f=1&nofb=1&ipt=b21f5eb76cae4a223762ca70961fe36e34e11da4bbf2930db85956fd96539677&ipo=images"
        },

      ];
  constructor() { }

  //GET FOTOS
  getFotos(){
    return this.fotosHeroe;
  }

  //
  getFotosByIDHeroe(unId: any): any{
    return this.fotosHeroe.find(foto=>foto.id==unId);
  }

  //
  getFotosHeroeId(unIdHeroe:number):FotosHeroe[]{

    let busquedaFotosHeroes: FotosHeroe[] = [];

    for(let i = 0 ; i < this.fotosHeroe.length ; i++){
      let heroeFotoAComparar = this.fotosHeroe[i];

      if (heroeFotoAComparar.idHeroe ==  unIdHeroe ){
        busquedaFotosHeroes.push( heroeFotoAComparar);
      }
    }
    return  busquedaFotosHeroes;
  }


}
