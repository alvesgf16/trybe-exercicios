import Instrument from './Instrument';
import { Flute } from './Instruments';

export default class Musician {
  // Agora a flauta é recebida como parâmetro
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta'),
    ) {
      this.name = name;
      this.instrument = instrument;
    }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}