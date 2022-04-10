import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
  interestList: any[] = [];

  ngOnInit(): void {
    this.interestList.push(
      {
        code: 'GRND3',
        name: 'Grendene',
        value: 'Rs 8,06',
        percentage: '0,00%',
      },
      {
        code: 'USIM5',
        name: 'Usiminas',
        value: 'Rs 14,48',
        percentage: '0,00%',
      },
      {
        code: 'CMIG4',
        name: 'Companhia Ener...',
        value: 'Rs 12,77',
        percentage: '0,00%',
      },
      {
        code: 'BRFS3',
        name: 'BRF',
        value: 'Rs 18,34',
        percentage: '0,00%',
      },
      {
        code: 'VALE3',
        name: 'Vale S.A.',
        value: 'Rs 85,90',
        percentage: '0,00%',
      },
      {
        code: 'GGBR4',
        name: 'Gerdau',
        value: 'Rs 25,24',
        percentage: '0,00%',
      },
      {
        code: 'FLRY3',
        name: 'Fleury',
        value: 'Rs 17,73',
        percentage: '0,00%',
      },
      {
        code: 'GOAU4',
        name: 'Metalúrgica Gerdau',
        value: 'Rs 10,44',
        percentage: '0,00%',
      },
      {
        code: 'ODPV3',
        name: 'Odontoprev',
        value: 'Rs 11,97',
        percentage: '0,00%',
      },
      {
        code: 'CCRO3',
        name: 'Grupo CCR',
        value: 'Rs 12,62',
        percentage: '0,00%',
      },
      {
        code: 'UGPA3',
        name: 'Grupo Ultra',
        value: 'Rs 15,10',
        percentage: '0,00%',
      },
      {
        code: 'PETR4',
        name: 'Petrobras',
        value: 'Rs 33,85',
        percentage: '0,00%',
      },
      {
        code: 'ITUB4',
        name: 'Itaú Unibanco',
        value: 'Rs 25,53',
        percentage: '0,00%',
      },
      {
        code: 'EMBR3',
        name: 'Embraer SA',
        value: 'Rs 18,35',
        percentage: '0,00%',
      },
      {
        code: 'BBDC4',
        name: 'Bradesco',
        value: 'Rs 21,06',
        percentage: '0,00%',
      },
      {
        code: 'WEGE3',
        name: 'WEG S.A.',
        value: 'Rs 29,52',
        percentage: '0,00%',
      },
      {
        code: 'ÍNDICE',
        name: 'S&P 500',
        value: '4.348,87',
        percentage: '0,00%',
      },
      {
        code: 'ELET3',
        name: 'Eletrobras',
        value: 'Rs 33,86',
        percentage: '0,00%',
      }
    );
  }
}
